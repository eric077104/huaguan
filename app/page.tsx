'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, BookOpen, Check, ChevronDown, Compass, GraduationCap, Menu, MessageCircle, PenLine, Quote, Sparkles, X } from 'lucide-react';

const subjects = [
  { n: '01', name: '國文', title: '讀懂文章，也讀懂題目。', copy: '閱讀理解、文言文、寫作表達與會考題型，從方法開始建立穩定的國文能力。', icon: BookOpen, featured: true },
  { n: '02', name: '英文', title: '把基礎，變成實力。', copy: '單字、文法與閱讀循序整理，讓孩子知道每一題為什麼這樣答。', icon: Compass },
  { n: '03', name: '數學', title: '觀念清楚，解題有路。', copy: '從核心觀念出發，辨認題型、拆解步驟，練出能遷移的解題思考。', icon: Sparkles },
  { n: '04', name: '自然', title: '理解原理，連結生活。', copy: '把概念、圖表與實驗串起來，不靠死背也能掌握題目在問什麼。', icon: GraduationCap },
];

const steps = [
  ['01', '先了解孩子', '從學習狀況與近期困難開始談，不急著貼標籤。'],
  ['02', '找出卡關原因', '透過國文學習評估，辨認閱讀、理解或答題方法的落差。'],
  ['03', '一起訂學習方向', '依孩子的年級與目標，討論適合的課程與下一步。'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [subjectInterest, setSubjectInterest] = useState('');
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="華冠文理補習班首頁"><img className="brand-logo" src="/huaguan-logo-transparent.png" alt="華冠文理補習班 LOGO"/><span className="brand-label">華冠文理補習班</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="切換導覽選單">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#approach" onClick={() => setMenuOpen(false)}>教學理念</a><a href="#courses" onClick={() => setMenuOpen(false)}>課程介紹</a><a href="#process" onClick={() => setMenuOpen(false)}>學習流程</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>預約免費評估 <ArrowRight size={15}/></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/>第一次段考後・給正在陪孩子找方法的你</div>
          <h1>國英數自，<br/><em><span className="nowrap">一起學得更好。</span></em></h1>
          <p className="hero-lead">第一次段考後，先看清孩子卡在哪裡。<br className="desktop-only"/>國英數自完整課程，從理解開始，陪孩子準備下一步。</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">預約免費國文學習評估 <ArrowRight size={17}/></a><a className="text-link" href="#approach">認識我們的教學方式 <ArrowDown size={15}/></a></div>
          <div className="hero-proof"><span className="proof-icon"><BookOpen size={18}/></span><span><b>國文作為學習入口</b><small>國英數自完整課程陪伴</small></span></div>
        </div>
        <div className="hero-art" aria-label="閱讀與思考主題插畫">
          <div className="art-wash"/><div className="art-note note-top"><span>READ</span><b>先理解<br/>再作答。</b></div>
          <div className="book-stack"><div className="book book-back"><i>THINK CLEARLY</i></div><div className="book book-front"><div className="book-stamp">文</div><strong>閱讀<br/>的力量</strong><span>READING & THINKING</span></div><div className="book-page"/></div>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><span className="art-star">✳</span><div className="art-note note-bottom"><span>華冠學習筆記</span><b>讀得懂，<br/>就有方向。</b></div>
          <div className="vertical-label">READ · THINK · GROW</div>
        </div>
        <div className="hero-bottom"><span>國中生・家長・一起找到適合的學習方法</span><a href="#approach">往下探索 <ArrowDown size={14}/></a></div>
      </section>

      <section className="pain-section" id="approach">
        <div className="section-kicker">A BETTER WAY TO LEARN <span>01 / 理解問題</span></div>
        <div className="pain-grid"><div><h2>第一次段考，<br/>是看見卡點的時候。<br/><em>趁現在整理，<br/>下一次更有方向。</em></h2></div><div className="pain-copy"><p>分數不如預期，家長難免擔心。與其等到下一次考試才發現相同問題，不如趁現在一起看清楚：是觀念不熟、讀題卡關，還是準備方法需要調整？</p><p>文章讀了好幾遍，題目還是不確定；文言文像在猜，作文總是不知道從哪裡開始。先找到原因，接下來的努力才更踏實。</p><a className="arrow-link" href="#process">看看我們如何陪孩子開始 <ArrowRight size={16}/></a></div></div>
        <div className="signals"><div><span>「</span><b>文章看得懂，<br/>選項卻常常選錯。</b><small>閱讀理解</small></div><div><span>「</span><b>文言文每個字都認識，<br/>合起來就不懂。</b><small>古文閱讀</small></div><div><span>「</span><b>腦中有想法，<br/>寫出來卻很零散。</b><small>表達寫作</small></div></div>
      </section>

      <section className="quote-section"><div className="quote-mark"><Quote size={25}/></div><p>國文不只是考卷上的一科。<br/><strong>看懂、思考、表達，</strong>是每一段學習都用得上的能力。</p><span>華冠的教學起點</span></section>

      <section className="courses-section" id="courses">
        <div className="section-kicker">OUR COURSES <span>02 / 完整學習</span></div><div className="courses-heading"><div><h2>以國文為起點，<br/>讓每一科都有方法。</h2></div><p>先把閱讀與理解打穩，再為國英數自找到各自適合的學習路徑。</p></div>
        <div className="course-grid">{subjects.map(({n,name,title,copy,icon:Icon,featured})=><article className="course-card" key={name}><div className="course-card-top"><span>{n} / SUBJECT</span><Icon size={20}/></div><div className="course-title"><h3>{name}</h3>{featured&&<span className="main-subject">品牌主軸</span>}</div><h4>{title}</h4><p>{copy}</p><a className="subject-cta" href="#contact" onClick={()=>setSubjectInterest(name)} aria-label={`預約${name}試聽`}>預約試聽 <ArrowRight size={15}/></a></article>)}</div>
      </section>

      <section className="trial-section" id="trial"><div className="trial-icon"><BookOpen size={23}/></div><div className="trial-copy"><div className="section-kicker">OPEN CLASS <span>不定期舉辦</span></div><h2>想先了解課堂氛圍？</h2><p>華冠不定期舉辦國英數自試聽課程，歡迎家長與孩子踴躍報名。留下聯絡方式，下一場試聽資訊開放時通知您。</p></div><a className="button button-dark" href="#contact">登記試聽課通知 <ArrowRight size={17}/></a></section>

      <section className="method-section" id="process"><div className="method-side"><div className="section-kicker light">A CLEAR START <span>03 / 學習流程</span></div><h2>先理解孩子，<br/><em>再安排學習。</em></h2><p>每個孩子的起點不同。我們先聽、先看，再一起討論適合的方向。</p><a className="button button-light" href="#contact">聊聊孩子的學習狀況 <ArrowRight size={16}/></a></div><div className="steps">{steps.map(([n,title,copy])=><div className="step" key={n}><span className="step-n">{n}</span><div><h3>{title}</h3><p>{copy}</p></div><Check size={17}/></div>)}</div></section>

      <section className="trust-section"><div className="section-kicker">A NOTE FOR PARENTS <span>04 / 給家長的話</span></div><div className="trust-content"><div className="trust-symbol">華<span>冠</span></div><div><h2>陪孩子累積的，<br/>不只是一次考試的分數。</h2><p>我們相信，真正穩定的進步來自看懂自己的學習方式。從一篇文章、一個觀念開始，孩子能逐漸找到面對問題的信心。</p><div className="trust-sign">華冠教學團隊 <span>陪你一起，看見孩子的下一步。</span></div></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-intro"><div className="section-kicker light">START WITH A CONVERSATION <span>05 / 預約評估</span></div><h2>先聊聊，<br/><em>再找到適合的路。</em></h2><p>留下聯絡方式與孩子目前的學習狀況，我們會與您聯繫，安排免費國文學習評估或課程諮詢。</p><div className="contact-promise"><MessageCircle size={18}/><span>不必先準備完整資料，從您最在意的問題開始就好。</span></div></div>
        <div className="form-card">{submitted?<div className="success-state"><div className="success-icon"><Check size={25}/></div><h3>謝謝您，已收到預約資料。</h3><p>這是網站展示版，表單尚未連接實際收件服務。正式上線前，請設定聯絡方式與通知流程。</p><button className="text-link" onClick={()=>setSubmitted(false)}>返回表單 <ArrowRight size={15}/></button></div>:<form onSubmit={(event)=>{event.preventDefault();setSubmitted(true);}}><div className="form-heading"><span>FREE LEARNING CHECK</span><b>預約免費國文學習評估／試聽通知</b></div><label>稱呼<input name="parentName" required placeholder="怎麼稱呼您？"/></label><div className="form-row"><label>孩子年級（選填）<select name="grade" defaultValue=""><option value="">請選擇</option><option>國一</option><option>國二</option><option>國三</option></select><ChevronDown className="select-chevron" size={15}/></label><label>電話<input name="phone" required type="tel" placeholder="方便聯絡的電話"/></label></div><label>Email（選填）<input name="email" type="email" autoComplete="email" placeholder="方便收到通知的 Email"/></label><label>預約試聽科目（選填）<select name="subjectInterest" value={subjectInterest} onChange={(event)=>setSubjectInterest(event.target.value)}><option value="">請選擇</option>{subjects.map(({name})=><option key={name} value={name}>{name}</option>)}</select></label><label>目前最想了解的事（選填）<textarea name="notes" rows={3} placeholder="例如：閱讀理解、文言文、作文，或孩子目前的學習狀況……"/></label><label className="trial-optin"><input type="checkbox" name="trialUpdates"/>也想收到不定期試聽課程資訊（選填）</label><button className="button button-dark submit-button" type="submit">送出預約需求 <ArrowRight size={17}/></button><small className="privacy-note">僅供本次聯絡、課程諮詢及您勾選的試聽課通知使用。</small></form>}</div>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/huaguan-logo-transparent.png" alt=""/><span className="brand-label">華冠文理補習班</span></a><div className="footer-contact"><b>華冠文理補習班</b><a href="tel:+886227738879">02 2773 8879</a><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('105臺北市松山區中正里八德路二段383號3樓')}`} target="_blank" rel="noreferrer">105臺北市松山區中正里八德路二段383號3樓</a></div><span>國英數自完整課程｜國文特色教學</span></footer>
    </main>
  );
}
