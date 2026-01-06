'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, MapPin, Star, Target, Users, Clock, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP
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

    const containerRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)

    const { ref: counterRef, inView: counterInView } = useInView({
        threshold: 0,
        rootMargin: "-50px 0px",
        triggerOnce: true
    })

    // Lógica do Contador Numérico (Baseado nos dados reais)
    useEffect(() => {
        if (counterInView) {
            const duration = 2000
            const steps = 60
            const interval = duration / steps

            // DADOS REAIS EXTRAÍDOS DO DOC:
            // Exp: 2009 a 2024 = 15 anos
            // Países: Portugal, Argentina, Uruguai, França, Alemanha, EUA(Havaí) = 6
            // Medalhas/Títulos: Estimativa baseada no doc (Tricampeã, Vários Ouros, Pratas)
            const targetValues = {
                competitions: 80,
                medals: 45,
                countries: 6,
                experience: 15
            }

            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                const progress = currentStep / steps
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
                    setCounterValues(targetValues)
                }
            }, interval)

            return () => clearInterval(timer)
        }
    }, [counterInView])

    // --- ANIMAÇÕES GSAP ---
    useEffect(() => {
        const ctx = gsap.context(() => {
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

        }, containerRef)

        return () => ctx.revert()
    }, [])

    // --- DADOS REAIS DO ARQUIVO DOCX ---
    const achievements = [
        {
            year: '2024',
            title: 'Mundial de Va’a Velocidade',
            result: 'Seleção Brasileira de Va’a',
            location: 'Havaí, EUA',
            description: 'Convocação para a Seleção Brasileira. Participação no campeonato mundial com a equipe Junior 19.'
        },
        {
            year: '2023',
            title: 'Mundial de Paracanoagem',
            result: 'Seleção Brasileira (Equipe Técnica)',
            location: 'Alemanha',
            description: 'Convocação para compor a equipe técnica da seleção brasileira no Mundial de Paracanoagem.'
        },
        {
            year: '2019',
            title: 'Campeonato Sul-Americano',
            result: 'Campeã (K1 e K2)',
            location: 'Argentina',
            description: 'Campeã Sul-Americana de canoagem velocidade. Também participou do Mundial Oceânico na França no mesmo ano.'
        },
        {
            year: '2018',
            title: 'Sul-Americano de Oceânica',
            result: 'Campeã Geral',
            location: 'Uruguai',
            description: 'Título internacional expressivo. No mesmo ano, venceu o Prêmio Brasília de Esporte.'
        },
        {
            year: '2017',
            title: 'Campeonato Brasileiro de Velocidade',
            result: 'Campeã (200m, 500m, 5000m)',
            location: 'Brasil',
            description: 'Domínio nacional na categoria Master, vencendo em três distâncias diferentes.'
        },
        {
            year: '2016',
            title: 'Estreia no Alto Rendimento',
            result: 'Campeã Brasiliense',
            location: 'Brasília, DF',
            description: 'Campeã estadual nas modalidades Velocidade e Maratona (Open Feminino).'
        }
    ]

    const statistics = [
        { icon: Trophy, label: 'Títulos', value: counterValues.medals, suffix: '+', description: 'Nacionais e Internacionais' },
        { icon: Globe, label: 'Países', value: counterValues.countries, suffix: '', description: 'Competições pelo mundo' },
        { icon: Clock, label: 'Experiência', value: counterValues.experience, suffix: '+ anos', description: 'Desde 2009' },
        { icon: Star, label: 'Seleção', value: 2, suffix: '', description: 'Convocações Oficiais' }
    ]

    const trainingData = [
        {
            area: 'Alta Performance',
            details: ['Técnica de remada avançada (K1, V1, Surfski)', 'Estratégia de competição internacional', 'Leitura de maré e ventos oceânicos', 'Periodização de treino']
        },
        {
            area: 'Formação Acadêmica',
            details: ['Mestre em Educação Ambiental (UnB)', 'Bacharel em Educação Física', 'Pedagoga', 'Registro CREF 015625-G/DF']
        },
        {
            area: 'Inclusão e Paracanoagem',
            details: ['Metodologia adaptada para PCDs', 'Equipe técnica da Seleção Brasileira', 'Projetos sociais (Remando Juntos)', 'Desenvolvimento motor e cognitivo']
        }
    ]

    // Fotos mantidas (assumindo que são ilustrativas da atleta)
    const photos = [
        { src: '/fernanda2.jpg', alt: 'Pódio', caption: 'Premiações Nacionais', aspect: 'aspect-[3/4]' },
        { src: '/fernanda3.jpg', alt: 'Treino', caption: 'Foco e Técnica', aspect: 'aspect-[4/3]' },
        { src: '/fernanda4.jpg', alt: 'Competição', caption: 'Competições Internacionais', aspect: 'aspect-[16/9]' },
        { src: '/fernanda5.jpg', alt: 'Equipamentos', caption: 'Equipamentos de Ponta', aspect: 'aspect-[3/2]' }
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
                        style={{ objectPosition: '50% 15%' }} // Foco no rosto
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-black/40" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Logo com Hover Colorido */}
                        <div className="group cursor-pointer mb-6 transition-transform hover:scale-105 duration-500">
                            <Image
                                src="/logoescola.png"
                                alt="Logo Fernanda Rachid"
                                width={200}
                                height={200}
                                className="mx-auto w-32 md:w-48 h-auto drop-shadow-2xl opacity-90 brightness-200 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
                            />
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                            Fernanda Rachid
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Atleta da Seleção Brasileira de Va'a e Equipe Técnica de Paracanoagem. <br className="hidden md:block" />
                            Mestre em Educação Ambiental e Fundadora da Escola de Canoagem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto -mt-20 relative z-20">

                {/* 1. ESTATÍSTICAS */}
                <div ref={counterRef} className="stat-grid grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24">
                    {statistics.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <Card className="bg-white border-none shadow-xl h-full rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                                <CardContent className="p-6 text-center flex flex-col items-center h-full justify-center">
                                    <div className="p-3 bg-blue-50 rounded-full mb-3 text-blue-600">
                                        <stat.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-1">
                                        {stat.label === 'Seleção' ? stat.value : `${stat.value}${stat.suffix}`}
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

                    {/* 2. CONQUISTAS (Timeline) */}
                    <div className="lg:col-span-7 achievement-list space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                                <Trophy size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Principais Títulos & Convocações</h2>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((achievement) => (
                                <div key={achievement.year} className="achievement-card">
                                    <Card className="border border-slate-100 shadow-md hover:shadow-lg transition-shadow bg-white rounded-xl">
                                        <CardContent className="p-5 md:p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white w-fit text-sm px-3 py-1">
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

                    {/* 3. GALERIA (Sticky) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Momentos Marcantes</h2>
                        </div>

                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            {/* Imagem Grande */}
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
                                <Image
                                    src={photos[activeImage].src}
                                    alt={photos[activeImage].alt}
                                    fill
                                    className="object-cover"
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

                {/* 4. METODOLOGIA & FORMAÇÃO */}
                <div className="mt-20 lg:mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 inline-flex items-center gap-3">
                            <Users className="text-blue-600" />
                            Expertise & Formação
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

                
                <div className="mt-20 lg:mt-32 text-center">
                    <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                        <Trophy className="w-12 h-12 mx-auto mb-6 text-yellow-400 opacity-80" />

                        <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
                            "A canoagem não é apenas um esporte, é um estilo de vida que ensina resiliência, foco e paixão pelo que se faz."
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