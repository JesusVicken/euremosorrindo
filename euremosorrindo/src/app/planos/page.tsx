'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, Target, Award, Heart } from "lucide-react"
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Dados dos parceiros
const brands = [
    {
        name: "Rumo",
        logo: "/rumo.webp",
        description: "Empresa especializada em equipamentos esportivos aquáticos",
        category: "Equipamentos",
        since: "2020"
    },
    {
        name: "Fundação Baúminas",
        logo: "/bauminas.jpg",
        description: "Fundação dedicada ao desenvolvimento esportivo e social",
        category: "Social",
        since: "2019"
    },
    {
        name: "Remo Brasília",
        logo: "/remobrasilia.jpg",
        description: "Clube de remo tradicional de Brasília",
        category: "Esportivo",
        since: "2018"
    },
    {
        name: "Canoe Brasil",
        logo: "/canoe.jpg",
        description: "Fabricante nacional de caiaques e canoas",
        category: "Equipamentos",
        since: "2021"
    },
    {
        name: "Salute Nutrição Esportiva",
        logo: "/salute.jpg",
        description: "Consultoria em nutrição para atletas",
        category: "Saúde",
        since: "2022"
    },
]

const benefits = [
    {
        icon: Users,
        title: "Rede Colaborativa",
        description: "Conexão com profissionais e entidades do meio esportivo"
    },
    {
        icon: Target,
        title: "Metas Alcançadas",
        description: "Juntos conquistamos resultados extraordinários"
    },
    {
        icon: Award,
        title: "Reconhecimento",
        description: "Visibilidade e credibilidade no mercado"
    },
    {
        icon: Heart,
        title: "Propósito Compartilhado",
        description: "Unidos por valores e objetivos comuns"
    }
]

export default function ParceirosPage() {
    const whatsappNumber = "61999674507"
    const whatsappMessage = "Olá! Gostaria de mais informações sobre como ser um parceiro do Eu Remo Sorrindo."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        // Animação dos cards de parceiros
        gsap.fromTo('.partner-card',
            {
                opacity: 0,
                y: 60,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: '.partner-card',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação dos benefícios
        gsap.fromTo('.benefit-card',
            {
                opacity: 0,
                x: -50
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.benefit-card',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação de contagem
        const counters = document.querySelectorAll('.counter')
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target')!
            const duration = 2000
            const steps = 60
            const increment = target / steps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                    counter.textContent = target.toString()
                    clearInterval(timer)
                } else {
                    counter.textContent = Math.floor(current).toString()
                }
            }, duration / steps)
        })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-700/90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Elementos decorativos */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                </div>

                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                                <span className="text-sm font-semibold text-white/90">Parcerias que Transformam</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                            Nossos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Parceiros</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8">
                            Juntos construímos uma rede de excelência no esporte,
                            unindo forças para promover a canoagem e transformar vidas.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
                                size="lg"
                            >
                                Seja Nosso Parceiro
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                        animate={{
                            y: [0, 10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Estatísticas */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: 5, label: "Parceiros Ativos", suffix: "+" },
                            { number: 4, label: "Anos de Parceria", suffix: "+" },
                            { number: 50, label: "Projetos Realizados", suffix: "+" },
                            { number: 1000, label: "Vidas Impactadas", suffix: "+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                                    <span className="counter" data-target={stat.number}>0</span>{stat.suffix}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parceiros */}
            <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Conheça Nossos Parceiros
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Empresas e organizações que compartilham nossa paixão pelo esporte
                        e juntos construímos um legado na canoagem brasileira.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            className="partner-card group"
                        >
                            <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:scale-105">
                                <CardContent className="p-8">
                                    {/* Logo */}
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 group-hover:scale-110 transition-transform duration-300">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                width={120}
                                                height={60}
                                                quality={100}
                                                className="object-contain"
                                                style={{
                                                    width: "auto",
                                                    height: "auto",
                                                    maxWidth: "120px",
                                                    maxHeight: "60px",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Informações */}
                                    <div className="text-center space-y-4">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {brand.name}
                                        </h3>

                                        <div className="flex justify-center gap-2">
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                {brand.category}
                                            </span>
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Desde {brand.since}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed">
                                            {brand.description}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex justify-center items-center gap-1 text-amber-500">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-current" />
                                            ))}
                                            <span className="text-sm text-gray-500 ml-1">5.0</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefícios da Parceria */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Vantagens de Ser Nosso Parceiro
                        </h2>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Uma parceria que vai além do negócio, criando valor para todos os envolvidos.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                className="benefit-card"
                            >
                                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden h-full hover:bg-white/15 transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <div className="flex justify-center mb-4">
                                            <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                <benefit.icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 lg:py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Vamos Construir Juntos?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Se sua empresa compartilha nossos valores e quer fazer parte
                            dessa jornada, entre em contato e vamos conversar!
                        </p>

                        <Button
                            onClick={() => window.open(whatsappLink, '_blank')}
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
                            size="lg"
                        >
                            Iniciar Parceria
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}