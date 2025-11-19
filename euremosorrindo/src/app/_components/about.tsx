'use client'

import { useRef, useEffect, useState } from 'react'
import Image from "next/image"
import { WhatsappLogo, Play, Users, Leaf, Target } from "@phosphor-icons/react/dist/ssr"

export function About() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [alunosCount, setAlunosCount] = useState(0)
    const [anosCount, setAnosCount] = useState(0)
    const [experienciasCount, setExperienciasCount] = useState(0)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error)
            })
        }
    }, [])

    // Observer para detectar quando a seção fica visível
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.3 }
        )

        const section = document.getElementById('about-section')
        if (section) {
            observer.observe(section)
        }

        return () => observer.disconnect()
    }, [])

    // Efeito de contagem quando a seção fica visível
    useEffect(() => {
        if (!isVisible) return

        // Configurações da animação
        const duration = 2000 // 2 segundos
        const steps = 60
        const interval = duration / steps

        // Animação para alunos
        let currentAlunos = 0
        const targetAlunos = 100
        const incrementAlunos = targetAlunos / steps

        const alunosTimer = setInterval(() => {
            currentAlunos += incrementAlunos
            if (currentAlunos >= targetAlunos) {
                setAlunosCount(targetAlunos)
                clearInterval(alunosTimer)
            } else {
                setAlunosCount(Math.floor(currentAlunos))
            }
        }, interval)

        // Animação para anos
        let currentAnos = 0
        const targetAnos = 5
        const incrementAnos = targetAnos / steps

        const anosTimer = setInterval(() => {
            currentAnos += incrementAnos
            if (currentAnos >= targetAnos) {
                setAnosCount(targetAnos)
                clearInterval(anosTimer)
            } else {
                setAnosCount(Math.floor(currentAnos))
            }
        }, interval)

        // Animação para experiências
        let currentExperiencias = 0
        const targetExperiencias = 15
        const incrementExperiencias = targetExperiencias / steps

        const experienciasTimer = setInterval(() => {
            currentExperiencias += incrementExperiencias
            if (currentExperiencias >= targetExperiencias) {
                setExperienciasCount(targetExperiencias)
                clearInterval(experienciasTimer)
            } else {
                setExperienciasCount(Math.floor(currentExperiencias))
            }
        }, interval)

        return () => {
            clearInterval(alunosTimer)
            clearInterval(anosTimer)
            clearInterval(experienciasTimer)
        }
    }, [isVisible])

    const features = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Conexão com a Natureza",
            description: "Experiências únicas no Lago Paranoá"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Aulas Coletivas",
            description: "Aprenda em grupo com energia positiva"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Todos os Níveis",
            description: "Do iniciante ao avançado"
        },
        {
            icon: <Play className="w-6 h-6" />,
            title: "Horários Flexíveis",
            description: "Manhã, tarde e experiências especiais"
        }
    ]

    return (
        <section id="about-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Vídeo de Fundo */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/bgfernanda3.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradiente para melhor contraste */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-cyan-800/50 backdrop-blur-[1px]"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Conteúdo Principal */}
                    <div className="space-y-8" data-aos="fade-right">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                <span className="text-white font-semibold text-sm">EU REMO SORRINDO</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                                Descubra a{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                                    Magia
                                </span>{' '}
                                de Remar
                            </h1>

                            <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl">
                                Uma jornada única onde esporte, natureza e bem-estar se encontram
                                nas águas do Lago Paranoá
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 group hover:scale-105"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="text-cyan-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-cyan-100 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://wa.me/5561998219177?text=${encodeURIComponent('Olá! Vi o site da Eu Remo Sorrindo e quero agendar minha aula experimental.')}`}
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center gap-3 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
                            >
                                <WhatsappLogo className="w-6 h-6" />
                                AGENDAR AULA EXPERIMENTAL
                                <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none"></div>
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://wa.me/5561998219177?text=${encodeURIComponent('Olá! Gostaria de conhecer as experiências especiais da Eu Remo Sorrindo.')}`}
                                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg"
                            >
                                <Users className="w-6 h-6" />
                                EXPERIÊNCIAS
                            </a>
                        </div>
                    </div>

                    {/* Card de História */}
                    <div
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
                        data-aos="fade-left"
                    >
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black text-white mb-3">
                                    Nossa <span className="text-cyan-300">História</span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
                            </div>

                            <div className="space-y-4 text-cyan-100 leading-relaxed">
                                <p className="text-lg">
                                    <strong className="text-white">"Eu Remo Sorrindo"</strong> nasceu do desejo profundo
                                    de compartilhar experiências enquanto educadora socioambiental.
                                </p>

                                <p>
                                    Celebrando o contato autêntico com a natureza, as pessoas e a água -
                                    nosso bem mais precioso.
                                </p>

                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                    <p className="text-white font-semibold italic text-center">
                                        "Como atleta de canoagem, professora, gestora e mãe, esta filosofia
                                        tornou-se muito mais que um slogan - é um estilo de vida que inspira
                                        <span className="text-cyan-300"> leveza e conexão genuína</span>"
                                    </p>
                                </div>

                                <p className="text-lg font-semibold text-white text-center pt-4">
                                    Nosso propósito é que mais pessoas experimentem a magia de{' '}
                                    <span className="text-cyan-300">REMAR SORRINDO!</span>
                                </p>
                            </div>

                            {/* Estatísticas com contagem animada */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-300 transition-all duration-300">
                                        {alunosCount}+
                                    </div>
                                    <div className="text-white text-sm">Alunos Felizes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-300 transition-all duration-300">
                                        {anosCount}
                                    </div>
                                    <div className="text-white text-sm">Anos de Experiência</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-300 transition-all duration-300">
                                        {experienciasCount}+
                                    </div>
                                    <div className="text-white text-sm">Experiências Únicas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elementos Flutuantes */}
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
        </section>
    )
}