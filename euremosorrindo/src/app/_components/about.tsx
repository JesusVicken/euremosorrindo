'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { WhatsappLogo, Play, Users, Leaf, Target } from "@phosphor-icons/react/dist/ssr"

// Import da Logo
import logo from "../../../public/logoeuremo.jpg"

export function About() {
    const [isVisible, setIsVisible] = useState(false)
    const [alunosCount, setAlunosCount] = useState(0)
    const [anosCount, setAnosCount] = useState(0)
    const [experienciasCount, setExperienciasCount] = useState(0)

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

    useEffect(() => {
        if (!isVisible) return

        const duration = 2000
        const steps = 60
        const interval = duration / steps

        const targetAlunos = 100
        const targetAnos = 5
        const targetExperiencias = 15

        let currentAlunos = 0
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

        let currentAnos = 0
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

        let currentExperiencias = 0
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

            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bgfernanda2.webp"
                    alt="Fernanda Rachid Remando"
                    fill
                    quality={95}
                    priority
                    className="object-cover"
                />
                {/* Overlay um pouco mais escuro para ajudar no contraste geral */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Conteúdo da Esquerda */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="space-y-6">
                            <div className="flex flex-col items-start gap-4">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                                    <Image
                                        src={logo}
                                        alt="Logo Eu Remo Sorrindo"
                                        width={100}
                                        height={100}
                                        className="object-contain rounded-xl"
                                    />
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                                    Eu Remo{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                                        Sorrindo
                                    </span>
                                </h1>
                            </div>

                            <p className="text-xl text-white leading-relaxed max-w-2xl font-medium drop-shadow-md">
                                Uma jornada única onde esporte, natureza e bem-estar se encontram
                                nas águas do Lago Paranoá.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    // Aumentei o contraste dos cards de feature também
                                    className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-black/60 transition-all duration-300 group hover:scale-105 shadow-lg"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="text-cyan-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-gray-200 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://wa.me/556191041213?text=${encodeURIComponent('Olá! Vi o site da Eu Remo Sorrindo e quero agendar minha aula experimental.')}`}
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center gap-3 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
                            >
                                <WhatsappLogo className="w-6 h-6" />
                                AGENDAR AULA
                                <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none"></div>
                            </a>

                            <Link
                                href="/remadas"
                                className="bg-black/40 backdrop-blur-sm border border-white/30 text-white hover:bg-black/60 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg"
                            >
                                <Users className="w-6 h-6" />
                                BORA REMAR
                            </Link>
                        </div>
                    </div>

                    {/* --- CARD DE HISTÓRIA (CORRIGIDO PARA LEGIBILIDADE) --- */}
                    <div
                        // Mudei de bg-white/10 para bg-slate-900/85 (Fundo escuro sólido com leve transparência)
                        className="bg-slate-900/85 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
                        data-aos="fade-left"
                    >
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black text-white mb-3">
                                    Nossa <span className="text-cyan-400">História</span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
                            </div>

                            <div className="space-y-4 text-gray-200 leading-relaxed">
                                <p className="text-lg">
                                    <strong className="text-white">"Eu Remo Sorrindo"</strong> nasceu do desejo profundo
                                    de compartilhar experiências enquanto educadora socioambiental.
                                </p>

                                <p>
                                    Celebrando o contato autêntico com a natureza, as pessoas e a água -
                                    nosso bem mais precioso.
                                </p>

                                {/* Citação com fundo um pouco mais claro que o card principal */}
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                    <p className="text-gray-100 font-medium italic text-center">
                                        "Como atleta de canoagem, professora, gestora e mãe, esta filosofia
                                        tornou-se muito mais que um slogan - é um estilo de vida que inspira
                                        <span className="text-cyan-300 font-bold"> leveza e conexão genuína</span>"
                                    </p>
                                </div>

                                <p className="text-lg font-semibold text-white text-center pt-4">
                                    Nosso propósito é que mais pessoas experimentem a magia de{' '}
                                    <span className="text-cyan-400">REMAR SORRINDO!</span>
                                </p>
                            </div>

                            {/* Estatísticas */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-400 transition-all duration-300">
                                        {alunosCount}+
                                    </div>
                                    <div className="text-gray-300 text-sm">Alunos Felizes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-400 transition-all duration-300">
                                        {anosCount}
                                    </div>
                                    <div className="text-gray-300 text-sm">Anos de Experiência</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-cyan-400 transition-all duration-300">
                                        {experienciasCount}+
                                    </div>
                                    <div className="text-gray-300 text-sm">Experiências Únicas</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Elementos Flutuantes */}
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl mix-blend-screen"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl mix-blend-screen"></div>
            </div>
        </section>
    )
}