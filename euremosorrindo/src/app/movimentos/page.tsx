'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Leaf,
    Users,
    School,
    Droplets,
    TentTree,
    HeartHandshake,
    ChevronDown,
    Camera,
    Sparkles,
    ExternalLink
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// --- DADOS DOS PROJETOS ---
const projetos = [
    {
        id: 'apae-df',
        titulo: 'Remando Juntos com a APAE/DF',
        subtitulo: 'Inclusão e Superação',
        icone: Sparkles,
        cor: 'text-rose-500',
        bgcor: 'bg-rose-500/10',
        bgImage: '/apae.jpg',
        video: '/apae.mp4',
        instagramUrl: 'https://instagram.com/apaedf',
        texto: [
            "O projeto \"Remando Juntos com a APAE/DF\" é uma iniciativa de inclusão social e esportiva que transforma a vida de pessoas com deficiência intelectual e múltipla no Distrito Federal.",
            "Fruto da parceria entre a APAE-DF e a Escola Eu Remo Sorrindo, patrocinado pelo Grupo Bauminas. As atividades acontecem no Lago Paranoá.",
            "Mais do que lazer, o projeto oferece reabilitação e desenvolvimento motor, social e emocional."
        ]
    },
    {
        id: 'pais-filhos',
        titulo: 'Pais e Filhos',
        subtitulo: 'Remando Juntos',
        icone: HeartHandshake,
        cor: 'text-blue-500',
        bgcor: 'bg-blue-500/10',
        bgImage: '/paisefilhos.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Iniciado em 2019, Fernanda Rachid levou seus alunos de classes especiais para remar junto com seus familiares.",
            "A vivência revelou importantes benefícios nos campos cognitivo, sensório-motor e emocional, sendo decisiva para a fundação da escola."
        ]
    },
    {
        id: 'eco-remada',
        titulo: 'Eco Remada',
        subtitulo: 'Movimento socioambiental',
        icone: Leaf,
        cor: 'text-green-500',
        bgcor: 'bg-green-500/10',
        bgImage: '/ecoremada.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Movimento socioambiental iniciado em 2019 para sensibilizar sobre a preservação do Rio Pomba.",
            "Promove educação socioambiental, limpeza de rios e o esporte consciente."
        ]
    },
    {
        id: 'caiaque-comunitario',
        titulo: 'Caiaque Comunitário',
        subtitulo: 'Inclusão Social',
        icone: Users,
        cor: 'text-orange-500',
        bgcor: 'bg-orange-500/10',
        bgImage: '/caiaquecomunitario.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Projeto desenvolvido na UnB. Entre 2009 e 2014, ofereceu aulas de canoagem para mais de 6 mil pessoas.",
            "Em 2023, a iniciativa foi retomada em parceria com a Escola Fernanda Rachid."
        ]
    },
    {
        id: 'cuca',
        titulo: 'CUCA UnB',
        subtitulo: 'Clube Universitário',
        icone: School,
        cor: 'text-purple-500',
        bgcor: 'bg-purple-500/10',
        bgImage: '/cucaUnb.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "O Clube foi revitalizado em 2010 com uma nova proposta pedagógica e técnica, retomando a participação em campeonatos nacionais."
        ]
    },
    {
        id: 'agua-matriz',
        titulo: 'Água Matriz',
        subtitulo: 'Metodologia Ecopedagógica',
        icone: Droplets,
        cor: 'text-cyan-500',
        bgcor: 'bg-cyan-500/10',
        bgImage: '/movimentos_matriz.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Metodologia de ensino e aprendizagem em educação ambiental para reconhecimento das bacias hidrográficas e do cerrado."
        ]
    },
    {
        id: 'aguas-cerrado',
        titulo: 'Águas do Cerrado',
        subtitulo: 'Instituto IPOEMA',
        icone: TentTree,
        cor: 'text-teal-500',
        bgcor: 'bg-teal-500/10',
        bgImage: '/aguasdocerrado.jpg',
        isLowRes: true,
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Projeto de sensibilização e educação comunitária com mais de 20.000 pessoas impactadas."
        ]
    }
]

export default function InfoProjetos() {
    const [ativo, setAtivo] = useState<string | null>('apae-df')
    const [bgAtual, setBgAtual] = useState<any>(projetos[0])
    const containerRef = useRef<HTMLDivElement>(null)
    const mediaContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ativo) {
            const projetoAtivo = projetos.find(p => p.id === ativo)
            if (projetoAtivo) {
                setBgAtual(projetoAtivo)
            }
        }
    }, [ativo])

    useGSAP(() => {
        if (mediaContainerRef.current) {
            gsap.fromTo(mediaContainerRef.current,
                {
                    opacity: 0,
                    scale: 1.1,
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power2.out",
                    overwrite: true
                }
            )
        }
    }, [bgAtual])

    const toggleProjeto = (id: string) => {
        setAtivo(prevAtivo => prevAtivo === id ? null : id)
    }

    const abrirInstagram = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".header-content", {
            x: -30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".accordion-list", {
                x: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-950">

            {/* --- BACKGROUND FIXO --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Gradiente ajustado para proteger o texto na esquerda e embaixo */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/30 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10" />

                <div ref={mediaContainerRef} className="absolute inset-0 w-full h-full transform-gpu">
                    {bgAtual.video ? (
                        <video
                            key={bgAtual.id}
                            src={bgAtual.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            key={bgAtual.id}
                            src={bgAtual.bgImage}
                            alt="Background Projeto"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                    )}
                </div>
            </div>

            {/* --- LAYOUT GRID RESPONSIVO (LADO A LADO EM NOTEBOOKS/DESKTOPS) --- */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

                {/* COLUNA ESQUERDA: Cabeçalho Fixo */}
                <div className="header-content w-full lg:w-5/12 flex flex-col justify-center lg:h-full shrink-0 text-center lg:text-left">
                    <div className="lg:my-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6 w-fit mx-auto lg:mx-0">
                            <Sparkles className="w-3 h-3" />
                            Projetos Sociais
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter drop-shadow-2xl text-white leading-[1.1]">
                            Esporte com <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Propósito
                            </span>
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-light drop-shadow-md max-w-xl mx-auto lg:mx-0">
                            Na <span className="font-semibold text-white">Eu Remo Sorrindo</span>, cada remada conta uma história. Conheça as iniciativas onde unimos a canoagem, a inclusão social e o amor pela natureza.
                        </p>
                    </div>
                </div>

                {/* COLUNA DIREITA: Lista de Cards (Scrollável independente) */}
                {/* h-[60vh] em mobile para garantir espaço, h-full em desktop */}
                <div className="accordion-list w-full lg:w-6/12 h-full min-h-0 flex flex-col">
                    <div className="overflow-y-auto scrollbar-none pr-2 pb-10 flex-1">
                        <div className="grid gap-3">
                            {projetos.map((projeto) => (
                                <AccordionItem
                                    key={projeto.id}
                                    data={projeto}
                                    isOpen={ativo === projeto.id}
                                    onClick={() => toggleProjeto(projeto.id)}
                                    onVerGaleria={abrirInstagram}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Indicador de scroll visual apenas para desktop */}
                    <div className="hidden lg:flex items-center justify-center gap-2 text-white/30 text-xs mt-4 animate-pulse">
                        <ChevronDown className="w-4 h-4" />
                        Role para ver mais
                    </div>
                </div>

            </div>

            <style jsx global>{`
                .scrollbar-none {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-none::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}

// --- Componente Accordion (Mantido igual, apenas ajuste de cores se necessário) ---
interface AccordionItemProps {
    data: any;
    isOpen: boolean;
    onClick: () => void;
    onVerGaleria: (e: React.MouseEvent, url: string) => void;
}

function AccordionItem({ data, isOpen, onClick, onVerGaleria }: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const Icon = data.icone

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            })
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power3.inOut"
            })
        }
    }, [isOpen])

    const handleVerGaleria = (e: React.MouseEvent) => {
        onVerGaleria(e, data.instagramUrl);
    }

    return (
        <div
            onClick={onClick}
            className={`accordion-item group cursor-pointer relative overflow-hidden rounded-xl border transition-all duration-300 ease-out ${isOpen
                ? 'bg-white/95 border-white shadow-xl translate-x-2'
                : 'bg-black/40 hover:bg-black/60 border-white/10 hover:border-white/30 backdrop-blur-sm hover:translate-x-1'
                }`}
        >
            <div className="w-full flex items-center justify-between p-4 text-left">
                <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${isOpen
                        ? `bg-gray-100 shadow-inner`
                        : 'bg-white/5 border border-white/10'
                        }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${data.cor}`} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-white'
                            }`}>
                            {data.titulo}
                        </h3>
                        <p className={`text-xs font-medium transition-colors duration-300 ${isOpen ? 'text-gray-500' : 'text-gray-400'
                            }`}>
                            {data.subtitulo}
                        </p>
                    </div>
                </div>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 text-gray-900' : 'rotate-0 text-white/30'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>

            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden cursor-default bg-transparent">
                <div className="px-4 pb-6 pl-[4.5rem] pr-4">
                    <div className="space-y-3 text-gray-700 leading-relaxed text-sm text-justify">
                        {data.texto.map((paragrafo: string, idx: number) => (
                            <p key={idx}>{paragrafo}</p>
                        ))}
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={handleVerGaleria}
                            className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-gray-100 hover:bg-blue-50 border border-gray-200 text-xs font-bold text-gray-700 hover:text-blue-700 transition-all"
                        >
                            <Camera className="w-3 h-3" />
                            Ver no Instagram
                            <ExternalLink className="w-3 h-3 ml-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}