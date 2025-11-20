'use client'

import { useRef, useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { WhatsappLogo, Calendar, Image, Users, Sparkle } from '@phosphor-icons/react'

export default function Projects() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Garantir que o vídeo carregue com melhor qualidade
        if (videoRef.current) {
            videoRef.current.load()
        }

        // Animação de entrada
        const timer = setTimeout(() => setIsVisible(true), 300)
        return () => clearTimeout(timer)
    }, [])

    const benefits = [
        {
            icon: Calendar,
            title: "Atualizações Diárias",
            description: "Programação em tempo real",
            color: "from-cyan-400 to-blue-500"
        },
        {
            icon: Image,
            title: "Fotos e Vídeos",
            description: "Momentos exclusivos",
            color: "from-emerald-400 to-cyan-500"
        },
        {
            icon: Users,
            title: "Comunidade",
            description: "Conecte-se com outros remadores",
            color: "from-violet-400 to-purple-500"
        }
    ]

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"
            data-aos="fade-up"
        >
            {/* Background com vídeo e efeitos */}
            <Parallax speed={-20} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        src="/bgfernanda2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover opacity-40 scale-110"
                    />
                    {/* Gradientes dinâmicos */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-transparent to-cyan-800/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900" />
                </div>
            </Parallax>

            {/* Elementos decorativos */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-30 container mx-auto px-4 py-20">
                <div className={`flex flex-col items-center justify-center min-h-[80vh] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>

                    {/* Header com animação */}
                    <div className="text-center space-y-8 max-w-5xl mb-16">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl mb-4">
                            <Sparkle weight="fill" className="w-5 h-5 text-cyan-400 animate-pulse" />
                            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
                                Grupo Exclusivo
                            </span>
                        </div>

                        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                            Entre no{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                                nosso grupo
                            </span>
                        </h1>

                        <div className="relative">
                            <p className="text-2xl md:text-3xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed font-light">
                                Fique por dentro da <span className="text-cyan-300 font-semibold">programação completa</span> e receba atualizações em tempo real
                            </p>

                            {/* Linha decorativa */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        </div>
                    </div>

                    {/* Cards de benefícios */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl w-full">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="group relative overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md border border-white/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500" />

                                <div className="relative p-8 text-center z-10">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-lg shadow-cyan-500/25 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <benefit.icon weight="fill" className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-white font-bold text-xl mb-3">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-cyan-100/80 text-lg leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Efeito de brilho no hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
                            </div>
                        ))}
                    </div>

                    {/* CTA Principal */}
                    <div
                        className="text-center space-y-6 max-w-2xl"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <a
                            href="https://chat.whatsapp.com/KM0KWPFhgvH2ivlof8QndE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-xl font-bold transform hover:scale-105 hover:-translate-y-1"
                            aria-label="Entrar no grupo do WhatsApp"
                        >
                            {/* Efeito de brilho */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            {/* Ícone animado */}
                            <div className="relative z-10">
                                <WhatsappLogo weight="fill" className="w-8 h-8" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                            </div>

                            <span className="relative z-10">ENTRAR NO GRUPO AGORA</span>

                            {/* Seta animada */}
                            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                                <span className="text-2xl">→</span>
                            </div>
                        </a>

                        <div className="space-y-3">
                            <p className="text-cyan-200/80 text-lg font-medium flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                Grupo exclusivo para participantes e interessados
                            </p>

                            <p className="text-cyan-200/60 text-sm">
                                📍 Junte-se a nossa comunidade de remadores
                            </p>
                        </div>
                    </div>

                    {/* Elemento decorativo inferior */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-full blur-sm" />
                </div>
            </div>
        </div>
    )
}