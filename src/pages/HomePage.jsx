import HeroBackground from '../features/hero/HeroBackground.jsx'
import '../features/hero/hero.css'

export default function HomePage() {
  return (
    <section className="portfolio-hero" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-engineer">Systems Engineer</span>{' '}
          <span className="hero-meets">meets</span>{' '}
          <span className="hero-design">Design</span>
        </h1>
        <p className="hero-disciplines">
          <span className="hero-strategy">Strategy</span>{' '}
          <span className="hero-decision"><span className="hero-ampersand">&amp;</span> Decision making</span>
        </p>
        <div className="hero-intro">
          <p>I design products and systems that are both functional and intuitive, bridging technical complexity and human experience.</p>
          <p className="hero-signature">- Maritetta</p>
        </div>
      </div>
    </section>
  )
}
