"use client"

import { useEffect } from "react"
import Image from "next/image"
import {
    Users,
    Waves,
    GraduationCap,
    Anchor,
    Hammer,
    BookOpen,
    Mic2,
    Presentation,
    ChevronRight // Mantive apenas o ChevronRight para o botão
} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import AOS from "aos"

// Caminho da imagem de fundo
const bgHeroImage = '/bgremo.webp'

// Lista de Serviços
const services = [
    {
        title: "Remando Juntos",
        description: "Atividades em grupo focadas na cooperação e sincronia. Ideal para fortalecer laços comunitários e trabalho em equipe.",
        image: "/images/servicos/remandojuntos.jpg",
        icon: Users,
        action: "Saiba mais"
    },
    {
        title: "Vivências na Canoa",
        description: "Uma imersão completa na cultura da canoa havaiana. Conecte-se com a natureza e sinta a energia da água.",
        image: "/images/servicos/vivencia.webp",
        icon: Waves,
        action: "Agendar vivência"
    },
    {
        title: "Educação em Movimento",
        description: "O esporte como ferramenta pedagógica. Desenvolvimento motor e cognitivo através da prática ao ar livre.",
        image: "/images/servicos/educacao.jpg",
        icon: GraduationCap,
        action: "Conhecer projeto"
    },
    {
        title: "Aulas de Canoagem",
        description: "Treinamento técnico e prático para todos os níveis. Aprenda a remar com segurança e eficiência.",
        image: "/images/servicos/canoagem.jpg",
        icon: Anchor,
        action: "Ver horários"
    },
    {
        title: "Oficinas",
        description: "Workshops práticos sobre manutenção, nós, cultura polinésia e técnicas específicas de remada.",
        image: "/images/servicos/oficinas.jpg",
        icon: Hammer,
        action: "Ver agenda"
    },
    {
        title: "Cursos",
        description: "Formação aprofundada para quem busca especialização teórica e prática no universo da canoa.",
        image: "/images/servicos/cursos.jpg",
        icon: BookOpen,
        action: "Inscrever-se"
    },
    {
        title: "Moderação de Eventos",
        description: "Facilitação profissional de eventos participativos, garantindo engajamento e fluidez nas atividades.",
        image: "/images/servicos/eventos.jpg",
        icon: Mic2,
        action: "Contratar"
    },
    {
        title: "Palestras Desportivas",
        description: "Conteúdo inspirador sobre superação, saúde, esporte e qualidade de vida para sua empresa ou evento.",
        image: "/images/servicos/palestras.jpg",
        icon: Presentation,
        action: "Solicitar tema"
    }
]

export default function ServicosPage() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <main className="bg-white min-h-screen">

            {/* ================= HERO BANNER SECTION ================= */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={bgHeroImage}
                        alt="Banner Canoa Havaiana"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay azulado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-blue-950/90"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center" data-aos="fade-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600/30 text-blue-100 text-sm font-semibold tracking-wider mb-4 uppercase backdrop-blur-sm border border-blue-400/30">
                        Experiências Únicas
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                        Descubra o Espírito <br /> da Canoa Havaiana
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium drop-shadow-md">
                        Conecte-se com a natureza, desafie seus limites e faça parte da nossa comunidade.
                    </p>
                </div>
            </section>


            {/* ================= GRID DE SERVIÇOS (SEM CARROSSEL) ================= */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50">

                {/* Elementos decorativos de fundo */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-[5%] -right-[5%] w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-3xl"></div>
                    <div className="absolute bottom-[5%] -left-[5%] w-[400px] h-[400px] rounded-full bg-blue-200/40 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                            Nossas Atividades e Serviços
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Explore as modalidades que preparamos para o seu desenvolvimento físico, técnico e social.
                        </p>
                    </div>

                    {/* GRID LAYOUT: 1 coluna (mobile), 2 (tablet), 3 (desktop), 4 (telas grandes) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100} // Efeito cascata na animação
                                className="h-full"
                            >
                                {/* CARD */}
                                <div className="group h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-blue-50 relative">

                                    {/* 1. Imagem com Zoom */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${service.image})`, backgroundColor: '#e2e8f0' }}
                                        >
                                            {/* Se quiser usar Next Image: 
                                            <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /> 
                                            */}
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-60"></div>

                                        {/* Ícone */}
                                        <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg z-10 group-hover:bg-blue-700 transition-colors">
                                            <service.icon className="w-7 h-7" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* 2. Conteúdo */}
                                    <div className="p-6 pt-10 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-500 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                                            {service.description}
                                        </p>

                                        {/* Botão */}
                                        <div className="mt-auto">
                                            <a
                                                href={`https://wa.me/5561998219177?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre: ${service.title}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 hover:text-blue-800 transition-all group/link w-full justify-center"
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                <span>{service.action}</span>
                                                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    )
}