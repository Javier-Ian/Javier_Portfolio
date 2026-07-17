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

const verticalGraphics = [
  { title: 'Graduation Campaign', file: '1.png' },
  { title: "Mother's Day Collection", file: '1st mothers day.png' },
  { title: "Mother's Day Promotion", file: '2.png' },
  { title: "Teacher's Day Campaign", file: '6.png' },
  { title: "Valentine's Market Poster", file: 'feb 14.jpg' },
  { title: 'Product Infographic', file: 'JAVIER_INFOGRAPHIC.png' },
  { title: 'Pink Power Event', file: 'margo collection.png' },
  { title: 'Teacher Appreciation', file: "Minimalist Teacher's Day Instagram Post.png" }
].map(item => ({ ...item, src: encodeURI(`/assets/graphics posters/vertical/${item.file}`) }))

const horizontalGraphics = [
  { title: 'JMIGS Fruit Wine Collection', file: 'FACEBOOK POST.png' },
  { title: 'JMIGS Cheers Anytime Poster', file: 'FACEBOOK POST 2.png' },
  { title: "Valentine's Cover", file: 'landscape valentine cover.png' },
  { title: "We're Back Announcement", file: 'Were Back Poster 1.png' }
].map(item => ({ ...item, src: encodeURI(`/assets/graphics posters/horizontal/${item.file}`) }))

const uniformGraphics = [
  { title: 'OJT Uniform Concept A', file: 'COT_OJT UNIFORM type a.png' },
  { title: 'OJT Uniform Concept B', file: 'COT_OJT UNIFORM type b.png' }
].map(item => ({ ...item, src: encodeURI(`/assets/graphics posters/horizontal/${item.file}`) }))

const allGraphics = [...verticalGraphics, ...horizontalGraphics, ...uniformGraphics]
const graphicCard = (item, index, format) => `
  <button class="design-card design-card-${format}" type="button" data-graphic-index="${index}" style="--card-order:${index}" aria-label="View ${item.title}">
    <span class="design-image-wrap"><img src="${item.src}" alt="${item.title}" loading="lazy" /></span>
    <span class="design-card-meta"><strong>${item.title}</strong></span>
  </button>
`

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

      <section class="longform-showcase reveal" aria-labelledby="longform-title">
        <div class="reels-heading longform-heading">
          <h3 id="longform-title"><em>LONG FORM</em> YouTube Videos</h3>
        </div>

        <div class="longform-grid">
          <article class="longform-card">
            <div class="longform-frame" data-video-player>
              <video preload="metadata" playsinline controls><source src="/assets/videos/BREAKING%20Ford%20SHUTS%20DOWN%20U.S.%20Production%20%E2%80%94%20Trump%20.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play long-form video 1">${icon('play')}</button>
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-video-player>
              <video preload="metadata" playsinline controls><source src="/assets/videos/revise%20vid.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play long-form video 2">${icon('play')}</button>
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-video-player>
              <video preload="metadata" playsinline controls><source src="/assets/videos/St.gregory%20University.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play long-form video 3">${icon('play')}</button>
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-video-player>
              <video preload="metadata" playsinline controls><source src="/assets/videos/Trump%E2%80%99s%20Tariffs%20SPARK%20Uprising.mp4" type="video/mp4" /></video>
              <button class="play-button" aria-label="Play long-form video 4">${icon('play')}</button>
            </div>
          </article>
        </div>

      </section>

      <section class="campus-showcase reveal" aria-labelledby="campus-title">
        <div class="reels-heading campus-heading">
          <h3 id="campus-title"><em>CAMPUS &amp; EVENT</em> Projects</h3>
        </div>

        <div class="campus-video-group">
          <div class="video-subgroup-heading"><span></span><h4>Vertical Highlights</h4><span></span></div>
          <div class="vertical-video-grid">
            <article class="portfolio-video-card">
              <div class="vertical-video-frame" data-video-player>
                <video preload="metadata" playsinline controls><source src="/assets/videos/kaamulan-2025.mp4" type="video/mp4" /></video>
                <button class="play-button" aria-label="Play Kaamulan 2025 video">${icon('play')}</button>
              </div>
              <h5>Kaamulan 2025: Where Heritage Dances, and the Heart of Bukidnon Beats</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="vertical-video-frame" data-video-player>
                <video preload="metadata" playsinline controls><source src="/assets/videos/mr-ms-buksu-teaser.mp4" type="video/mp4" /></video>
                <button class="play-button" aria-label="Play Mr. and Ms. BUKSU teaser">${icon('play')}</button>
              </div>
              <h5>Mr. &amp; Ms. BUKSU Teaser</h5>
            </article>
          </div>
        </div>

        <div class="video-subgroup campus-feature-group">
          <div class="video-subgroup-heading"><span></span><h4>Feature &amp; Promotional Videos</h4><span></span></div>
          <div class="campus-landscape-grid">
            <article class="portfolio-video-card">
              <div class="longform-frame" data-video-player>
                <video preload="metadata" playsinline controls><source src="/assets/videos/buksu-aacup-area-2.mp4" type="video/mp4" /></video>
                <button class="play-button" aria-label="Play BUKSU AACUP Area 2 promotional video">${icon('play')}</button>
              </div>
              <h5>BUKSU AACUP Area 2 Promotional Video</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="longform-frame" data-video-player>
                <video preload="metadata" playsinline controls><source src="/assets/videos/mr-ms-buksu-interview-talent.mp4" type="video/mp4" /></video>
                <button class="play-button" aria-label="Play Mr. and Ms. BUKSU interview and talent video">${icon('play')}</button>
              </div>
              <h5>Mr. &amp; Ms. BUKSU: Closed-Door Interview &amp; Talent</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="longform-frame" data-video-player>
                <video preload="metadata" playsinline controls><source src="/assets/videos/bb-dalwangan-bts.mp4" type="video/mp4" /></video>
                <button class="play-button" aria-label="Play Binibining Dalwagan 2026 behind-the-scenes video">${icon('play')}</button>
              </div>
              <h5>Binibining Dalwagan 2026 &mdash; Behind the Scenes</h5>
            </article>
          </div>
        </div>
      </section>

      <section class="design-showcase reveal" aria-labelledby="poster-title">
        <div class="reels-heading design-heading">
          <h3 id="poster-title">Posters <em>&amp;</em> Social Designs</h3>
        </div>

        <div class="design-collection vertical-collection">
          <div class="vertical-design-grid">
            ${verticalGraphics.map((item, index) => graphicCard(item, index, 'vertical')).join('')}
          </div>
        </div>

        <div class="design-collection horizontal-collection">
          <div class="horizontal-design-grid">
            ${horizontalGraphics.map((item, index) => graphicCard(item, verticalGraphics.length + index, 'horizontal')).join('')}
          </div>
        </div>

        <div class="design-collection uniform-collection">
          <div class="uniform-heading"><h4>Uniform Concepts</h4></div>
          <div class="uniform-design-grid">
            ${uniformGraphics.map((item, index) => graphicCard(item, verticalGraphics.length + horizontalGraphics.length + index, 'uniform')).join('')}
          </div>
        </div>
      </section>
    </section>

    <dialog class="design-lightbox" aria-label="Graphic design preview">
      <button class="lightbox-close" type="button" aria-label="Close preview">&times;</button>
      <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous design">&lsaquo;</button>
      <figure><img alt="" /><figcaption></figcaption></figure>
      <button class="lightbox-nav lightbox-next" type="button" aria-label="Next design">&rsaquo;</button>
    </dialog>

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

const portfolioVideos = [...document.querySelectorAll('[data-video-player] video')]

document.querySelectorAll('[data-video-player]').forEach(player => {
  const video = player.querySelector('video')
  const playButton = player.querySelector('.play-button')
  const toggleVideo = () => {
    if (!video.paused) return video.pause()
    const playRequest = video.play()
    if (playRequest) playRequest.catch(() => {})
  }

  playButton.addEventListener('click', toggleVideo)
  if (!video.controls) video.addEventListener('click', toggleVideo)
  video.addEventListener('play', () => {
    portfolioVideos.forEach(otherVideo => {
      if (otherVideo !== video && !otherVideo.paused) otherVideo.pause()
    })
    playButton.classList.add('is-playing')
  })
  video.addEventListener('pause', () => playButton.classList.remove('is-playing'))
})

const designLightbox = document.querySelector('.design-lightbox')
const lightboxImage = designLightbox.querySelector('img')
const lightboxCaption = designLightbox.querySelector('figcaption')
let activeGraphic = 0

const showLightboxGraphic = index => {
  activeGraphic = (index + allGraphics.length) % allGraphics.length
  const graphic = allGraphics[activeGraphic]
  lightboxImage.src = graphic.src
  lightboxImage.alt = graphic.title
  lightboxCaption.textContent = `${String(activeGraphic + 1).padStart(2, '0')} / ${String(allGraphics.length).padStart(2, '0')} — ${graphic.title}`
}

const openDesignLightbox = index => {
  showLightboxGraphic(index)
  if (!designLightbox.open) designLightbox.showModal()
  document.body.classList.add('lightbox-open')
}

const closeDesignLightbox = () => {
  designLightbox.close()
  document.body.classList.remove('lightbox-open')
}

document.querySelectorAll('[data-graphic-index]').forEach(card => {
  card.addEventListener('click', () => openDesignLightbox(Number(card.dataset.graphicIndex)))
})
designLightbox.querySelector('.lightbox-close').addEventListener('click', closeDesignLightbox)
designLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showLightboxGraphic(activeGraphic - 1))
designLightbox.querySelector('.lightbox-next').addEventListener('click', () => showLightboxGraphic(activeGraphic + 1))
designLightbox.addEventListener('click', event => {
  if (event.target === designLightbox) closeDesignLightbox()
})
designLightbox.addEventListener('cancel', () => document.body.classList.remove('lightbox-open'))
document.addEventListener('keydown', event => {
  if (!designLightbox.open) return
  if (event.key === 'ArrowLeft') showLightboxGraphic(activeGraphic - 1)
  if (event.key === 'ArrowRight') showLightboxGraphic(activeGraphic + 1)
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
