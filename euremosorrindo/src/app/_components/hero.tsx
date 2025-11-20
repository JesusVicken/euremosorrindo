'use client'

import { useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check, Calendar, ZoomIn, X, Play, Users, MapPin, Clock } from "lucide-react"
import agendanov from "../../../public/agendanov.png"
import logo from "../../../public/logoeuremo.jpg"
import Image from "next/image"

export function Hero() {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const whatsappMessage = encodeURIComponent(
        "Olá, visitei o site da Eu Remo Sorrindo e quero garantir minha vaga nas remadas de novembro! Pode me informar mais detalhes?"
    )

    const features = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Grupos Pequenos",
            description: "Turmas reduzidas para atenção personalizada"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Lago Paranoá",
            description: "Cenário natural deslumbrante"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Horários Flexíveis",
            description: "Manhã, tarde e experiências especiais"
        },
        {
            icon: <Play className="w-5 h-5" />,
            title: "Aula Experimental",
            description: "Experimente sem compromisso"
        }
    ]

    const activities = [
        "Remadas no nascer do sol e pôr do sol",
        "Remadas na Lua cheia",
        "Trilha da Lagoinha",
        "Remada Astral",
        "Trilha do Tapicuru",
        "Aulas para iniciantes",
        "Experiências em grupo"
    ]

    return (
        <>
            <section className="bg-gradient-to-br from-blue-900 via-sky-800 to-cyan-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>

                <div className='container mx-auto pt-20 pb-16 px-4 relative z-10'>
                    {/* Header Principal */}
                    <div className="text-center mb-12" data-aos="fade-down">
                        <div className="flex justify-center mb-6">
                            <Image
                                src={logo}
                                alt="Eu Remo Sorrindo"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                            Viva experiências <span className="text-cyan-300">únicas</span> no Lago Paranoá
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
                            Descubra a magia da canoagem havaiana com a melhor equipe de Brasília
                        </p>
                    </div>

                    <article className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

                        {/* Bloco de Vendas */}
                        <div className='space-y-8' data-aos="fade-right">
                            {/* Destaques */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300">
                                    Garanta sua vaga nas remadas de Novembro!
                                </h2>
                                <p className="text-lg text-cyan-100 mb-6">
                                    Vagas limitadas para experiências exclusivas no lago mais bonito de Brasília
                                </p>

                                {/* Atividades em Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                    {activities.map((activity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                            <span className="text-white text-sm">{activity}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Botão Principal */}
                                <div className="space-y-4">
                                    <a
                                        href={`https://wa.me/5561999674507?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg w-full group"
                                    >
                                        <WhatsappLogo className='w-6 h-6' />
                                        QUERO MINHA VAGA AGORA!
                                        <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none"></div>
                                    </a>

                                    <p className="text-center text-cyan-200 text-sm">
                                        Vagas se esgotam rapidamente - Garanta a sua!
                                    </p>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="text-cyan-400 mb-2">{feature.icon}</div>
                                        <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                                        <p className="text-cyan-100 text-xs">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Agenda de Novembro Interativa */}
                        <div data-aos="fade-left" className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                {/* Header da agenda */}
                                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                                    <div className="flex items-center gap-3 text-white">
                                        <Calendar className="w-6 h-6" />
                                        <div>
                                            <h3 className="font-bold text-lg">AGENDA NOVEMBRO 2024</h3>
                                            <p className="text-cyan-100 text-sm">Programação completa de remadas</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Imagem da agenda interativa */}
                                <div
                                    className="relative w-full h-[400px] cursor-zoom-in group"
                                    onClick={() => setIsImageModalOpen(true)}
                                >
                                    <Image
                                        src={agendanov}
                                        alt="Agenda completa de Novembro - Eu Remo Sorrindo"
                                        fill
                                        quality={100}
                                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                        priority
                                    />

                                    {/* Overlay de zoom */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <ZoomIn className="w-6 h-6 text-blue-600" />
                                        </div>
                                    </div>

                                    {/* Label de clique */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                        Clique para ampliar
                                    </div>
                                </div>

                                {/* Informações rápidas */}
                                <div className="p-4 bg-white/5">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-cyan-300 font-bold text-lg">15+</div>
                                            <div className="text-white text-xs">Atividades</div>
                                        </div>
                                        <div>
                                            <div className="text-cyan-300 font-bold text-lg">30</div>
                                            <div className="text-white text-xs">Dias de Aventura</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action Secundário */}
                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setIsImageModalOpen(true)}
                                    className="text-cyan-300 hover:text-white border border-cyan-400 hover:bg-cyan-400/20 px-6 py-2 rounded-lg transition-all duration-300 font-semibold text-sm"
                                >
                                    VER AGENDA COMPLETA
                                </button>
                            </div>
                        </div>

                    </article>

                    {/* Cards de Benefícios */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-400/30" data-aos="fade-up">
                            <Check className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                            <h3 className="font-bold text-white mb-2">Equipamento Incluso</h3>
                            <p className="text-cyan-100 text-sm">Tudo fornecido para sua aventura</p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-400/30" data-aos="fade-up" data-aos-delay="100">
                            <Users className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                            <h3 className="font-bold text-white mb-2">Instrutores Certificados</h3>
                            <p className="text-cyan-100 text-sm">Profissionais experientes</p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-400/30" data-aos="fade-up" data-aos-delay="200">
                            <MapPin className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                            <h3 className="font-bold text-white mb-2">Local Privilegiado</h3>
                            <p className="text-cyan-100 text-sm">Melhor ponto do Lago Paranoá</p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-400/30" data-aos="fade-up" data-aos-delay="300">
                            <Clock className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                            <h3 className="font-bold text-white mb-2">Flexível</h3>
                            <p className="text-cyan-100 text-sm">Agende conforme sua disponibilidade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal para imagem ampliada */}
            {isImageModalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-cyan-300 transition-colors z-10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="bg-white rounded-lg overflow-hidden">
                            <Image
                                src={agendanov}
                                alt="Agenda completa de Novembro - Eu Remo Sorrindo"
                                width={800}
                                height={1000}
                                quality={100}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>

                        <div className="text-center mt-4 text-white">
                            <p className="text-sm">Role para ver todos os detalhes da programação</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}