'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight, CalendarCheck, MapPin, Clock } from '@phosphor-icons/react/dist/ssr'

// Função auxiliar para gerar datas de um intervalo (para o Recesso e Colônia)
const gerarIntervalo = (inicio: string, fim: string, titulo: string, imagem: string, local: string, hora: string) => {
    const lista = []
    let atual = new Date(inicio)
    const final = new Date(fim)

    while (atual <= final) {
        // Ajuste para fuso horário local para evitar problemas de dia anterior
        const dataFormatada = atual.toISOString().split('T')[0]
        lista.push({ date: dataFormatada, titulo, imagem, local, hora })
        atual.setDate(atual.getDate() + 1)
    }
    return lista
}

// --- BANCO DE DADOS DE EVENTOS ---
const eventosFixos = [
    // --- LUA CHEIA (Dezembro) ---
    { date: '2025-12-03', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Pontão', hora: '19:30' },
    { date: '2025-12-04', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Pontão', hora: '19:30' },
    { date: '2025-12-05', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Pontão', hora: '19:30' },
    { date: '2025-12-06', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Pontão', hora: '19:30' },

    // --- PÔR DO SOL (Dezembro) ---
    { date: '2025-12-12', titulo: 'Remada Pôr do Sol', imagem: '/DEZ - 2025/pordosol.png', local: 'Deck Norte', hora: '17:30' },
    { date: '2025-12-13', titulo: 'Remada Pôr do Sol', imagem: '/DEZ - 2025/pordosol.png', local: 'Deck Norte', hora: '17:30' },
    { date: '2025-12-19', titulo: 'Remada Pôr do Sol', imagem: '/DEZ - 2025/pordosol.png', local: 'Deck Norte', hora: '17:30' },
    { date: '2025-12-20', titulo: 'Remada Pôr do Sol', imagem: '/DEZ - 2025/pordosol.png', local: 'Deck Norte', hora: '17:30' },

    // --- REMADA ASTRAL (Dezembro) ---
    { date: '2025-12-12', titulo: 'Remada Astral', imagem: '/DEZ - 2025/astral.png', local: 'Clube', hora: '16:00' }, // Dia com 2 eventos
    { date: '2025-12-18', titulo: 'Remada Astral', imagem: '/DEZ - 2025/astral.png', local: 'Clube', hora: '16:00' },

    // --- OUTROS (Dezembro) ---
    { date: '2025-12-14', titulo: 'Trilha da Lagoinha', imagem: '/DEZ - 2025/lagoinha2.png', local: 'Lagoinha', hora: '07:30' },
    { date: '2025-12-21', titulo: 'Confraternização', imagem: '/DEZ - 2025/confraternizacao.png', local: 'Restaurante', hora: '12:00' },
]

// Gerando períodos longos automaticamente
const recessoDezembro = gerarIntervalo('2025-12-22', '2025-12-31', 'Recesso', '/recesso.png', '-', 'Off')
const recessoJaneiro = gerarIntervalo('2026-01-01', '2026-01-05', 'Recesso', '/recesso.png', '-', 'Off')
const coloniaFerias = gerarIntervalo('2026-01-12', '2026-01-23', 'Colônia de Férias', '/servicos/COLONIA/coloniaBg.png', 'ASSTJ', '14:00')

// Combinando tudo
const eventosDB = [
    ...eventosFixos,
    ...recessoDezembro,
    ...recessoJaneiro,
    ...coloniaFerias
]

const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function AgendaMensal() {
    // Começa em Dezembro de 2025 (Mês 11 no JS)
    const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1))
    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    // Helpers
    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
    const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const calendarDays = Array.from({ length: firstDay + daysInMonth }, (_, i) => {
        if (i < firstDay) return null
        return i - firstDay + 1
    })

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

    const formatDateKey = (day: number) => {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    }

    const monthName = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

    const selectedEvents = selectedDate
        ? eventosDB.filter(e => e.date === selectedDate)
        : []

    return (
        <section className="relative w-full py-24 bg-slate-50 text-slate-800" id="agenda">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="flex flex-col items-center mb-12 space-y-4 text-center">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase flex items-center justify-center gap-2">
                        <CalendarCheck className="w-5 h-5" /> Programação Oficial
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Agenda de Eventos
                    </h2>
                    <p className="text-slate-500 max-w-lg">
                        Selecione um dia no calendário para ver os detalhes (Dezembro e Janeiro).
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* --- CALENDÁRIO --- */}
                    <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold capitalize text-slate-800">{monthName}</h3>
                            <div className="flex gap-2">
                                <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                                    <CaretLeft size={24} />
                                </button>
                                <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                                    <CaretRight size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 mb-4">
                            {diasSemana.map((dia, index) => (
                                <div key={index} className="text-center text-sm font-semibold text-slate-400 py-2">
                                    {dia}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2 md:gap-4">
                            {calendarDays.map((day, index) => {
                                if (!day) return <div key={index} className="aspect-square" />

                                const dateKey = formatDateKey(day)
                                const hasEvent = eventosDB.some(e => e.date === dateKey)
                                const isSelected = selectedDate === dateKey

                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedDate(dateKey)}
                                        className={`
                                            relative aspect-square rounded-2xl flex flex-col items-center justify-center text-sm md:text-base font-medium transition-all duration-300 border-2
                                            ${isSelected
                                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                                                : hasEvent
                                                    ? 'bg-white border-blue-200 text-blue-900 hover:border-blue-400'
                                                    : 'bg-transparent border-transparent text-slate-600 hover:bg-slate-100'
                                            }
                                        `}
                                    >
                                        <span>{day}</span>
                                        {hasEvent && (
                                            <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />
                                        )}
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>

                    {/* --- LISTA DE EVENTOS DO DIA --- */}
                    <div className="lg:col-span-5 xl:col-span-4 h-full">
                        <div className="bg-slate-100/50 rounded-3xl p-6 md:p-8 h-full border border-slate-200 min-h-[400px]">
                            <h4 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-wider text-sm">
                                {selectedDate
                                    ? `Eventos em ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}`
                                    : 'Selecione um dia'}
                            </h4>

                            <div className="space-y-4">
                                <AnimatePresence mode='wait'>
                                    {selectedEvents.length > 0 ? (
                                        selectedEvents.map((evento, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-4 items-center"
                                            >
                                                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                                                    <Image
                                                        src={evento.imagem}
                                                        alt={evento.titulo}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-slate-800 text-lg leading-tight mb-2">{evento.titulo}</h5>
                                                    <div className="flex flex-col gap-1 text-xs text-slate-500">
                                                        <span className="flex items-center gap-1.5">
                                                            <Clock weight="bold" className="text-blue-500" /> {evento.hora}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <MapPin weight="bold" className="text-orange-500" /> {evento.local}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center py-12 text-slate-400"
                                        >
                                            {selectedDate ? (
                                                <>
                                                    <p className="text-4xl mb-2">😴</p>
                                                    <p>Nenhum evento agendado.</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-4xl mb-2">📅</p>
                                                    <p>Clique nas datas marcadas para ver os detalhes.</p>
                                                </>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}