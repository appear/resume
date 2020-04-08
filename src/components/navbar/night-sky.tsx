import React, { useRef, useEffect, useCallback } from 'react'

export default function NightSky() {
  const canvasEl = useRef<HTMLCanvasElement | null>(null)

  const handleRenderCanvas = useCallback(() => {
    if (!canvasEl.current) {
      return
    }

    const w = window.innerWidth
    const h = 150
    const ctx = canvasEl.current.getContext('2d')

    canvasEl.current.width = w

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, w)
      gradient.addColorStop(0, '#07263e')
      gradient.addColorStop(1, '#0a2342')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      const stars = createStart(w, h, 20)
      fillStar(ctx, stars)
    }
  }, [canvasEl])

  useEffect(() => {
    handleRenderCanvas()
  }, [canvasEl])

  useEffect(() => {
    window.addEventListener('resize', () => {
      // TOOD: debounce 추가
      handleRenderCanvas()
    })
  }, [])

  return <canvas ref={canvasEl} />
}

function createStart(w: number, h: number, spacing: number) {
  const stars = []

  for (let x = 0; x < w; x += spacing) {
    for (let y = 0; y < h; y += spacing) {
      const star = {
        x: x + random(spacing),
        y: y + random(spacing),
        r: Math.random() * 1.5,
      }
      stars.push(star)
    }
  }

  return stars
}

function fillStar(
  ctx: CanvasRenderingContext2D,
  stars: {
    x: number
    y: number
    r: number
  }[],
) {
  stars.forEach(({ x, y, r }) => {
    ctx.beginPath()
    ctx.fillStyle = `hsla(150, 30%, 80%, ${Math.random() * 1})`
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  })
}

function random(n: number) {
  return Math.floor(Math.random() * n)
}
