"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

const galleryItems = [
    { id: 1, src: "/cards/colonia.png", title: "Colônia de Férias", tag: "Verão 2025" },
    { id: 2, src: "/cards/entrepontes.png", title: "Remada Entre Pontes", tag: "Expedição" },
    { id: 3, src: "/cards/FR - Card 10 - Remada Astral_capa.png", title: "Remada Astral", tag: "Nascer do Sol" },
    { id: 4, src: "/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png", title: "Remada Lua Cheia", tag: "Noturno" },
    { id: 5, src: "/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png", title: "Turmas Infanto-Juvenis", tag: "Aulas" },
    { id: 6, src: "/cards/FR - Card 14 - Lagoinha_capa.png", title: "Trilha Lagoinha", tag: "Aventura" },
    { id: 7, src: "/cards/FR - Card 16 - Trilha Tapicuru_capa.png", title: "Trilha Tapicuru", tag: "Ecoturismo" },
    { id: 8, src: "/cards/FR - OUT - Halloween_31-10.png", title: "Halloween a Remada", tag: "Evento Temático" },
    { id: 9, src: "/cards/por.png", title: "Remada Pôr do Sol", tag: "Sunset" },
    { id: 10, src: "/cards/horários aulas .png", title: "Grade de Horários", tag: "Informativo" },
    { id: 11, src: "/cards/parceria wellhub_.jpg", title: "Parceria Wellhub", tag: "Benefício" },
    { id: 12, src: "/cards/wellhub totalpass.jpg", title: "Wellhub & TotalPass", tag: "Parceiros" },
];

export default function EventsGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Lógica de Navegação (Next/Prev)
    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedId === null) return;
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedId);
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedId(galleryItems[nextIndex].id);
    }, [selectedId]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedId === null) return;
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedId);
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedId(galleryItems[prevIndex].id);
    }, [selectedId]);

    // Controles de Teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedId(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        if (selectedId !== null) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedId, handleNext, handlePrev]);

    return (
        <section className="py-20 bg-slate-50" id="eventos">
            <div className="container mx-auto px-4 md:px-6">

                {/* Cabeçalho */}
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                    >
                        <CalendarDays size={16} />
                        Agenda & Avisos
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900"
                    >
                        Mural de Novidades
                    </motion.h2>
                </div>

                {/* GRID DE CARDS - Ajustado para Vertical (1080x1350) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            layoutId={`card-container-${item.id}`}
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedId(item.id)}
                            // MUDANÇA AQUI: aspect-[4/5] para respeitar o 1080x1350
                            className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-200"
                        >
                            {/* Imagem com object-cover em container 4:5 encaixa perfeitamente sem cortes */}
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />

                            {/* Overlay Gradiente - Ajustado para legibilidade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <span className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                                    {item.tag}
                                </span>
                                <h3 className="text-white text-sm md:text-base font-medium leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Ícone de Zoom discreto no topo */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-black/30 backdrop-blur-md p-1.5 rounded-full text-white">
                                    <ZoomIn size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL / LIGHTBOX - Mantido para visão ampliada */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    >
                        <button
                            onClick={() => setSelectedId(null)}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Setas de Navegação */}
                        <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white hidden md:block">
                            <ChevronLeft size={40} />
                        </button>
                        <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white hidden md:block">
                            <ChevronRight size={40} />
                        </button>

                        {galleryItems.map((item) => {
                            if (item.id !== selectedId) return null;
                            return (
                                <motion.div
                                    layoutId={`card-container-${item.id}`}
                                    key={item.id}
                                    onClick={(e) => e.stopPropagation()}
                                    // Ajuste do container do modal para respeitar altura máxima da tela
                                    className="relative w-full max-w-lg h-auto max-h-[90vh] aspect-[4/5] bg-transparent rounded-lg overflow-hidden shadow-2xl"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-contain" // Garante visualização total no modal também
                                        priority
                                        quality={100}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}