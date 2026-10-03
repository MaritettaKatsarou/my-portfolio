import { useEffect, useRef } from 'react'
import { HERO_BLOCKS, HERO_CANVAS, HERO_LINES } from './compositions.js'

const percentX = (value) => `${value / HERO_CANVAS.width * 100}%`
const percentY = (value) => `${value / HERO_CANVAS.height * 100}%`

function blockStyle(block) {
  const style = {
    left: percentX(block.x), top: percentY(block.y),
    width: percentX(block.width), height: percentY(block.height),
    backgroundColor: `var(--hero-${block.color})`,
    '--stagger': `${block.stagger}s`,
  }
  block.states.forEach(({ x, y, opacity }, index) => {
    style[`--x${index}`] = x / HERO_CANVAS.width * 100
    style[`--y${index}`] = y / HERO_CANVAS.width * 100
    style[`--opacity${index}`] = opacity
  })
  return style
}

export default function HeroBackground() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    const background = backgroundRef.current
    let visible = true
    const updatePlayback = () => {
      background.style.setProperty('--hero-play-state', visible && !document.hidden ? 'running' : 'paused')
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      updatePlayback()
    })
    observer.observe(background)
    document.addEventListener('visibilitychange', updatePlayback)
    updatePlayback()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', updatePlayback)
    }
  }, [])

  return (
    <div ref={backgroundRef} className="hero-background" aria-hidden="true">
      {HERO_BLOCKS.map((block) => (
        <span key={block.id} className={`hero-block hero-block--${block.id}`} style={blockStyle(block)} />
      ))}
      <div className="hero-linework">
        {HERO_LINES.map((line) => (
          <span
            key={line.id}
            className={`hero-line hero-line--${line.id}${line.vertical ? ' hero-line--vertical' : ''}${line.diagonal ? ' hero-line--diagonal' : ''}`}
            style={{
              left: percentX(line.x), top: percentY(line.y),
              width: line.vertical ? undefined : percentX(line.length),
              height: line.vertical ? percentY(line.length) : undefined,
              backgroundColor: line.color ? `var(--hero-${line.color})` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}
