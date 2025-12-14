'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
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
    Sparkles
} from 'lucide-react'

const services = [
    {
        title: "Aulas de Canoagem",
        description: "Domine a técnica do caiaque em águas calmas.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-canoagem-caiaque",
        icon: Waves,
        image: "/velocidade.jpg",
        color: "bg-blue-500",
        badge: "Iniciantes"
    },
    {
        title: "Canoa Havaiana (Va'a)",
        description: "Sincronia e cultura polinésia no lago.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-vaa-canoa-havaiana",
        icon: Users,
        image: "/bgremo.webp",
        color: "bg-cyan-500",
        badge: "Mais Popular"
    },
    {
        title: "Kids & Teen",
        description: "Iniciação esportiva divertida para jovens.",
        href: "https://escolafernandarachid.com.br/c/aulas-kids-teen-canoagem-e-vaa",
        icon: Baby,
        image: "/paisefilhos.jpg",
        color: "bg-orange-500",
        badge: null
    },
    {
        title: "Aulas Avulsas",
        description: "Experiência única para conhecer o esporte.",
        href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais",
        icon: Ticket,
        image: "/remandojunto.jpg",
        color: "bg-purple-500",
        badge: "Experimente"
    },
    {
        title: "Colônia de Férias",
        description: "Diversão e natureza nas férias escolares.",
        href: "https://escolafernandarachid.com.br/c/colonia-de-ferias",
        icon: Sun,
        image: "/colonia.png",
        color: "bg-yellow-500",
        badge: "Vagas Limitadas"
    },
    {
        title: "Remando Juntos",
        description: "Inclusão e experiências em grupo.",
        href: "https://escolafernandarachid.com.br/c/remando-juntos",
        icon: HeartHandshake,
        image: "/caiaquecomunitario.jpg",
        color: "bg-pink-500",
        badge: null
    },
    {
        title: "Guarderia",
        description: "Armazene seu equipamento com segurança.",
        href: "https://escolafernandarachid.com.br/c/guarderia-sup-caiaque-canoa",
        icon: Warehouse,
        image: "/guarderia.jpg",
        color: "bg-emerald-500",
        badge: "Mensal"
    },
    {
        title: "Loja Oficial",
        description: "Leve o estilo da canoagem com você.",
        href: "https://escolafernandarachid.com.br/c/loja-eu-remo-sorrindo",
        icon: ShoppingBag,
        image: "/suntech.jpg",
        color: "bg-slate-500",
        badge: "Novidade"
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function StoreGrid() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-28 px-4 overflow-hidden bg-slate-950">

            {/* RESTAURADO: Estilos globais para as animações de Scanner e Scroll */}
            <style jsx global>{`
                @keyframes mobileScroll {
                    0% { object-position: top; }
                    50% { object-position: bottom; }
                    100% { object-position: top; }
                }
                @keyframes scannerMove {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(250%); }
                }
                .mobile-scroll-anim {
                    animation: mobileScroll 8s ease-in-out infinite;
                }
                .mobile-scanner-anim {
                    animation: scannerMove 4s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>

            {/* Banner de Fundo */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <Image
                        src="/bannerBg.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-30 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 mb-6"
                    >
                        <Sparkles size={14} />
                        Experiências Exclusivas
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl"
                    >
                        Escolha Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Próxima Aventura</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        Garanta sua vaga online com segurança e praticidade.
                        Aulas, passeios e eventos para todos os níveis.
                    </motion.p>
                </div>

                {/* Grid de Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={item} className="h-full">
                            <Link
                                href={service.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block h-[380px] w-full overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
                            >
                                {/* Badge */}
                                {service.badge && (
                                    <div className="absolute top-4 left-4 z-40">
                                        <span className={`
                                            px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg
                                            ${service.badge === 'Mais Popular' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-slate-900/80 backdrop-blur-md border border-white/20'}
                                        `}>
                                            {service.badge === 'Mais Popular' && <Star size={10} className="inline mr-1 -mt-0.5 fill-white" />}
                                            {service.badge}
                                        </span>
                                    </div>
                                )}

                                {/* --- IMAGEM COM EFEITOS RESTAURADOS --- */}
                                <div className="absolute inset-0 h-[65%] w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        // AQUI ESTÁ A MÁGICA: mobile-scroll-anim e lg:group-hover:object-bottom
                                        className="object-cover mobile-scroll-anim lg:animate-none lg:object-top lg:transition-all lg:duration-[3000ms] lg:ease-linear lg:group-hover:object-bottom"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />

                                    {/* RESTAURADO: Efeito Scanner (Luz passando) */}
                                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mobile-scanner-anim lg:animate-none">
                                        <div className="w-full h-[50%] bg-gradient-to-b from-transparent via-white/30 to-transparent -translate-y-full lg:group-hover:translate-y-[250%] lg:transition-transform lg:duration-[1.5s] lg:ease-in-out" />
                                    </div>

                                    {/* Overlay para contraste */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-100" />
                                </div>

                                {/* Conteúdo e Botão */}
                                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-slate-900 via-slate-900 to-slate-900/90 p-6 flex flex-col justify-between items-start z-30">

                                    {/* Ícone flutuante */}
                                    <div className={`
                                        absolute -top-8 right-6 p-3 rounded-2xl text-white shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300
                                        ${service.color}
                                    `}>
                                        <service.icon size={24} strokeWidth={2} />
                                    </div>

                                    <div className="w-full">
                                        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="w-full mt-4">
                                        <div className="w-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 border border-white/10 hover:border-transparent text-white py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg">
                                            <span>Reservar Agora</span>
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                        <CalendarCheck size={16} />
                        Pagamento seguro e confirmação imediata via plataforma.
                    </p>
                </div>
            </div>
        </section>
    )
}