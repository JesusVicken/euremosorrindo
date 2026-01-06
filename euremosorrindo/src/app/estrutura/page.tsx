"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, CalendarCheck, ShieldCheck, Users, Mic, Anchor } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion, AnimatePresence } from "framer-motion"

// --- CONFIGURAÇÃO GERAL ---
const WHATSAPP_NUMBER = "5561984644698"
const HERO_BG = '/bgremo.webp'

// --- LISTA DE SERVIÇOS PARA O SLIDER DO BANNER ---
const heroSlides = [
    "REMANDO JUNTOS",
    "ALUGUEL DE EMBARCAÇÕES",
    "GUARDERIA",
    "PALESTRAS",
    "VIVÊNCIAS EM CANOA HAVAIANA"
]

// --- DADOS DOS SERVIÇOS (CARDS) ---
const servicesData = [
    {
        id: "guarderia",
        title: "Guarderia",
        icon: ShieldCheck,
        description: "Se você já possui sua própria embarcação e busca um local seguro para guardá-la, aqui é o lugar certo. Tenha a liberdade de utilizar sua canoa ou caiaque no dia e horário que quiser, com praticidade e tranquilidade.",
        images: [
            "/servicos/GUARDERIA/guarderia.jpg"
        ],
        action: "Solicitar Vaga"
    },
    {
        id: "aluguel",
        title: "Aluguel de Embarcações",
        icon: Anchor,
        description: "Funcionamos aos sábados, domingos e feriados, das 10h às 17h, com caiaques, SUPs e canoas para quem quer curtir o Lago Paranoá. Embarcações seguras, ideais para iniciantes e para quem busca novas experiências na água.",
        images: [
            "/servicos/ALUGUEL/aluguel1.jpg",
            "/servicos/ALUGUEL/aluguel2.jpg"
        ],
        action: "Reservar Embarcação"
    },
    {
        id: "remando-juntos",
        title: "Remando Juntos",
        icon: Users,
        description: "O Remando Juntos é um projeto inclusivo e personalizado voltado para pessoas neurodivergentes e/ou em situação de vulnerabilidade. Utilizamos a canoagem como ferramenta pedagógica, promovendo o desenvolvimento sensório-motor, social e emocional.",
        images: [
            "/servicos/REMANDOJUNTOS/remando1.jpg",
            "/servicos/REMANDOJUNTOS/remando2.jpg",
            "/servicos/REMANDOJUNTOS/remando3.jpg",
            "/servicos/REMANDOJUNTOS/remando4.jpg"
        ],
        action: "Conhecer o Projeto"
    },
    {
        id: "vivencias",
        title: "Vivências em Canoa Havaiana",
        icon: Users,
        description: "Indicadas para grupos e organizações corporativas, as vivências são planejadas de acordo com os objetivos de cada grupo, explorando a cultura dos povos tradicionais e o simbolismo das canoas polinésias, fortalecendo conexão e propósito coletivo.",
        images: [
            "/vivenciacanoa.jpg",
            "/bgfernanda2.webp",
            "/parceria.jpg",
            "/fernanda.webp",
        ],
        action: "Agendar Vivência"
    },
    {
        id: "palestras",
        title: "Palestras",
        icon: Mic,
        description: "Fernanda Rachid reúne formação acadêmica e trajetória inspiradora. Suas palestras abordam a carreira iniciada no esporte aos 34 anos, empreendedorismo social, a criação de uma escola ao ar livre e o impacto do Projeto Remando Juntos.",
        images: [
            "/servicos/PALESTRAS/palestra1.jpg",
            "/servicos/PALESTRAS/palestra2.jpg",
            "/servicos/PALESTRAS/palestra3.jpg",
            "/servicos/PALESTRAS/palestra4.jpg",
            "/servicos/PALESTRAS/palestra5.jpg",
            "/servicos/PALESTRAS/palestra6.jpg",
        ],
        action: "Contratar Palestra"
    },
    {
        id: "colonia",
        title: "Colônia de Férias",
        icon: CalendarCheck,
        description: "Momentos inesquecíveis para as crianças! Nossa colônia de férias une diversão, aprendizado e contato direto com a natureza, proporcionando experiências seguras e educativas no Lago Paranoá.",
        images: [
            "/servicos/COLONIA/colonia1.png",
            "/servicos/COLONIA/colonia2.png",
            "/servicos/COLONIA/colonia3.jpg",
            "/servicos/COLONIA/colonia4.jpg",
            "/servicos/COLONIA/colonia5.jpg",
            "/servicos/COLONIA/colonia6.jpg",
            "/servicos/COLONIA/colonia7.png",
            "/servicos/COLONIA/colonia8.png",
            "/servicos/COLONIA/colonia9.png",
            "/servicos/COLONIA/colonia10.png",
            "/servicos/COLONIA/colonia11.png"
        ],
        action: "Ver Próxima Turma"
    },
    {
        id: "FacilitacaoModeracao",
        title: "Facilitação e Moderação",
        icon: Users,
        description: "Criamos experiências únicas de facilitação e moderação para transformar a dinâmica de sua equipe. Utilizando metodologias colaborativas e vivências simbólicas, construímos ambientes seguros e catalisadores que promovem o alinhamento, fortalecem a confiança e despertam um propósito coletivo claro e engajador. Mais do que um workshop, é um processo estratégico para navegar desafios e alcançar objetivos comuns.",
        images: [
            "/images/servicos/facilitacao.jpg",
            "/images/servicos/facilitacao1.jpg",
            "/images/servicos/facilitacao2.jpg",
            "/images/servicos/facilitacao3.jpg",
        ],
        action: "Criar uma Experiência Única"
    },
]

// --- COMPONENTE DO CARD DE SERVIÇO ---
function ServiceCard({ service, index }: { service: typeof servicesData[0], index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const hasMultipleImages = service.images.length > 1

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)
    }

    return (
        <div
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 h-full"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            {/* --- ÁREA DA IMAGEM (GALERIA) --- */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                {/* Imagem Atual */}
                <div className="relative w-full h-full">
                    <Image
                        src={service.images[currentImageIndex]}
                        alt={`${service.title} imagem ${currentImageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay suave */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Controles de Navegação (Só aparece se tiver > 1 foto) */}
                {hasMultipleImages && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 shadow-md"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 shadow-md"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Indicador de Quantidade */}
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-10">
                            {currentImageIndex + 1} / {service.images.length}
                        </div>
                    </>
                )}

                {/* Badge/Ícone Flutuante */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm text-blue-600">
                    <service.icon size={20} />
                </div>
            </div>

            {/* --- CONTEÚDO --- */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description}
                </p>

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá Fernanda, gostaria de saber mais sobre: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-50 text-gray-700 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-200 hover:border-blue-600 group/btn shadow-sm hover:shadow-md"
                >
                    <WhatsappLogo className="w-5 h-5 text-green-600 group-hover/btn:text-white transition-colors" />
                    <span>{service.action}</span>
                    <ChevronRight size={16} className="opacity-0 group-hover/btn:opacity-100 -ml-2 group-hover/btn:ml-0 transition-all" />
                </a>
            </div>
        </div>
    )
}

// --- PÁGINA PRINCIPAL ---
export default function ServicosPage() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        AOS.init({ duration: 800, once: true })

        // Timer para rodar o slider de texto
        const timer = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)
        }, 3500) // Troca a cada 3.5 segundos

        return () => clearInterval(timer)
    }, [])

    return (
        <main className="bg-white min-h-screen">

            {/* ================= HERO BANNER ================= */}
            <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={HERO_BG}
                        alt="Fernanda Rachid - Serviços"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-10" data-aos="fade-up">

                    <span className="text-orange-400 font-bold tracking-[0.2em] text-sm md:text-base mb-6 uppercase border border-orange-400/30 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
                        Conheça nossos serviços
                    </span>

                    {/* SLIDER DE TEXTO ANIMADO */}
                    <div className="min-h-[120px] md:min-h-[180px] flex items-center justify-center max-w-5xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentSlideIndex}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl"
                            >
                                {heroSlides[currentSlideIndex]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md mt-6 opacity-90">
                        Conecte-se com a natureza, esporte e bem-estar.
                    </p>

                    <div className="mt-10">
                        <button
                            onClick={() => document.getElementById('lista-servicos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="animate-bounce p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer text-white"
                        >
                            <ChevronRight className="rotate-90" size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= LISTA DE SERVIÇOS ================= */}
            <section id="lista-servicos" className="py-20 bg-gray-50 relative">
                {/* Elemento Decorativo de Fundo */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-gray-50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}