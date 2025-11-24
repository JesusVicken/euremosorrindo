'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Calendar, MapPin, Users, Trophy, Clock, Waves } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function FernandaPage() {
    const [activeTab, setActiveTab] = useState('sobre')
    const heroRef = useRef(null)
    const contentRef = useRef(null)
    const modalitiesRef = useRef(null)
    const logoRef = useRef(null)
    const titleRef = useRef(null)
    const badgeRef = useRef(null)
    const introTextRef = useRef(null)

    const { ref: heroInViewRef, inView: heroInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const { ref: contentInViewRef, inView: contentInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    // Combinar refs
    const setHeroRef = (node: HTMLDivElement) => {
        heroRef.current = node
        heroInViewRef(node)
    }

    const setContentRef = (node: HTMLDivElement) => {
        contentRef.current = node
        contentInViewRef(node)
    }

    // Animações GSAP avançadas
    useEffect(() => {
        // Animação do hero com parallax
        gsap.to(heroRef.current, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // Animação em cascata do conteúdo do hero
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })

        heroTl
            .fromTo(logoRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    x: -100,
                    rotation: -5
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "back.out(1.7)"
                }
            )
            .fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(introTextRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.3"
            )
            .fromTo(badgeRef.current,
                { opacity: 0, y: 30, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
                "-=0.2"
            )

        // Animação dos cards de dados com stagger
        gsap.fromTo('.data-item',
            {
                opacity: 0,
                x: -50,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: '.data-item',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação das modalidades com efeito cascata
        gsap.fromTo('.modality-card',
            {
                opacity: 0,
                y: 100,
                rotationY: 15,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.modality-card',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação dos cards de formação
        gsap.fromTo('.formation-card',
            {
                opacity: 0,
                y: 60,
                x: -30
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.7,
                stagger: 0.25,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.formation-card',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação dos destaques
        gsap.fromTo('.highlight-item',
            {
                opacity: 0,
                x: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: '.highlight-item',
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação de flutuação sutil para os cards
        gsap.to('.modality-card', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.3
        })

        // Animação de entrada das abas
        gsap.fromTo('.tab-content',
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.tab-content',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )

    }, [])

    const personalData = [
        { icon: Calendar, label: 'Data de Nascimento', value: '31/05/1982' },
        { icon: MapPin, label: 'Naturalidade', value: 'Cataguases – MG' },
        { icon: MapPin, label: 'Residência', value: 'Brasília – DF' },
        { icon: Users, label: 'Profissão', value: 'Professora, Pedagoga e Educadora Física' },
    ]

    const academicData = [
        { degree: 'Bacharel em Educação Física', institution: 'Faculdade Mauá de Brasília', year: '2019' },
        { degree: 'Mestre em Educação Ambiental e Ecologia Humana', institution: 'Universidade de Brasília – UnB', year: '2013' },
        { degree: 'Pedagogia', institution: 'Universidade de Brasília – UnB', year: '2004' },
    ]

    const modalities = [
        {
            id: 'oceanica',
            title: 'Canoagem Oceânica',
            icon: Waves,
            description: 'Modalidade recente na história da canoagem na qual o objetivo das provas é percorrer um percurso previamente definido em carta náutica, em águas marinhas, no menor tempo possível.',
            details: 'A embarcação utilizada é o Surfski, um tipo de caiaque desenvolvido especialmente para os mares.',
            image: '/oceanica.jpg',
            color: 'border-blue-200 hover:border-blue-400',
            accentColor: 'text-blue-600'
        },
        {
            id: 'velocidade',
            title: 'Canoagem Velocidade',
            icon: Trophy,
            description: 'Modalidade olímpica essencialmente de competição. É praticada em rios ou lagos de águas calmas com raias demarcadas nas distâncias de 1.000, 500 e 200 metros.',
            details: 'As embarcações utilizadas são K1, K2, K4 e C1 e C2, sendo que a letra k significa Kayak (caiaque) e o C de Canoe (canoa). Os numerais correspondem à quantidade de integrantes na embarcação.',
            image: '/velocidade.jpg',
            color: 'border-green-200 hover:border-green-400',
            accentColor: 'text-green-600'
        },
        {
            id: 'maratona',
            title: 'Canoagem Maratona',
            icon: Clock,
            description: 'Envolve remar grandes distâncias em águas calmas. Tradicionais eventos de Canoagem Maratona possuem postos fixados de portages, onde o atleta precisa carregar sua canoa ou kayak.',
            details: 'As embarcações utilizadas são K1, K2, C1 e C2.',
            image: '/maratona.jpg',
            color: 'border-orange-200 hover:border-orange-400',
            accentColor: 'text-orange-600'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            {/* Hero Section */}
            <section ref={setHeroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Imagem de fundo com sombreamento gradiente */}
                <div className="absolute inset-0">
                    <Image
                        src="/fernandaHero.jpg"
                        alt="Fernanda Rachid"
                        fill
                        style={{ objectFit: 'cover', objectPosition: '60% 50%' }}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                        className="transform-gpu"
                    />
                    {/* Overlays gradientes para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Logo no canto inferior esquerdo */}
                <motion.div
                    ref={logoRef}
                    className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-30"
                >
                    <Image
                        src="/logoescola.png"
                        alt="Fernanda Rachid"
                        width={120}
                        height={120}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-2xl rounded-xl bg-white/10 backdrop-blur-sm p-2 lg:p-3 border border-white/20"
                        priority
                        style={{
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4)'
                        }}
                    />
                </motion.div>

                {/* Conteúdo central */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto w-full"
                >
                    <motion.p
                        ref={titleRef}
                        className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 lg:mb-6 drop-shadow-2xl font-light tracking-wide"
                    >
                        Atleta • Educadora
                    </motion.p>

                    {/* Texto introdutório sobre a Fernanda */}
                    <motion.div
                        ref={introTextRef}
                        className="mb-6 lg:mb-8 max-w-2xl mx-auto"
                    >
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg">
                            Fernanda Rachid é uma atleta multifacetada, educadora física e pedagoga com
                            <span className="font-semibold text-white"> mestrado em Educação Ambiental</span>.
                            Natural de Cataguases-MG e radicada em Brasília-DF, combina sua paixão pelo esporte
                            com uma sólida formação acadêmica, destacando-se nas modalidades de
                            <span className="font-semibold text-white"> canoagem oceânica, velocidade e maratona</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={badgeRef}
                    >
                        <Badge
                            variant="secondary"
                            className="text-base md:text-lg px-6 py-3 lg:px-8 lg:py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-medium rounded-2xl shadow-2xl hover:bg-white/30 transition-all duration-300"
                        >
                            CREF – 015625-G/DF
                        </Badge>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20">
                    <motion.div
                        animate={{
                            y: [0, 10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section ref={setContentRef} className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12 lg:space-y-16">
                        <TabsList className="grid w-full grid-cols-3 p-1 bg-slate-100/80 backdrop-blur-sm border border-gray-200 rounded-2xl max-w-md mx-auto shadow-lg">
                            <TabsTrigger
                                value="sobre"
                                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium"
                            >
                                Sobre
                            </TabsTrigger>
                            <TabsTrigger
                                value="formacao"
                                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium"
                            >
                                Formação
                            </TabsTrigger>
                            <TabsTrigger
                                value="modalidades"
                                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium"
                            >
                                Modalidades
                            </TabsTrigger>
                        </TabsList>

                        {/* Sobre Tab */}
                        <TabsContent value="sobre" className="tab-content space-y-8 lg:space-y-12">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                {/* Dados Pessoais */}
                                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                                    <CardContent className="p-6 lg:p-8">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                            <Users className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                                            Dados Pessoais
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="text-center mb-6">
                                                <h4 className="text-xl lg:text-2xl font-semibold text-gray-700 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                                    Fernanda Rachid Machado
                                                </h4>
                                            </div>
                                            {personalData.map((item, index) => (
                                                <div
                                                    key={item.label}
                                                    className="data-item flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition-all duration-300 hover:scale-[1.02] border border-gray-100 shadow-sm"
                                                >
                                                    <div className="p-2 bg-blue-100 rounded-xl shadow-sm">
                                                        <item.icon className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-gray-700 text-sm lg:text-base">{item.label}</p>
                                                        <p className="text-gray-600 text-sm lg:text-base">{item.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Destaques */}
                                <div className="space-y-6 lg:space-y-8">
                                    <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                                        <CardContent className="p-6 lg:p-8">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                                <Award className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                                                Destaques
                                            </h3>
                                            <ul className="space-y-4">
                                                {[
                                                    { text: 'Mestre em Educação Ambiental', color: 'blue' },
                                                    { text: 'Multi-esportista', color: 'green' },
                                                    { text: 'Educadora Física', color: 'purple' },
                                                    { text: 'Pedagoga', color: 'orange' }
                                                ].map((item, index) => (
                                                    <li
                                                        key={item.text}
                                                        className="highlight-item flex items-center gap-4 p-3 lg:p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                                                        style={{
                                                            backgroundColor: `var(--${item.color}-50)`,
                                                            borderColor: `var(--${item.color}-100)`
                                                        }}
                                                    >
                                                        <div
                                                            className="w-3 h-3 rounded-full shadow-sm"
                                                            style={{
                                                                backgroundColor: `var(--${item.color}-500)`
                                                            }}
                                                        />
                                                        <span className="text-gray-700 font-medium text-sm lg:text-base">{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* CREF Badge */}
                                    <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                                        <CardContent className="p-6 text-center">
                                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 lg:p-8 rounded-2xl shadow-2xl">
                                                <Trophy className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 lg:mb-4" />
                                                <h4 className="font-bold text-xl lg:text-2xl mb-2 lg:mb-3">CREF Registrado</h4>
                                                <p className="text-blue-100 text-lg lg:text-xl font-mono">015625-G/DF</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Formação Tab */}
                        <TabsContent value="formacao" className="tab-content space-y-8 lg:space-y-12">
                            <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                                <CardContent className="p-6 lg:p-8">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                        <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                                        Formação Acadêmica
                                    </h3>
                                    <div className="space-y-6">
                                        {academicData.map((item, index) => (
                                            <div
                                                key={item.degree}
                                                className="formation-card p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group backdrop-blur-sm"
                                            >
                                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
                                                    <h4 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                                                        {item.degree}
                                                    </h4>
                                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-sm lg:text-base w-fit">
                                                        {item.year}
                                                    </Badge>
                                                </div>
                                                <p className="text-gray-600 text-sm lg:text-base">{item.institution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Modalidades Tab */}
                        <TabsContent value="modalidades" className="tab-content space-y-12 lg:space-y-16">
                            <div className="text-center mb-12 lg:mb-16">
                                <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Modalidades Disputadas
                                </h2>
                                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    Conheça as modalidades de canoagem que a Fernanda compete e domina com excelência
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" ref={modalitiesRef}>
                                {modalities.map((modality, index) => (
                                    <div
                                        key={modality.id}
                                        className="modality-card group"
                                    >
                                        <Card className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 shadow-2xl rounded-3xl overflow-hidden h-full transform transition-all duration-500 hover:shadow-3xl hover:border-gray-300">
                                            <div className="relative h-64 lg:h-72 overflow-hidden">
                                                <Image
                                                    src={modality.image}
                                                    alt={modality.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                                    <div className="flex items-center gap-3 text-white">
                                                        <div className="p-3 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg">
                                                            <modality.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                                                        </div>
                                                        <h3 className="text-xl lg:text-2xl font-bold drop-shadow-2xl">{modality.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardContent className="p-6 lg:p-7">
                                                <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
                                                    {modality.description}
                                                </p>
                                                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6">
                                                    {modality.details}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <Badge
                                                        variant="outline"
                                                        className={`${modality.accentColor} border-current bg-transparent hover:bg-current hover:text-white transition-all duration-300 cursor-pointer text-xs lg:text-sm`}
                                                    >
                                                        Saiba mais
                                                    </Badge>
                                                    <div className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full shadow-sm ${modality.accentColor.replace('text', 'bg')}`} />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </section>
        </div>
    )
}