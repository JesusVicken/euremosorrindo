'use client'

import { useRef, useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Image as ImageIcon, Users, Sparkle } from '@phosphor-icons/react'

export default function PlansSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
        }
        const timer = setTimeout(() => setIsVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative overflow-hidden bg-slate-950">

            {/* --- BACKGROUND DINÂMICO --- */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
                <Parallax speed={-10} className="absolute inset-0 h-[120%] -top-[10%]">
                    <video
                        ref={videoRef}
                        src="/bgfernanda3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/50 to-slate-950" />
            </div>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <div className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Cabeçalho da Seção */}
                <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-200 text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg">
                        <Sparkle weight="fill" className="w-4 h-4 animate-pulse" />
                        Planos e Valores
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-xl">
                        Invista na sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 filter drop-shadow-lg">
                            Saúde e Bem-Estar
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-100 font-medium max-w-xl mx-auto drop-shadow-md">
                        Confira nossa tabela de preços completa. Opções flexíveis para todos os níveis.
                    </p>
                </div>

                {/* --- DISPLAY DA TABELA DE PREÇOS --- */}
                <div className="flex flex-col items-center">

                    {/* Link envolvendo a Imagem */}
                    <Link
                        href="https://escolafernandarachid.com.br/p/aulas-de-canoa-havaiana"
                        target="_blank"
                        className="relative w-full max-w-sm md:max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/30 border border-white/20 group hover:scale-[1.02] transition-transform duration-500 bg-white/5 backdrop-blur-sm cursor-pointer"
                    >
                        {/* Imagem Real dos Planos */}
                        <div className="relative aspect-[4/5] w-full">
                            <Image
                                src="/cards/planos.jpeg"
                                alt="Tabela de Preços e Planos - Eu Remo Sorrindo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                priority
                            />
                        </div>

                        {/* Brilho decorativo no hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </Link>

                </div>

                {/* --- RODAPÉ COM REDES SOCIAIS (Benefícios) --- */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-12">
                    {[
                        {
                            icon: Calendar,
                            title: "Agenda Diária",
                            text: "Confira a programação completa.",
                            link: "/agenda", // <--- ALTERADO AQUI
                            color: "text-cyan-400"
                        },
                        {
                            icon: ImageIcon,
                            title: "Galeria de Fotos",
                            text: "Veja nossos registros.",
                            link: "https://instagram.com/euremosorrindo",
                            color: "text-pink-400"
                        },
                        {
                            icon: Users,
                            title: "Comunidade",
                            text: "Junte-se ao grupo.",
                            link: "/remadas",
                            color: "text-violet-400"
                        }
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            target={item.link.startsWith('http') ? "_blank" : "_self"}
                            className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm border border-transparent hover:border-white/5"
                        >
                            <div className={`p-2 rounded-lg bg-white/5 mb-3 ${item.color} group-hover:scale-110 transition-transform shadow-lg`}>
                                <item.icon size={28} weight="duotone" />
                            </div>
                            <h3 className="text-white font-bold text-base mb-1 drop-shadow">{item.title}</h3>
                            <p className="text-slate-300 text-xs font-medium">{item.text}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}