import React, { useState, useRef } from 'react'
import './AvaniClick.css'

const AvaniClick = ({ avani, onToggle }) => {
  const [isExploding, setIsExploding] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [particles, setParticles] = useState([])
  const [hearts, setHearts] = useState([])
  const [sparkles, setSparkles] = useState([])
  const [confetti, setConfetti] = useState([])
  const [showPhotoGallery, setShowPhotoGallery] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const containerRef = useRef(null)

  const handleClick = () => {
    setIsExploding(true)
    
    // Generate particles
    const newParticles = []
    for (let i = 0; i < 80; i++) {
      const angle = (Math.PI * 2 * i) / 80
      const velocity = 8 + Math.random() * 15
      newParticles.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        size: 8 + Math.random() * 15
      })
    }
    setParticles(newParticles)

    // Generate hearts
    const newHearts = []
    for (let i = 0; i < 50; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: 25 + Math.random() * 40,
        delay: Math.random() * 0.3,
        duration: 1.5 + Math.random() * 2.5
      })
    }
    setHearts(newHearts)

    // Generate sparkles
    const newSparkles = []
    for (let i = 0; i < 100; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
        size: 5 + Math.random() * 15,
        delay: Math.random() * 0.5,
        duration: 0.8 + Math.random() * 1.2
      })
    }
    setSparkles(newSparkles)

    // Generate confetti
    const newConfetti = []
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#00d4aa', '#6c5ce7', '#fd79a8']
    for (let i = 0; i < 150; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 20,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.2,
        duration: 2 + Math.random() * 3
      })
    }
    setConfetti(newConfetti)

    // Show modal after explosion
    setTimeout(() => {
      setShowModal(true)
    }, 1200)

    // Reset after animation
    setTimeout(() => {
      setIsExploding(false)
      setParticles([])
      setHearts([])
      setSparkles([])
      setConfetti([])
    }, 5000)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    onToggle()
  }

  const handleOpenPhotoGallery = () => {
    setShowPhotoGallery(true)
    setShowModal(false)
  }

  const handleClosePhotoGallery = () => {
    setShowPhotoGallery(false)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % 5)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + 5) % 5)
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
              {sparkles.map(s => (
                <div
                  key={s.id}
                  className="sparkle"
                  style={{
                    '--x': `${s.x}px`,
                    '--y': `${s.y}px`,
                    '--size': `${s.size}px`,
                    '--delay': `${s.delay}s`,
                    '--duration': `${s.duration}s`
                  }}
                >
                  ✨
                </div>
              ))}
              {confetti.map(c => (
                <div
                  key={c.id}
                  className="confetti"
                  style={{
                    '--x': `${c.x}px`,
                    '--y': `${c.y}px`,
                    '--color': c.color,
                    '--size': `${c.size}px`,
                    '--rotation': `${c.rotation}deg`,
                    '--delay': `${c.delay}s`,
                    '--duration': `${c.duration}s`
                  }}
                />
              ))}
            </div>
          )}
          <div className="glow-effect"></div>
          <div className="click-hint">Click me! ✨</div>
          <div className="pulse-ring"></div>
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
                Your smile lights up my world and your love makes everything beautiful.
              </p>
              <div className="modal-hearts">
                {[...Array(15)].map((_, i) => (
                  <span key={i} className="modal-heart" style={{ '--delay': `${i * 0.08}s` }}>
                    ❤️
                  </span>
                ))}
              </div>
              <div className="modal-buttons">
                <button className="modal-button photo-btn" onClick={handleOpenPhotoGallery}>
                  📸 Photo Gallery
                </button>
                <button className="modal-button letter-btn" onClick={handleCloseModal}>
                  💌 Open Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPhotoGallery && (
        <div className="photo-gallery-overlay" onClick={handleClosePhotoGallery}>
          <div className="photo-gallery-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-close" onClick={handleClosePhotoGallery}>✕</button>
            <h3 className="gallery-title">💕 Our Memories 💕</h3>
            <div className="photo-display">
              <button className="gallery-nav prev" onClick={prevPhoto}>❮</button>
              <div className="photo-frame">
                <div className="photo-placeholder">
                  <span className="photo-number">Photo {currentPhotoIndex + 1}/5</span>
                  <span className="photo-heart">❤️</span>
                </div>
              </div>
              <button className="gallery-nav next" onClick={nextPhoto}>❯</button>
            </div>
            <div className="photo-dots">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`dot ${i === currentPhotoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentPhotoIndex(i)}
                />
              ))}
            </div>
            <p className="gallery-message">Add your photos here to make it special! 📷</p>
          </div>
        </div>
      )}
    </>
  )
}

export default AvaniClick
