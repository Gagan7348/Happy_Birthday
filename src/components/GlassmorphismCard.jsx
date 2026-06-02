import React from 'react'
import './GlassmorphismCard.css'

const GlassmorphismCard = ({ children, className = '' }) => {
  return (
    <div className={`glassmorphism-card ${className}`}>
      {children}
    </div>
  )
}

export default GlassmorphismCard
