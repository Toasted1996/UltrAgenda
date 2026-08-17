const { Resend } = require('resend');

const LEAD_INBOX = 'giorthy.lopez@solumatia.com';
const FROM_ADDRESS = `UltrAgenda <leads@${process.env.RESEND_EMAIL_DOMAIN || 'solumatia.com'}>`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contact } = req.body || {};
  const value = typeof contact === 'string' ? contact.trim() : '';

  if (!value) {
    return res.status(400).json({ error: 'Falta el contacto.' });
  }

  const isEmail = value.includes('@');
  if (isEmail) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return res.status(400).json({ error: 'Correo inválido.' });
    }
  } else {
    const digits = value.replace(/\D/g, '');
    if (digits.length < 8) {
      return res.status(400).json({ error: 'WhatsApp inválido.' });
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const today = new Date().toISOString().slice(0, 10);

  try {
    const { error } = await resend.emails.send(
      {
        from: FROM_ADDRESS,
        to: [LEAD_INBOX],
        subject: 'Nuevo lead — Acceso anticipado UltrAgenda',
        html: `
          <p>Nuevo lead desde la landing de UltrAgenda:</p>
          <p><strong>Contacto (${isEmail ? 'correo' : 'WhatsApp'}):</strong> ${value}</p>
          <p><em>Recibido: ${new Date().toISOString()}</em></p>
        `,
      },
      { idempotencyKey: `ultragenda-lead/${value}-${today}` }
    );

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'No se pudo enviar el lead.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead submit error:', err);
    return res.status(500).json({ error: 'Error interno.' });
  }
};
