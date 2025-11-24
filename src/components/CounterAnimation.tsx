'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CounterAnimation({ end, duration = 2000, suffix = '', className = '' }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const startValue = 0
          
          const animate = () => {
            const now = Date.now()
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)
            
            setCount(currentValue)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  )
}



