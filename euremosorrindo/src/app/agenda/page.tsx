'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

const eventosNovembro = [
    { titulo: 'Agenda de Novembro', imagem: '/Agenda.png' },
    { titulo: 'Longão Especial', imagem: '/Longao.png' },
    { titulo: 'Lua Cheia', imagem: '/LuaCheia.png' },
    { titulo: 'Lagoinha', imagem: '/Lagoinha.png' },
    { titulo: 'Evento Astral', imagem: '/Astral.png' },
    { titulo: 'Pôr do Sol', imagem: '/Pordosol.png' }
]

const eventosDezembro = [
    { titulo: 'Agenda de Dezembro', imagem: '/DEZ - 2025/agendadez.png' },
    { titulo: 'Lua Cheia', imagem: '/DEZ - 2025/luacheia.png' },
    { titulo: 'Lagoinha', imagem: '/DEZ - 2025/lagoinha2.png' },
    { titulo: 'Evento Astral', imagem: '/DEZ - 2025/astral.png' },
    { titulo: 'Pôr do Sol', imagem: '/DEZ - 2025/pordosol.png' },
    { titulo: 'Confraternização', imagem: '/DEZ - 2025/confraternizacao.png' },
    { titulo: 'Recesso', imagem: '/DEZ - 2025/recesso.png' }
]

export default function AgendaMensal() {
    const [mesSelecionado, setMesSelecionado] = useState<'novembro' | 'dezembro'>('dezembro')
    const containerRef = useRef<HTMLDivElement>(null)

    const eventos = mesSelecionado === 'novembro' ? eventosNovembro : eventosDezembro

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-out-cubic',
            once: true
        })

        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current.querySelectorAll('.card-evento'),
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            )
        }
    }, [mesSelecionado])

    return (
        <section className="relative w-full py-28 text-white overflow-hidden bg-[radial-gradient(circle_at_top,_#2a2a2a,_#000000_70%)]">
            <div ref={containerRef} className="container mx-auto px-4 md:px-6">

                {/* Seletor de Mês */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex rounded-2xl bg-white/10 p-1 backdrop-blur-md border border-white/10">
                        <button
                            onClick={() => setMesSelecionado('novembro')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${mesSelecionado === 'novembro'
                                ? 'bg-yellow-500 text-white shadow-lg'
                                : 'text-white/70 hover:text-white'
                                }`}
                        >
                            Novembro
                        </button>
                        <button
                            onClick={() => setMesSelecionado('dezembro')}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${mesSelecionado === 'dezembro'
                                ? 'bg-yellow-500 text-white shadow-lg'
                                : 'text-white/70 hover:text-white'
                                }`}
                        >
                            Dezembro
                        </button>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
                >
                    Agenda — {mesSelecionado === 'novembro' ? 'Novembro' : 'Dezembro'}
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((evento, index) => (
                        <motion.div
                            key={`${mesSelecionado}-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="card-evento group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(255,215,0,0.08)] transition-all duration-500 scale-100 hover:scale-[1.02]"
                        >
                            <div className="relative w-full" data-aos="zoom-in-up">
                                <Image
                                    src={evento.imagem}
                                    alt={evento.titulo}
                                    width={1080}
                                    height={1350}
                                    className="object-contain transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 data-aos="fade-up" className="text-xl font-semibold tracking-wide bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                                    {evento.titulo}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}