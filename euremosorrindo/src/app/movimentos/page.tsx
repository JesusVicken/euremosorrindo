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
        bgImage: '/apae.jpg', // Fallback caso o vídeo falhe (opcional)
        video: '/apae.mp4',   // <--- ADICIONADO: Caminho do vídeo
        instagramUrl: 'https://instagram.com/apaedf',
        texto: [
            "O projeto \"Remando Juntos com a APAE/DF\" é uma iniciativa de inclusão social e esportiva que transforma a vida de pessoas com deficiência intelectual e múltipla no Distrito Federal. Fruto da parceria entre a APAE do Distrito Federal e a Escola de Canoagem e Va'a Fernanda Rachid.",
            "Patrocinado pelo Grupo Bauminas por meio do Programa da Lei de Incentivo do Ministério do Esporte, as atividades de canoagem e VA'A (canoa havaiana) são realizadas no Lago Paranoá e atendem os assistidos das quatro unidades da APAE/DF: Sobradinho, Asa Norte, Ceilândia e Guará.",
            "Mais do que lazer, o projeto oferece reabilitação e desenvolvimento motor, social e emocional, preparando os participantes para a superação e, em alguns casos, para competições nacionais, como detalhado em reportagem do Correio Braziliense.",
            "Acompanhe a jornada de inclusão e superação do projeto em seus canais de divulgação. Você pode conferir vídeos e a cobertura completa no YouTube da APAE/DF."
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
            "Movimento socioambiental de canoagem iniciado em 2019, a Ecoremada surgiu para sensibilizar sobre a preservação do Rio Pomba, em Cataguases/MG e região.",
            "Com ações recorrentes, promove educação socioambiental e o esporte consciente por meio de oficinas, workshops, palestras, ações solidárias, limpeza de rios e espelhos d’água, além de festivais, travessias e campeonatos de canoagem."
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
            "Iniciado em 2019, o projeto surgiu quando Fernanda Rachid conciliava a carreira de atleta de canoagem com a atuação como professora da Secretaria de Educação do DF em classes especiais.",
            "Nos horários alternados às aulas, passou a levar seus alunos — crianças e adolescentes com deficiência intelectual e TEA — para remar junto com seus familiares. A vivência revelou importantes benefícios nos campos cognitivo, sensório-motor, emocional, relacional e comportamental, percebidos tanto na rotina escolar quanto nos relatos das famílias. Essa experiência foi decisiva para a fundação da Escola Eu Remo Sorrindo."
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
            "Projeto desenvolvido na Universidade de Brasília pelo Decanato de Assuntos Comunitários e pela Diretoria de Esportes, Arte e Cultura, na gestão de Lucila Rondon, mentora da iniciativa. Fernanda Rachid foi coautora e participou de todo o planejamento e implementação.",
            "Entre 2009 e 2014, o projeto ofereceu aulas regulares de canoagem e oficinas de educação socioambiental para a comunidade acadêmica e o público externo, atendendo mais de 6 mil pessoas.",
            "Em 2023, a iniciativa foi retomada por um ano por meio da parceria entre a Escola Fernanda Rachid e a UnB. Atualmente, estão em andamento as tratativas para o retorno das atividades."
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
    const [ativo, setAtivo] = useState<string | null>('apae-df')
    const [bgAtual, setBgAtual] = useState<any>(projetos[0])
    const containerRef = useRef<HTMLDivElement>(null)
    const mediaContainerRef = useRef<HTMLDivElement>(null) // Renomeado para ser genérico (Video ou Imagem)

    useEffect(() => {
        if (ativo) {
            const projetoAtivo = projetos.find(p => p.id === ativo)
            if (projetoAtivo) {
                setBgAtual(projetoAtivo)
            }
        }
    }, [ativo])

    // --- ANIMAÇÃO GSAP PARA O BACKGROUND (VÍDEO OU IMAGEM) ---
    useGSAP(() => {
        // Sempre que bgAtual mudar, essa animação roda
        if (mediaContainerRef.current) {
            gsap.fromTo(mediaContainerRef.current,
                {
                    opacity: 0,
                    scale: 1.1, // Começa com zoom
                    yPercent: 10, // Começa de baixo
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    yPercent: 0, // Sobe
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

            {/* --- BACKGROUND FIXO (VÍDEO OU IMAGEM) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Overlay Escuro */}
                <div className="absolute inset-0 bg-gray-950/60 z-10" />

                {/* Container de Mídia (Animado pelo GSAP) */}
                <div ref={mediaContainerRef} className="absolute inset-0 w-full h-full transform-gpu">
                    {bgAtual.video ? (
                        <video
                            key={bgAtual.id} // Key força o React a remontar o elemento para o GSAP pegar a troca
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

                {/* Gradiente inferior */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10" />
            </div>

            {/* --- LAYOUT --- */}
            <div className="relative z-20 w-full h-full flex flex-col items-center pt-20 pb-6 px-4 md:px-6">

                {/* Cabeçalho */}
                <div className="w-full max-w-4xl text-center text-white header-content shrink-0 mb-6 py-10 md:py-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 pb-2 tracking-tighter drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Projetos e Movimentos
                    </h2>
                    <p className="text-gray-200 text-sm md:text-lg max-w-lg mx-auto leading-relaxed font-light drop-shadow-md">
                        Cada projeto representa um capítulo da nossa dedicação à preservação ambiental e ao esporte.
                    </p>
                </div>

                {/* Lista Scrollável */}
                <div className="w-full max-w-3xl flex-1 min-h-0 overflow-y-auto accordion-list pr-2 scrollbar-none pb-20">
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

                {/* Indicador de scroll */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs flex flex-col items-center gap-1 animate-pulse pointer-events-none z-30">
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

// --- Componente Accordion ---
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

    const handleVerGaleria = (e: React.MouseEvent) => {
        onVerGaleria(e, data.instagramUrl);
    }

    return (
        <div
            onClick={onClick}
            className={`accordion-item group cursor-pointer relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${isOpen
                ? 'bg-white/95 border-white shadow-2xl scale-[1.02] z-10'
                : 'bg-black/40 hover:bg-black/60 border-white/10 hover:border-white/30 backdrop-blur-sm z-0 hover:translate-x-1'
                }`}
        >
            <div className="w-full flex items-center justify-between p-5 text-left">
                <div className="flex items-center gap-5">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${isOpen
                        ? `bg-gray-100 shadow-inner scale-110`
                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                        }`}>
                        <Icon className={`w-6 h-6 transition-all duration-300 ${data.cor} ${isOpen ? 'scale-110' : ''}`} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-white group-hover:text-blue-200'
                            }`}>
                            {data.titulo}
                        </h3>
                        <p className={`text-xs md:text-sm font-medium transition-colors duration-300 ${isOpen ? 'text-gray-500' : 'text-gray-300/80'
                            }`}>
                            {data.subtitulo}
                        </p>
                    </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-gray-200 text-gray-900' : 'rotate-0 bg-transparent text-white/30 group-hover:text-white'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>

            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden cursor-default bg-transparent">
                <div className="px-6 pb-8 pl-[5.5rem] pr-6 md:pr-12">
                    <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-5 opacity-70"></div>

                    <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] text-justify font-normal tracking-wide">
                        {data.texto.map((paragrafo: string, idx: number) => (
                            <p key={idx}>{paragrafo}</p>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-start">
                        <button
                            onClick={handleVerGaleria}
                            className="group/btn flex items-center gap-3 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-md border border-gray-200 hover:border-blue-200 transition-all active:scale-95"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm text-white group-hover/btn:scale-105 transition-transform">
                                <Camera className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-700 group-hover/btn:text-blue-700">
                                    Ver Galeria no Instagram
                                </span>
                                <span className="text-[10px] text-gray-500 group-hover/btn:text-gray-600">
                                    {data.id === 'apae-df' ? '@apaedf' : '@euremosorrindo'}
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