


// 'use client'

// import { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { motion } from 'framer-motion'
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//     CardDescription,
// } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import {
//     Clock,
//     Users,
//     Activity,
//     Calendar,
//     MessageCircle,
//     Info,
//     ChevronRight,
//     Instagram,
// } from 'lucide-react'
// import Image from 'next/image'

// export default function ExtremePage() {
//     useEffect(() => {
//         AOS.init({ duration: 700, once: true })
//     }, [])

//     const niveis = [
//         {
//             nivel: 'Nível 1',
//             titulo: 'Básico',
//             descricao: 'Ideal para iniciantes em aventuras verticais',
//             caracteristicas: [
//                 'Duração: até 2 horas',
//                 'Trilhas leves e cachoeiras pequenas',
//                 'Sem necessidade de experiência',
//                 'Equipamentos básicos fornecidos',
//             ],
//             cor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
//             corBadge: 'bg-green-500',
//         },
//         {
//             nivel: 'Nível 2',
//             titulo: 'Moderado',
//             descricao: 'Requer condicionamento físico básico',
//             caracteristicas: [
//                 'Duração: 2-4 horas',
//                 'Descidas em cachoeiras médias',
//                 'Exige noções básicas de rapel',
//                 'Alguns trechos desafiadores',
//             ],
//             cor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
//             corBadge: 'bg-blue-500',
//         },
//         {
//             nivel: 'Nível 3',
//             titulo: 'Avançado',
//             descricao: 'Para aventureiros com boa condição física',
//             caracteristicas: [
//                 'Duração: 4-6 horas',
//                 'Cachoeiras de grande porte',
//                 'Exige técnica intermediária de rapel',
//                 'Terrenos mais técnicos e exigentes',
//             ],
//             cor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
//             corBadge: 'bg-yellow-500',
//         },
//         {
//             nivel: 'Nível 4',
//             titulo: 'Expert',
//             descricao: 'Exige preparo físico e experiência avançada',
//             caracteristicas: [
//                 'Duração: 6+ horas',
//                 'Grandes cânions e descidas complexas',
//                 'Necessário domínio de técnicas avançadas',
//                 'Condições físicas e técnicas elevadas',
//             ],
//             cor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
//             corBadge: 'bg-orange-500',
//         },
//     ]

//     const canionismo = {
//         titulo: 'CANIONISMO',
//         detalhes: [
//             { icone: <Users className="w-5 h-5" />, texto: 'Até 5 pessoas por grupo' },
//             { icone: <Clock className="w-5 h-5" />, texto: 'Horários flexíveis (a combinar)' },
//             { icone: <Calendar className="w-5 h-5" />, texto: 'Duração variável conforme destino' },
//             {
//                 icone: <Activity className="w-5 h-5" />,
//                 texto: 'Equipamentos inclusos: Capacete, neoprene, cadeirinha, mosquetões',
//             },
//         ],
//         valores: [
//             { tipo: 'Expedições', mobilizadores: 'R$ 400', individual: 'R$ 500' },
//             { tipo: 'Treinamento', mobilizadores: 'R$ 300', individual: 'R$ 400' },
//         ],
//         destinos: [
//             { nome: 'Cânion Barra do Dia', nivel: 'Nível 2' },
//             { nome: 'Cânion Dom Giuseppe', nivel: 'Nível 4' },
//             { nome: 'Cânion Cerrado', nivel: 'Nível 3' },
//             { nome: 'Cânion das Andorinhas', nivel: 'Nível 3' },
//         ],
//     }

//     const professores = [
//         {
//             nome: 'Kadu Aragão',
//             instagram: 'https://www.instagram.com/kadu.aragao/',
//             foto: '/kadu.jpg',
//         },
//         {
//             nome: 'Leandro Bainy Valente',
//             instagram: 'https://www.instagram.com/leandrobainyvalente/',
//             foto: '/Leandro.jpg',
//         },
//     ]

//     const whatsappNumber = '61998219177'
//     const whatsappMessage = 'Olá! Gostaria de saber mais sobre as experiências de Canionismo.'
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         whatsappMessage
//     )}`

//     return (
//         <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
//             {/* Faixa de Destaque */}
//             <div className="relative h-64 md:h-96 w-full mb-16 rounded-lg overflow-hidden shadow-lg">
//                 <Image
//                     src="/barra.png"
//                     alt="Aventuras de Canionismo"
//                     fill
//                     className="object-cover"
//                     quality={100}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-6 md:px-12">
//                     <div className="max-w-2xl">
//                         <motion.h2
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5"
//                         >
//                             Aventuras Verticais
//                         </motion.h2>
//                         <motion.p
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             className="text-white/90 text-sm md:text-lg"
//                         >
//                             Explore cânions deslumbrantes com nossa equipe especializada
//                         </motion.p>
//                     </div>
//                 </div>
//             </div>

//             {/* Seção Normas e Segurança */}
//             <div data-aos="fade-up" className="mb-12 px-4 md:px-0">
//                 <Card className="border-0 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-6 md:p-8">
//                     <CardHeader>
//                         <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
//                             <Info className="w-5 h-5" />
//                             Segurança e Normas
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent className="text-sm md:text-base space-y-2">
//                         <p>
//                             Todos os nossos passeios seguem as normas técnicas brasileiras para esportes
//                             de aventura, conforme as diretrizes da{' '}
//                             <strong>ABNT NBR ISO 21101</strong> (Gestão de segurança em atividades de
//                             aventura) e <strong>ABNT NBR 15265</strong> (Guias e instrutores de
//                             atividades de aventura). Nosso objetivo é garantir a máxima segurança,
//                             conforto e experiência para todos os participantes.
//                         </p>
//                         <p>
//                             Utilizamos equipamentos certificados, equipes treinadas e protocolos de
//                             segurança rigorosos para todas as aventuras.
//                         </p>
//                     </CardContent>
//                 </Card>
//             </div>

//             {/* Seção de Níveis de Experiência */}
//             <div data-aos="fade-up" className="mb-12">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
//                     <Info className="w-5 h-5 text-primary" />
//                     Níveis de Experiência em Canionismo
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {niveis.map((nivel, index) => (
//                         <Card
//                             key={index}
//                             className={`h-full border-0 ${nivel.cor} shadow hover:scale-105 transition-transform duration-300`}
//                             data-aos="zoom-in"
//                             data-aos-delay={index * 100}
//                         >
//                             <CardHeader>
//                                 <CardTitle className="flex items-center justify-between">
//                                     <span>{nivel.nivel}</span>
//                                     <Badge variant="outline" className="text-xs">
//                                         {nivel.titulo}
//                                     </Badge>
//                                 </CardTitle>
//                                 <CardDescription className="text-current">
//                                     {nivel.descricao}
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <ul className="space-y-2 text-sm">
//                                     {nivel.caracteristicas.map((c, i) => (
//                                         <li key={i} className="flex items-start gap-2">
//                                             <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                                             {c}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Seção Vídeo */}
//             <div data-aos="fade-up" className="mb-16">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Veja como é o Canionismo</h2>
//                 <div className="w-full rounded-lg overflow-hidden shadow-lg">
//                     <video
//                         src="/canionismo.mp4"
//                         controls
//                         className="w-full h-auto object-cover"
//                     />
//                 </div>
//             </div>

//             {/* Professores */}
//             <div data-aos="fade-up" className="mb-16">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossos Instrutores de Canionismo</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     {professores.map((prof, index) => (
//                         <Card
//                             key={index}
//                             className="p-4 md:p-6 flex items-center gap-4 shadow hover:scale-105 transition-transform duration-300"
//                         >
//                             <Image
//                                 src={prof.foto}
//                                 alt={prof.nome}
//                                 width={80}
//                                 height={80}
//                                 className="rounded-full object-cover"
//                             />
//                             <div>
//                                 <p className="font-semibold text-base md:text-lg">{prof.nome}</p>
//                                 <a
//                                     href={prof.instagram}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-primary flex items-center gap-1 text-sm md:text-base mt-1"
//                                 >
//                                     <Instagram className="w-4 h-4 md:w-5 md:h-5" />
//                                     Instagram
//                                 </a>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             {/* Conteúdo Canionismo */}
//             <div data-aos="fade-up" className="mb-16">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-2">{canionismo.titulo}</h2>
//                 <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
//                 <p className="text-muted-foreground max-w-3xl mb-12 text-sm md:text-base">
//                     Experiências verticais em cânions com equipamentos profissionais e guias especializados.
//                 </p>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
//                     {/* Detalhes */}
//                     <Card data-aos="fade-up" className="shadow hover:shadow-md transition-shadow duration-300">
//                         <CardHeader>
//                             <CardTitle>Informações</CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                             {canionismo.detalhes.map((detalhe, index) => (
//                                 <div key={index} className="flex items-start gap-3">
//                                     <div className="p-1 text-primary">{detalhe.icone}</div>
//                                     <p>{detalhe.texto}</p>
//                                 </div>
//                             ))}
//                         </CardContent>
//                     </Card>

//                     {/* Valores */}
//                     <Card
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         className="shadow hover:shadow-md transition-shadow duration-300"
//                     >
//                         <CardHeader>
//                             <CardTitle>Valores</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full">
//                                     <thead>
//                                         <tr className="border-b">
//                                             <th className="text-left py-2">Tipo</th>
//                                             <th className="text-left py-2">Mobilizadores</th>
//                                             <th className="text-left py-2">Individual</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {canionismo.valores.map((valor, index) => (
//                                             <tr key={index} className="border-b">
//                                                 <td className="py-3">{valor.tipo}</td>
//                                                 <td className="py-3">{valor.mobilizadores}</td>
//                                                 <td className="py-3">{valor.individual}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     {/* Destinos */}
//                     <Card
//                         data-aos="fade-up"
//                         data-aos-delay="200"
//                         className="shadow hover:shadow-md transition-shadow duration-300"
//                     >
//                         <CardHeader>
//                             <CardTitle>Destinos Disponíveis</CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-3">
//                             {canionismo.destinos.map((destino, index) => {
//                                 const nivelDestino =
//                                     niveis.find((n) => n.nivel === destino.nivel) || niveis[0]
//                                 return (
//                                     <div
//                                         key={index}
//                                         className="flex justify-between items-center"
//                                     >
//                                         <span>{destino.nome}</span>
//                                         <Badge className={nivelDestino.corBadge}>
//                                             {destino.nivel}
//                                         </Badge>
//                                     </div>
//                                 )
//                             })}
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {/* Botão de Contato */}
//                 <div className="text-center">
//                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                         <Button className="gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base hover:scale-105 transition-transform duration-300">
//                             <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
//                             Entrar em Contato via WhatsApp
//                         </Button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }
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

// Registrar plugin do GSAP (só no client)
if (typeof window !== 'undefined') {
    gsap.registerPlugin?.(ScrollTrigger)
}

export default function FernandaPage() {
    const [activeTab, setActiveTab] = useState('sobre')
    const heroRef = useRef<HTMLElement | null>(null)
    const contentRef = useRef<HTMLElement | null>(null)
    const modalitiesRef = useRef<HTMLDivElement | null>(null)
    const logoRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLParagraphElement | null>(null)
    const badgeRef = useRef<HTMLDivElement | null>(null)

    const { ref: heroInViewRef, inView: heroInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const { ref: contentInViewRef, inView: contentInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    // Combinar refs
    const setHeroRef = (node: HTMLDivElement | null) => {
        heroRef.current = node
        heroInViewRef(node)
    }

    const setContentRef = (node: HTMLDivElement | null) => {
        contentRef.current = node
        contentInViewRef(node)
    }

    // Animações GSAP avançadas
    useEffect(() => {
        if (!heroRef.current) return

        // Parallax-like do hero (suave)
        gsap.to(heroRef.current, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

        // Linha de tempo do hero (entradas)
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        heroTl
            .fromTo(
                logoRef.current,
                { opacity: 0, x: -20, scale: 0.95 },
                { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'back.out(1.2)' }
            )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.4'
            )
            .fromTo(
                badgeRef.current,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
                '-=0.2'
            )

        // stagger dos data-items
        gsap.fromTo(
            '.data-item',
            { opacity: 0, x: -40, scale: 0.96 },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.13,
                ease: 'back.out(1.1)',
                scrollTrigger: {
                    trigger: '.data-item',
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // modalidades
        gsap.fromTo(
            '.modality-card',
            { opacity: 0, y: 80, scale: 0.92 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.18,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.modality-card',
                    start: 'top 85%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // pequenos efeitos contínuos (sutileza)
        gsap.to('.modality-card', {
            y: -6,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            stagger: 0.25
        })

        return () => {
            // cleanup scrolltriggers criados
            ScrollTrigger.getAll()?.forEach(t => t.kill())
            gsap.killTweensOf(heroRef.current as any)
        }
    }, [])

    const personalData = [
        { icon: Calendar, label: 'Data de Nascimento', value: '31/05/1982' },
        { icon: MapPin, label: 'Naturalidade', value: 'Cataguases – MG' },
        { icon: MapPin, label: 'Residência', value: 'Brasília – DF' },
        { icon: Users, label: 'Profissão', value: 'Professora, Pedagoga e Educadora Física' }
    ]

    const academicData = [
        { degree: 'Bacharel em Educação Física', institution: 'Faculdade Mauá de Brasília', year: '2019' },
        { degree: 'Mestre em Educação Ambiental e Ecologia Humana', institution: 'Universidade de Brasília – UnB', year: '2013' },
        { degree: 'Pedagogia', institution: 'Universidade de Brasília – UnB', year: '2004' }
    ]

    const modalities = [
        {
            id: 'oceanica',
            title: 'Canoagem Oceânica',
            icon: Waves,
            description:
                'Modalidade recente na história da canoagem na qual o objetivo das provas é percorrer um percurso previamente definido em carta náutica, em águas marinhas, no menor tempo possível.',
            details: 'A embarcação utilizada é o Surfski, um tipo de caiaque desenvolvido especialmente para os mares.',
            image: '/oceanica.jpg',
            color: 'border-blue-200 hover:border-blue-400',
            accentColor: 'text-blue-600'
        },
        {
            id: 'velocidade',
            title: 'Canoagem Velocidade',
            icon: Trophy,
            description:
                'Modalidade olímpica essencialmente de competição. É praticada em rios ou lagos de águas calmas com raias demarcadas nas distâncias de 1.000, 500 e 200 metros.',
            details:
                'As embarcações utilizadas são K1, K2, K4 e C1 e C2, sendo que a letra k significa Kayak (caiaque) e o C de Canoe (canoa). Os numerais correspondem à quantidade de integrantes na embarcação.',
            image: '/velocidade.jpg',
            color: 'border-green-200 hover:border-green-400',
            accentColor: 'text-green-600'
        },
        {
            id: 'maratona',
            title: 'Canoagem Maratona',
            icon: Clock,
            description:
                'Envolve remar grandes distâncias em águas calmas. Tradicionais eventos de Canoagem Maratona possuem postos fixados de portages, onde o atleta precisa carregar sua canoa ou kayak.',
            details: 'As embarcações utilizadas são K1, K2, C1 e C2.',
            image: '/maratona.jpg',
            color: 'border-orange-200 hover:border-orange-400',
            accentColor: 'text-orange-600'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            {/* Hero Section */}
            <section
                ref={setHeroRef as any}
                className="relative min-h-[88vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden"
                aria-label="Hero Fernanda Rachid"
            >
                {/* Imagem de fundo (usei o arquivo local que você enviou; o ambiente converterá o path) */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/fernandaHero.jpg"
                        alt="Fernanda Rachid"
                        fill
                        style={{ objectFit: 'cover', objectPosition: '60% 50%' }} // desloca o foco para evitar rosto
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                        className="transform-gpu"
                    />
                    {/* leves overlays para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30 pointer-events-none" />
                </div>

                {/* LOGO fixada no canto ESQUERDO (fora do rosto) */}
                <div
                    ref={logoRef as any}
                    className="absolute left-4 top-4 md:left-8 md:top-8 z-40 rounded-full p-1 md:p-2 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
                    aria-hidden={false}
                >
                    {/* ajuste do tamanho responsive */}
                    <Image
                        src="/logoescola.png"
                        alt="Logo Escola Fernanda Rachid"
                        width={120}
                        height={120}
                        className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full"
                        priority
                    />
                </div>

                {/* Conteúdo central (titulo / badge) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative z-30 text-center text-white px-6 max-w-4xl mx-auto w-full"
                >
                    <motion.p
                        ref={titleRef as any}
                        className="text-lg md:text-2xl lg:text-3xl text-white/95 mb-6 md:mb-8 drop-shadow-2xl font-light tracking-wider"
                    >
                        Atleta • Educadora • Inspiração
                    </motion.p>

                    <motion.div ref={badgeRef as any} className="mx-auto">
                        <Badge
                            variant="secondary"
                            className="text-base md:text-lg px-5 py-2.5 bg-white/18 backdrop-blur-md border border-white/20 text-white font-medium rounded-full shadow-lg hover:bg-white/25 transition-all duration-300"
                        >
                            CREF – 015625-G/DF
                        </Badge>
                    </motion.div>

                    {/* Scroll indicator */}
                    <div className="mt-10">
                        <div className="inline-block">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
                            >
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-1 h-3 bg-white/70 rounded-full mt-2"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Content Section */}
            <section ref={setContentRef as any} className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={contentInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12 lg:space-y-16">
                        <TabsList className="grid w-full grid-cols-3 p-1 bg-slate-100/80 backdrop-blur-sm border border-gray-200 rounded-2xl max-w-md mx-auto shadow-lg">
                            <TabsTrigger value="sobre" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium">
                                Sobre
                            </TabsTrigger>
                            <TabsTrigger value="formacao" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium">
                                Formação
                            </TabsTrigger>
                            <TabsTrigger value="modalidades" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-600 transition-all duration-300 font-medium">
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
                                            {personalData.map(item => (
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
                                                ].map(item => (
                                                    <li
                                                        key={item.text}
                                                        className="highlight-item flex items-center gap-4 p-3 lg:p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                                                        style={{
                                                            backgroundColor: `var(--${item.color}-50)`,
                                                            borderColor: `var(--${item.color}-100)`
                                                        }}
                                                    >
                                                        <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: `var(--${item.color}-500)` }} />
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
                                        {academicData.map(item => (
                                            <div key={item.degree} className="formation-card p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group backdrop-blur-sm">
                                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
                                                    <h4 className="text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">{item.degree}</h4>
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
                                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Conheça as modalidades de canoagem que a Fernanda compete e domina com excelência</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" ref={modalitiesRef as any}>
                                {modalities.map(modality => (
                                    <div key={modality.id} className="modality-card group">
                                        <Card className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 shadow-2xl rounded-3xl overflow-hidden h-full transform transition-all duration-500 hover:shadow-3xl hover:border-gray-300">
                                            <div className="relative h-64 lg:h-72 overflow-hidden">
                                                <Image src={modality.image} alt={modality.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                                                <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">{modality.description}</p>
                                                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6">{modality.details}</p>
                                                <div className="flex justify-between items-center">
                                                    <Badge variant="outline" className={`${modality.accentColor} border-current bg-transparent hover:bg-current hover:text-white transition-all duration-300 cursor-pointer text-xs lg:text-sm`}>
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
