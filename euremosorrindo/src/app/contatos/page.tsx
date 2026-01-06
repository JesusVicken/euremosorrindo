'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// --- DADOS DOS PARCEIROS ATUALIZADOS ---
const brands = [
    {
        name: "Rumo Custom Paddles",
        logo: "/rumo.webp",
        description: "Empresa especializada em equipamentos esportivos aquáticos de alta performance",
        category: "Equipamentos",
        url: "https://www.rumobrasil.com.br/"
    },
    {
        name: "Fundação Baúminas",
        logo: "/bauminas.jpg",
        description: "Fundação dedicada ao desenvolvimento esportivo, cultural e social",
        category: "Social",
        url: "https://fundacaobauminas.org.br/"
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
        logo: "/nen.jpg",
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

export default function ContatoPage() {
    const whatsappNumber = "61999674507"
    const whatsappMessage = "Olá! Vim pelo site e gostaria de saber mais sobre as aulas de canoagem."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true
        })
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 font-sans">

            {/* 1. HERO SECTION COM VÍDEO */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full brightness-75"
                    >
                        <source src="/remosorrindo.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-black/30" />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-orange-500 text-white font-bold text-sm mb-6 shadow-lg tracking-wide uppercase">
                            Contato & Localização
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
                            Vamos Remar <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                                Juntos?
                            </span>
                        </h1>
                        <p className="text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Entre em contato, tire suas dúvidas e venha viver a experiência da canoagem no Lago Paranoá.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. BARRA DE REDES SOCIAIS */}
            <div className="bg-white border-b border-slate-200 relative z-30 shadow-sm">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-semibold text-slate-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Siga nossas aventuras diárias:
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/euremosorrindo" target="_blank" className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white p-2.5 rounded-lg hover:scale-110 transition-transform shadow-md">
                            <InstagramLogo size={24} weight="bold" />
                        </a>
                        <a href="https://facebook.com/euremosorrindo" target="_blank" className="bg-blue-600 text-white p-2.5 rounded-lg hover:scale-110 transition-transform shadow-md">
                            <FacebookLogo size={24} weight="bold" />
                        </a>
                        <a href="https://youtube.com/@euremosorrindo" target="_blank" className="bg-red-600 text-white p-2.5 rounded-lg hover:scale-110 transition-transform shadow-md">
                            <YoutubeLogo size={24} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. CARDS INTERATIVOS */}
            <section className="py-20 px-4 -mt-10 relative z-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-6">

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="cursor-pointer"
                            onClick={() => window.open(whatsappLink, '_blank')}
                        >
                            <Card className="h-full bg-white border-2 border-transparent hover:border-green-500 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 group">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <WhatsappLogo size={56} weight="fill" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">WhatsApp</h3>
                                    <p className="text-slate-500 mb-6 text-sm md:text-base">Agende sua aula ou tire dúvidas rapidamente.</p>
                                    <span className="mt-auto text-green-600 font-bold flex items-center gap-2">
                                        Iniciar Conversa <ArrowRight size={18} />
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="cursor-pointer"
                            onClick={() => document.getElementById('mapa-container')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <Card className="h-full bg-white border-2 border-transparent hover:border-blue-500 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 group">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <MapPin size={56} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Localização</h3>
                                    <p className="text-slate-500 mb-6 text-sm md:text-base">Escola Fernanda Rachid<br />Setor de Clubes Sul</p>
                                    <span className="mt-auto text-blue-600 font-bold flex items-center gap-2">
                                        Ver no Mapa <ArrowRight size={18} />
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="cursor-pointer"
                            onClick={() => window.open(whatsappLink, '_blank')}
                        >
                            <Card className="h-full bg-white border-2 border-transparent hover:border-orange-500 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 group">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <Clock size={56} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Horários</h3>
                                    <p className="text-slate-500 mb-6 text-sm md:text-base">Todos os dias<br />06:00 às 18:00</p>
                                    <span className="mt-auto text-orange-600 font-bold flex items-center gap-2">
                                        Consultar Vagas <ArrowRight size={18} />
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. MAPA GRANDE + DETALHES */}
            <section className="pb-20 px-4" id="mapa-container">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 grid lg:grid-cols-2">

                        <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-white to-blue-50">
                            <div className="inline-flex items-center gap-2 text-blue-600 font-bold bg-blue-100 w-fit px-4 py-1.5 rounded-full text-sm">
                                <MapPin size={16} /> Ponto de Encontro
                            </div>

                            <div className="flex items-center gap-6 mb-4">
                                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                                    <Image
                                        src="/logoescola.png"
                                        alt="Logo Escola Fernanda Rachid"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
                                    <Image
                                        src="/logoeuremo.png"
                                        alt="Logo Eu Remo Sorrindo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                Nossa base está localizada em um dos pontos mais bonitos do Lago Paranoá.
                                Oferecemos estrutura completa para receber você e sua família com segurança e conforto.
                            </p>

                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        <Phone size={20} />
                                    </div>
                                    <span className="font-semibold">(61) 99967-4507</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <WhatsappLogo size={20} weight="fill" />
                                    </div>
                                    <span className="font-semibold">Atendimento via WhatsApp</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => window.open(whatsappLink, '_blank')}
                                className="mt-6 bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-lg shadow-lg hover:shadow-green-200 transition-all w-full md:w-fit"
                            >
                                Agendar Remada
                            </Button>
                        </div>

                        {/* IFRAME */}
                        <div className="h-[400px] lg:h-auto relative bg-slate-200">
                            <iframe
                                title="Localização Escola Fernanda Rachid"
                                src="https://maps.google.com/maps?q=Escola%20Fernanda%20Rachid%20Brasilia&t=m&z=15&output=embed&iwloc=near"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0%] hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PARCEIROS (ATUALIZADO) */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">Parceiros Oficiais</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full"></div>
                        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                            Empresas que acreditam no esporte como ferramenta de transformação.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        {brands.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Renderização Condicional: Link ou Div */}
                                {item.url && item.url !== '#' ? (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block cursor-pointer"
                                    >
                                        <div className="bg-white p-6 rounded-2xl w-52 h-32 flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20 relative overflow-hidden">
                                            {/* Ícone de link externo no hover */}
                                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-400">
                                                <ExternalLink size={16} />
                                            </div>

                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.logo}
                                                    alt={item.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="bg-white p-6 rounded-2xl w-52 h-32 flex items-center justify-center shadow-lg shadow-black/20">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                )}

                                <p className="mt-3 text-sm text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}