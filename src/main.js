import './style.css'

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m9 7 8 5-8 5V7Z"/>',
    mail: '<path d="M4 6h16v12H4V6Zm0 1 8 6 8-6"/>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/>',
    linkedin: '<path d="M6 9v9M6 6.5v.01M10 18v-5c0-2.2 4-2.4 4 0v5M10 9v9M3.5 3.5h17v17h-17z"/>',
    github: '<path d="M9 19c-4 .8-4-2-5-2.5M14 21v-3.1c0-.9.1-1.4-.4-1.9 3.2-.4 6.4-1.6 6.4-7a5.4 5.4 0 0 0-1.4-3.8A5 5 0 0 0 18.5 2S17.4 1.6 14 3.4a13.4 13.4 0 0 0-5 0C5.6 1.6 4.5 2 4.5 2a5 5 0 0 0-.1 3.2A5.4 5.4 0 0 0 3 9c0 5.4 3.2 6.6 6.4 7-.5.5-.6 1-.6 1.9V21"/>',
    phone: '<path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-1-1.3 2.2a15.7 15.7 0 0 1-8.9-8.9L8 8 7 3Z"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M5 20h14"/>',
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

const youtubeEmbed = (videoId, title) => `
  <iframe
    class="youtube-player"
    src="https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&amp;playsinline=1&amp;rel=0"
    title="${title}"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
`

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="top">
    <a class="logo" href="#home" aria-label="Ian Javier home">IJ<span>.</span></a>
    <button class="menu-button" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
    <nav class="nav" aria-label="Main navigation">
      <a href="#work">Explore My Work</a>
      <a href="#about">Get to know me</a>
      <a href="/resume/ian-javier-resume.pdf" download>Download Resume</a>
    </nav>
    <a class="header-cta" href="#contact">Let's work together ${icon('arrow')}</a>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-glow"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Available for creative projects</p>
        <h1>Ideas in motion.<br/><em>Stories</em> with impact.</h1>
        <div class="hero-intro">
          <p>I'm Ian, a multimedia designer and video editor based in the Philippines. I enjoy turning ideas into engaging visuals through video editing and graphic design. Whether I'm creating content for brands or editing videos, I focus on producing work that is clean, purposeful, and visually engaging.</p>
          <p>Every project is an opportunity to learn something new. I value creativity, feedback, and continuous improvement, always striving to create work that's better than the last.</p>
        </div>
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
        <h2>Creating with <em>purpose.</em><br/>Growing through experience.</h2>
        <p class="about-lead">I'm Ian, a video editor and graphic artist based in the Philippines. I create visual content for school, community, and digital projects, with a focus on clear storytelling and thoughtful design.</p>
        <p>I value feedback, collaboration, and steady improvement. Each project helps me refine my process and create stronger work.</p>
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
            <div class="longform-frame" data-youtube-player>
              ${youtubeEmbed('KCUKbbqLNms', 'BREAKING: Ford shuts down U.S. production')}
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-youtube-player>
              ${youtubeEmbed('emfedfJmKy0', 'Long-form video project')}
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-youtube-player>
              ${youtubeEmbed('Az4u4HVv4C0', 'St. Gregory University video')}
            </div>
          </article>
          <article class="longform-card">
            <div class="longform-frame" data-youtube-player>
              ${youtubeEmbed('wEXKFrFHM9A', 'Trump tariffs spark uprising')}
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
              <div class="vertical-video-frame" data-youtube-player>
                ${youtubeEmbed('NbRpISM3LAQ', 'Kaamulan 2025: Where Heritage Dances, and the Heart of Bukidnon Beats')}
              </div>
              <h5>Kaamulan 2025: Where Heritage Dances, and the Heart of Bukidnon Beats</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="vertical-video-frame" data-youtube-player>
                ${youtubeEmbed('34OgvdV7DHs', 'Mr. and Ms. BUKSU teaser')}
              </div>
              <h5>Mr. &amp; Ms. BUKSU Teaser</h5>
            </article>
          </div>
        </div>

        <div class="video-subgroup campus-feature-group">
          <div class="video-subgroup-heading"><span></span><h4>Feature &amp; Promotional Videos</h4><span></span></div>
          <div class="campus-landscape-grid">
            <article class="portfolio-video-card">
              <div class="longform-frame" data-youtube-player>
                ${youtubeEmbed('Mq4OgD8SYBI', 'BUKSU AACUP Area 2 promotional video')}
              </div>
              <h5>BUKSU AACUP Area 2 Promotional Video</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="longform-frame" data-youtube-player>
                ${youtubeEmbed('xy6mfDECYSY', 'Mr. and Ms. BUKSU closed-door interview and talent')}
              </div>
              <h5>Mr. &amp; Ms. BUKSU: Closed-Door Interview &amp; Talent</h5>
            </article>
            <article class="portfolio-video-card">
              <div class="longform-frame" data-youtube-player>
                ${youtubeEmbed('Fd_yUqBqHZs', 'Binibining Dalwagan 2026 behind the scenes')}
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
      <p class="eyebrow reveal"><span></span> Let's Work Together</p>
      <div class="contact-row reveal">
        <div class="contact-copy">
          <h2>Let's work<br/><em>together.</em></h2>
          <p class="contact-message">I'm always open to opportunities in video editing, graphic design, and creative multimedia.</p>
        </div>
        <a class="contact-circle" href="mailto:ianjavier139@gmail.com" aria-label="Email Ian about a creative project"><span>Email me</span>${icon('arrow')}</a>
      </div>
      <div class="contact-details reveal">
        <a href="mailto:ianjavier139@gmail.com">${icon('mail')} ianjavier139@gmail.com</a>
        <a href="https://linkedin.com/in/Javier-Ian" target="_blank" rel="noreferrer">${icon('linkedin')} LinkedIn</a>
        <a href="https://github.com/Javier-Ian" target="_blank" rel="noreferrer">${icon('github')} GitHub</a>
        <a href="tel:+639675866309">${icon('phone')} +63 967 586 6309</a>
        <span>Based in the Philippines &middot; Available worldwide</span>
      </div>
    </section>
  </main>

  <footer>
    <a class="logo" href="#home">IJ<span>.</span></a>
    <div class="footer-credit">
      <p>Designed &amp; developed by Ian Dave L. Javier.</p>
      <p>&copy; <span id="year"></span> All Rights Reserved.</p>
    </div>
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
const youtubeIframes = [...document.querySelectorAll('[data-youtube-player] iframe')]
const youtubePlayers = []

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
    youtubePlayers.forEach(player => player.pauseVideo())
    portfolioVideos.forEach(otherVideo => {
      if (otherVideo !== video && !otherVideo.paused) otherVideo.pause()
    })
    playButton.classList.add('is-playing')
  })
  video.addEventListener('pause', () => playButton.classList.remove('is-playing'))
})

if (youtubeIframes.length) {
  window.onYouTubeIframeAPIReady = () => {
    youtubeIframes.forEach(iframe => {
      const player = new window.YT.Player(iframe, {
        events: {
          onStateChange: event => {
            if (event.data !== window.YT.PlayerState.PLAYING) return
            portfolioVideos.forEach(video => video.pause())
            youtubePlayers.forEach(otherPlayer => {
              if (otherPlayer !== event.target) otherPlayer.pauseVideo()
            })
          }
        }
      })
      youtubePlayers.push(player)
    })
  }

  const youtubeApi = document.createElement('script')
  youtubeApi.src = 'https://www.youtube.com/iframe_api'
  document.head.append(youtubeApi)
}

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
