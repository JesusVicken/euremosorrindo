'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, MapPin, Star, Target, Users, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP (Segurança para Server-Side Rendering)
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function CurriculoEsportivo() {
    const [activeImage, setActiveImage] = useState(0)

    // Estados para os contadores animados
    const [counterValues, setCounterValues] = useState({
        competitions: 0,
        medals: 0,
        countries: 0,
        experience: 0
    })

    // Refs para Scopo do GSAP
    const containerRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)

    // Observer para disparar a contagem numérica
    const { ref: counterRef, inView: counterInView } = useInView({
        threshold: 0, // Dispara assim que um pixel aparecer
        rootMargin: "-50px 0px", // Margem de segurança para mobile
        triggerOnce: true
    })

    // Lógica do Contador Numérico
    useEffect(() => {
        if (counterInView) {
            const duration = 2000
            const steps = 60
            const interval = duration / steps

            const targetValues = {
                competitions: 50,
                medals: 25,
                countries: 8,
                experience: 10
            }

            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                const progress = currentStep / steps
                // Easing function simples para suavizar o final
                const ease = (t: number) => 1 - Math.pow(1 - t, 3)
                const adjustedProgress = ease(progress)

                setCounterValues({
                    competitions: Math.floor(targetValues.competitions * adjustedProgress),
                    medals: Math.floor(targetValues.medals * adjustedProgress),
                    countries: Math.floor(targetValues.countries * adjustedProgress),
                    experience: Math.floor(targetValues.experience * adjustedProgress)
                })

                if (currentStep >= steps) {
                    clearInterval(timer)
                    setCounterValues(targetValues) // Garante valor final exato
                }
            }, interval)

            return () => clearInterval(timer)
        }
    }, [counterInView])

    // --- ANIMAÇÕES GSAP ROBUSTAS ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Parallax Hero
            if (heroRef.current) {
                gsap.to(".hero-bg", {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                })
            }

            // 2. Cards de Estatística (Fade Up)
            gsap.fromTo('.stat-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.stat-grid',
                        start: "top 85%"
                    }
                }
            )

            // 3. Cards de Conquista (Slide In)
            gsap.fromTo('.achievement-card',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.achievement-list',
                        start: "top 80%"
                    }
                }
            )

            // 4. Metodologia (Scale Up)
            gsap.fromTo('.training-card',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: '.training-grid',
                        start: "top 80%"
                    }
                }
            )

        }, containerRef) // Scopo para limpeza automática

        return () => ctx.revert()
    }, [])

    // --- DADOS ---
    const achievements = [
        {
            year: '2023',
            title: 'Campeonato Brasileiro de Canoagem Oceânica',
            result: 'Medalha de Ouro - Categoria Master',
            location: 'Rio de Janeiro, RJ',
            description: 'Primeiro lugar na categoria master feminina, demonstrando excelência técnica e resistência.'
        },
        {
            year: '2022',
            title: 'Copa do Mundo de Canoagem Maratona',
            result: 'Top 10 - Categoria Feminina',
            location: 'Portugal',
            description: 'Classificação entre as 10 melhores atletas do mundo na modalidade maratona.'
        },
        {
            year: '2021',
            title: 'Campeonato Sudeste de Canoagem Velocidade',
            result: 'Medalha de Prata - K1 500m',
            location: 'São Paulo, SP',
            description: 'Segundo lugar na prova de velocidade em distância olímpica.'
        },
        {
            year: '2020',
            title: 'Desafio Internacional de Surfski',
            result: 'Campeã Geral Feminina',
            location: 'Florianópolis, SC',
            description: 'Vitória geral no desafio que reuniu as melhores atletas da América do Sul.'
        },
        {
            year: '2019',
            title: 'Circuito Brasileiro de Canoagem',
            result: 'Tricampeã Nacional',
            location: 'Várias cidades',
            description: 'Conquista do tricampeonato nacional após três anos de domínio na categoria.'
        }
    ]

    const statistics = [
        { icon: Trophy, label: 'Competições', value: counterValues.competitions, suffix: '+', description: 'Nacionais e Internacionais' },
        { icon: Award, label: 'Medalhas', value: counterValues.medals, suffix: '+', description: 'Ouros, Pratas e Bronzes' },
        { icon: MapPin, label: 'Países', value: counterValues.countries, suffix: '', description: 'Competições pelo mundo' },
        { icon: Clock, label: 'Experiência', value: counterValues.experience, suffix: '+ anos', description: 'Alto rendimento' }
    ]

    const trainingData = [
        { area: 'Treinamento Físico', details: ['Preparação física específica', 'Condicionamento cardiovascular', 'Fortalecimento muscular', 'Mobilidade articular'] },
        { area: 'Técnica Especializada', details: ['Técnica de remada avançada', 'Navegação em águas abertas', 'Estratégia de competição', 'Leitura de maré e vento'] },
        { area: 'Preparação Mental', details: ['Foco e concentração', 'Gestão de ansiedade', 'Resiliência competitiva', 'Visualização de prova'] }
    ]

    const photos = [
        { src: '/fernanda2.jpg', alt: 'Pódio', caption: 'Cerimônia de Pódio - 2022', aspect: 'aspect-[3/4]' },
        { src: '/fernanda3.jpg', alt: 'Treino', caption: 'Treino de Velocidade - 2021', aspect: 'aspect-[4/3]' },
        { src: '/fernanda4.jpg', alt: 'Competição', caption: 'Competição Internacional - 2020', aspect: 'aspect-[16/9]' },
        { src: '/fernanda5.jpg', alt: 'Equipamentos', caption: 'Preparação Técnica - 2019', aspect: 'aspect-[3/2]' }
    ]

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-50">

            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 w-full h-[120%] -top-[10%] hero-bg">
                    <Image
                        src="/fernanda/fer7.jpg"
                        alt="Fernanda Rachid Hero"
                        fill
                        className="object-cover opacity-60"
                        style={{ objectPosition: '50% 30%' }}
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-black/30" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/logoescola.png"
                            alt="Logo Fernanda Rachid"
                            width={200}
                            height={200}
                            className="mx-auto w-32 md:w-48 h-auto drop-shadow-2xl mb-6 opacity-90 brightness-200 grayscale"
                        />
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                            Currículo Esportivo
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
                            Uma trajetória marcada por superação, técnica apurada e conquistas expressivas na canoagem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto -mt-20 relative z-20">

                {/* 1. ESTATÍSTICAS (Counter) */}
                <div ref={counterRef} className="stat-grid grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24">
                    {statistics.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <Card className="bg-white border-none shadow-xl h-full rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                                <CardContent className="p-6 text-center flex flex-col items-center h-full justify-center">
                                    <div className="p-3 bg-blue-50 rounded-full mb-3 text-blue-600">
                                        <stat.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-1">
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-2">
                                        {stat.label}
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        {stat.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* 2. CONQUISTAS (Esquerda) */}
                    <div className="lg:col-span-7 achievement-list space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                                <Trophy size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Conquistas Destacadas</h2>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((achievement) => (
                                <div key={achievement.year} className="achievement-card">
                                    <Card className="border border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-white rounded-xl">
                                        <CardContent className="p-5 md:p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                                                    {achievement.year}
                                                </Badge>
                                                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold uppercase tracking-wide">
                                                    <Star size={14} fill="currentColor" />
                                                    Destaque
                                                </div>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                                                {achievement.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                                                <div className="flex items-center gap-1 font-semibold text-blue-600">
                                                    <Award size={16} />
                                                    {achievement.result}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={16} />
                                                    {achievement.location}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. GALERIA (Direita/Sticky) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Momentos</h2>
                        </div>

                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            {/* Imagem Grande */}
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
                                <Image
                                    src={photos[activeImage].src}
                                    alt={photos[activeImage].alt}
                                    fill
                                    className="object-cover" // Mudado para cover para preencher melhor
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <p className="font-medium text-lg">{photos[activeImage].caption}</p>
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-2">
                                {photos.map((photo, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative aspect-square rounded-lg overflow-hidden transition-all ${activeImage === index
                                            ? 'ring-2 ring-blue-600 ring-offset-2 opacity-100'
                                            : 'opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={photo.src}
                                            alt="Thumbnail"
                                            fill
                                            className="object-cover"
                                            sizes="20vw"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. METODOLOGIA */}
                <div className="mt-20 lg:mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 inline-flex items-center gap-3">
                            <Users className="text-blue-600" />
                            Metodologia de Treinamento
                        </h2>
                    </div>

                    <div className="training-grid grid md:grid-cols-3 gap-6">
                        {trainingData.map((training) => (
                            <div key={training.area} className="training-card h-full">
                                <Card className="h-full bg-gradient-to-b from-white to-slate-50 border-slate-100 shadow-md hover:shadow-xl transition-all">
                                    <CardContent className="p-6 md:p-8">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4 pb-4 border-b border-slate-100 text-center">
                                            {training.area}
                                        </h3>
                                        <ul className="space-y-3">
                                            {training.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. CITAÇÃO FINAL */}
                <div className="mt-20 lg:mt-32 text-center">
                    <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                        <Trophy className="w-12 h-12 mx-auto mb-6 text-yellow-400 opacity-80" />

                        <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
                            "Cada remada é uma oportunidade de superação. A canoagem não é apenas um esporte,
                            é um estilo de vida que ensina resiliência, foco e paixão pelo que se faz."
                        </blockquote>

                        <div className="text-sm font-bold tracking-widest uppercase text-slate-400">
                            — Fernanda Rachid
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}