"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import AOS from "aos"

// Caminho da imagem de fundo
const bgHeroImage = '/bgremo.webp'

// Número do WhatsApp da Fernanda Rachid
const WHATSAPP_NUMBER = "5561984644698"

// Lista de Serviços
const services = [
    {
        title: "Remando Juntos",
        description: "Atividades em grupo focadas na cooperação e sincronia. Ideal para fortalecer laços comunitários e trabalho em equipe.",
        image: "/images/servicos/remandojuntos.jpg",
        action: "Quero participar"
    },
    {
        title: "Vivências na Canoa",
        description: "Uma imersão completa na cultura da canoa havaiana. Conecte-se com a natureza e sinta a energia da água.",
        image: "/images/servicos/vivencia.webp",
        action: "Agendar vivência"
    },
    {
        title: "Educação em Movimento",
        description: "O esporte como ferramenta pedagógica. Desenvolvimento motor e cognitivo através da prática ao ar livre.",
        image: "/images/servicos/educacao.jpg",
        action: "Conhecer projeto"
    },
    {
        title: "Aulas de Canoagem",
        description: "Treinamento técnico e prático para todos os níveis. Aprenda a remar com segurança e eficiência com Fernanda Rachid.",
        image: "/images/servicos/canoagem.jpg",
        action: "Ver horários e planos"
    },
    {
        title: "Oficinas",
        description: "Workshops práticos sobre manutenção, nós, cultura polinésia e técnicas específicas de remada.",
        image: "/images/servicos/oficinas.jpg",
        action: "Ver agenda"
    },
    {
        title: "Cursos",
        description: "Formação aprofundada para quem busca especialização teórica e prática no universo da canoa.",
        image: "/images/servicos/cursos.jpg",
        action: "Inscrever-se"
    },
    {
        title: "Moderação de Eventos",
        description: "Facilitação profissional de eventos participativos, garantindo engajamento e fluidez nas atividades.",
        image: "/images/servicos/eventos.jpg",
        action: "Solicitar orçamento"
    },
    {
        title: "Palestras Desportivas",
        description: "Conteúdo inspirador sobre superação, saúde, esporte e qualidade de vida para sua empresa ou evento.",
        image: "/images/servicos/palestras.jpg",
        action: "Contratar palestra"
    }
]

export default function ServicosPage() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <main className="bg-white min-h-screen">

            {/* ================= HERO BANNER SECTION ================= */}
            <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={bgHeroImage}
                        alt="Fernanda Rachid - Canoa Havaiana"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay Suave: Gradiente apenas na parte inferior para leitura do texto, mantendo a cor original da foto no topo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center" data-aos="fade-up">
                    <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-bold tracking-wider mb-4 uppercase backdrop-blur-md border border-white/30">
                        Fernanda Rachid
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                        Conecte-se com a <br /> Natureza e o Esporte
                    </h1>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
                        Experiências transformadoras através da Canoa Havaiana, educação e vivências ao ar livre.
                    </p>

                    <div className="mt-8">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá Fernanda, visitei o site e gostaria de saber mais sobre os serviços.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
                        >
                            <WhatsappLogo className="w-6 h-6" />
                            Agende sua Remada
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= GRID DE SERVIÇOS ================= */}
            <section className="py-20 relative bg-gray-50">

                <div className="container mx-auto px-4 relative z-10">

                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Escolha a modalidade ideal para você ou sua empresa e venha remar conosco.
                        </p>
                    </div>

                    {/* GRID LAYOUT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="h-full"
                            >
                                {/* CARD COMERCIAL */}
                                <div className="group h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">

                                    {/* 1. Imagem Limpa (Sem Ícones) */}
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${service.image})`, backgroundColor: '#e2e8f0' }}
                                        >
                                            {/* <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /> */}
                                        </div>
                                        {/* Overlay leve ao passar o mouse */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    </div>

                                    {/* 2. Conteúdo de Venda */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 mb-6 flex-grow text-sm leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Botão de Ação */}
                                        <div className="mt-auto">
                                            <a
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá Fernanda, tenho interesse em: ${service.title}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border-2 border-blue-600 text-blue-700 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                <span>{service.action}</span>
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