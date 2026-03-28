import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef()

  useEffect(() => {
    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  )
}
