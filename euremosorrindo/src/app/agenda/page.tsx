'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CalendarCheck, ArrowRight } from '@phosphor-icons/react/dist/ssr'

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
    { titulo: 'Recesso', imagem: '/recesso.png' }
]

export default function AgendaMensal() {
    const [mesSelecionado, setMesSelecionado] = useState<'novembro' | 'dezembro'>('dezembro')
    const eventos = mesSelecionado === 'novembro' ? eventosNovembro : eventosDezembro

    return (
        <section className="relative w-full py-24 bg-slate-50 text-slate-800">
            <div className="container mx-auto px-4 md:px-6">

                {/* Cabeçalho e Seletor */}
                <div className="flex flex-col items-center mb-16 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-2"
                    >
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase flex items-center justify-center gap-2">
                            <CalendarCheck className="w-5 h-5" /> Programação Oficial
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Nossa Agenda
                        </h2>
                    </motion.div>

                    {/* Seletor de Mês (Estilo Clean Azul) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-1.5 rounded-full shadow-md border border-slate-200 inline-flex"
                    >
                        <button
                            onClick={() => setMesSelecionado('novembro')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${mesSelecionado === 'novembro'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                                }`}
                        >
                            Novembro
                        </button>
                        <button
                            onClick={() => setMesSelecionado('dezembro')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${mesSelecionado === 'dezembro'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                                }`}
                        >
                            Dezembro
                        </button>
                    </motion.div>
                </div>

                {/* Grid de Eventos */}
                <motion.div
                    layout
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    <AnimatePresence mode='wait'>
                        {eventos.map((evento, index) => (
                            <motion.div
                                key={`${mesSelecionado}-${evento.titulo}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group h-full"
                            >
                                <Link href="/remadas" className="block h-full">
                                    <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 border border-slate-100 transition-all duration-300 flex flex-col group-hover:-translate-y-2">

                                        {/* Container da Imagem */}
                                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                                            <Image
                                                src={evento.imagem}
                                                alt={evento.titulo}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />

                                            {/* Overlay no Hover */}
                                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <div className="bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    Ver Detalhes <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Info do Card */}
                                        <div className="p-5 flex items-center justify-between border-t border-slate-50">
                                            <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                                                {evento.titulo}
                                            </h3>
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Botão Ver Agenda Completa (Opcional) */}
                <div className="mt-16 text-center">
                    <Link
                        href="/remadas"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1"
                    >
                        Ver programação detalhada
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}