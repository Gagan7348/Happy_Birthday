import React, { useMemo } from 'react'
import { FaHeart } from 'react-icons/fa'
import './FloatingHearts.css'

const FloatingHearts = ({ count = 15 }) => {
  const hearts = useMemo(() => 
    [...Array(count)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
      size: `${1 + Math.random() * 2}rem`,
      color: ['#ff6b6b', '#ee5a5a', '#ff8787', '#ffa8a8', '#ff4757'][Math.floor(Math.random() * 5)]
    })), [count]
  )

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            fontSize: heart.size,
            color: heart.color
          }}
        />
      ))}
    </div>
  )
}

export default FloatingHearts
