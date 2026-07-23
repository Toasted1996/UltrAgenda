

function IOSStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center',
      padding: '21px 24px 19px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{ fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590, fontSize: 17, lineHeight: '22px', color: c }}>{time}</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12"><rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/><rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/><rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/><rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/></svg>
        <svg width="17" height="12" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/><circle cx="8.5" cy="10.5" r="1.5" fill={c}/></svg>
        <svg width="27" height="13" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/><rect x="2" y="2" width="20" height="9" rx="2" fill={c}/><path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/></svg>
      </div>
    </div>
  );
}

function IOSGlassPill({ children, dark = false, style = {} }) {
  return (
    <div style={{ height: 44, minWidth: 44, borderRadius: 9999, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)', ...style }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 9999, backdropFilter: 'blur(12px) saturate(180%)', WebkitBackdropFilter: 'blur(12px) saturate(180%)', background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)' }} />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 9999, boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)', border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)' }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>{children}</div>
    </div>
  );
}

function IOSNavBar({ title = 'Title', dark = false, trailingIcon = true }) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = (content) => (
    <IOSGlassPill dark={dark}>
      <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{content}</div>
    </IOSGlassPill>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 62, paddingBottom: 10, position: 'relative', zIndex: 5 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
        {pillIcon(<svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ marginLeft: -1 }}><path d="M10 2L2 10l8 8" stroke={muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
        {trailingIcon && pillIcon(<svg width="22" height="6" viewBox="0 0 22 6"><circle cx="3" cy="3" r="2.5" fill={muted}/><circle cx="11" cy="3" r="2.5" fill={muted}/><circle cx="19" cy="3" r="2.5" fill={muted}/></svg>)}
      </div>
      <div style={{ padding: '0 16px', fontFamily: '-apple-system, system-ui', fontSize: 34, fontWeight: 700, lineHeight: '41px', color: text, letterSpacing: 0.4 }}>{title}</div>
    </div>
  );
}

function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', position: 'relative', fontFamily: '-apple-system, system-ui', fontSize: 17, letterSpacing: -0.43 }}>
      {icon && (<div style={{ width: 30, height: 30, borderRadius: 7, background: icon, marginRight: 12, flexShrink: 0 }} />)}
      <div style={{ flex: 1, color: text }}>{title}</div>
      {detail && <span style={{ color: sec, marginRight: 6 }}>{detail}</span>}
      {chevron && (<svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0 }}><path d="M1 1l6 6-6 6" stroke={ter} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
      {!isLast && (<div style={{ position: 'absolute', bottom: 0, right: 0, left: icon ? 58 : 16, height: 0.5, background: sep }} />)}
    </div>
  );
}

function IOSList({ header, children, dark = false }) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return (
    <div>
      {header && (<div style={{ fontFamily: '-apple-system, system-ui', fontSize: 13, color: hc, textTransform: 'uppercase', padding: '8px 36px 6px', letterSpacing: -0.08 }}>{header}</div>)}
      <div style={{ background: bg, borderRadius: 26, margin: '0 16px', overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function IOSDevice({ children, width = 402, height = 874, dark = false, title, keyboard = false }) {
  return (
    <div style={{ position: 'relative', width: width + 28, height: height + 28, borderRadius: 62, padding: 14, boxSizing: 'border-box', background: 'linear-gradient(150deg, #e5e5ea 0%, #9a9aa0 12%, #626268 30%, #48484c 50%, #626268 70%, #9a9aa0 88%, #e5e5ea 100%)', boxShadow: '0 40px 90px rgba(0,0,0,0.32), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.4)' }}>
      <div style={{ position: 'absolute', left: -4, top: 128, width: 4, height: 34, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #2c2c2e, #8a8a8e)', boxShadow: '-1px 0 2px rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', left: -4, top: 180, width: 4, height: 62, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #2c2c2e, #8a8a8e)', boxShadow: '-1px 0 2px rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', left: -4, top: 254, width: 4, height: 62, borderRadius: '3px 0 0 3px', background: 'linear-gradient(90deg, #2c2c2e, #8a8a8e)', boxShadow: '-1px 0 2px rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', right: -4, top: 214, width: 4, height: 92, borderRadius: '0 3px 3px 0', background: 'linear-gradient(270deg, #2c2c2e, #8a8a8e)', boxShadow: '1px 0 2px rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', inset: 8, borderRadius: 54, background: '#000' }} />
      <div data-om-starter="ios-frame" style={{ width, height, borderRadius: 48, overflow: 'hidden', position: 'relative', background: dark ? '#000' : '#F2F2F7', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.06)', fontFamily: '-apple-system, system-ui, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
        <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}><IOSStatusBar dark={dark} /></div>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {title !== undefined && <IOSNavBar title={title} dark={dark} />}
          <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60, height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8, pointerEvents: 'none' }}>
          <div style={{ width: 139, height: 5, borderRadius: 100, background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)' }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow });
