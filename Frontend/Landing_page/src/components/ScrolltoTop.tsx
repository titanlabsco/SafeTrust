'use client'

import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: true
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
