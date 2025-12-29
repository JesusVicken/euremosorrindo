'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight, MapPin, Clock, CalendarBlank } from '@phosphor-icons/react/dist/ssr'

// --- FUNÇÕES AUXILIARES (MANTIDAS) ---
const gerarIntervalo = (inicio: string, fim: string, titulo: string, imagem: string, local: string, hora: string) => {
    const lista = []
    let atual = new Date(inicio)
    const final = new Date(fim)

    while (atual <= final) {
        const dataFormatada = atual.toISOString().split('T')[0]
        lista.push({ date: dataFormatada, titulo, imagem, local, hora })
        atual.setDate(atual.getDate() + 1)
    }
    return lista
}

// --- BANCO DE DADOS DE EVENTOS (MANTIDO) ---
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
    { date: '2025-12-12', titulo: 'Remada Astral', imagem: '/DEZ - 2025/astral.png', local: 'Clube', hora: '16:00' },
    { date: '2025-12-18', titulo: 'Remada Astral', imagem: '/DEZ - 2025/astral.png', local: 'Clube', hora: '16:00' },

    // --- OUTROS (Dezembro) ---
    { date: '2025-12-14', titulo: 'Trilha da Lagoinha', imagem: '/DEZ - 2025/lagoinha2.png', local: 'Lagoinha', hora: '07:30' },
    { date: '2025-12-21', titulo: 'Confraternização', imagem: '/DEZ - 2025/confraternizacao.png', local: 'Restaurante', hora: '12:00' },
]

const recessoDezembro = gerarIntervalo('2025-12-22', '2025-12-31', 'Recesso', '/recesso.png', '-', 'Off')
const recessoJaneiro = gerarIntervalo('2026-01-01', '2026-01-05', 'Recesso', '/recesso.png', '-', 'Off')
const coloniaFerias = gerarIntervalo('2026-01-12', '2026-01-23', 'Colônia de Férias', '/servicos/COLONIA/coloniaBg.png', 'ASSTJ', '14:00')

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
        <section className="relative w-full bg-slate-50 text-slate-800 pb-24" id="agenda">

            {/* --- HERO BANNER --- */}
            <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/bgEventos.jpg"
                    alt="Banner Eventos"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay Gradiente para leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50" />

                <div className="relative z-10 text-center px-4 max-w-4xl mt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
                    >
                        Nossos Eventos e Remadas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-200 font-medium tracking-wide drop-shadow-md"
                    >
                        Selecione a sua próxima aventura
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl -mt-20 relative z-20">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* --- CALENDÁRIO --- */}
                    <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold capitalize text-slate-800 flex items-center gap-2">
                                <CalendarBlank weight="duotone" className="text-blue-600" size={32} />
                                {monthName}
                            </h3>
                            <div className="flex gap-2 bg-slate-100 p-1 rounded-full">
                                <button onClick={prevMonth} className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-slate-600">
                                    <CaretLeft size={20} weight="bold" />
                                </button>
                                <button onClick={nextMonth} className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-slate-600">
                                    <CaretRight size={20} weight="bold" />
                                </button>
                            </div>
                        </div>

                        {/* Cabeçalho Dias da Semana */}
                        <div className="grid grid-cols-7 mb-4">
                            {diasSemana.map((dia, index) => (
                                <div key={index} className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider py-2">
                                    {dia}
                                </div>
                            ))}
                        </div>

                        {/* Grid de Dias */}
                        <div className="grid grid-cols-7 gap-2 md:gap-3">
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
                                            relative aspect-square rounded-2xl flex flex-col items-center justify-center text-sm md:text-lg font-semibold transition-all duration-300
                                            ${isSelected
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2'
                                                : hasEvent
                                                    ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                                    : 'bg-transparent text-slate-500 hover:bg-slate-50'
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
                        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 h-full border border-slate-200 min-h-[400px] flex flex-col">
                            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6 text-center">
                                {selectedDate
                                    ? `Programação para ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}`
                                    : 'Detalhes do Evento'}
                            </h4>

                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
                                <AnimatePresence mode='wait'>
                                    {selectedEvents.length > 0 ? (
                                        <div className="space-y-6">
                                            {selectedEvents.map((evento, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                                                >
                                                    {/* Imagem Grande (AJUSTADA AQUI PARA SER MAIOR E RESPONSIVA) */}
                                                    <div className="relative h-56 md:h-64 w-full overflow-hidden">
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.titulo}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        {/* Gradiente sobre a imagem para o título */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                                                        <div className="absolute bottom-4 left-4 right-4">
                                                            <h5 className="font-black text-white text-2xl leading-tight mb-1 drop-shadow-md">
                                                                {evento.titulo}
                                                            </h5>
                                                        </div>
                                                    </div>

                                                    {/* Detalhes (Clean UI) */}
                                                    <div className="p-5 flex items-center justify-between bg-white">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                                                <Clock weight="bold" size={20} />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-slate-400 font-bold uppercase">Horário</p>
                                                                <p className="text-slate-800 font-semibold">{evento.hora}</p>
                                                            </div>
                                                        </div>

                                                        <div className="w-px h-8 bg-slate-100 mx-2"></div>

                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                                                                <MapPin weight="bold" size={20} />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-slate-400 font-bold uppercase">Local</p>
                                                                <p className="text-slate-800 font-semibold">{evento.local}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        // Estado Vazio (Empty State)
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50"
                                        >
                                            {selectedDate ? (
                                                <>
                                                    <div className="text-5xl mb-4 opacity-50">😴</div>
                                                    <p className="text-slate-500 font-medium">Nenhum evento agendado para este dia.</p>
                                                    <p className="text-sm text-slate-400 mt-2">Aproveite para descansar!</p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="text-5xl mb-4 animate-bounce">👆</div>
                                                    <p className="text-slate-800 font-bold text-lg">Escolha uma data</p>
                                                    <p className="text-slate-500 mt-1">Clique no calendário para ver a programação.</p>
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