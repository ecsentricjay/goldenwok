'use client'

import { useState, useEffect } from 'react'

// ─── IMAGES ───────────────────────────────────────────────────────────────────
const IMG = {
  hero:      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1800&q=85',
  noodles:   'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=700&q=85',
  dumplings: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=85',
  rice:      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700&q=85',
  duck:      'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=700&q=85',
  ramen:     'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=700&q=85',
  stirfry:   'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&q=85',
  spring:    'https://images.unsplash.com/photo-1548507767-a5f6e972b8a5?w=700&q=85',
  sushi:     'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=700&q=85',
  curry:     'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=85',
  interior1: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80',
  interior2: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
  chef:      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
  wok:       'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=800&q=80',
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const MENU = [
  {
    cat: 'Starters', icon: '🥟',
    items: [
      { name: 'Crispy Duck Spring Rolls',   price: '£6.50',  desc: 'Hand-rolled with shredded aromatic duck, hoisin sauce, cucumber',   img: IMG.spring,    hot: true  },
      { name: 'Steamed Dim Sum Basket',      price: '£7.50',  desc: 'Chef\'s selection of 8 steamed dim sum with soy dipping sauce',       img: IMG.dumplings, hot: false },
      { name: 'Salt & Pepper Squid',         price: '£7.00',  desc: 'Crispy fried squid, chilli, garlic, spring onion, sweet chilli',    img: IMG.stirfry,   hot: true  },
      { name: 'Wonton Soup',                 price: '£5.50',  desc: 'Pork & prawn wontons in a rich master stock broth, pak choi',       img: IMG.ramen,     hot: false },
    ],
  },
  {
    cat: 'Signature Mains', icon: '🍜',
    items: [
      { name: 'Peking Duck',                 price: '£18.50', desc: 'Half aromatic duck, pancakes, cucumber, spring onion, hoisin',       img: IMG.duck,      hot: true  },
      { name: 'Wok-Fried Lobster Noodles',   price: '£16.00', desc: 'Fresh lobster, egg noodles, ginger, spring onion, oyster sauce',    img: IMG.noodles,   hot: true  },
      { name: 'Cantonese Steamed Sea Bass',  price: '£14.50', desc: 'Whole sea bass, light soy, ginger, sesame oil, coriander',          img: IMG.stirfry,   hot: false },
      { name: 'Hong Kong Char Siu Pork',     price: '£12.00', desc: 'Slow-roasted BBQ pork belly, steamed jasmine rice, pickled veg',    img: IMG.rice,      hot: false },
    ],
  },
  {
    cat: 'Noodles & Rice', icon: '🍚',
    items: [
      { name: 'Singapore Vermicelli',        price: '£10.50', desc: 'Rice noodles, curry powder, prawns, char siu, bean sprouts, egg',   img: IMG.noodles,   hot: true  },
      { name: 'Special Fried Rice',          price: '£9.50',  desc: 'Wok-fried rice, king prawns, chicken, char siu, egg, spring onion', img: IMG.rice,      hot: false },
      { name: 'Pad See Ew',                  price: '£11.00', desc: 'Wide rice noodles, Chinese broccoli, egg, sweet soy glaze',         img: IMG.stirfry,   hot: false },
      { name: 'Dan Dan Noodles',             price: '£10.00', desc: 'Sichuan spiced minced pork, tahini, chilli oil, pak choi',          img: IMG.ramen,     hot: true  },
    ],
  },
  {
    cat: 'Small Plates', icon: '🥢',
    items: [
      { name: 'Siu Mai Dumplings ×6',        price: '£6.00',  desc: 'Open-topped pork & prawn dumplings, steamed to order',              img: IMG.dumplings, hot: false },
      { name: 'Chilli & Garlic Edamame',     price: '£4.50',  desc: 'Wok-tossed edamame, garlic, dried chilli, sea salt',               img: IMG.stirfry,   hot: false },
      { name: 'Golden Wok Gyoza ×6',         price: '£7.00',  desc: 'Pan-fried pork & cabbage gyoza, ponzu dipping sauce',              img: IMG.dumplings, hot: true  },
      { name: 'Sticky Sesame Ribs',          price: '£8.50',  desc: 'Baby back ribs, honey, sesame, five spice glaze',                  img: IMG.duck,      hot: true  },
    ],
  },
]

const REVIEWS = [
  { name: 'Sophie L.',  stars: 5, date: '2 days ago',   text: 'The Peking duck is the best I\'ve had outside of London. Crispy skin, incredible flavour, and the pancakes were perfect. We order every Friday without fail now.' },
  { name: 'Marcus T.',  stars: 5, date: '1 week ago',   text: 'Lobster noodles were sensational — restaurant quality delivered to the door. The portion sizes are generous and the food always arrives hot. Genuinely exceptional.' },
  { name: 'Priya K.',   stars: 5, date: '2 weeks ago',  text: 'Best Chinese takeaway in Leeds, no contest. The dim sum basket alone is worth ordering. Fast delivery, beautifully packaged, everything tasted fresh.' },
  { name: 'David H.',   stars: 4, date: '3 weeks ago',  text: 'Singapore noodles were spot on — proper curry flavour, generous portions. The gyoza were great too. Will definitely be our regular order from now on.' },
]

// ─── COLOURS ──────────────────────────────────────────────────────────────────
const C = {
  black:   '#0a0806',
  dark:    '#120e0a',
  dark2:   '#1a1410',
  dark3:   '#221a14',
  red:     '#c0392b',
  redD:    '#a93226',
  redDim:  'rgba(192,57,43,0.12)',
  redBdr:  'rgba(192,57,43,0.3)',
  gold:    '#d4a017',
  goldL:   '#e8b420',
  goldDim: 'rgba(212,160,23,0.12)',
  goldBdr: 'rgba(212,160,23,0.28)',
  white:   '#ffffff',
  cream:   '#fdf8f0',
  paper:   '#f5ede0',
  ink:     '#1a1208',
  muted:   '#8a7060',
  border:  'rgba(255,255,255,0.07)',
  borderW: '#e8ddd0',
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function Stars({ n }: { n: number }) {
  return (
    <span>{[1,2,3,4,5].map(i => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i <= n ? C.gold : 'none'} stroke={C.gold} strokeWidth="2"
        style={{ display:'inline', marginRight:1 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}</span>
  )
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ onOrder }: { onOrder: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen, setMOpen]       = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => { setMOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const links = [['home','Home'],['menu','Menu'],['about','Story'],['gallery','Gallery'],['reviews','Reviews'],['contact','Contact']]

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:1000,
      background: scrolled ? 'rgba(10,8,6,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
      transition:'all 0.4s ease' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px', display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>

        {/* Logo */}
        <div onClick={() => go('home')} style={{ cursor:'pointer', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:42, height:42, borderRadius:'50%', background:`linear-gradient(135deg, ${C.red}, ${C.gold})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, boxShadow:`0 4px 16px rgba(212,160,23,0.3)` }}>
            🥢
          </div>
          <div>
            <div style={{ fontFamily:"'Noto Serif SC',serif", fontSize:20, fontWeight:700, color:'#fff', lineHeight:1.1, letterSpacing:'0.02em' }}>
              Golden Wok
            </div>
            <div style={{ fontFamily:'sans-serif', fontSize:9, color:C.gold, letterSpacing:'0.2em', textTransform:'uppercase', marginTop:1 }}>
              Chinese & Asian · Leeds
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="gw-desktop-nav" style={{ display:'flex', gap:30, alignItems:'center' }}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ background:'none', border:'none', color:'rgba(255,255,255,0.65)', fontSize:13.5, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.04em', transition:'color 0.2s', padding:0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)' }}
            >{label}</button>
          ))}
          <button onClick={onOrder}
            style={{ background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'10px 24px', borderRadius:4, fontSize:13.5, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.04em', transition:'opacity 0.2s, transform 0.2s', boxShadow:`0 4px 16px rgba(192,57,43,0.4)` }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform='translateY(-1px)'; el.style.opacity='0.9' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform='none'; el.style.opacity='1' }}
          >Order Now</button>
        </div>

        <button onClick={() => setMOpen(o => !o)} className="gw-hamburger"
          style={{ display:'none', background:'none', border:'none', color:'#fff', fontSize:28, cursor:'pointer' }}>
          {mOpen ? '✕' : '☰'}
        </button>
      </div>

      {mOpen && (
        <div style={{ background:'rgba(10,8,6,0.98)', borderTop:`1px solid ${C.border}`, padding:'16px 32px 28px' }}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ display:'block', background:'none', border:'none', color:'rgba(255,255,255,0.8)', fontSize:16, cursor:'pointer', padding:'12px 0', width:'100%', textAlign:'left', borderBottom:`1px solid ${C.border}`, fontFamily:'sans-serif' }}>
              {label}
            </button>
          ))}
          <button onClick={onOrder}
            style={{ marginTop:14, width:'100%', background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'13px', borderRadius:4, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif' }}>
            Order Now
          </button>
        </div>
      )}
      <style>{`.gw-desktop-nav{display:flex} @media(max-width:860px){.gw-desktop-nav{display:none!important}.gw-hamburger{display:block!important}}`}</style>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section id="home" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'flex-end', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:`url(${IMG.hero})`, backgroundSize:'cover', backgroundPosition:'center 40%' }} />
      {/* Multi-layer overlay for depth */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(10,8,6,0.98) 0%, rgba(10,8,6,0.6) 45%, rgba(10,8,6,0.2) 100%)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(10,8,6,0.7) 0%, transparent 60%)' }} />
      {/* Gold shimmer top border */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(to right, ${C.gold}, ${C.red}, transparent)` }} />

      {/* Chinese-inspired decorative element */}
      <div style={{ position:'absolute', top:'8%', right:'5%', opacity:0.06, fontSize:220, lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
        福
      </div>

      <div style={{ position:'relative', maxWidth:1200, margin:'0 auto', padding:'0 40px 100px', width:'100%' }}>
        {/* Eyebrow */}
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
          <div style={{ width:40, height:1, background:C.gold }} />
          <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:C.gold }}>
            Authentic Chinese & Asian Cuisine · Leeds
          </span>
        </div>

        <h1 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(48px,7.5vw,96px)', fontWeight:700, color:'#fff', lineHeight:1.0, marginBottom:28, letterSpacing:'-0.01em', maxWidth:700 }}>
          The Taste of<br />
          <span style={{ color:C.gold, fontStyle:'italic' }}>Old Shanghai</span>,<br />
          Delivered Fresh
        </h1>

        <p style={{ fontFamily:'sans-serif', fontSize:'clamp(15px,1.8vw,18px)', color:'rgba(255,255,255,0.65)', lineHeight:1.8, marginBottom:44, maxWidth:500, fontWeight:300 }}>
          Handcrafted dim sum, aromatic Peking duck and wok-fired noodles made to order. Delivered across Leeds in under 40 minutes.
        </p>

        <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:64 }}>
          <button onClick={onOrder}
            style={{ background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'16px 40px', borderRadius:4, fontSize:16, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 8px 32px rgba(192,57,43,0.5)`, letterSpacing:'0.04em', transition:'transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none' }}
          >🥡 Order Now</button>
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior:'smooth' })}
            style={{ background:'rgba(255,255,255,0.07)', border:'1.5px solid rgba(255,255,255,0.25)', color:'#fff', padding:'16px 36px', borderRadius:4, fontSize:15, fontWeight:600, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.04em', transition:'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=C.gold; el.style.color=C.gold }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.25)'; el.style.color='#fff' }}
          >View Menu</button>
        </div>

        {/* Stats */}
        <div style={{ display:'flex', gap:0, borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:28, flexWrap:'wrap' }}>
          {[['40 min','Max delivery time'],['4.9 ⭐','Google rating'],['Fresh daily','No frozen ingredients'],['Order direct','Skip the fees']].map(([n,l], i) => (
            <div key={l} style={{ paddingRight:28, marginRight:28, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', marginBottom:10 }}>
              <div style={{ fontFamily:"'Noto Serif SC',serif", fontSize:22, fontWeight:700, color:C.gold, lineHeight:1 }}>{n}</div>
              <div style={{ fontFamily:'sans-serif', fontSize:11, color:'rgba(255,255,255,0.45)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', right:40, bottom:60, display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <div style={{ fontFamily:'sans-serif', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', writingMode:'vertical-rl' }}>Scroll</div>
        <div style={{ width:1, height:48, background:`linear-gradient(to bottom, transparent, ${C.gold})`, animation:'gwPulse 2s ease infinite' }} />
      </div>
      <style>{`@keyframes gwPulse { 0%,100%{opacity:.3} 50%{opacity:1} }`}</style>
    </section>
  )
}

// ─── STRIP ────────────────────────────────────────────────────────────────────
function Strip() {
  const items = ['Handmade Dim Sum','Free-Range Duck','Wok-Fired Fresh','No MSG Added','Halal Available','Gluten-Free Options']
  return (
    <div style={{ background:C.red, padding:'13px 0', overflow:'hidden' }}>
      <div style={{ display:'flex', gap:52, animation:'gwScroll 20s linear infinite', whiteSpace:'nowrap', width:'max-content' }}>
        {[...items,...items,...items].map((item,i) => (
          <span key={i} style={{ fontFamily:'sans-serif', fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.9)', display:'flex', alignItems:'center', gap:16 }}>
            {item} <span style={{ color:'rgba(255,255,255,0.5)', fontSize:10 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes gwScroll { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }`}</style>
    </div>
  )
}

// ─── MENU ─────────────────────────────────────────────────────────────────────
function MenuSection({ onOrder }: { onOrder: () => void }) {
  const [tab, setTab] = useState(0)

  return (
    <section id="menu" style={{ background:C.dark, padding:'110px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'end', marginBottom:64 }} className="gw-2col">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:28, height:1, background:C.gold }} />
              <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gold }}>What We Cook</span>
            </div>
            <h2 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(32px,5vw,58px)', fontWeight:700, color:'#fff', lineHeight:1.05, letterSpacing:'-0.01em' }}>
              Our Menu
            </h2>
          </div>
          <p style={{ fontFamily:'sans-serif', fontSize:15.5, color:'rgba(255,255,255,0.5)', lineHeight:1.8, fontWeight:300, alignSelf:'end' }}>
            Every dish made to order using fresh ingredients and traditional techniques. No shortcuts — just proper cooking.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display:'flex', gap:0, borderBottom:`1px solid ${C.border}`, marginBottom:52, overflowX:'auto' }}>
          {MENU.map((c,i) => (
            <button key={c.cat} onClick={() => setTab(i)} style={{
              padding:'13px 28px', background:'none', border:'none', cursor:'pointer',
              fontFamily:'sans-serif', fontSize:14, letterSpacing:'0.04em', transition:'all 0.2s',
              color: tab===i ? C.gold : 'rgba(255,255,255,0.45)',
              borderBottom: tab===i ? `2px solid ${C.gold}` : '2px solid transparent',
              marginBottom:-1, fontWeight: tab===i ? 700 : 400, whiteSpace:'nowrap',
            }}>
              <span style={{ marginRight:7 }}>{c.icon}</span>{c.cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:20 }}>
          {MENU[tab].items.map(item => (
            <div key={item.name}
              style={{ background:C.dark2, border:`1px solid ${C.border}`, borderRadius:6, overflow:'hidden', transition:'transform 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform='translateY(-5px)'; el.style.borderColor=C.goldBdr }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform='none'; el.style.borderColor=C.border }}
            >
              <div style={{ position:'relative', height:190, overflow:'hidden' }}>
                <img src={item.img} alt={item.name}
                  style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.transform='scale(1.07)' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.transform='scale(1)' }}
                />
                {item.hot && (
                  <div style={{ position:'absolute', top:12, left:12, background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, color:'#fff', fontSize:10, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 10px', borderRadius:3 }}>
                    🔥 Chef's Pick
                  </div>
                )}
              </div>
              <div style={{ padding:'20px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8 }}>
                  <h3 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:16, fontWeight:700, color:'#fff', lineHeight:1.3, flex:1, paddingRight:10 }}>{item.name}</h3>
                  <span style={{ fontFamily:'sans-serif', fontSize:17, fontWeight:800, color:C.gold, whiteSpace:'nowrap' }}>{item.price}</span>
                </div>
                <p style={{ fontFamily:'sans-serif', fontSize:12.5, color:'rgba(255,255,255,0.45)', lineHeight:1.65, margin:'0 0 16px', fontWeight:300 }}>{item.desc}</p>
                <button onClick={onOrder}
                  style={{ width:'100%', padding:'9px', background:C.redDim, border:`1px solid ${C.redBdr}`, borderRadius:4, color:C.red, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', transition:'all 0.2s', letterSpacing:'0.03em' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background=`linear-gradient(135deg, ${C.red}, ${C.redD})`; el.style.color='#fff'; el.style.borderColor='transparent' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background=C.redDim; el.style.color=C.red; el.style.borderColor=C.redBdr }}
                >Add to Order</button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:60 }}>
          <p style={{ fontFamily:'sans-serif', fontSize:14, color:'rgba(255,255,255,0.35)', marginBottom:20 }}>Free delivery on orders over £25 · Minimum order £12</p>
          <button onClick={onOrder}
            style={{ background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'15px 48px', borderRadius:4, fontSize:16, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 8px 32px rgba(192,57,43,0.4)`, transition:'transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none' }}
          >🥡 Order Full Menu</button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.gw-2col{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background:C.black, padding:'110px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:90, alignItems:'center' }} className="gw-about-grid">
          {/* Images */}
          <div style={{ position:'relative', height:560 }}>
            <img src={IMG.chef} alt="Our chef"
              style={{ position:'absolute', top:0, left:0, width:'72%', height:'65%', objectFit:'cover', borderRadius:4 }} />
            <img src={IMG.wok} alt="Wok cooking"
              style={{ position:'absolute', bottom:0, right:0, width:'58%', height:'52%', objectFit:'cover', borderRadius:4, border:`5px solid ${C.black}` }} />
            {/* Gold badge */}
            <div style={{ position:'absolute', bottom:'28%', left:'52%', transform:'translateX(-50%)', background:`linear-gradient(135deg, ${C.gold}, ${C.goldL})`, borderRadius:'50%', width:110, height:110, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:`4px solid ${C.black}`, boxShadow:'0 8px 32px rgba(0,0,0,0.5)' }}>
              <div style={{ fontFamily:"'Noto Serif SC',serif", fontSize:28, fontWeight:700, color:C.ink, lineHeight:1 }}>20+</div>
              <div style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:700, color:'rgba(26,18,8,0.75)', letterSpacing:'0.1em', textTransform:'uppercase', textAlign:'center', marginTop:4, lineHeight:1.4 }}>Years<br/>crafting</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:28, height:1, background:C.gold }} />
              <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gold }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(28px,4vw,50px)', fontWeight:700, color:'#fff', lineHeight:1.1, marginBottom:24, letterSpacing:'-0.01em' }}>
              From Hong Kong<br />to the Heart of Leeds
            </h2>
            <p style={{ fontFamily:'sans-serif', fontSize:15.5, color:'rgba(255,255,255,0.6)', lineHeight:1.85, marginBottom:20, fontWeight:300 }}>
              Golden Wok was founded in 2004 by the Chan family, who brought authentic Cantonese recipes and cooking techniques from Hong Kong to Headingley, Leeds. What began as a small family kitchen has grown into one of the most loved Chinese restaurants in Yorkshire.
            </p>
            <p style={{ fontFamily:'sans-serif', fontSize:15.5, color:'rgba(255,255,255,0.6)', lineHeight:1.85, marginBottom:36, fontWeight:300 }}>
              Every dish is made fresh to order. Our dim sum is handmade daily. Our Peking duck is marinated and roasted in-house. We don't use MSG, artificial flavourings or frozen shortcuts — just proper ingredients and proper cooking.
            </p>

            {[
              ['🦆', 'Roasted in-house',     'Our Peking duck is marinated and roasted fresh daily'],
              ['🥟', 'Handmade dim sum',      'Every dumpling made from scratch each morning'],
              ['🌿', 'No MSG. No shortcuts.', 'Fresh ingredients, authentic recipes, nothing artificial'],
            ].map(([ic,t,d]) => (
              <div key={t} style={{ display:'flex', gap:14, marginBottom:20, alignItems:'flex-start' }}>
                <div style={{ fontSize:22, lineHeight:1, marginTop:2, flexShrink:0 }}>{ic}</div>
                <div>
                  <div style={{ fontFamily:'sans-serif', fontSize:14, fontWeight:700, color:'#fff', marginBottom:2 }}>{t}</div>
                  <div style={{ fontFamily:'sans-serif', fontSize:13, color:'rgba(255,255,255,0.45)', fontWeight:300 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.gw-about-grid{grid-template-columns:1fr!important;gap:52px!important}}`}</style>
    </section>
  )
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function Gallery() {
  const items = [
    { src: IMG.duck,      style: { gridRow:'span 2' as const } },
    { src: IMG.dumplings, style: {} },
    { src: IMG.noodles,   style: {} },
    { src: IMG.ramen,     style: {} },
    { src: IMG.interior1, style: { gridColumn:'span 2' as const } },
    { src: IMG.spring,    style: {} },
    { src: IMG.stirfry,   style: {} },
  ]

  return (
    <section id="gallery" style={{ background:C.dark, padding:'110px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:28, height:1, background:C.gold }} />
            <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gold }}>The Experience</span>
            <div style={{ width:28, height:1, background:C.gold }} />
          </div>
          <h2 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(30px,5vw,54px)', fontWeight:700, color:'#fff', letterSpacing:'-0.01em', lineHeight:1.05 }}>
            Food That Demands<br />
            <span style={{ color:C.gold, fontStyle:'italic' }}>To Be Photographed</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridAutoRows:225, gap:10 }}>
          {items.map((item,i) => (
            <div key={i} style={{ ...item.style, overflow:'hidden', borderRadius:5, cursor:'pointer', position:'relative' }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLElement).style.transform='scale(1.08)'; (e.currentTarget.querySelector('.gw-ov') as HTMLElement).style.opacity='1' }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLElement).style.transform='scale(1)'; (e.currentTarget.querySelector('.gw-ov') as HTMLElement).style.opacity='0' }}
            >
              <img src={item.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.55s ease', display:'block' }} />
              <div className="gw-ov" style={{ position:'absolute', inset:0, background:`rgba(192,57,43,0.2)`, opacity:0, transition:'opacity 0.3s', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontSize:28 }}>🥢</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" style={{ background:C.dark2, padding:'110px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:28, height:1, background:C.gold }} />
            <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gold }}>Reviews</span>
            <div style={{ width:28, height:1, background:C.gold }} />
          </div>
          <h2 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(30px,5vw,54px)', fontWeight:700, color:'#fff', letterSpacing:'-0.01em', lineHeight:1.05, marginBottom:12 }}>
            What Leeds Is Saying
          </h2>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
            <Stars n={5} />
            <span style={{ fontFamily:'sans-serif', fontSize:15, color:'rgba(255,255,255,0.5)' }}>4.9 · 318 Google reviews</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(270px, 1fr))', gap:18 }}>
          {REVIEWS.map(r => (
            <div key={r.name}
              style={{ background:C.dark3, border:`1px solid ${C.border}`, borderRadius:6, padding:'26px', transition:'border-color 0.25s, transform 0.25s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=C.goldBdr; el.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=C.border; el.style.transform='none' }}
            >
              <Stars n={r.stars} />
              <p style={{ fontFamily:'sans-serif', fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.75, margin:'14px 0 18px', fontStyle:'italic', fontWeight:300 }}>"{r.text}"</p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:`1px solid ${C.border}`, paddingTop:14 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:34, height:34, borderRadius:'50%', background:`linear-gradient(135deg, ${C.red}, ${C.gold})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:700, color:'#fff', fontFamily:'sans-serif' }}>{r.name[0]}</div>
                  <div style={{ fontFamily:'sans-serif', fontSize:14, fontWeight:700, color:'#fff' }}>{r.name}</div>
                </div>
                <div style={{ fontFamily:'sans-serif', fontSize:11, color:'rgba(255,255,255,0.3)' }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ onOrder }: { onOrder: () => void }) {
  const [form, setForm] = useState({ name:'', phone:'', message:'' })
  const [sent, setSent] = useState(false)
  const h = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section id="contact" style={{ background:C.black, padding:'110px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }} className="gw-contact-grid">

        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
            <div style={{ width:28, height:1, background:C.gold }} />
            <span style={{ fontFamily:'sans-serif', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:C.gold }}>Find Us</span>
          </div>
          <h2 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:'clamp(26px,3.8vw,46px)', fontWeight:700, color:'#fff', lineHeight:1.1, marginBottom:22 }}>
            Order Direct,<br /><span style={{ color:C.gold, fontStyle:'italic' }}>Save More</span>
          </h2>
          <p style={{ fontFamily:'sans-serif', fontSize:15, color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginBottom:36, fontWeight:300 }}>
            Order directly with us and skip the platform fees. Same great food, better value — and you can customise your order exactly how you want it.
          </p>

          {[
            ['📍','Address',       '47 Otley Road, Headingley\nLeeds, LS6 3PX'],
            ['📞','Phone / Order',  '0113 275 8800'],
            ['🕐','Opening Hours', 'Mon–Sat: 4pm – 11pm\nSunday: 4pm – 10pm'],
            ['🚗','Delivery Area', 'All LS6, LS4, LS5, LS16, LS18\nFree delivery over £25'],
          ].map(([ic,l,v]) => (
            <div key={l} style={{ display:'flex', gap:14, marginBottom:22, alignItems:'flex-start' }}>
              <div style={{ fontSize:20, marginTop:2, flexShrink:0 }}>{ic}</div>
              <div>
                <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, color:C.gold, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4 }}>{l}</div>
                <div style={{ fontFamily:'sans-serif', fontSize:14.5, color:'rgba(255,255,255,0.65)', whiteSpace:'pre-line', lineHeight:1.65, fontWeight:300 }}>{v}</div>
              </div>
            </div>
          ))}

          <button onClick={onOrder}
            style={{ marginTop:8, background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'14px 36px', borderRadius:4, fontSize:15, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 6px 24px rgba(192,57,43,0.4)` }}>
            🥡 Order Now — Direct
          </button>
        </div>

        <div style={{ background:C.dark2, border:`1px solid ${C.border}`, borderRadius:6, padding:'36px 32px' }}>
          <h3 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:24, fontWeight:700, color:'#fff', marginBottom:8 }}>Send Us a Message</h3>
          <p style={{ fontFamily:'sans-serif', fontSize:13, color:'rgba(255,255,255,0.4)', marginBottom:24, fontWeight:300 }}>Catering enquiries, allergens, or feedback — we'd love to hear from you.</p>
          {sent ? (
            <div style={{ textAlign:'center', padding:'44px 0' }}>
              <div style={{ fontSize:52, marginBottom:16 }}>🥢</div>
              <div style={{ fontFamily:"'Noto Serif SC',serif", fontSize:22, color:'#fff', marginBottom:8 }}>Message Sent!</div>
              <div style={{ fontFamily:'sans-serif', fontSize:14, color:'rgba(255,255,255,0.45)', fontWeight:300 }}>We'll get back to you within the hour during opening times.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              {[['name','Your Name','text'],['phone','Phone Number','tel']] .map(([n,p,t]) => (
                <input key={n} type={t} name={n} value={form[n as keyof typeof form]} onChange={h} placeholder={p}
                  style={{ display:'block', width:'100%', padding:'13px 15px', marginBottom:12, background:'rgba(255,255,255,0.05)', border:`1px solid ${C.border}`, borderRadius:4, color:'#fff', fontSize:14, fontFamily:'sans-serif', boxSizing:'border-box' as const }} />
              ))}
              <textarea name="message" value={form.message} onChange={h} placeholder="Your message..." rows={4}
                style={{ display:'block', width:'100%', padding:'13px 15px', marginBottom:20, background:'rgba(255,255,255,0.05)', border:`1px solid ${C.border}`, borderRadius:4, color:'#fff', fontSize:14, fontFamily:'sans-serif', resize:'vertical', boxSizing:'border-box' as const }} />
              <button type="submit"
                style={{ width:'100%', padding:'14px', background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', borderRadius:4, color:'#fff', fontSize:15, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.04em' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:900px){.gw-contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── ORDER MODAL ──────────────────────────────────────────────────────────────
function OrderModal({ open, onClose }: { open:boolean; onClose:() => void }) {
  if (!open) return null
  return (
    <div style={{ position:'fixed', inset:0, zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'rgba(0,0,0,0.9)' }} onClick={onClose}>
      <div style={{ background:C.dark2, border:`1px solid ${C.border}`, borderRadius:10, padding:'40px 32px', maxWidth:420, width:'100%', textAlign:'center', borderTop:`3px solid ${C.gold}` }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize:52, marginBottom:14 }}>🥡</div>
        <h3 style={{ fontFamily:"'Noto Serif SC',serif", fontSize:26, fontWeight:700, color:'#fff', marginBottom:10 }}>Order Golden Wok</h3>
        <p style={{ fontFamily:'sans-serif', fontSize:14.5, color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:28, fontWeight:300 }}>
          Order direct and skip the platform fees — same great food, better value.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          <a href="tel:01132758800"
            style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:'14px', background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, borderRadius:6, color:'#fff', fontWeight:800, fontSize:16, textDecoration:'none', fontFamily:'sans-serif' }}>
            📞 Call: 0113 275 8800
          </a>
          <a href="https://wa.me/441132758800" target="_blank" rel="noreferrer"
            style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:'14px', background:'#25d366', borderRadius:6, color:'#fff', fontWeight:800, fontSize:16, textDecoration:'none', fontFamily:'sans-serif' }}>
            💬 WhatsApp Us
          </a>
          <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.25)', margin:'6px 0' }}>— or order via platform —</div>
          <div style={{ display:'flex', gap:10 }}>
            <a href="https://just-eat.co.uk" target="_blank" rel="noreferrer"
              style={{ flex:1, padding:'11px', background:'rgba(255,132,0,0.1)', border:'1px solid rgba(255,132,0,0.3)', borderRadius:6, color:'#ff8400', fontWeight:600, fontSize:14, textAlign:'center', textDecoration:'none', fontFamily:'sans-serif' }}>Just Eat</a>
            <a href="https://ubereats.com" target="_blank" rel="noreferrer"
              style={{ flex:1, padding:'11px', background:'rgba(255,255,255,0.05)', border:`1px solid ${C.border}`, borderRadius:6, color:'rgba(255,255,255,0.65)', fontWeight:600, fontSize:14, textAlign:'center', textDecoration:'none', fontFamily:'sans-serif' }}>Uber Eats</a>
          </div>
        </div>
        <button onClick={onClose} style={{ marginTop:20, background:'none', border:'none', color:'rgba(255,255,255,0.3)', fontSize:13, cursor:'pointer', fontFamily:'sans-serif' }}>Close</button>
      </div>
    </div>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onOrder }: { onOrder: () => void }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  return (
    <footer style={{ background:C.black, borderTop:`1px solid ${C.border}`, padding:'60px 32px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:52, marginBottom:48, paddingBottom:48, borderBottom:`1px solid ${C.border}` }} className="gw-footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:38, height:38, borderRadius:'50%', background:`linear-gradient(135deg, ${C.red}, ${C.gold})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>🥢</div>
              <div>
                <div style={{ fontFamily:"'Noto Serif SC',serif", fontSize:18, fontWeight:700, color:'#fff' }}>Golden Wok</div>
                <div style={{ fontFamily:'sans-serif', fontSize:9, color:C.gold, letterSpacing:'0.18em', textTransform:'uppercase' }}>Chinese & Asian · Leeds</div>
              </div>
            </div>
            <p style={{ fontFamily:'sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.35)', lineHeight:1.8, maxWidth:260, fontWeight:300 }}>
              Authentic Cantonese and Asian fusion cuisine, handmade daily and delivered fresh across Leeds since 2004.
            </p>
            <button onClick={onOrder} style={{ marginTop:20, background:`linear-gradient(135deg, ${C.red}, ${C.redD})`, border:'none', color:'#fff', padding:'10px 22px', borderRadius:4, fontSize:12, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.04em' }}>
              🥡 Order Now
            </button>
          </div>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:C.gold, marginBottom:16 }}>Quick Links</div>
            {['Home','Menu','Story','Gallery','Reviews','Contact'].map(l => (
              <button key={l} onClick={() => go(l.toLowerCase())}
                style={{ display:'block', background:'none', border:'none', color:'rgba(255,255,255,0.38)', fontSize:13.5, cursor:'pointer', padding:'5px 0', textAlign:'left', fontFamily:'sans-serif', transition:'color 0.2s', fontWeight:300 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color=C.gold }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color='rgba(255,255,255,0.38)' }}
              >{l}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:C.gold, marginBottom:16 }}>Opening Hours</div>
            {[['Mon – Sat','4pm – 11pm'],['Sunday','4pm – 10pm'],['Bank Holidays','5pm – 10pm']].map(([d,t]) => (
              <div key={d} style={{ fontFamily:'sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.38)', marginBottom:8, fontWeight:300 }}>
                {d}: <span style={{ color:'rgba(255,255,255,0.65)' }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop:16, fontFamily:'sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.38)', fontWeight:300 }}>
              📍 47 Otley Road, Headingley<br />Leeds, LS6 3PX
            </div>
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
          <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.2)' }}>© 2024 Golden Wok Leeds. All rights reserved.</div>
          <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.2)' }}>47 Otley Road, Headingley, Leeds LS6 3PX</div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.gw-footer-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </footer>
  )
}

// ─── ROOT ──────────────────────────────────────────────────────────────────────
export default function GoldenWok() {
  const [orderOpen, setOrderOpen] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <div style={{ background:C.dark }}>
      <Navbar onOrder={() => setOrderOpen(true)} />
      <Hero onOrder={() => setOrderOpen(true)} />
      <Strip />
      <MenuSection onOrder={() => setOrderOpen(true)} />
      <About />
      <Gallery />
      <Reviews />
      <Contact onOrder={() => setOrderOpen(true)} />
      <Footer onOrder={() => setOrderOpen(true)} />
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  )
}
