'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Logos dos parceiros (ajuste os caminhos conforme necessário)
const brands = [
    { name: "Rumo", logo: "/rumo.webp" },
    { name: "Fundação Baúminas", logo: "/bauminas.jpg" },
    { name: "Remo Brasília", logo: "/remobrasilia.jpg" },
    { name: "Canoe Brasil", logo: "/canoe.jpg" },
    { name: "Salute Nutrição Esportiva", logo: "/salute.jpg" },
]

export default function ContatoPage() {
    const whatsappNumber = "61999674507"
    const whatsappMessage = "Olá! Visitei o site da Eu Remo Sorrindo e gostaria de mais informações sobre as aulas e experiências."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true
        })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
            {/* Hero Section com Banner */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/bgremo.webp"
                        alt="Canoagem no Lago Paranoá - Eu Remo Sorrindo"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-cyan-700/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
                    >
                        Entre em Contato
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                    >
                        Vamos remar juntos! Entre em contato e descubra as melhores experiências de canoagem no Lago Paranoá.
                    </motion.p>
                </div>
            </section>

            {/* Seção de Informações de Contato */}
            <section className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Informações de Contato */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                                Vamos Conversar
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Estamos aqui para tirar todas suas dúvidas sobre aulas, passeios
                                e experiências de canoagem. Entre em contato e vamos remar juntos!
                            </p>
                        </motion.div>

                        {/* Cards de Informação */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-100 rounded-xl">
                                                <Phone className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h3>
                                                <p className="text-gray-600">(61) 99967-4507</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-green-100 rounded-xl">
                                                <WhatsappLogo className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h3>
                                                <p className="text-gray-600">(61) 99967-4507</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-cyan-100 rounded-xl">
                                                <MapPin className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">Localização</h3>
                                                <p className="text-gray-600">
                                                    ASSTJ – Setor de Clubes Sul, TR1<br />
                                                    Brasília - DF
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-purple-100 rounded-xl">
                                                <Clock className="w-6 h-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">Horários</h3>
                                                <p className="text-gray-600">Segunda a Domingo - 6h às 18h</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Botão WhatsApp Principal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                                size="lg"
                            >
                                <WhatsappLogo className="w-6 h-6 mr-3" />
                                Fale Conosco no WhatsApp
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mapa */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Localização</h3>
                                <p className="text-gray-600 mb-6">
                                    Estamos localizados na ASSTJ, no Setor de Clubes Sul,
                                    oferecendo fácil acesso e uma vista incrível do Lago Paranoá.
                                </p>
                            </div>
                            <div className="w-full h-80 md:h-96 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10 pointer-events-none"></div>
                                <iframe
                                    title="Localização Eu Remo Sorrindo na ASSTJ"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.123456789012!2d-47.933307724014!3d-15.793466137997992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a309c8b61b5f7%3A0x1b3cb3b41a4d501a!2sASSTJ%20-%20Associa%C3%A7%C3%A3o%20dos%20Servidores%20do%20STJ%20e%20do%20CJF!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                    Siga Nossas Aventuras
                                </h3>
                                <p className="text-gray-600 text-center mb-6">
                                    Acompanhe nossas experiências e novidades nas redes sociais
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://www.instagram.com/euremosorrindo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <InstagramLogo className="w-6 h-6 text-white" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/euremosorrindo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <FacebookLogo className="w-6 h-6 text-white" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@euremosorrindo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                        className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <YoutubeLogo className="w-6 h-6 text-white" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Seção de Parceiros */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">Nossos Parceiros</h2>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Empresas e organizações que acreditam no nosso trabalho e nos ajudam
                            a proporcionar as melhores experiências em canoagem
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {brands.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={150}
                                    height={80}
                                    quality={100}
                                    className="object-contain"
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        maxWidth: "150px",
                                        maxHeight: "80px",
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}