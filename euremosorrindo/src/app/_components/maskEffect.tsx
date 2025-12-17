'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MaskEffectZoom() {
    const containerRef = useRef<HTMLDivElement>(null)
    const maskRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const maskElement = maskRef.current
        const containerElement = containerRef.current

        if (!maskElement || !containerElement) return

        // Lógica do snippet HTML que você enviou:
        // Se a tela for menor que 1000px, o zoom precisa ser maior (9000vw)
        let valorMaskSize = window.innerWidth < 1000 ? "9000vw" : "3000vw"

        gsap.to(maskElement, {
            maskSize: valorMaskSize,
            webkitMaskSize: valorMaskSize, // Importante para compatibilidade
            maskPosition: "1% center",
            webkitMaskPosition: "center center",
            scrollTrigger: {
                trigger: containerElement,
                pin: true,     // Fixa o elemento
                scrub: 2,      // Suavidade igual ao seu snippet
                start: "top top",
                end: "bottom 20%",
            }
        })
    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
        >
            <div
                ref={maskRef}
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                style={{
                    // Caminhos baseados no seu snippet. 
                    // Certifique-se de que a pasta 'assets' está dentro de 'public' no Next.js
                    backgroundImage: "url('/fernandaHero.jpg')",

                    // Configurações da Máscara
                    maskImage: "url('/remo.svg')",
                    WebkitMaskImage: "url('/remo.svg')",

                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',

                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',

                    // Tamanho Inicial (Antes do Scroll)
                    maskSize: '90vw',
                    WebkitMaskSize: '90vw',
                }}
            />
        </div>
    )
}