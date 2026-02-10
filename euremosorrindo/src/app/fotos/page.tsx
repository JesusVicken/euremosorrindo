"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import gsap from "gsap";

const galleryItems = [
    { id: 1, src: "/cards/colonia.png", title: "Colônia de Férias", tag: "Verão 2025", href: "https://escolafernandarachid.com.br/c/colonia-de-ferias" },
    { id: 2, src: "/cards/entrepontes.png", title: "Remada Entre Pontes", tag: "Expedição", href: "https://escolafernandarachid.com.br/c/aulas-de-vaa-canoa-havaiana" },
    { id: 3, src: "/cards/FR - Card 10 - Remada Astral_capa.png", title: "Remada Astral", tag: "Nascer do Sol", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 4, src: "/cards/FR - Card 13 - Remada Lua Cheia - Set_Capa.png", title: "Remada Lua Cheia", tag: "Noturno", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 5, src: "/cards/FR - Card 10 - Turmas Infanto Juvenis_capa.png", title: "Turmas Infanto-Juvenis", tag: "Aulas", href: "https://escolafernandarachid.com.br/c/aulas-kids-teen-canoagem-e-vaa" },
    { id: 6, src: "/cards/FR - Card 14 - Lagoinha_capa.png", title: "Trilha Lagoinha", tag: "Aventura", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 7, src: "/cards/FR - Card 16 - Trilha Tapicuru_capa.png", title: "Trilha Tapicuru", tag: "Ecoturismo", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 8, src: "/cards/FR - OUT - Halloween_31-10.png", title: "Halloween a Remada", tag: "Evento Temático", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 9, src: "/cards/por.png", title: "Remada Pôr do Sol", tag: "Sunset", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 10, src: "/cards/horários aulas .png", title: "Grade de Horários", tag: "Informativo", href: "https://escolafernandarachid.com.br/c/aulas-de-canoagem-caiaque" },
    { id: 11, src: "/cards/parceria wellhub_.jpg", title: "Parceria Wellhub", tag: "Benefício", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
    { id: 12, src: "/cards/wellhub totalpass.jpg", title: "Wellhub & TotalPass", tag: "Parceiros", href: "https://escolafernandarachid.com.br/c/aulas-avulsas-e-experimentais" },
];

export default function EventsGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const headerRef = useRef(null);
    const buttonRef = useRef(null);

    // GSAP para entrada do cabeçalho
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animate-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });
        }, headerRef);
        return () => ctx.revert();
    }, []);

    // GSAP para o botão do Modal
    useEffect(() => {
        if (selectedId && buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, delay: 0.2, ease: "power2.out" }
            );
        }
    }, [selectedId]);

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
        <section
            className="relative py-24 bg-gradient-to-b from-blue-600 via-blue-400 to-white overflow-hidden"
            id="eventos"
        >
            <div className="container relative z-10 mx-auto px-4 md:px-6">

                {/* CABEÇALHO ESTILO PREMIUM */}
                <header ref={headerRef} className="text-center mb-20 pt-10">
                    <h2 className="flex flex-col items-center justify-center">
                        <span className="animate-title block text-slate-100 text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                            Participe de nossos
                        </span>
                        <span className="animate-title relative block text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl leading-none z-10">
                            EVENTOS <br className="md:hidden" />
                            <span className="relative whitespace-nowrap">
                                & REMADAS
                                <span className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-[30%] bg-gradient-to-r from-blue-900/40 via-cyan-400/40 to-blue-900/40 -z-10 blur-xl opacity-80 rounded-full"></span>
                            </span>
                        </span>
                    </h2>
                </header>

                {/* GRID COM AOS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <motion.div
                                layoutId={`card-container-${item.id}`}
                                onClick={() => setSelectedId(item.id)}
                                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                                    <span className="text-cyan-300 text-[10px] font-black uppercase tracking-widest mb-1">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-white text-sm md:text-base font-bold leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/20 backdrop-blur-md p-2 rounded-lg text-white">
                                        <ZoomIn size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX / MODAL */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    >
                        <button
                            onClick={() => setSelectedId(null)}
                            className="absolute top-6 right-6 z-[110] p-3 text-white/50 hover:text-white transition-all"
                        >
                            <X size={32} />
                        </button>

                        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/30 hover:text-white transition-colors hidden lg:block">
                            <ChevronLeft size={60} strokeWidth={1} />
                        </button>
                        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/30 hover:text-white transition-colors hidden lg:block">
                            <ChevronRight size={60} strokeWidth={1} />
                        </button>

                        {galleryItems.map((item) => {
                            if (item.id !== selectedId) return null;
                            return (
                                <motion.div
                                    layoutId={`card-container-${item.id}`}
                                    key={item.id}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-full max-w-lg flex flex-col items-center gap-6"
                                >
                                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                            priority
                                            quality={100}
                                        />
                                    </div>

                                    <div ref={buttonRef} className="w-full px-4">
                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 w-full bg-white text-blue-600 font-black py-4 rounded-xl transition-all shadow-xl hover:bg-blue-50 active:scale-[0.98] uppercase tracking-widest"
                                        >
                                            RESERVAR AGORA
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}