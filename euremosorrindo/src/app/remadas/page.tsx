'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
    Sun,
    Ticket,
    Users,
    Baby,
    Warehouse,
    HeartHandshake,
    ShoppingBag,
    Waves,
    ArrowRight,
    CalendarCheck,
    Star,
    Sparkles,
    CheckCircle2
} from 'lucide-react'

// --- 1. DADOS DOS SERVIÇOS (Mantidos) ---
// Criando arrays automáticos baseados na quantidade informada
const imagesCanoa = Array.from({ length: 7 }, (_, i) => `/AULAS/CANOA/canoa${i + 1}.jpg`)
const imagesJuvenil = Array.from({ length: 6 }, (_, i) => `/AULAS/JUVENIL/juvenil${i + 1}.png`)
const imagesCaiaque = Array.from({ length: 3 }, (_, i) => `/AULAS/CAIAQUE/caiaque${i + 1}.jpg`)

const services = [
    {
        id: 'canoagem',
        title: "Canoagem",
        description: "Oferecemos aulas de canoagem em caiaques individuais e duplos, atendendo desde praticantes iniciantes até níveis avançados. Aprendizagem progressiva e segura.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-canoagem-caiaque",
        icon: Waves,
        images: imagesCaiaque,
        color: "bg-blue-600",
        badge: "Iniciantes"
    },
    {
        id: 'vaa',
        title: "Va'a (Canoa Havaiana)",
        description: "As aulas acontecem em embarcações estáveis para até 12 pessoas, promovendo integração e ritmo coletivo. Conexão entre corpo, mente e a energia das águas.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-vaa-canoa-havaiana",
        icon: Users,
        images: imagesCanoa,
        color: "bg-cyan-500",
        badge: "Mais Popular"
    },
    {
        id: 'juvenil',
        title: "Infanto Juvenil",
        description: "Turmas exclusivas para crianças e adolescentes. Atividades adaptadas em caiaques ou canoas que estimulam o desenvolvimento físico e social de forma lúdica.",
        href: "https://escolafernandarachid.com.br/c/aulas-kids-teen-canoagem-e-vaa",
        icon: Baby,
        images: imagesJuvenil,
        color: "bg-orange-500",
        badge: "Kids & Teen"
    },
    {
        id: 'avulsas',
        title: "Aulas Avulsas",
        description: "Experimente a alegria de remar sem compromisso mensal. Agende sua aula experimental na canoa havaiana ou no caiaque e viva essa experiência.",
        href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais",
        icon: Ticket,
        images: ["/remandojunto.jpg"],
        color: "bg-purple-500",
        badge: "Experimente"
    },
    {
        id: 'colonia',
        title: "Colônia de Férias",
        description: "Diversão garantida e contato direto com a natureza nas férias escolares. Atividades monitoradas e seguras.",
        href: "https://escolafernandarachid.com.br/c/colonia-de-ferias",
        icon: Sun,
        images: ["/colonia.png"],
        color: "bg-yellow-500",
        badge: "Vagas Limitadas"
    },
    {
        id: 'remando',
        title: "Remando Juntos",
        description: "Projeto inclusivo focado em experiências em grupo, desenvolvimento social e superação através do esporte.",
        href: "https://escolafernandarachid.com.br/c/remando-juntos",
        icon: HeartHandshake,
        images: ["/caiaquecomunitario.jpg"],
        color: "bg-pink-500",
        badge: null
    },
    {
        id: 'guarderia',
        title: "Guarderia",
        description: "Local seguro e apropriado para armazenar seu equipamento. Tenha praticidade para remar quando quiser.",
        href: "https://escolafernandarachid.com.br/c/guarderia-sup-caiaque-canoa",
        icon: Warehouse,
        images: ["/guarderia.jpg"],
        color: "bg-emerald-500",
        badge: "Mensal"
    },
    {
        id: 'loja',
        title: "Loja Oficial",
        description: "Remos, acessórios e equipamentos de proteção solar. Leve o estilo da canoagem com você.",
        href: "https://escolafernandarachid.com.br/c/loja-eu-remo-sorrindo",
        icon: ShoppingBag,
        images: ["/suntech.jpg"],
        color: "bg-slate-500",
        badge: "Novidade"
    }
]

// --- COMPONENTE DE CARD COM SLIDESHOW INTERNO ---
function SalesCard({ service }: { service: typeof services[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Troca de imagem automática (Slideshow)
    useEffect(() => {
        if (service.images.length <= 1) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
        }, 4000) // Troca a cada 4 segundos

        return () => clearInterval(interval)
    }, [service.images.length])

    return (
        <Link
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[480px] w-full overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
        >
            {/* Badge (Etiqueta) */}
            {service.badge && (
                <div className="absolute top-4 left-4 z-40">
                    <span className={`
                        px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md
                        ${service.badge === 'Mais Popular'
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                            : 'bg-slate-900/60 border border-white/10'}
                    `}>
                        {service.badge === 'Mais Popular' && <Star size={10} className="inline mr-1 -mt-0.5 fill-white" />}
                        {service.badge}
                    </span>
                </div>
            )}

            {/* --- ÁREA DA IMAGEM (SLIDESHOW) --- */}
            <div className="absolute inset-0 h-[65%] w-full overflow-hidden bg-slate-800">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={service.images[currentImageIndex]}
                            alt={`${service.title} - Imagem ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority={service.id === 'canoagem' || service.id === 'vaa'}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Indicadores de Slide (Dots) */}
                {service.images.length > 1 && (
                    <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-center gap-1.5 pb-2">
                        {service.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                            />
                        ))}
                    </div>
                )}

                {/* Gradiente de transição Imagem -> Texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-100 z-10" />
            </div>

            {/* --- CONTEÚDO DO CARD --- */}
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-slate-950 via-slate-900 to-transparent p-6 flex flex-col justify-end z-30">

                {/* Ícone flutuante */}
                <div className={`
                    absolute top-0 right-6 p-3 rounded-2xl text-white shadow-lg transform -translate-y-1/2 group-hover:-translate-y-3 transition-transform duration-300
                    ${service.color}
                `}>
                    <service.icon size={24} strokeWidth={2} />
                </div>

                <div className="w-full flex-grow flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                        {service.description}
                    </p>
                </div>

                {/* Botão de Ação */}
                <div className="w-full mt-5">
                    <div className="w-full bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 hover:border-transparent py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-[1.02]">
                        <span>Reservar Agora</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

// --- COMPONENTE PRINCIPAL ---
export default function StoreGrid() {
    const sectionRef = useRef(null)

    // Efeito Parallax suave no vídeo de fundo
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 overflow-hidden bg-slate-950">

            {/* --- BACKGROUND VÍDEO --- */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <video
                        src="/bgfernanda3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30 blur-[2px]"
                    />
                    {/* Gradiente escuro para garantir leitura perfeita dos textos */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* --- CABEÇALHO DA SEÇÃO (NOVO TÍTULO ESTÁTICO) --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold uppercase tracking-[0.2em] shadow-lg mb-8"
                    >
                        <Sparkles size={14} className="text-cyan-400" />
                        Descubra seu potencial
                    </motion.div>

                    <h2 className="flex flex-col items-center justify-center">
                        {/* Linha Superior Menor */}
                        <span className="block text-slate-400 text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                            Viva experiências únicas
                        </span>

                        {/* Título Principal Gigante com Efeito de Highlight */}
                        <span className="relative block text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl leading-none z-10">
                            NA NATUREZA <br className="md:hidden" />
                            <span className="relative whitespace-nowrap">
                                E NO ESPORTE
                                {/* Efeito de Highlight/Brilho atrás do texto */}
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

                {/* --- GRID DE CARDS COM SLIDESHOW --- */}
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

                {/* --- RODAPÉ DA SEÇÃO --- */}
                <div className="mt-20 text-center border-t border-white/10 pt-10">
                    <p className="text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <CalendarCheck size={18} className="text-cyan-400" />
                            Agendamento online imediato
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle2 size={18} className="text-cyan-400" />
                            Pagamento seguro via plataforma
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}