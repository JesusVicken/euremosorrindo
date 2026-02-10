'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    CaretLeft,
    CaretRight,
    MapPin,
    Clock,
    CalendarBlank,
    Ticket,
    ArrowsOutSimple,
    X
} from '@phosphor-icons/react/dist/ssr'

// --- CONFIGURAÇÃO ---
const REDIRECT_URL = "https://escolafernandarachid.com.br/"

// --- FUNÇÕES AUXILIARES ---
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

// --- BANCO DE DADOS DE EVENTOS ---
const eventosFixos = [
    // --- MARÇO 2026 ---
    // Lua Cheia
    { date: '2026-03-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:00' },
    { date: '2026-03-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:30' },
    { date: '2026-03-04', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:00' },
    { date: '2026-03-05', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:30' },

    // Trilha da Lagoinha (Domingos)
    { date: '2026-03-01', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-08', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-15', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-22', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-03-29', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },

    // Trilha do Tapicuru (Sábados)
    { date: '2026-03-14', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },
    { date: '2026-03-21', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },
    { date: '2026-03-28', titulo: 'Trilha do Tapicuru', imagem: '/cards/FR - Card 16 - Trilha Tapicuru_capa.png', local: 'Tapicuru', hora: '07:30' },

    // Só para Mulheres
    { date: '2026-03-08', titulo: 'Remada Só Para Mulheres', imagem: '/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png', local: 'Clube ASSTJ', hora: '17:00' },

    // Remada Pôr do Sol (Sábados)
    { date: '2026-03-14', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-03-21', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },
    { date: '2026-03-28', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:45' },

    // --- JANEIRO 2026 ---
    { date: '2026-01-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:10' },
    { date: '2026-01-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:00' },
    { date: '2026-01-04', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '20:00' },
    { date: '2026-01-10', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-17', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-24', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:15' },
    { date: '2026-01-11', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-18', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-25', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-01-31', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '17:50' },

    // --- FEVEREIRO 2026 ---
    { date: '2026-02-01', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '18:30' },
    { date: '2026-02-02', titulo: 'Cortejo para Iemanjá', imagem: '/cards/iemanja.jpeg', local: 'Clube ASSTJ', hora: '08:00 e 12:00' },
    { date: '2026-02-02', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:10' },
    { date: '2026-02-03', titulo: 'Remada da Lua Cheia', imagem: '/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png', local: 'Clube ASSTJ', hora: '19:50' },
    { date: '2026-02-07', titulo: 'Remada do Pôr do Sol', imagem: '/cards/por.png', local: 'Clube ASSTJ', hora: '17:30' },
    { date: '2026-02-08', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-02-15', titulo: 'Canoa Elétrica (Carnaval)', imagem: '/cards/carnaval.jpeg', local: 'Clube ASSTJ', hora: '10:00' },
    { date: '2026-02-22', titulo: 'Trilha da Lagoinha', imagem: '/cards/FR - Card 14 - Lagoinha_capa.png', local: 'Lagoinha', hora: '10:00' },
    { date: '2026-02-28', titulo: 'Trilha do Tapicuru', imagem: '/cards/tapicuru.jpeg', local: 'Tapicuru', hora: '09:30' },

    // --- HISTÓRICO ---
    { date: '2025-12-03', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Clube ASSTJ', hora: '19:30' },
    { date: '2025-12-04', titulo: 'Remada Lua Cheia', imagem: '/DEZ - 2025/luacheia.png', local: 'Clube ASSTJ', hora: '19:30' },
]

const coloniaFerias = gerarIntervalo('2026-01-12', '2026-01-23', 'Colônia de Férias', '/servicos/COLONIA/coloniaBg.png', 'Clube ASSTJ', 'Manhã e Tarde')
const recessoDezembro = gerarIntervalo('2025-12-22', '2025-12-31', 'Recesso', '/recesso.png', '-', 'Off')
const recessoJaneiro = gerarIntervalo('2026-01-01', '2026-01-01', 'Recesso', '/recesso.png', '-', 'Off')

const eventosDB = [...eventosFixos, ...coloniaFerias, ...recessoDezembro, ...recessoJaneiro]
const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function AgendaMensal() {
    // Inicializa com a data e hora do carregamento do componente
    const [currentDate, setCurrentDate] = useState<Date | null>(null)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    // Hook para garantir que a data atual seja setada apenas no cliente
    useEffect(() => {
        const today = new Date()
        setCurrentDate(today)

        // Formata o dia atual para YYYY-MM-DD
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        const todayKey = `${year}-${month}-${day}`

        setSelectedDate(todayKey)
    }, [])

    // Se o currentDate ainda for nulo (renderizando no servidor), retorna null para evitar hydrate mismatch
    if (!currentDate) return null;

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

    const formatDateKey = (day: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const monthName = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })

    const selectedEvents = selectedDate ? eventosDB.filter(e => e.date === selectedDate) : []

    // Para identificar se é o dia de hoje e dar um destaque extra
    const todayObj = new Date()
    const todayKeyString = `${todayObj.getFullYear()}-${String(todayObj.getMonth() + 1).padStart(2, '0')}-${String(todayObj.getDate()).padStart(2, '0')}`


    return (
        <section className="relative w-full bg-slate-50 pb-24 font-sans" id="agenda">

            {/* --- HERO BANNER --- */}
            <div className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/bgEventos.jpg"
                    alt="Banner Eventos"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/40 to-slate-50" />
                <div className="relative z-10 text-center px-4 max-w-4xl mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm uppercase tracking-widest font-bold"
                    >
                        Agenda & Experiências
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
                    >
                        Próximas Aventuras
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto"
                    >
                        Confira o calendário completo do Clube ASSTJ e garanta seu lugar.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl -mt-24 relative z-20">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* --- COLUNA ESQUERDA: CALENDÁRIO --- */}
                    <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-slate-200/60 border border-slate-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <h3 className="text-2xl md:text-3xl font-bold capitalize text-slate-800 flex items-center gap-3">
                                <span className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                                    <CalendarBlank weight="fill" size={28} />
                                </span>
                                {monthName}
                            </h3>
                            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100 self-start md:self-auto">
                                <button onClick={prevMonth} className="p-2 hover:bg-white hover:shadow-md rounded-full transition-all text-slate-500 hover:text-blue-600">
                                    <CaretLeft size={20} weight="bold" />
                                </button>
                                <button onClick={nextMonth} className="p-2 hover:bg-white hover:shadow-md rounded-full transition-all text-slate-500 hover:text-blue-600">
                                    <CaretRight size={20} weight="bold" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 mb-4">
                            {diasSemana.map((dia, index) => (
                                <div key={index} className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest py-2">
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
                                const isToday = dateKey === todayKeyString

                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedDate(dateKey)}
                                        className={`
                                            relative aspect-square rounded-2xl flex flex-col items-center justify-center text-sm md:text-lg font-semibold transition-all duration-300 group
                                            ${isSelected
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
                                                : isToday
                                                    ? 'bg-cyan-100 text-cyan-800 border border-cyan-300' // Destaque para o dia de hoje quando não selecionado
                                                    : hasEvent
                                                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100'
                                                        : 'bg-transparent text-slate-500 hover:bg-slate-50 border border-transparent hover:border-slate-100'
                                            }
                                        `}
                                    >
                                        <span className="z-10">{day}</span>
                                        {hasEvent && (
                                            <div className={`absolute bottom-2 md:bottom-3 w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? 'bg-white' : 'bg-blue-500 group-hover:bg-blue-600'}`} />
                                        )}
                                        {/* Pequeno indicador extra para o dia de hoje, se preferir */}
                                        {isToday && !isSelected && (
                                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                        )}
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>

                    {/* --- COLUNA DIREITA: LISTA DE EVENTOS --- */}
                    <div className="lg:col-span-5 xl:col-span-4 h-full min-h-[500px]">
                        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 h-full border border-slate-200 flex flex-col shadow-xl shadow-slate-200/40">

                            <div className="mb-6 flex items-center justify-between">
                                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                                    {selectedDate === todayKeyString ? 'Eventos de Hoje' : selectedDate ? 'Eventos do Dia' : 'Detalhes'}
                                </h4>
                                {selectedDate && (
                                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                                        {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 -mr-1 pl-1 -ml-1">
                                <AnimatePresence mode='wait'>
                                    {selectedEvents.length > 0 ? (
                                        <div className="space-y-5">
                                            {selectedEvents.map((evento, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -15 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
                                                >
                                                    {/* AREA DA IMAGEM E PREVIEW */}
                                                    <div
                                                        className="relative h-64 md:h-72 w-full overflow-hidden cursor-zoom-in"
                                                        onClick={() => setPreviewImage(evento.imagem)}
                                                    >
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.titulo}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                        />

                                                        {/* Gradiente e Titulo */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                                        <div className="absolute bottom-3 left-4 right-12">
                                                            <h5 className="font-bold text-white text-lg leading-tight drop-shadow-md line-clamp-2">
                                                                {evento.titulo}
                                                            </h5>
                                                        </div>

                                                        {/* Botão Flutuante de Expandir */}
                                                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all shadow-sm border border-white/30 z-10">
                                                            <ArrowsOutSimple size={20} weight="bold" />
                                                        </div>
                                                    </div>

                                                    <div className="p-4 bg-white">
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                                    <Clock weight="bold" size={16} />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Horário</span>
                                                                    <span className="font-semibold text-slate-700">{evento.hora}</span>
                                                                </div>
                                                            </div>

                                                            <div className="h-px w-full bg-slate-50" />

                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                                                    <MapPin weight="bold" size={16} />
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Local</span>
                                                                    <span className="font-semibold text-slate-700">{evento.local}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* BOTÃO REDIRECIONAR (Link Único) */}
                                                        <Link
                                                            href={REDIRECT_URL}
                                                            target="_blank"
                                                            className="w-full mt-4 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                                                        >
                                                            <Ticket size={16} weight="bold" />
                                                            Reservar Agora
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="h-full flex flex-col items-center justify-center text-center p-6 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-3 animate-pulse">
                                                    <CalendarBlank weight="duotone" size={32} />
                                                </div>
                                                <p className="text-slate-800 font-bold">
                                                    {selectedDate === todayKeyString ? "Nenhum evento hoje" : "Explore a Agenda"}
                                                </p>
                                                <p className="text-sm text-slate-500 mt-1 max-w-[200px]">
                                                    {selectedDate === todayKeyString
                                                        ? "Aproveite o dia para recarregar as energias!"
                                                        : "Clique em uma data destacada no calendário para ver os detalhes da programação."}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- LIGHTBOX (MODAL DE IMAGEM) --- */}
            <AnimatePresence>
                {previewImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreviewImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        {/* Botão Fechar */}
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-[110]"
                        >
                            <X size={32} weight="bold" />
                        </button>

                        <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                            <Image
                                src={previewImage}
                                alt="Visualização do Evento"
                                fill
                                className="object-contain" 
                                quality={100}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}