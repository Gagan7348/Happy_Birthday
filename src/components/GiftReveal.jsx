import React, { useState, useMemo } from 'react'
import { FaGift, FaHeart } from 'react-icons/fa'
import './GiftReveal.css'

const GiftReveal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const hearts = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 2}s`
    })), []
  )

  const confettiPieces = useMemo(() =>
    [...Array(50)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181'][Math.floor(Math.random() * 5)],
      animationDelay: `${Math.random() * 0.5}s`,
      animationDuration: `${1 + Math.random() * 2}s`
    })), []
  )

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => setShowSurprise(true), 800)
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowSurprise(false)
  }

  return (
    <div className="gift-reveal-container">
      {!isOpen ? (
        <div className="gift-box" onClick={handleOpen}>
          <div className="gift-lid">
            <div className="gift-ribbon-vertical"></div>
            <div className="gift-ribbon-horizontal"></div>
          </div>
          <div className="gift-body">
            <div className="gift-ribbon-vertical"></div>
            <div className="gift-ribbon-horizontal"></div>
            <FaGift className="gift-icon" />
            <p className="gift-text">Click to Open!</p>
          </div>
        </div>
      ) : (
        <div className="surprise-container">
          <button className="close-btn" onClick={handleClose}>×</button>
          {showSurprise && (
            <div className="surprise-content">
              <div className="floating-hearts">
                {hearts.map((heart) => (
                  <FaHeart 
                    key={heart.id}
                    className="heart" 
                    style={{
                      left: heart.left,
                      animationDelay: heart.animationDelay,
                      animationDuration: heart.animationDuration
                    }}
                  />
                ))}
              </div>
              <div className="surprise-message">
                <h2>🎉 Surprise, My Love! 🎉</h2>
                <p>Happy 21st Birthday, Avani!</p>
                <p>You are the most beautiful gift life has ever given me, and I'm so grateful to call you mine.</p>
                <p>With all my love, forever and always, Gagan ❤️</p>
              </div>
              <div className="confetti">
                {confettiPieces.map((piece) => (
                  <div 
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                      left: piece.left,
                      backgroundColor: piece.backgroundColor,
                      animationDelay: piece.animationDelay,
                      animationDuration: piece.animationDuration
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default GiftReveal
