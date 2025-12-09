
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, MapPin, Users, Trophy, Clock, Waves, Sparkles, Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP apenas no lado do cliente
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function FernandaPage() {
    const [activeTab, setActiveTab] = useState('sobre')

    // Refs
    const heroRef = useRef<HTMLDivElement>(null)
    const profileHeaderRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const modalitiesRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)

    // Observers
    const { ref: heroInViewRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
    const { ref: contentInViewRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true })

    // Setters de Refs combinados
    const setHeroRef = (node: HTMLDivElement | null) => {
        heroRef.current = node
        heroInViewRef(node)
    }

    const setContentRef = (node: HTMLDivElement | null) => {
        contentRef.current = node
        contentInViewRef(node)
    }

    // --- ANIMAÇÕES GSAP ---
    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Parallax do Hero
            if (heroRef.current) {
                gsap.to(".hero-bg-image", {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                })
            }

            // 2. Animação da Seção de Intro
            if (profileHeaderRef.current) {
                const introTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: profileHeaderRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                })

                introTl
                    .fromTo(".intro-title",
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                    )
                    .fromTo(".intro-text",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6"
                    )
                    .fromTo(".intro-badge",
                        { scale: 0.8, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4"
                    )
            }

            // 3. Logo
            gsap.fromTo(logoRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
            )

        })

        return () => ctx.revert()
    }, [])

    const personalData = [
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
        <div className="min-h-screen bg-slate-50">

            {/* --- HERO SECTION --- */}
            <section ref={setHeroRef} className="relative h-[85vh] lg:h-[95vh] w-full overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="hero-bg-image relative w-full h-[120%] -top-[10%]">
                        <Image
                            src="/fernandaHero.jpg"
                            alt="Fernanda Rachid Remando"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-90" />
                </div>

                <div ref={logoRef} className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 z-20 opacity-0">
                    <Image
                        src="/logoescola.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-8 z-20 text-slate-400 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest font-medium">Conheça a Atleta</span>
                    <div className="w-[1px] h-8 bg-slate-400/50"></div>
                </motion.div>
            </section>

            {/* --- INTRO SECTION --- */}
            <section ref={profileHeaderRef} className="relative z-20 -mt-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-2xl p-8 md:p-12 text-center transform transition-all">

                        <div className="intro-title">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-2 tracking-tight">
                                Fernanda Rachid
                            </h1>
                            <div className="flex items-center justify-center gap-3 text-blue-600 mb-6">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-lg md:text-xl font-medium tracking-wide uppercase">Atleta • Educadora</span>
                                <Sparkles className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="intro-text max-w-3xl mx-auto mb-8">
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                <Quote className="inline-block w-4 h-4 text-blue-300 mb-2 rotate-180 mr-2" />
                                Uma atleta multifacetada, educadora física e pedagoga com
                                <span className="font-semibold text-blue-600"> mestrado em Educação Ambiental</span>.
                                Natural de Cataguases-MG e radicada em Brasília-DF, combina sua paixão pelo esporte
                                com uma sólida formação acadêmica.
                                <Quote className="inline-block w-4 h-4 text-blue-300 mb-2 ml-2" />
                            </p>
                        </div>

                        <div className="intro-badge">
                            <Badge className="px-6 py-2 bg-slate-900 text-white hover:bg-blue-600 transition-colors text-sm md:text-base rounded-full shadow-lg">
                                CREF – 015625-G/DF
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CONTENT TABS --- */}
            <section ref={setContentRef} className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">

                        <div className="flex justify-center">
                            <TabsList className="grid grid-cols-3 w-full max-w-md p-1 bg-slate-200/50 rounded-full">
                                {['sobre', 'formacao', 'modalidades'].map((tab) => (
                                    <TabsTrigger
                                        key={tab}
                                        value={tab}
                                        className="rounded-full capitalize data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 transition-all"
                                    >
                                        {tab === 'formacao' ? 'Formação' : tab}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <TabsContent value="sobre" className="space-y-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                                    <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Users size={24} /></div>
                                            Dados Pessoais
                                        </h3>
                                        <div className="space-y-4">
                                            {personalData.map((item) => (
                                                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                                                    <item.icon className="w-5 h-5 text-blue-500 mt-1" />
                                                    <div>
                                                        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{item.label}</p>
                                                        <p className="text-slate-700 font-medium">{item.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                                    <div className="h-2 w-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                            <div className="p-2 bg-green-50 rounded-lg text-green-600"><Award size={24} /></div>
                                            Destaques Profissionais
                                        </h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { text: 'Mestre em Educação Ambiental', bg: 'bg-blue-50', textCol: 'text-blue-700' },
                                                { text: 'Multi-esportista', bg: 'bg-orange-50', textCol: 'text-orange-700' },
                                                { text: 'Educadora Física', bg: 'bg-purple-50', textCol: 'text-purple-700' },
                                                { text: 'Pedagoga', bg: 'bg-pink-50', textCol: 'text-pink-700' }
                                            ].map((item) => (
                                                <div key={item.text} className={`p-4 rounded-xl ${item.bg} border border-transparent hover:border-current transition-all flex items-center gap-3`}>
                                                    <div className={`w-2 h-2 rounded-full ${item.textCol.replace('text', 'bg')}`}></div>
                                                    <span className={`font-semibold ${item.textCol}`}>{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="formacao">
                            <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                                <CardContent className="p-8 md:p-12">
                                    <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">Jornada Acadêmica</h3>
                                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                        {academicData.map((item, index) => (
                                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-hover:bg-blue-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                    <GraduationCap className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all">
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                                        <h4 className="font-bold text-slate-800 text-lg">{item.degree}</h4>
                                                        <Badge variant="outline" className="text-blue-600 border-blue-200">{item.year}</Badge>
                                                    </div>
                                                    <p className="text-slate-500">{item.institution}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* --- ABA MODALIDADES (COM EFEITO SCANNER) --- */}
                        <TabsContent value="modalidades">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={modalitiesRef}>
                                {modalities.map((modality) => (
                                    <div key={modality.id} className="modality-card group h-full">
                                        <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white">

                                            {/* Container da Imagem com Efeitos */}
                                            <div className="relative h-64 overflow-hidden">
                                                <Image
                                                    src={modality.image}
                                                    alt={modality.title}
                                                    fill
                                                    // Efeito de Pan & Zoom lento no hover
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-2"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                                {/* Efeito de Scanner (Feixe de Luz) */}
                                                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                                                    <div className="w-full h-[50%] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-[250%] transition-transform duration-[1.5s] ease-in-out" />
                                                </div>

                                                <div className="absolute bottom-5 left-5 text-white z-30">
                                                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg w-fit mb-3">
                                                        <modality.icon size={24} />
                                                    </div>
                                                    <h3 className="text-xl font-bold">{modality.title}</h3>
                                                </div>
                                            </div>

                                            <CardContent className="p-6">
                                                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                                    {modality.description}
                                                </p>
                                                <div className="pt-4 border-t border-slate-100">
                                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Detalhes</p>
                                                    <p className="text-slate-500 text-sm">{modality.details}</p>
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