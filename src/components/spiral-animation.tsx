'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

class Vector2D {
    constructor(public x: number, public y: number) {}
    static random(min: number, max: number): number {
        return min + Math.random() * (max - min)
    }
}

class Vector3D {
    constructor(public x: number, public y: number, public z: number) {}
    static random(min: number, max: number): number {
        return min + Math.random() * (max - min)
    }
}

class AnimationController {
    private timeline: gsap.core.Timeline
    private time = 0
    private driftAngle = 0
    private isDrifting = false
    private rafId = 0
    private lastTs = 0
    private ctx: CanvasRenderingContext2D
    private size: number
    private stars: Star[] = []

    private readonly changeEventTime = 0.32
    private readonly cameraZ = -400
    private readonly cameraTravelDistance = 3400
    private readonly startDotYOffset = 28
    private readonly viewZoom = 100
    private readonly numberOfStars = 5000
    private readonly trailLength = 80
    private canvasWidth: number
    private canvasHeight: number

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number, size: number, canvasWidth: number, canvasHeight: number) {
        this.ctx = ctx
        this.size = size
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.timeline = gsap.timeline()

        this.setupRandomGenerator()
        this.createStars()
        this.setupTimeline()
    }

    private setupRandomGenerator() {
        const originalRandom = Math.random
        const customRandom = () => {
            let seed = 1234
            return () => {
                seed = (seed * 9301 + 49297) % 233280
                return seed / 233280
            }
        }
        Math.random = customRandom()
        this.createStars()
        Math.random = originalRandom
    }

    private createStars() {
        for (let i = 0; i < this.numberOfStars; i++) {
            this.stars.push(new Star(this.cameraZ, this.cameraTravelDistance))
        }
    }

    private setupTimeline() {
        // Phase 1: spiral formation + expansion (plays once)
        this.timeline.to(this, {
            time: 1,
            duration: 12,
            ease: "none",
            onUpdate: () => this.render(),
            onComplete: () => this.startDriftLoop()
        })
    }

    private startDriftLoop() {
        this.isDrifting = true
        this.driftAngle = 0
        this.lastTs = performance.now()
        const loop = (ts: number) => {
            const dt = (ts - this.lastTs) / 1000
            this.lastTs = ts
            // Slow continuous rotation with subtle sine wobble for organic feel
            const wobble = Math.sin(ts * 0.0004) * 0.008
            this.driftAngle += (0.05 + wobble) * dt
            this.render()
            this.rafId = requestAnimationFrame(loop)
        }
        this.rafId = requestAnimationFrame(loop)
    }

    public ease(p: number, g: number): number {
        if (p < 0.5) return 0.5 * Math.pow(2 * p, g)
        else return 1 - 0.5 * Math.pow(2 * (1 - p), g)
    }

    public easeOutElastic(x: number): number {
        const c4 = (2 * Math.PI) / 4.5
        if (x <= 0) return 0
        if (x >= 1) return 1
        return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1
    }

    public map(value: number, start1: number, stop1: number, start2: number, stop2: number): number {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    public constrain(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max)
    }

    public lerp(start: number, end: number, t: number): number {
        return start * (1 - t) + end * t
    }

    public spiralPath(p: number): Vector2D {
        p = this.constrain(1.2 * p, 0, 1)
        p = this.ease(p, 1.8)
        const numberOfSpiralTurns = 6
        const theta = 2 * Math.PI * numberOfSpiralTurns * Math.sqrt(p)
        const r = 170 * Math.sqrt(p)
        return new Vector2D(
            r * Math.cos(theta),
            r * Math.sin(theta) + this.startDotYOffset
        )
    }

    public rotate(v1: Vector2D, v2: Vector2D, p: number, orientation: boolean): Vector2D {
        const middle = new Vector2D((v1.x + v2.x) / 2, (v1.y + v2.y) / 2)
        const dx = v1.x - middle.x
        const dy = v1.y - middle.y
        const angle = Math.atan2(dy, dx)
        const o = orientation ? -1 : 1
        const r = Math.sqrt(dx * dx + dy * dy)
        const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p)
        return new Vector2D(
            middle.x + r * (1 + bounce) * Math.cos(angle + o * Math.PI * this.easeOutElastic(p)),
            middle.y + r * (1 + bounce) * Math.sin(angle + o * Math.PI * this.easeOutElastic(p))
        )
    }

    public showProjectedDot(position: Vector3D, sizeFactor: number) {
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)
        // Cap camera travel at 35% so stars stay visible and drift instead of disappearing
        const cameraT2 = Math.min(t2, 0.35)
        const newCameraZ = this.cameraZ + this.ease(Math.pow(cameraT2, 1.2), 1.8) * this.cameraTravelDistance
        if (position.z > newCameraZ) {
            const dotDepthFromCamera = position.z - newCameraZ
            const x = this.viewZoom * position.x / dotDepthFromCamera
            const y = this.viewZoom * position.y / dotDepthFromCamera
            const sw = 400 * sizeFactor / dotDepthFromCamera
            this.ctx.lineWidth = sw
            this.ctx.beginPath()
            this.ctx.arc(x, y, 0.5, 0, Math.PI * 2)
            this.ctx.fill()
        }
    }

    private drawStartDot() {
        if (this.time > this.changeEventTime) {
            const dy = this.cameraZ * this.startDotYOffset / this.viewZoom
            const position = new Vector3D(0, dy, this.cameraTravelDistance)
            this.showProjectedDot(position, 2.5)
        }
    }

    public render() {
        const ctx = this.ctx
        if (!ctx) return

        // Match stone-950 background
        ctx.fillStyle = '#0c0a09'
        ctx.fillRect(0, 0, this.size, this.size)

        ctx.save()

        const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1)
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)

        // Start at H1 position (~22% from left, ~38% from top), drift to center as spiral expands
        const endX = this.canvasWidth * 0.5
        const endY = this.canvasHeight * 0.5
        let cx: number, cy: number
        if (this.isDrifting) {
            cx = endX
            cy = endY
        } else {
            const drift = this.ease(this.constrain(t2 * 1.5, 0, 1), 2.2)
            const startX = this.canvasWidth * 0.22
            const startY = this.canvasHeight * 0.38
            cx = this.lerp(startX, endX, drift)
            cy = this.lerp(startY, endY, drift)
        }

        ctx.translate(cx, cy)
        // Rotation: fast during expansion, then continuous drift via rAF
        if (this.isDrifting) {
            // Final expansion rotation (frozen at t2=1) + accumulated drift
            const expandRotation = -Math.PI * this.ease(1, 2.7)
            const baseEndDrift = -0.5 * 0.4 * Math.PI
            ctx.rotate(expandRotation + baseEndDrift + this.driftAngle)
        } else {
            const expandRotation = -Math.PI * this.ease(Math.min(t2, 0.5) * 2, 2.7)
            const driftRotation = t2 > 0.5 ? -(t2 - 0.5) * 0.4 * Math.PI : 0
            ctx.rotate(expandRotation + driftRotation)
        }

        this.drawTrail(t1)

        // Emerald-tinted stars
        ctx.fillStyle = '#a7f3d0'
        for (const star of this.stars) {
            star.render(t1, this)
        }

        this.drawStartDot()
        ctx.restore()
    }

    private drawTrail(t1: number) {
        for (let i = 0; i < this.trailLength; i++) {
            const f = this.map(i, 0, this.trailLength, 1.1, 0.1)
            const sw = (1.3 * (1 - t1) + 3.0 * Math.sin(Math.PI * t1)) * f

            // Gradient from white core to emerald
            const ratio = i / this.trailLength
            if (ratio < 0.3) {
                this.ctx.fillStyle = '#ffffff'
            } else if (ratio < 0.6) {
                this.ctx.fillStyle = '#d1fae5'
            } else {
                this.ctx.fillStyle = '#6ee7b7'
            }
            this.ctx.lineWidth = sw

            const pathTime = t1 - 0.00015 * i
            const position = this.spiralPath(pathTime)
            const basePos = position
            const offset = new Vector2D(position.x + 5, position.y + 5)
            const rotated = this.rotate(
                basePos,
                offset,
                Math.sin(this.time * Math.PI * 2) * 0.5 + 0.5,
                i % 2 === 0
            )
            this.ctx.beginPath()
            this.ctx.arc(rotated.x, rotated.y, sw / 2, 0, Math.PI * 2)
            this.ctx.fill()
        }
    }

    public resize(size: number, canvasWidth: number, canvasHeight: number) {
        this.size = size
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.render()
    }

    public pause() { this.timeline.pause() }
    public resume() { this.timeline.play() }
    public destroy() {
        this.timeline.kill()
        if (this.rafId) cancelAnimationFrame(this.rafId)
    }
}

class Star {
    private dx: number
    private dy: number
    private spiralLocation: number
    private strokeWeightFactor: number
    private z: number
    private angle: number
    private distance: number
    private rotationDirection: number
    private expansionRate: number
    private finalScale: number

    constructor(cameraZ: number, cameraTravelDistance: number) {
        this.angle = Math.random() * Math.PI * 2
        this.distance = 30 * Math.random() + 15
        this.rotationDirection = Math.random() > 0.5 ? 1 : -1
        this.expansionRate = 1.8 + Math.random() * 1.2
        this.finalScale = 0.7 + Math.random() * 0.6
        this.dx = this.distance * Math.cos(this.angle)
        this.dy = this.distance * Math.sin(this.angle)
        this.spiralLocation = (1 - Math.pow(1 - Math.random(), 3.0)) / 1.3
        this.z = Vector2D.random(0.5 * cameraZ, cameraTravelDistance + cameraZ)
        const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t
        this.z = lerp(this.z, cameraTravelDistance / 2, 0.3 * this.spiralLocation)
        this.strokeWeightFactor = Math.pow(Math.random(), 2.0)
    }

    render(p: number, controller: AnimationController) {
        const spiralPos = controller.spiralPath(this.spiralLocation)
        const q = p - this.spiralLocation
        if (q > 0) {
            const displacementProgress = controller.constrain(4 * q, 0, 1)
            const linearEasing = displacementProgress
            const elasticEasing = controller.easeOutElastic(displacementProgress)
            const powerEasing = Math.pow(displacementProgress, 2)

            let easing: number
            if (displacementProgress < 0.3) {
                easing = controller.lerp(linearEasing, powerEasing, displacementProgress / 0.3)
            } else if (displacementProgress < 0.7) {
                const t = (displacementProgress - 0.3) / 0.4
                easing = controller.lerp(powerEasing, elasticEasing, t)
            } else {
                easing = elasticEasing
            }

            let screenX: number, screenY: number
            if (displacementProgress < 0.3) {
                screenX = controller.lerp(spiralPos.x, spiralPos.x + this.dx * 0.3, easing / 0.3)
                screenY = controller.lerp(spiralPos.y, spiralPos.y + this.dy * 0.3, easing / 0.3)
            } else if (displacementProgress < 0.7) {
                const midProgress = (displacementProgress - 0.3) / 0.4
                const curveStrength = Math.sin(midProgress * Math.PI) * this.rotationDirection * 1.5
                const baseX = spiralPos.x + this.dx * 0.3
                const baseY = spiralPos.y + this.dy * 0.3
                const targetX = spiralPos.x + this.dx * 0.7
                const targetY = spiralPos.y + this.dy * 0.7
                const perpX = -this.dy * 0.4 * curveStrength
                const perpY = this.dx * 0.4 * curveStrength
                screenX = controller.lerp(baseX, targetX, midProgress) + perpX * midProgress
                screenY = controller.lerp(baseY, targetY, midProgress) + perpY * midProgress
            } else {
                const finalProgress = (displacementProgress - 0.7) / 0.3
                const baseX = spiralPos.x + this.dx * 0.7
                const baseY = spiralPos.y + this.dy * 0.7
                const targetDistance = this.distance * this.expansionRate * 1.5
                const spiralTurns = 1.2 * this.rotationDirection
                const spiralAngle = this.angle + spiralTurns * finalProgress * Math.PI
                const targetX = spiralPos.x + targetDistance * Math.cos(spiralAngle)
                const targetY = spiralPos.y + targetDistance * Math.sin(spiralAngle)
                screenX = controller.lerp(baseX, targetX, finalProgress)
                screenY = controller.lerp(baseY, targetY, finalProgress)
            }

            const vx = (this.z - controller['cameraZ']) * screenX / controller['viewZoom']
            const vy = (this.z - controller['cameraZ']) * screenY / controller['viewZoom']
            const position = new Vector3D(vx, vy, this.z)

            let sizeMultiplier = 1.0
            if (displacementProgress < 0.6) {
                sizeMultiplier = 1.0 + displacementProgress * 0.2
            } else {
                const t = (displacementProgress - 0.6) / 0.4
                sizeMultiplier = 1.2 * (1.0 - t) + this.finalScale * t
            }
            const dotSize = 8.5 * this.strokeWeightFactor * sizeMultiplier
            controller.showProjectedDot(position, dotSize)
        }
    }
}

export function SpiralAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<AnimationController | null>(null)
    // survives StrictMode cleanup — prevents double-init
    const initializedRef = useRef(false)

    useEffect(() => {
        if (initializedRef.current) return
        initializedRef.current = true

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const w = window.innerWidth
        const h = window.innerHeight
        const dpr = window.devicePixelRatio || 1
        const size = Math.max(w, h)
        canvas.width = size * dpr
        canvas.height = size * dpr
        canvas.style.width = `${w}px`
        canvas.style.height = `${h}px`
        ctx.scale(dpr, dpr)

        const controller = new AnimationController(canvas, ctx, dpr, size, w, h)
        animationRef.current = controller

        const handleResize = () => {
            const nw = window.innerWidth
            const nh = window.innerHeight
            const ndpr = window.devicePixelRatio || 1
            const nsize = Math.max(nw, nh)
            canvas.width = nsize * ndpr
            canvas.height = nsize * ndpr
            canvas.style.width = `${nw}px`
            canvas.style.height = `${nh}px`
            ctx.resetTransform()
            ctx.scale(ndpr, ndpr)
            controller.resize(nsize, nw, nh)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            animationRef.current?.destroy()
            animationRef.current = null
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 size-full"
        />
    )
}
