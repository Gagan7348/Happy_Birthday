import React, { useState, useRef } from 'react'
import './AvaniClick.css'

const AvaniClick = ({ avani, onToggle }) => {
  const [isExploding, setIsExploding] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [particles, setParticles] = useState([])
  const [hearts, setHearts] = useState([])
  const containerRef = useRef(null)

  const handleClick = () => {
    setIsExploding(true)
    
    // Generate particles
    const newParticles = []
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50
      const velocity = 5 + Math.random() * 10
      newParticles.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: 5 + Math.random() * 10
      })
    }
    setParticles(newParticles)

    // Generate hearts
    const newHearts = []
    for (let i = 0; i < 30; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 0.5,
        duration: 1 + Math.random() * 2
      })
    }
    setHearts(newHearts)

    // Show modal after explosion
    setTimeout(() => {
      setShowModal(true)
    }, 800)

    // Reset after animation
    setTimeout(() => {
      setIsExploding(false)
      setParticles([])
      setHearts([])
    }, 3000)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    // Also toggle the book canvas
    onToggle()
  }

  return (
    <>
      <div 
        className="avani-container" 
        onClick={handleClick}
        ref={containerRef}
      >
        <div className="image-wrapper">
          <img src={avani} alt="Avani" className="avani-image" />
          {isExploding && (
            <div className="explosion-overlay">
              {particles.map(p => (
                <div
                  key={p.id}
                  className="particle"
                  style={{
                    '--x': `${p.x}px`,
                    '--y': `${p.y}px`,
                    '--vx': `${p.vx}px`,
                    '--vy': `${p.vy}px`,
                    '--color': p.color,
                    '--size': `${p.size}px`
                  }}
                />
              ))}
              {hearts.map(h => (
                <div
                  key={h.id}
                  className="floating-heart"
                  style={{
                    '--x': `${h.x}px`,
                    '--y': `${h.y}px`,
                    '--size': `${h.size}px`,
                    '--delay': `${h.delay}s`,
                    '--duration': `${h.duration}s`
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
          )}
          <div className="glow-effect"></div>
          <div className="click-hint">Click me! ✨</div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>💖 For My Love Avani 💖</h2>
            </div>
            <div className="modal-body">
              <p className="modal-message">
                Every time I look at your beautiful face, my heart skips a beat. 
                You are the most precious gift in my life, and I'm so grateful to have you.
              </p>
              <div className="modal-hearts">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="modal-heart" style={{ '--delay': `${i * 0.1}s` }}>
                    ❤️
                  </span>
                ))}
              </div>
              <p className="modal-submessage">
                Click anywhere to open your special letter 💌
              </p>
            </div>
            <button className="modal-close" onClick={handleCloseModal}>
              Open Letter 💌
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AvaniClick
