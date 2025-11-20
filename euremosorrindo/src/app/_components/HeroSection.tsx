'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    const carouselItems = [
        // {
        //     subtitle: 'EU REMO SORRINDO',
        //     title: 'ESCOLA',
        //     highlight: 'FERNANDA RACHID',
        // },
        {
            subtitle: 'ESCOLA DE CANOAGEM E VA\'A',
            title: 'EU REMO',
            highlight: 'SORRINDO',
        },
        {
            subtitle: 'ESPORTE • EDUCAÇÃO • SAÚDE • LAZER',
            title: 'CONEXÃO',
            highlight: 'COMPLETA',
        },
        {
            subtitle: 'AULAS REGULARES',
            title: 'TERÇA A',
            highlight: 'SÁBADO',
        },
        {
            subtitle: 'ALUGUEL DE EQUIPAMENTOS',
            title: 'FINAIS DE',
            highlight: 'SEMANA',
        },
        {
            subtitle: 'ECOTURISMO ATIVO',
            title: 'EXPLORE O',
            highlight: 'LAGO PARANOÁ',
        },
        {
            subtitle: 'EXPERIÊNCIAS ESPECIAIS',
            title: 'LUA CHEIA &',
            highlight: 'TRILHAS',
        },
        {
            subtitle: 'AULAS ESPECIAIS',
            title: 'CRIANÇAS &',
            highlight: 'ADOLESCENTES',
        },
        {
            subtitle: 'EXPERIÊNCIAS PERSONALIZADAS',
            title: 'GRUPOS &',
            highlight: 'EMPRESAS',
        }
    ]

    // Rotação mais rápida - 2 segundos para mais dinamismo
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % carouselItems.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [carouselItems.length])

    // Garantir que o vídeo esteja tocando
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error)
            })
        }
    }, [])

    // Indicadores de progresso
    const ProgressDots = () => (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselItems.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                            ? 'bg-white w-6 scale-110'
                            : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                        }`}
                />
            ))}
        </div>
    )

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Vídeo de fundo */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 object-cover object-center w-full h-full -z-10"
            >
                <source src="/bgfernanda2.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Overlay gradiente moderno */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/10 -z-10" />

            {/* Carrossel de textos com animação melhorada */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 w-full max-w-6xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.95
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                y: -30,
                                scale: 1.05
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div className="banner-section-content">
                                <div className="banner-section-wrapper">
                                    {/* Subtítulo */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 tracking-wider uppercase drop-shadow-lg"
                                    >
                                        {carouselItems[activeIndex].subtitle}
                                    </motion.h3>

                                    {/* Título principal com destaque */}
                                    <div className="mb-6">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                                            {carouselItems[activeIndex].title}{' '}
                                            <motion.span
                                                initial={{
                                                    backgroundSize: '0% 100%',
                                                    opacity: 0.8
                                                }}
                                                animate={{
                                                    backgroundSize: '100% 100%',
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    delay: 0.2,
                                                    duration: 0.6,
                                                    ease: "easeOut"
                                                }}
                                                className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-no-repeat bg-left-bottom bg-[length:100%_40%] text-transparent bg-clip-text"
                                            >
                                                {carouselItems[activeIndex].highlight}
                                            </motion.span>
                                        </h1>
                                    </div>

                                    {/* Linha divisória animada */}
                                    <motion.figure
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: '120px', opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.4 }}
                                        className="white_line mb-0 mx-auto overflow-hidden"
                                    >
                                        <div className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent w-full" />
                                    </motion.figure>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Indicadores de progresso */}
            <ProgressDots />

            
        </section>
    )
}