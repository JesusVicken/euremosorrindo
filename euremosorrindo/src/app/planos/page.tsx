'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, Target, Award, Heart, TrendingUp, Shield, Zap, ExternalLink, Crown } from "lucide-react"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const brands = [
    {
        name: "Fundação Bauminas",
        logo: "/bauminas.jpg",
        description: "Fundação dedicada ao desenvolvimento esportivo, cultural e social",
        category: "Social",
        url: "https://fundacaobauminas.org.br/"
    },
    {
        name: "Rumo Custom Paddles",
        logo: "/rumo.webp",
        description: "Empresa especializada em equipamentos esportivos aquáticos de alta performance",
        category: "Equipamentos",
        url: "https://www.rumobrasil.com.br/"
    },
    {
        name: "Canoe Brasil",
        logo: "/canoe.jpg",
        description: "Fabricante nacional referência em caiaques e canoas",
        category: "Equipamentos",
        url: "https://www.canoe.com.br/"
    },
    {
        name: "Nenutrição",
        logo: "/nenutricao.webp",
        description: "Nutrição especializada para alta performance e saúde",
        category: "Saúde",
        url: "https://www.nenutricao.com.br/"
    },
    {
        name: "ACKC Brasília",
        logo: "/ackc.jpg",
        description: "Associação de Canoagem Caiakagem Brasília - Fomento ao esporte local",
        category: "Esportivo",
        url: "https://www.instagram.com/caiakagem/"
    },
    {
        name: "ASSTJ",
        logo: "/asstj.png",
        description: "Associação dos Servidores do Superior Tribunal de Justiça e do Conselho da Justiça Federal",
        category: "Institucional",
        url: "https://www.asstj.org.br/index.html"
    },
    {
        name: "Cerrado Experience",
        logo: "/cerrado.png",
        description: "Experiências únicas de ecoturismo no Cerrado",
        category: "Turismo",
        url: "https://cerradoexperience.com.br/"
    },
    {
        name: "Retrilhar",
        logo: "/retrilhar.jpg",
        description: "Agência de turismo de aventura e ecoturismo em Brasília",
        category: "Esportivo",
        url: "https://retrilhar.com.br/"
    },
    {
        name: "APAE-DF",
        logo: "/apae.jpg",
        description: "Associação de Pais e Amigos dos Excepcionais do Distrito Federal",
        category: "Social",
        url: "https://apaedf.org.br/"
    }
]

const benefits = [
    {
        icon: Users,
        title: "Rede Colaborativa",
        description: "Conexão estratégica com profissionais, atletas e instituições do cenário esportivo nacional",
        gradient: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        features: ["Networking exclusivo", "Parcerias estratégicas", "Acesso a eventos"]
    },
    {
        icon: Target,
        title: "Resultados Mensuráveis",
        description: "Métricas claras de performance e impacto social com relatórios trimestrais",
        gradient: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
        features: ["KPIs personalizados", "ROI transparente", "Relatórios detalhados"]
    },
    {
        icon: Award,
        title: "Visibilidade de Marca",
        description: "Exposição multiplataforma e associação a valores positivos do esporte",
        gradient: "from-amber-500 to-orange-500",
        bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
        features: ["Branding em eventos", "Mídias sociais", "Conteúdo exclusivo"]
    },
    {
        icon: Heart,
        title: "Impacto Social",
        description: "Contribuição direta para o desenvolvimento esportivo e inclusão social",
        gradient: "from-rose-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
        features: ["Projetos sociais", "Inclusão esportiva", "Transformação comunitária"]
    },
    {
        icon: TrendingUp,
        title: "Crescimento",
        description: "Oportunidades de negócio e expansão no mercado esportivo",
        gradient: "from-purple-500 to-violet-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
        features: ["Novos mercados", "Oportunidades B2B", "Expansão de portfólio"]
    },
    {
        icon: Shield,
        title: "Credibilidade",
        description: "Associação a uma marca reconhecida e respeitada no esporte nacional",
        gradient: "from-slate-700 to-slate-900",
        bgColor: "bg-gradient-to-br from-slate-100 to-slate-200",
        features: ["Reputação sólida", "Confiança do mercado", "Excelência comprovada"]
    }
]

export default function ParceirosPage() {
    const whatsappNumber = "61999674507"
    const whatsappMessage = "Olá! Vi no site e gostaria de mais informações sobre como ser um parceiro do Eu Remo Sorrindo."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        gsap.fromTo('.partner-card',
            { opacity: 0, y: 60, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: { trigger: '.partner-card', start: 'top 85%' }
            }
        )

        gsap.fromTo('.benefit-card',
            { opacity: 0, y: 30, rotateX: -15 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.2)",
                scrollTrigger: { trigger: '.benefit-card', start: 'top 90%' }
            }
        )
    }, [])

    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO COM VÍDEO */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/parceria.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/entrepontes.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-cyan-700/30" />

                {/* Conteúdo */}
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl text-center text-white"
                    >

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tight">
                            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                                NOSSOS
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                                PARCEIROS
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            Marcas que acreditam no poder transformador do esporte
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                size="lg"
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="rounded-2xl px-12 py-7 text-lg font-semibold bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Zap className="mr-2 h-5 w-5" />
                                Seja Nosso Parceiro
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
                    </div>
                </motion.div>
            </section>

            {/* PARCEIROS (COM LINKS) */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Nossas Alianças</span>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Empresas que Acreditam em <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nossa Missão</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Conheça as organizações que fazem parte da nossa rede de transformação esportiva
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map((brand, index) => {
                        const isFeatured = brand.name === "Fundação Bauminas";

                        return (
                            <div key={index} className="partner-card h-full">
                                <Link
                                    href={brand.url}
                                    target={brand.url !== "#" ? "_blank" : "_self"}
                                    className={`block h-full cursor-pointer group ${brand.url === "#" ? "cursor-default" : ""}`}
                                >
                                    <Card className={`
                                        rounded-3xl transition-all duration-300 transform group-hover:-translate-y-2 h-full relative overflow-visible
                                        ${isFeatured
                                            ? "border-2 border-blue-500 shadow-blue-200/50 shadow-2xl bg-gradient-to-b from-blue-50/50 to-white scale-[1.02] z-10"
                                            : "border border-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.01]"
                                        }
                                    `}>
                                        {/* SELO DE DESTAQUE */}
                                        {isFeatured && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold tracking-wide z-20 whitespace-nowrap">
                                                <Crown className="w-4 h-4 fill-white" />
                                                Parceiro
                                            </div>
                                        )}

                                        <CardContent className="p-8 h-full flex flex-col pt-10">

                                            {brand.url !== "#" && (
                                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <ExternalLink className={`w-5 h-5 ${isFeatured ? "text-blue-600" : "text-blue-500"}`} />
                                                </div>
                                            )}

                                            <div className="flex flex-col items-center text-center h-full">
                                                
                                                <div className={`relative mb-8 shrink-0 ${isFeatured ? "w-64 h-64" : "w-48 h-24"}`}>
                                                    <Image
                                                        src={brand.logo}
                                                        alt={brand.name}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 300px) 100vw, 300px"
                                                    />
                                                </div>

                                                <div className="flex justify-center mb-6 shrink-0">
                                                    <span className={`
                                                        px-3 py-1 rounded-full text-sm font-medium transition-colors
                                                        ${isFeatured
                                                            ? "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                                                            : "bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                                                        }
                                                    `}>
                                                        {brand.category}
                                                    </span>
                                                </div>

                                                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isFeatured ? "text-blue-900" : "text-slate-800 group-hover:text-blue-700"}`}>
                                                    {brand.name}
                                                </h3>
                                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm group-hover:text-slate-700">
                                                    {brand.description}
                                                </p>

                                                <div className="flex flex-col items-center mt-auto">
                                                    <div className="flex items-center justify-center gap-1 text-amber-400 group-hover:text-amber-500 transition-colors mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-5 h-5 fill-current ${isFeatured ? "text-amber-500" : ""}`} />
                                                        ))}
                                                    </div>
                                                    <span className={`text-xs ${isFeatured ? "text-blue-500 font-semibold" : "text-slate-400 group-hover:text-slate-500"}`}>
                                                        {isFeatured ? "Parceria Estratégica" : "Parceria Confirmada"}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                            <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">Vantagens Exclusivas</span>
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Por que ser nosso <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Parceiro?</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Oferecemos mais que uma parceria - criamos uma relação estratégica que gera valor para todos
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="benefit-card h-full"
                            >
                                <Card className={`rounded-3xl border-0 overflow-hidden h-full transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${benefit.bgColor}`}>
                                    <CardContent className="p-8 h-full flex flex-col">
                                        <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} w-14 h-14 flex items-center justify-center shadow-lg`}>
                                            <benefit.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 flex-grow">
                                            {benefit.description}
                                        </p>
                                        <div className="space-y-3">
                                            {benefit.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
                                                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-slate-200/50">
                                            <div className={`h-1 rounded-full w-12 bg-gradient-to-r ${benefit.gradient}`} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-24 text-center"
                    >
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg text-slate-300 mb-10">
                                Entre em contato para uma conversa estratégica sobre como sua marca pode fazer parte desta jornada
                            </p>
                            <Button
                                size="lg"
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="rounded-2xl px-12 py-7 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-300"
                            >
                                <Zap className="mr-3 h-6 w-6" />
                                Iniciar Parceria
                            </Button>
                            <p className="text-slate-400 text-sm mt-6">
                                Respondemos em até 24 horas úteis
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
        </div>
    )
}