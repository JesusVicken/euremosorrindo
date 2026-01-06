'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, MapPin, Users, Trophy, Clock, Waves, Sparkles, Quote, X, ZoomIn } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP apenas no lado do cliente
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// --- ARRAY DE FOTOS DA FERNANDA (ATUALIZADO) ---
const fernandaPhotos = [
    { src: '/fernanda/fer1.jpg', alt: 'Fernanda Momento 1', span: 'col-span-1 row-span-1' },
    { src: '/fernanda/fer2.jpg', alt: 'Fernanda Momento 2', span: 'col-span-1 row-span-2' }, // Vertical
    { src: '/fernanda/fer3.jpg', alt: 'Fernanda Momento 3', span: 'col-span-1 row-span-1' },
    { src: '/fernanda/fer4.jpg', alt: 'Fernanda Momento 4', span: 'col-span-2 row-span-2' }, // Destaque Grande
    { src: '/fernanda/fer5.jpg', alt: 'Fernanda Momento 5', span: 'col-span-1 row-span-1' },
    { src: '/fernanda/fer6.jpg', alt: 'Fernanda Momento 6', span: 'col-span-1 row-span-1' },
    { src: '/fernanda/fer7.jpg', alt: 'Fernanda Momento 7', span: 'col-span-2 row-span-1' }, // Horizontal
    { src: '/fernanda/fer8.jpg', alt: 'Fernanda Momento 8', span: 'col-span-1 row-span-1' }, // NOVO
    { src: '/fernanda/fer9.jpg', alt: 'Fernanda Momento 9', span: 'col-span-1 row-span-1' }, // NOVO
]

export default function FernandaPage() {
    const [activeTab, setActiveTab] = useState('sobre')
    const [selectedImage, setSelectedImage] = useState<string | null>(null) // Para o Modal

    // Refs
    const heroRef = useRef<HTMLDivElement>(null)
    const profileHeaderRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
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
                    .fromTo(".intro-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                    .fromTo(".intro-text", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
                    .fromTo(".intro-badge", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
            }

            // 3. Logo
            gsap.fromTo(logoRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.5 })
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
            icon: Waves, // O ícone ainda existe no objeto, mas não será renderizado
            description: 'Modalidade desafiadora em águas marinhas, exigindo navegação precisa e resistência.',
            details: 'Utiliza-se o Surfski, caiaque rápido e estável projetado para surfar ondas em mar aberto.',
            image: '/oceanica.jpg',
            tag: 'Aventura',
            accent: 'bg-blue-50 text-blue-600'
        },
        {
            id: 'velocidade',
            title: 'Canoagem Velocidade',
            icon: Trophy,
            description: 'A mais pura explosão e técnica olímpica em águas calmas. Foco total em performance.',
            details: 'Disputada em K1, K2, K4, C1 e C2 nas distâncias de 200m, 500m e 1000m.',
            image: '/velocidade.jpg',
            tag: 'Olímpica',
            accent: 'bg-yellow-50 text-yellow-600'
        },
        {
            id: 'maratona',
            title: 'Canoagem Maratona',
            icon: Clock,
            description: 'Resistência extrema em longas distâncias, combinando remo e "portage" (corrida com o barco).',
            details: 'Provas longas que testam o limite físico e mental do atleta em rios e lagos.',
            image: '/maratona.jpg',
            tag: 'Resistência',
            accent: 'bg-red-50 text-red-600'
        },
        {
            id: 'canoa',
            title: 'Canoa Havaiana (Va\'a)',
            icon: Users,
            description: 'Conexão ancestral com o mar e trabalho em equipe. Sincronia e força coletiva.',
            details: 'Praticada em canoas V1, V6 e outras configurações, focando na cultura e no espírito de equipe.',
            image: '/fernandavaa.jpg',
            tag: 'Tradição',
            accent: 'bg-teal-50 text-teal-600'
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            {/* --- MODAL DE IMAGEM --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Fernanda Rachid Ampliada"
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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

                        {/* MENU DE ABAS REFATORADO PARA RESPONSIVIDADE E ESPAÇO */}
                        <div className="flex justify-center w-full px-4">
                            <TabsList className="flex w-full max-w-3xl h-auto p-1 bg-slate-200/50 rounded-full">
                                {['sobre', 'formacao', 'atleta'].map((tab) => (
                                    <TabsTrigger
                                        key={tab}
                                        value={tab}
                                        className="flex-1 rounded-full capitalize data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 transition-all py-2 md:py-3 px-2 text-xs md:text-sm whitespace-normal md:whitespace-nowrap leading-tight"
                                    >
                                        {/* Lógica para exibir os nomes corretos */}
                                        {tab === 'formacao' ? 'Jornada Acadêmica e Profissional' : tab}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* --- ABA SOBRE (COM GALERIA) --- */}
                        <TabsContent value="sobre" className="space-y-12">
                            {/* Cards de Informação */}
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

                            {/* --- GALERIA DE FOTOS (CORRIGIDA) --- */}
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-slate-800">Momentos & Conquistas</h3>
                                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                                    {fernandaPhotos.map((photo, index) => {
                                        // Verifica se a imagem ocupa 2 colunas para ajustar o sizes
                                        const isLargeSpan = photo.span.includes('col-span-2');

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer ${photo.span}`}
                                                onClick={() => setSelectedImage(photo.src)}
                                            >
                                                <Image
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    // AJUSTE AQUI: Sizes dinâmico baseado no tamanho do span no grid
                                                    sizes={
                                                        isLargeSpan
                                                            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Item grande
                                                            : "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"   // Item pequeno
                                                    }
                                                    priority={index < 4}
                                                />
                                                {/* Overlay no Hover */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                                        <ZoomIn size={24} />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </TabsContent>

                        {/* --- ABA FORMAÇÃO --- */}
                        <TabsContent value="formacao">
                            <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                                <CardContent className="p-8 md:p-12">
                                    <h3 className="text-3xl font-bold text-slate-800 mb-10 text-center">Jornada Acadêmica e Profissional</h3>
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

                        {/* --- ABA ATLETA --- */}
                        <TabsContent value="atleta">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Multifacetada nas Águas</h2>
                                <p className="text-slate-500 max-w-2xl mx-auto">
                                    A trajetória de Fernanda Rachid no esporte é marcada pela diversidade e excelência em diversas modalidades de canoagem.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                {modalities.map((modality) => (
                                    <motion.div
                                        key={modality.id}
                                        whileHover={{ y: -8 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row h-full md:h-64"
                                    >
                                        <div className="relative w-full md:w-2/5 h-48 md:h-full overflow-hidden">
                                            <Image
                                                src={modality.image}
                                                alt={modality.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-white/90 text-slate-800 hover:bg-white shadow-sm backdrop-blur-sm">
                                                    {modality.tag}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                            {/* ÍCONE REMOVIDO AQUI */}
                                            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-4">
                                                {modality.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {modality.description}
                                            </p>
                                            <div className="mt-auto pt-4 border-t border-slate-100">
                                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                                                    Detalhes Técnicos
                                                </p>
                                                <p className="text-sm text-slate-500 italic">
                                                    "{modality.details}"
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </section>
        </div>
    )
}