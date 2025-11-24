'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const eventos = [
    { titulo: 'Agenda de Novembro', imagem: '/Agenda.png' },
    { titulo: 'Longão Especial', imagem: '/Longao.png' },
    { titulo: 'Lua Cheia', imagem: '/LuaCheia.png' },
    { titulo: 'Lagoinha', imagem: '/Lagoinha.png' },
    { titulo: 'Evento Astral', imagem: '/Astral.png' },
    { titulo: 'Pôr do Sol', imagem: '/Pordosol.png' }
]

export default function AgendaNovembro() {
    const containerRef = useRef<HTMLDivElement>(null)

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
    }, [])
    return (
        <section className="relative w-full py-28 text-white overflow-hidden bg-[radial-gradient(circle_at_top,_#2a2a2a,_#000000_70%)]">
            <div ref={containerRef} className="container mx-auto px-4 md:px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
                >
                    Agenda — Novembro
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((evento, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="card-evento group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(255,215,0,0.08)] transition-all duration-500-[1.02] transition-all duration-500"
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
