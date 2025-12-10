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
    CalendarCheck // Importei um ícone de calendário/check que combina com "Agendar"
} from 'lucide-react'

const services = [
    {
        title: "Aulas de Canoagem",
        description: "Domine a técnica do caiaque em águas calmas.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-canoagem-caiaque",
        icon: Waves,
        image: "/velocidade.jpg",
        color: "text-blue-400"
    },
    {
        title: "Canoa Havaiana (Va'a)",
        description: "Sincronia e cultura polinésia no lago.",
        href: "https://escolafernandarachid.com.br/c/aulas-de-vaa-canoa-havaiana",
        icon: Users,
        image: "/bgremo.webp",
        color: "text-cyan-400"
    },
    {
        title: "Kids & Teen",
        description: "Iniciação esportiva divertida para jovens.",
        href: "https://escolafernandarachid.com.br/c/aulas-kids-teen-canoagem-e-vaa",
        icon: Baby,
        image: "/paisefilhos.jpg",
        color: "text-orange-400"
    },
    {
        title: "Aulas Avulsas",
        description: "Experiência única para conhecer o esporte.",
        href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais",
        icon: Ticket,
        image: "/remandojunto.jpg",
        color: "text-purple-400"
    },
    {
        title: "Colônia de Férias",
        description: "Diversão e natureza nas férias escolares.",
        href: "https://escolafernandarachid.com.br/c/colonia-de-ferias",
        icon: Sun,
        image: "/colonia.png",
        color: "text-yellow-400"
    },
    {
        title: "Remando Juntos",
        description: "Inclusão e experiências em grupo.",
        href: "https://escolafernandarachid.com.br/c/remando-juntos",
        icon: HeartHandshake,
        image: "/caiaquecomunitario.jpg",
        color: "text-pink-400"
    },
    {
        title: "Guarderia",
        description: "Armazene seu equipamento com segurança.",
        href: "https://escolafernandarachid.com.br/c/guarderia-sup-caiaque-canoa",
        icon: Warehouse,
        image: "/guarderia.jpg",
        color: "text-emerald-400"
    },
    {
        title: "Loja Oficial",
        description: "Leve o estilo da canoagem com você.",
        href: "https://escolafernandarachid.com.br/c/loja-eu-remo-sorrindo",
        icon: ShoppingBag,
        image: "/suntech.jpg",
        color: "text-white"
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

    // Parallax do banner de fundo
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    return (
        <section ref={sectionRef} className="relative py-16 lg:py-24 px-4 overflow-hidden">

            {/* CSS para animações Mobile customizadas */}
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

            {/* --- BANNER DE FUNDO --- */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <Image
                        src="/bannerBg.jpg"
                        alt="Background"
                        fill
                        className="object-cover filter brightness-[0.35] blur-[3px]"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider text-blue-300 mb-4 uppercase backdrop-blur-md"
                    >
                        Nossos Serviços
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 lg:mb-6 drop-shadow-lg"
                    >
                        Comece a Remar Hoje
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg font-light leading-relaxed"
                    >
                        Escolha a modalidade ideal para você e garanta sua vaga agora mesmo através da nossa plataforma.
                    </motion.p>
                </div>

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
                                className="group relative block h-[260px] lg:h-[320px] w-full overflow-hidden rounded-3xl cursor-pointer border border-white/10 shadow-2xl bg-gray-900"
                            >
                                {/* --- IMAGEM DE FUNDO --- */}
                                <div className="absolute inset-0 h-full w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover mobile-scroll-anim lg:animate-none lg:object-top lg:transition-all lg:duration-[3000ms] lg:ease-linear lg:group-hover:object-bottom"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />

                                    {/* Overlay Gradiente */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 lg:to-transparent opacity-90 lg:opacity-80 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-0" />

                                    {/* Efeito Scanner (Luz) */}
                                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mobile-scanner-anim lg:animate-none">
                                        <div className="w-full h-[50%] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full lg:group-hover:translate-y-[250%] lg:transition-transform lg:duration-[1.5s] lg:ease-in-out" />
                                    </div>
                                </div>

                                {/* --- CONTEÚDO DO CARD --- */}
                                <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6 text-white z-30">

                                    {/* Topo: Ícone e Seta */}
                                    <div className="flex justify-between items-start">
                                        <div className={`p-2 lg:p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 ${service.color} lg:transition-all lg:duration-300 lg:group-hover:bg-white/20 lg:group-hover:scale-110 shadow-inner`}>
                                            <service.icon size={24} strokeWidth={1.5} className="text-white" />
                                        </div>

                                        {/* Seta: Sempre visível no mobile, anima no desktop */}
                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:transition-all lg:duration-300">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>

                                    {/* Base: Textos e Botão */}
                                    <div className="lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300">

                                        {/* Título e Descrição */}
                                        <div className="lg:transition-opacity lg:duration-300 lg:group-hover:opacity-0">
                                            <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 leading-tight group-hover:text-blue-300 transition-colors drop-shadow-md">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs lg:text-sm text-gray-300 line-clamp-2 leading-relaxed opacity-100">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Botão Mobile: AGENDAR */}
                                        <div className="flex lg:hidden items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-300 mt-3">
                                            <CalendarCheck size={14} /> {/* Ícone visual de agendamento */}
                                            <span>Agendar</span>
                                            <div className="h-0.5 w-8 bg-blue-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* OVERLAY EXCLUSIVO DESKTOP (Botão central no hover) */}
                                <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 backdrop-blur-[2px]">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white/30">
                                        <CalendarCheck size={18} />
                                        Agendar
                                    </div>
                                </div>

                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}