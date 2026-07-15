import './style.css'

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 7 8 5-8 5V7Z"/>',
    mail: '<path d="M4 6h16v12H4V6Zm0 1 8 6 8-6"/>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/>',
    up: '<path d="m6 15 6-6 6 6"/>',
    menu: '<path d="M4 8h16M4 16h16"/>'
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="top">
    <a class="logo" href="#home" aria-label="Ian Javier home">IJ<span>.</span></a>
    <button class="menu-button" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
    <nav class="nav" aria-label="Main navigation">
      <a href="#work">My Works</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="#contact">Let's work together ${icon('arrow')}</a>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-glow"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Available for creative projects</p>
        <h1>Ideas in motion.<br/><em>Stories</em> with impact.</h1>
        <p class="hero-intro">Hi, I'm <strong>Ian Dave L. Javier</strong> — an aspiring video editor and graphic artist transforming creative ideas into engaging visual stories.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Explore my work ${icon('arrow')}</a>
          <a class="text-link" href="#about">Get to know me <span>↓</span></a>
        </div>
      </div>

      <div class="portrait-wrap reveal" data-delay="1">
        <div class="portrait-orbit orbit-one"></div>
        <div class="portrait-orbit orbit-two"></div>
        <div class="portrait-card">
          <img src="/assets/ian%20pic.png" alt="Portrait of Ian Dave L. Javier" />
        </div>
      </div>

      <a class="scroll-cue" href="#work"><span>Scroll</span><i></i></a>
    </section>

    <section class="marquee" aria-label="Creative services">
      <div class="marquee-track">
        <span>VIDEO EDITING</span><b>✦</b><span>GRAPHIC DESIGN</span><b>✦</b><span>MOTION GRAPHICS</span><b>✦</b><span>VISUAL STORYTELLING</span><b>✦</b>
        <span>VIDEO EDITING</span><b>✦</b><span>GRAPHIC DESIGN</span><b>✦</b><span>MOTION GRAPHICS</span><b>✦</b><span>VISUAL STORYTELLING</span><b>✦</b>
      </div>
    </section>

    <section class="about section" id="about">
      <div class="about-copy reveal">
        <p class="eyebrow"><span></span> A little about me</p>
        <h2>I'm learning with<br/><em>every</em> project I make.</h2>
        <p class="about-lead">I'm Ian, an aspiring video editor and graphic artist based in the Philippines. I'm still building my experience, exploring different styles, and improving my skills one project at a time.</p>
        <p>I may not know everything yet, but I enjoy the creative process, listen to feedback, and always try to make my next edit or design better than the last.</p>
      </div>
      <div class="software-stage" aria-label="Software I use: Premiere Pro, Photoshop, DaVinci Resolve, Canva, and CapCut">
        <div class="software-glow"></div>
        <div class="software-title"><span>Used</span><strong>SOFTWARES</strong></div>

        <div class="app-logo app-pr">
          <img src="/assets/pr%20logo.png" alt="Premiere Pro" />
          <small>Premiere Pro</small>
        </div>
        <div class="app-logo app-ps">
          <img src="/assets/ps%20logo.png" alt="Photoshop" />
          <small>Photoshop</small>
        </div>
        <div class="app-logo app-resolve">
          <img src="/assets/davinci%20resolve%20logo.png" alt="DaVinci Resolve" />
          <small>DaVinci Resolve</small>
        </div>
        <div class="app-logo app-canva">
          <img src="/assets/canva%20logo.png" alt="Canva" />
          <small>Canva</small>
        </div>
        <div class="app-logo app-capcut">
          <img src="/assets/capcut%20logo.png" alt="CapCut" />
          <small>CapCut</small>
        </div>
      </div>
    </section>

    <section class="work section" id="work">
      <div class="section-heading reveal">
        <div><p class="eyebrow"><span></span> My Works</p><h2>Here are some of<br/>my <em>works.</em></h2></div>
      </div>

      <section class="reels-showcase reveal" aria-labelledby="reels-title">
        <div class="reels-heading">
          <h3 id="reels-title"><em>REELS</em> Short Form Videos</h3>
        </div>

        <div class="reels-grid">
          <article class="reel-card">
            <div class="reel-frame" data-video-player>
              <video poster="/assets/reel-placeholder.svg" preload="metadata" playsinline><source src="/assets/reels/reel-01.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play short-form reel 1">${icon('play')}</button>
            </div>
          </article>
          <article class="reel-card">
            <div class="reel-frame" data-video-player>
              <video poster="/assets/reel-placeholder.svg" preload="metadata" playsinline><source src="/assets/reels/reel-02.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play short-form reel 2">${icon('play')}</button>
            </div>
          </article>
          <article class="reel-card">
            <div class="reel-frame" data-video-player>
              <video poster="/assets/reel-placeholder.svg" preload="metadata" playsinline><source src="/assets/reels/reel-03.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play short-form reel 3">${icon('play')}</button>
            </div>
          </article>
          <article class="reel-card">
            <div class="reel-frame" data-video-player>
              <video poster="/assets/reel-placeholder.svg" preload="metadata" playsinline><source src="/assets/reels/reel-04.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play short-form reel 4">${icon('play')}</button>
            </div>
          </article>
        </div>
      </section>

      <div class="project-grid">
        <article class="project-card reveal">
          <div class="artwork artwork-pulse"><div class="pulse-type">PULSE</div><div class="pulse-ring"></div><span>MOVE WITH<br/>THE MOMENT</span></div>
          <div class="project-meta"><div><span>02 / CAMPAIGN</span><h3>Pulse Identity</h3></div><p>Brand direction · Social</p></div>
        </article>
        <article class="project-card reveal" data-delay="1">
          <div class="artwork artwork-noise"><div class="noise-orb"></div><strong>BEYOND<br/>THE NOISE</strong><small>POSTER SERIES — 2026</small></div>
          <div class="project-meta"><div><span>03 / POSTER</span><h3>Beyond The Noise</h3></div><p>Art direction · Design</p></div>
        </article>
        <article class="project-card reveal">
          <div class="artwork artwork-frame"><div class="frame-window"><span>THE<br/>UNSEEN</span></div><p>Stories live<br/>between frames.</p></div>
          <div class="project-meta"><div><span>04 / SHORT FILM</span><h3>The Unseen</h3></div><p>Edit · Color grade</p></div>
        </article>
        <article class="project-card reveal" data-delay="1">
          <div class="artwork artwork-form"><div class="form-shape"></div><strong>FORM<span>+</span></strong><p>CREATIVE STUDIES<br/>VOL. 01</p></div>
          <div class="project-meta"><div><span>05 / EDITORIAL</span><h3>Form Studies</h3></div><p>Layout · Typography</p></div>
        </article>
      </div>
    </section>

    <section class="contact section" id="contact">
      <p class="eyebrow reveal"><span></span> Have a project in mind?</p>
      <div class="contact-row reveal">
        <h2>Let's make something<br/><em>worth watching.</em></h2>
        <a class="contact-circle" href="mailto:your.email@example.com" aria-label="Email Ian">${icon('arrow')}</a>
      </div>
      <div class="contact-details reveal">
        <a href="mailto:your.email@example.com">${icon('mail')} your.email@example.com</a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">${icon('instagram')} @yourhandle</a>
        <span>Based in the Philippines · Available worldwide</span>
      </div>
    </section>
  </main>

  <footer>
    <a class="logo" href="#home">IJ<span>.</span></a>
    <p>© <span id="year"></span> Ian Dave L. Javier. Crafted with intention.</p>
    <a href="#top" class="back-top">Back to top ${icon('up')}</a>
  </footer>
`

const menuButton = document.querySelector('.menu-button')
const nav = document.querySelector('.nav')
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
  nav.classList.toggle('is-open', !open)
})
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open')
  menuButton.setAttribute('aria-expanded', 'false')
}))

document.querySelectorAll('[data-video-player]').forEach(player => {
  const video = player.querySelector('video')
  const playButton = player.querySelector('.play-button')
  const toggleVideo = () => {
    if (!video.paused) return video.pause()
    const playRequest = video.play()
    if (playRequest) playRequest.catch(() => {})
  }

  playButton.addEventListener('click', toggleVideo)
  video.addEventListener('click', toggleVideo)
  video.addEventListener('play', () => playButton.classList.add('is-playing'))
  video.addEventListener('pause', () => playButton.classList.remove('is-playing'))
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.13 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

const header = document.querySelector('.site-header')
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50), { passive: true })
document.querySelector('#year').textContent = new Date().getFullYear()

const portrait = document.querySelector('.portrait-card img')
portrait.addEventListener('load', () => portrait.closest('.portrait-card').classList.add('has-image'))
portrait.addEventListener('error', () => portrait.remove())
