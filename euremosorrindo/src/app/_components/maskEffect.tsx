'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar o plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MaskEffect() {
    const maskRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!maskRef.current || !containerRef.current) return

        // Define o tamanho inicial e final da máscara baseado na largura da tela
        const valorMaskSize = window.innerWidth < 1000 ? "12000vw" : "7000vw"

        // Anima o aumento do mask-size
        const animation = gsap.to(maskRef.current, {
            maskSize: valorMaskSize,
            maskPosition: "53% center",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 2,
                start: "top top",
                end: "bottom 20%",
            }
        })

        // Cleanup function
        return () => {
            animation.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen"
        >
            <div
                ref={maskRef}
                className="mask w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bgfernanda.webp')",
                    maskImage: "url('/cpp2.svg')",
                    WebkitMaskImage: "url('/cpp2.svg')", // Para compatibilidade com Safari
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    maskSize: '90vw',
                    WebkitMaskSize: '90vw',
                }}
            />
        </div>
    )
}