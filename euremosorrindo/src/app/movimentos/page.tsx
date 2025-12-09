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
    ArrowRight,
    Sparkles,
    ExternalLink
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projetos = [
    {
        id: 'eco-remada',
        titulo: 'Eco Remada',
        subtitulo: 'Movimento socioambiental',
        icone: Leaf,
        cor: 'text-green-500',
        bgcor: 'bg-green-500/10',
        bgImage: '/ecoremada.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo', // URL do Instagram
        texto: [
            "Um movimento que surgiu na cidade de Cataguases-MG no qual um grupo de amigos organizaram uma remada entre os municípios de Cataguases e Aracati para chamar a atenção sobre a preservação do Rio Pomba.",
            "A ideia inicial tomou grandes proporções e reuniu muitos remadores e não remadores a favor da causa. Neste período passei me integrar ao grupo e também fazer parte da organização."
        ]
    },
    {
        id: 'pais-filhos',
        titulo: 'Pais e Filhos',
        subtitulo: 'Fortalecimento de vínculos',
        icone: HeartHandshake,
        cor: 'text-blue-500',
        bgcor: 'bg-blue-500/10',
        bgImage: '/paisefilhos.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Um projeto que visa contribuir para o desenvolvimento humano nos mais amplos aspectos da vida, seja no fortalecimento de vínculos socioafetivos, seja no reconectar aspectos da natureza humana.",
            "Tem como fundamento e princípio a Ecologia Humana, ou seja, a integração do Ser com o Ambiente de maneira harmônica."
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
            "O Clube foi fundado na década de 1988. Em 2010, o grupo de professores e participantes do Projeto Caiaque Comunitário revitalizou o clube com uma nova proposta pedagógica e técnica.",
            "Com treinos regulares, foi possível retomar a participação da equipe nos campeonatos regionais e nacionais."
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
            "Realizado na Universidade de Brasília. Teve como objetivos promover qualidade de vida e educação ambiental por meio de oficinas de canoagem.",
            "O projeto aconteceu no período de 2009 a 2016 oferecendo oficinas de canoagem. Durante este período, foram atendidas cerca de 5.000 pessoas das mais diferentes faixas etárias."
        ]
    },
    {
        id: 'agua-matriz',
        titulo: 'Água Matriz',
        subtitulo: 'Metodologia Ecopedagógica',
        icone: Droplets,
        cor: 'text-cyan-500',
        bgcor: 'bg-cyan-500/10',
        bgImage: '/aguasdocerrado.jpg',
        instagramUrl: 'https://instagram.com/euremosorrindo',
        texto: [
            "Água como Matriz Ecopedagógica é uma metodologia de ensino e aprendizagem em educação ambiental idealizada pelas professoras Vera Catalão e Maria do Socorro Rodrigues.",
            "Reconhecimento das bacias hidrográficas e do cerrado, por meio de cursos, atividades lúdico pedagógicas e vivências."
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
            "Projeto realizado entre os anos de 2014 e 2016 com vistas à sensibilização e educação comunitária realizada por meio de vivências e oficinas.",
            "Foram mais de 20.000 pessoas impactadas e implantação de tecnologias sociais em seis escolas do Distrito Federal."
        ]
    }
]

export default function InfoProjetos() {
    const [ativo, setAtivo] = useState<string | null>('eco-remada')
    const [bgAtual, setBgAtual] = useState<any>(projetos[0])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ativo) {
            const projetoAtivo = projetos.find(p => p.id === ativo)
            if (projetoAtivo) {
                setBgAtual(projetoAtivo)
            }
        }
    }, [ativo])

    const toggleProjeto = (id: string) => {
        setAtivo(prevAtivo => prevAtivo === id ? null : id)
    }

    // Função para abrir o Instagram
    const abrirInstagram = (e: React.MouseEvent, url: string) => {
        e.stopPropagation(); // Evita que o clique propague para o accordion
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".header-content", {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".accordion-list", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-950">

            {/* --- BACKGROUND FIXO --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-950/80 z-10 backdrop-blur-[3px]" />
                <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                    <Image
                        key={bgAtual.id}
                        src={bgAtual.bgImage}
                        alt="Background Projeto"
                        fill
                        className={`object-cover animate-in fade-in zoom-in-105 duration-1000 ${bgAtual.isLowRes ? 'blur-md scale-105 opacity-40' : 'opacity-50'
                            }`}
                        priority
                        quality={90}
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent z-10" />
            </div>

            {/* --- LAYOUT --- */}
            <div className="relative z-20 w-full h-full flex flex-col items-center pt-20 pb-6 px-4 md:px-6">

                {/* Cabeçalho */}
                <div className="w-full max-w-4xl text-center text-white header-content shrink-0 mb-6 py-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                        Trajetória de Impacto
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light">
                        Cada movimento representa um capítulo da nossa dedicação à preservação ambiental e ao esporte.
                    </p>
                </div>

                {/* Lista Scrollável */}
                <div className="w-full max-w-3xl flex-1 min-h-0 overflow-y-auto accordion-list pr-2 scrollbar-none">
                    <div className="grid gap-3 pb-20">
                        {projetos.map((projeto) => (
                            <AccordionItem
                                key={projeto.id}
                                data={projeto}
                                isOpen={ativo === projeto.id}
                                onClick={() => toggleProjeto(projeto.id)}
                                onVerGaleria={abrirInstagram} // Passando a função para abrir Instagram
                            />
                        ))}
                    </div>
                </div>

                {/* Indicador de scroll */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs flex flex-col items-center gap-1 animate-pulse pointer-events-none">
                    <span>Role para explorar</span>
                    <ChevronDown className="w-4 h-4" />
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
                duration: 0.6,
                ease: "power3.out"
            })
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power3.inOut"
            })
        }
    }, [isOpen])

    // Função específica para este item
    const handleVerGaleria = (e: React.MouseEvent) => {
        onVerGaleria(e, data.instagramUrl);
    }

    return (
        <div
            onClick={onClick}
            className={`accordion-item group cursor-pointer relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${isOpen
                ? 'bg-white border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] scale-[1.02] z-10'
                : 'bg-gray-900/60 hover:bg-gray-800/80 border-white/10 hover:border-white/20 backdrop-blur-md z-0 hover:translate-x-1'
                }`}
        >
            <div className="w-full flex items-center justify-between p-5 text-left">
                <div className="flex items-center gap-5">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${isOpen
                        ? `bg-gray-50 shadow-inner scale-110`
                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                        }`}>
                        <Icon className={`w-6 h-6 transition-all duration-300 ${data.cor} ${isOpen ? 'scale-110' : ''}`} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-white group-hover:text-blue-200'
                            }`}>
                            {data.titulo}
                        </h3>
                        <p className={`text-xs md:text-sm font-medium transition-colors duration-300 ${isOpen ? 'text-gray-500' : 'text-gray-400/80'
                            }`}>
                            {data.subtitulo}
                        </p>
                    </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-gray-100 text-gray-900' : 'rotate-0 bg-transparent text-white/30 group-hover:text-white'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>

            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden cursor-default bg-white">
                <div className="px-6 pb-8 pl-[5.5rem] pr-6 md:pr-12">
                    <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-5 opacity-70"></div>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] text-justify font-light tracking-wide">
                        {data.texto.map((paragrafo: string, idx: number) => (
                            <p key={idx}>{paragrafo}</p>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-start">
                        <button
                            onClick={handleVerGaleria}
                            className="group/btn flex items-center gap-3 py-2 px-4 rounded-lg bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all active:scale-95"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm text-white group-hover/btn:scale-105 transition-transform">
                                <Camera className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 group-hover/btn:text-blue-700">
                                    Ver Galeria no Instagram
                                </span>
                                <span className="text-[10px] text-gray-400 group-hover/btn:text-gray-500">
                                    @euremosorrindo
                                </span>
                            </div>
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}