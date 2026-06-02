import React, { useState } from 'react'
import './Card3D.css'

const Card3D = ({ frontContent, backContent, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`card-3d-container ${className}`}>
      <div 
        className={`card-3d ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-3d-front">
          {frontContent}
        </div>
        <div className="card-3d-back">
          {backContent}
        </div>
      </div>
    </div>
  )
}

export default Card3D
