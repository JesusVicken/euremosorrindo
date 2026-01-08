'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { X, FileText, CheckCircle } from 'lucide-react' // Adicionei ícones novos

// --- 1. DEFINIÇÃO MANUAL DAS IMAGENS ---
const imagesCaiaque = [
    "/AULAS/CAIAQUE/caiaque1.jpg",
    "/AULAS/CAIAQUE/caiaque2.jpg",
    "/AULAS/CAIAQUE/caiaque3.jpg"
]

const imagesCanoa = [
    "/AULAS/CANOA/canoa1.jpg",
    "/AULAS/CANOA/canoa2.jpg",
    "/AULAS/CANOA/canoa3.jpg",
    "/AULAS/CANOA/canoa4.jpg",
    "/AULAS/CANOA/canoa5.jpg",
    "/AULAS/CANOA/canoa6.jpg",
    "/AULAS/CANOA/canoa7.jpg"
]

const imagesJuvenil = [
    "/AULAS/JUVENIL/juvenil2.png",
    "/AULAS/JUVENIL/juvenil3.png",
    "/AULAS/JUVENIL/juvenil4.png",
    "/AULAS/JUVENIL/juvenil5.png",
    "/AULAS/JUVENIL/juvenil6.png",
    "/AULAS/JUVENIL/juvenil7.png"
]

const imagesRemandoJuntos = [
    "/AULAS/REMANDOJUNTOS/remandojuntos1.jpeg",
    "/AULAS/REMANDOJUNTOS/remandojuntos2.jpeg",
    "/AULAS/REMANDOJUNTOS/remandojuntos3.jpeg",
    "/AULAS/REMANDOJUNTOS/remandojuntos4.jpeg",
]

// --- 2. DADOS DOS SERVIÇOS ---
const services = [
    {
        id: 'canoagem',
        title: "Canoagem",
        description: "Oferecemos aulas de canoagem em caiaques individuais e duplos, atendendo desde praticantes iniciantes até níveis avançados. As atividades utilizam diversos modelos de embarcações, permitindo uma aprendizagem progressiva, segura e adequada às diferentes idades, objetivos e níveis de experiência.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-canoagem-caiaque",
        images: imagesCaiaque,
        color: "bg-blue-600",
        badge: "Iniciantes"
    },
    {
        id: 'vaa',
        title: "Canoa Havaiana VA'A",
        description: "As aulas de canoa havaiana acontecem em embarcações estáveis, com capacidade para até 12 pessoas remando simultaneamente, promovendo integração, cooperação e ritmo coletivo. A prática fortalece a conexão entre corpo e mente, em sintonia com a energia das águas.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-vaa-canoa-havaiana",
        images: imagesCanoa,
        color: "bg-cyan-500",
        badge: "Mais Popular"
    },
    {
        id: 'juvenil',
        title: "Turmas Infanto Juvenil",
        description: "Turmas exclusivas para crianças e adolescentes, realizadas em caiaques ou canoas havaianas, com atividades adaptadas que estimulam o desenvolvimento físico, social e emocional de forma segura e lúdica.",
        href: "https://escolafernandarachid.com.br/c/aulas-kids-teen-canoagem-e-vaa",
        images: imagesJuvenil,
        color: "bg-orange-500",
        badge: "Kids & Teen"
    },
    {
        id: 'avulsas',
        title: "Aulas Avulsas",
        description: "Aulas avulsas para você experimentar a alegria de remar em grupo ou individualmente. Agende sua aula experimental na canoa havaiana ou no caiaque e viva essa experiência única na água.",
        href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais",
        images: ["/remandojunto.jpg", "/bgremo.webp"],
        color: "bg-purple-500",
        badge: "Experimente"
    },
    {
        id: 'colonia',
        title: "Colônia de Férias",
        description: "Indicadas para grupos e organizações corporativas, as vivências são planejadas de acordo com os objetivos de cada grupo, explorando a cultura dos povos tradicionais e o simbolismo das canoas polinésias, fortalecendo a conexão, cooperação e propósito coletivo",
        href: "https://escolafernandarachid.com.br/c/colonia-de-ferias",
        images: ["/colonia1.png"],
        color: "bg-yellow-500",
        badge: "Vagas Limitadas"
    },
    {
        id: 'remando',
        title: "Remando Juntos",
        description: "O Remando Juntos é um projeto inclusivo e personalizado voltado para pessoas neuro divergentes e/ou em situação de vulnerabilidade e grupos, que utiliza a canoagem em caiaques e canoas havaianas, como ferramenta pedagógica.",
        href: "https://escolafernandarachid.com.br/c/remando-juntos",
        images: imagesRemandoJuntos,
        color: "bg-pink-500",
        badge: null
    },
    {
        id: 'guarderia',
        title: "Aluguel de Embarcações",
        description: "Local seguro e apropriado para armazenar seu equipamento. Tenha praticidade para remar quando quiser.",
        href: "https://escolafernandarachid.com.br/c/guarderia-sup-caiaque-canoa",
        images: ["/guarderia.jpg"],
        color: "bg-emerald-500",
        badge: "Mensal"
    },
    {
        id: 'loja',
        title: "Loja Oficial",
        description: "Remos, acessórios e equipamentos de proteção solar. Leve o estilo da canoagem com você.",
        href: "/produtos",
        images: ["/LojaOficial.jpg"],
        color: "bg-slate-500",
        badge: "Novidade"
    }
]

// --- COMPONENTE DE CARD COM SLIDESHOW E HOVER REVEAL ---
function SalesCard({ service }: { service: typeof services[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const isExternal = service.href.startsWith('http')

    useEffect(() => {
        if (!service.images || service.images.length <= 1) return
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [service.images])

    const currentImage = service.images && service.images.length > 0 ? service.images[currentImageIndex] : null

    return (
        <Link
            href={service.href}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group relative block h-[500px] w-full overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
        >
            {service.badge && (
                <div className="absolute top-4 left-4 z-40">
                    <span className={`
                        px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md
                        ${service.badge === 'Mais Popular'
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                            : 'bg-slate-900/60 border border-white/10'}
                    `}>
                        {service.badge}
                    </span>
                </div>
            )}

            <div className="absolute inset-0 h-full w-full bg-slate-800 transition-transform duration-700 group-hover:scale-110">
                <AnimatePresence mode="wait">
                    {currentImage && (
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={currentImage}
                                alt={`${service.title} - Imagem`}
                                fill
                                className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-60"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                priority={service.id === 'canoagem' || service.id === 'vaa'}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {service.images && service.images.length > 1 && (
                    <div className="absolute top-4 right-4 z-30 flex justify-end gap-1.5">
                        {service.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1 bg-white/40'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60 group-hover:opacity-90 group-hover:via-slate-950/80 transition-all duration-500 z-10" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                        {service.title}
                    </h3>
                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 transition-all duration-500 ease-in-out delay-75">
                        <p className="text-sm text-slate-200 leading-relaxed pb-6 drop-shadow-md">
                            {service.description}
                        </p>
                    </div>
                    <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="w-full bg-white text-slate-900 hover:bg-cyan-400 font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wide text-center transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                            {service.id === 'loja' ? 'Ver Produtos' : 'Reservar Agora'}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

// --- COMPONENTE PRINCIPAL ---
export default function StoreGrid() {
    const sectionRef = useRef(null)
    const [isPlanosOpen, setIsPlanosOpen] = useState(false) // Estado para o modal de planos

    // Configuração do Scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    // Parallax
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 overflow-hidden bg-slate-950">

            {/* --- BANNER VÍDEO --- */}
            <div className="absolute top-0 left-0 w-full h-[700px] z-0 pointer-events-none overflow-hidden">
                <motion.div style={{ y }} className="relative w-full h-full">
                    <video
                        src="/bgfernanda3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* --- CABEÇALHO --- */}
                <div className="text-center mb-20 pt-10">
                    <h2 className="flex flex-col items-center justify-center">
                        <span className="block text-slate-400 text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                            Conecte-se com
                        </span>
                        <span className="relative block text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl leading-none z-10">
                            A NATUREZA <br className="md:hidden" />
                            <span className="relative whitespace-nowrap">
                                E O ESPORTE
                                <span className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-[30%] bg-gradient-to-r from-blue-600/50 via-cyan-500/50 to-blue-600/50 -z-10 blur-xl opacity-80 rounded-full"></span>
                            </span>
                        </span>
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 max-w-2xl mx-auto"
                    >
                        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed px-4 drop-shadow">
                            Aulas, passeios e eventos para todos os níveis. <br className="hidden md:block" />
                            Garanta sua vaga online com segurança e praticidade.
                        </p>
                    </motion.div>
                </div>

                {/* --- GRID DE CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0">
                    <AnimatePresence>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className="h-full"
                            >
                                <SalesCard service={service} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- SEÇÃO DE PLANOS E VALORES (NOVA) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 md:p-12 text-center shadow-2xl">
                        {/* Efeito de brilho no fundo */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-bold uppercase tracking-wider mb-6">
                                <FileText size={16} />
                                Transparência Total
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Confira nossos Planos e Valores
                            </h3>

                            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
                                Temos opções flexíveis para você começar hoje mesmo.
                                Mensalidades, aulas avulsas e pacotes especiais para grupos.
                            </p>

                            <button
                                onClick={() => setIsPlanosOpen(true)}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            >
                                Ver Tabela de Preços
                                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* --- RODAPÉ DA SEÇÃO --- */}
                <div className="mt-20 text-center border-t border-white/10 pt-10">
                    <p className="text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle size={16} className="text-cyan-400" />
                            Agendamento online imediato
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle size={16} className="text-cyan-400" />
                            Pagamento seguro via plataforma
                        </span>
                    </p>
                </div>
            </div>

            {/* --- MODAL / LIGHTBOX DE PLANOS --- */}
            <AnimatePresence>
                {isPlanosOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsPlanosOpen(false)} // Fecha ao clicar no fundo
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-50"
                            onClick={() => setIsPlanosOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
                            className="relative w-full max-w-lg h-[80vh] md:h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <Image
                                src="/cards/planos.jpeg"
                                alt="Tabela de Planos e Valores"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}