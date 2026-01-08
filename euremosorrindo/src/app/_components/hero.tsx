'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
    Check,
    ZoomIn,
    X,
    Users,
    MapPin,
    Clock,
    CalendarCheck,
    ArrowRight
} from "lucide-react"

// Seus imports de imagem
import agendanov from "../../../public/cards/agendaJan.jpeg"
import logo from "../../../public/logoeuremo.jpg"

export function Hero() {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    const whatsappMessage = encodeURIComponent(
        "Olá, visitei o site da Eu Remo Sorrindo e quero tirar dúvidas sobre a agenda de Dezembro!"
    )

    const features = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Grupos Pequenos",
            description: "Atenção personalizada"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Lago Paranoá",
            description: "Cenário deslumbrante"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Horários Flexíveis",
            description: "Manhã, tarde e noite"
        },
        {
            icon: <Check className="w-5 h-5" />,
            title: "Tudo Incluso",
            description: "Equipamento completo"
        }
    ]

    return (
        <>
            {/* Adicionando estilo global para animação de flutuação se não houver no tailwind config */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            <section className="bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800 text-white relative overflow-hidden min-h-[90vh] flex flex-col justify-center">

                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 bg-[url('/batizado.jpg')] opacity-5 z-0 mix-blend-overlay"></div>
                {/* Gradiente sutil vindo de baixo */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent z-0"></div>

                <div className='container mx-auto py-12 px-4 relative z-10'>

                    {/* Header: Logo */}
                    <div className="flex justify-center mb-8" data-aos="fade-down">
                        <div className="p-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/10">
                            <Image
                                src={logo}
                                alt="Eu Remo Sorrindo"
                                width={100}
                                height={100}
                                className="object-contain rounded-full"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>

                        {/* COLUNA DA ESQUERDA: Texto e Botões */}
                        <div className='lg:col-span-7 space-y-8 text-center lg:text-left' data-aos="fade-right">
                            <div>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-sm font-bold mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    Agenda Aberta
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-xl">
                                    Confira nossa agenda de
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Remadas</span>
                                </h1>
                                <p className="text-xl text-cyan-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                    Remadas ao nascer do sol, luau na lua cheia e trilhas aquáticas.
                                    Confira nossa programação especial e garanta sua vaga.
                                </p>
                            </div>

                            {/* NOVOS BOTÕES DE AÇÃO */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {/* Botão 1: Página Interna (Efeito Shine) */}
                                <Link
                                    href="/remadas"
                                    className="group relative bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {/* Efeito de brilho passando */}
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none"></div>

                                    <div className="relative z-10 flex items-center gap-2">
                                        <CalendarCheck className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                                        QUERO MINHA VAGA
                                        <ArrowRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>

                                {/* Botão 2: WhatsApp (Verde no Hover) */}
                                <a
                                    href={`https://wa.me/5561999674507?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-xl font-bold text-lg border border-white/30 text-white transition-all duration-300 flex items-center justify-center gap-2 hover:bg-green-500 hover:border-green-500 hover:scale-105 hover:shadow-lg shadow-green-900/20"
                                >
                                    <WhatsappLogo className="w-6 h-6" />
                                    Tirar Dúvidas
                                </a>
                            </div>

                            {/* Grid de Features (Ícones) */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                                {features.map((feature, index) => (
                                    <div key={index} className="text-center lg:text-left group hover:bg-white/5 p-2 rounded-lg transition-colors">
                                        <div className="text-cyan-400 mb-2 flex justify-center lg:justify-start group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                        <h3 className="font-bold text-sm text-white">{feature.title}</h3>
                                        <p className="text-xs text-cyan-200/70">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COLUNA DA DIREITA: Agenda em Destaque */}
                        <div className='lg:col-span-5 relative animate-float' data-aos="zoom-in">
                            {/* Efeitos de Fundo (Glow) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-cyan-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

                            <div
                                className="relative group cursor-zoom-in"
                                onClick={() => setIsImageModalOpen(true)}
                            >
                                {/* Card da Imagem */}
                                <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-colors duration-300">
                                    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-t-xl text-center shadow-md relative z-10">
                                        <p className="font-bold text-white tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-2">
                                            <CalendarCheck className="w-4 h-4" /> confira nossa agenda
                                        </p>
                                    </div>

                                    <div className="relative h-[550px] lg:h-[600px] w-full bg-white rounded-b-xl overflow-hidden">
                                        <Image
                                            src={agendanov}
                                            alt="Agenda Dezembro Eu Remo Sorrindo"
                                            fill
                                            className="object-contain hover:scale-105 transition-transform duration-700 ease-out"
                                            priority
                                        />

                                        {/* Overlay Hover */}
                                        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                                                <ZoomIn className="w-5 h-5" /> Ampliar Agenda
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Label Flutuante */}
                                <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2 border border-white/20 transform rotate-2 hover:rotate-0 transition-transform">
                                    <Check className="w-4 h-4" /> Vagas Abertas!
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modal para imagem ampliada */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 bg-blue-950/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="bg-white rounded-xl overflow-hidden shadow-2xl w-full h-full relative border-4 border-white/10">
                            <Image
                                src={agendanov}
                                alt="Agenda Ampliada"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link
                                href="/remadas"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Quero Agendar Agora
                            </Link>
                            <button
                                onClick={() => setIsImageModalOpen(false)}
                                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}