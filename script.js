:root {
  --bg: #07111f;
  --bg-2: #0c1729;
  --panel: rgba(13, 24, 38, 0.8);
  --panel-strong: rgba(17, 29, 47, 0.96);
  --line: rgba(151, 179, 255, 0.18);
  --text: #edf6ff;
  --muted: #a7b7d1;
  --cyan: #67e8f9;
  --blue: #7c9bff;
  --purple: #a78bfa;
  --pink: #f472b6;
  --glow: rgba(103, 232, 249, 0.45);
  --shadow: 0 28px 80px rgba(2, 6, 23, 0.8);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 155, 255, 0.17), transparent 28%),
    radial-gradient(circle at bottom right, rgba(244, 114, 182, 0.16), transparent 22%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
  color: var(--text);
  min-height: 100vh;
}

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 100%);
  pointer-events: none;
}

.container {
  width: min(1160px, calc(100% - 2rem));
  margin: 0 auto;
}

.glass {
  background: rgba(11, 20, 32, 0.62);
  border: 1px solid var(--line);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.section-space {
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: var(--cyan);
  font-size: 0.76rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  max-width: 800px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(7, 17, 31, 0.6);
  border-bottom: 1px solid rgba(147, 181, 255, 0.1);
  backdrop-filter: blur(10px);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.86rem;
}

.brand-mark {
  width: 2.1rem;
  height: 2.1rem;
  display: inline-grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  color: var(--bg);
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 18px rgba(103, 232, 249, 0.55);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.nav-cta,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.1rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-cta {
  padding: 0 1.2rem;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  color: #041019;
  box-shadow: 0 0 28px rgba(103, 232, 249, 0.35);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2.5rem;
  min-height: calc(100vh - 82px);
  padding: 4rem 0 2rem;
}

.hero-copy h1 {
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(3.2rem, 6vw, 6rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero-copy h1 span {
  background: linear-gradient(135deg, var(--cyan), var(--pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  max-width: 620px;
  margin: 1.6rem 0 0;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0 1.4rem;
}

.btn:hover,
.nav-cta:hover,
.btn:focus-visible,
.nav-cta:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  color: #07111f;
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.28);
}

.btn-secondary {
  border: 1px solid var(--line);
  background: rgba(8, 16, 27, 0.35);
  color: var(--text);
}

.hero-metrics {
  list-style: none;
  padding: 0;
  margin: 2.5rem 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 1.2rem;
}

.hero-metrics li {
  border-top: 1px solid var(--line);
  padding-top: 1rem;
}

.hero-metrics strong {
  display: block;
  font-size: clamp(1.5rem, 2.5vw, 2.3rem);
  margin-bottom: 0.3rem;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-visual {
  position: relative;
  min-height: 620px;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(16px);
}

.orb-one {
  width: 280px;
  height: 280px;
  background: rgba(103, 232, 249, 0.2);
  top: 30px;
  right: 50px;
}

.orb-two {
  width: 200px;
  height: 200px;
  background: rgba(167, 139, 250, 0.22);
  bottom: 60px;
  left: 60px;
}

.profile-card {
  position: relative;
  width: min(100%, 420px);
  padding: 1.5rem;
  border-radius: 28px;
}

.profile-topline {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  color: var(--muted);
  font-size: 0.76rem;
  background: rgba(255,255,255,0.02);
}

.status-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.8);
}

.profile-avatar-wrap {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.profile-avatar {
  width: 180px;
  height: 180px;
  border-radius: 32px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(103, 232, 249, 0.2), rgba(167, 139, 250, 0.22));
  border: 1px solid var(--line);
  box-shadow: inset 0 0 30px rgba(255,255,255,0.05), 0 0 30px rgba(124, 155, 255, 0.18);
}

.profile-avatar span {
  font-family: "Orbitron", sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: var(--text);
}

.profile-meta {
  margin-top: 2rem;
}

.mini-label {
  margin: 0 0 0.6rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72rem;
}

.profile-meta h2 {
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.2;
}

.profile-stats {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.profile-stats div {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.02);
}

.profile-stats span {
  display: block;
  color: var(--muted);
  font-size: 0.76rem;
  margin-bottom: 0.45rem;
}

.profile-stats strong {
  font-size: 1rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
}

.about-card {
  border-radius: 26px;
  padding: 2rem;
}

.about-card p {
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.stat-box {
  border-radius: 22px;
  padding: 1.4rem 1.2rem;
}

.stat-box strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.45rem;
}

.stat-box span {
  color: var(--muted);
}

.skill-grid,
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.skill-card {
  border-radius: 24px;
  padding: 1.5rem 1.1rem;
}

.skill-icon {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(103, 232, 249, 0.15), rgba(167, 139, 250, 0.12));
  color: var(--cyan);
  font-weight: 700;
  margin-bottom: 1rem;
}

.skill-card h3 {
  margin: 0 0 0.8rem;
  font-size: 1.25rem;
}

.skill-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
  position: relative;
  min-height: 440px;
  border-radius: 28px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.project-one {
  background-image: linear-gradient(180deg, rgba(7,17,31,0.2), rgba(7,17,31,0.9)), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80');
}

.project-two {
  background-image: linear-gradient(180deg, rgba(7,17,31,0.2), rgba(7,17,31,0.9)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80');
}

.project-three {
  background-image: linear-gradient(180deg, rgba(7,17,31,0.2), rgba(7,17,31,0.9)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80');
}

.project-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.5rem;
  background: linear-gradient(180deg, transparent, rgba(7,17,31,0.92));
}

.project-overlay span {
  display: block;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.7rem;
  margin-bottom: 0.6rem;
}

.project-overlay h3 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  line-height: 1;
}

.project-overlay p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  border-radius: 30px;
  padding: 2rem 2rem;
}

.cta-box h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.1;
}

.site-footer {
  padding: 2rem 0 3rem;
}

.footer-wrap {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid var(--line);
  padding-top: 2rem;
}

.footer-wrap h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.4rem;
  color: var(--muted);
}

.contact-list a:hover,
.contact-list a:focus-visible {
  color: var(--text);
}

@media (max-width: 980px) {
  .hero,
  .about-grid,
  .skill-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 3rem;
  }

  .project-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cta-box,
  .footer-wrap {
    display: block;
  }

  .cta-box .btn {
    margin-top: 1.2rem;
  }
}

@media (max-width: 760px) {
  .main-nav {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .hero-metrics,
  .skill-grid,
  .project-grid,
  .stats-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    width: min(100%, 360px);
  }

  .cta-box {
    padding: 1.5rem 1.2rem;
  }
}
