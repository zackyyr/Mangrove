// components/sections/ScrollFloat.jsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = 'power3.out',
  scrollStart = 'top 80%',
  scrollEnd = 'bottom 60%',
  stagger = 0.1,
}) => {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current

    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse',
        },
        stagger: stagger,
      }
    )
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger])

  return <div ref={elRef}>{children}</div>
}

export default ScrollFloat
