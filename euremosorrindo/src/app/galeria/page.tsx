"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Instagram, ZoomIn, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// === DADOS DA GALERIA ===
// IDs corrigidos para serem únicos e caminhos normalizados com "/" no início
const allImages = [
    // Lote 1: Destaques
    { id: 1, src: "/bgEventos.jpg", alt: "Amanhecer no Lago", category: "Natureza", aspect: "landscape" },
    { id: 2, src: "/batizado.jpg", alt: "Batizado da Canoa", category: "Tradição", aspect: "portrait" },
    { id: 3, src: "/bgremo.webp", alt: "Equipe Unida", category: "Comunidade", aspect: "landscape" },
    { id: 4, src: "/colonia1.png", alt: "Colônia de Férias", category: "Eventos", aspect: "landscape" },
    { id: 5, src: "/fernanda.webp", alt: "Fundadora Fernanda", category: "Equipe", aspect: "portrait" },

    // Lote 2: Fernanda e Aulas
    { id: 6, src: "/fernanda/fer5.jpg", alt: "Aula Técnica", category: "Aulas", aspect: "landscape" },
    { id: 7, src: "/fernanda/fer7.jpg", alt: "Sorriso no Rosto", category: "Alunos", aspect: "square" },

    // Lote 3: Caiaque
    { id: 8, src: "/AULAS/CAIAQUE/caiaque1.jpg", alt: "Aula de Caiaque", category: "Caiaque", aspect: "portrait" },
    { id: 9, src: "/AULAS/CAIAQUE/caiaque2.jpg", alt: "Equilíbrio na Água", category: "Caiaque", aspect: "portrait" },
    { id: 10, src: "/AULAS/CAIAQUE/caiaque3.jpg", alt: "Liberdade", category: "Caiaque", aspect: "portrait" },

    // Lote 4: Canoa Havaiana
    { id: 11, src: "/AULAS/CANOA/canoa1.jpg", alt: "Preparação", category: "Canoa", aspect: "portrait" },
    { id: 12, src: "/AULAS/CANOA/canoa2.jpg", alt: "Sinergia", category: "Canoa", aspect: "portrait" },
    { id: 13, src: "/AULAS/CANOA/canoa3.jpg", alt: "Força Coletiva", category: "Canoa", aspect: "portrait" },
    { id: 14, src: "/AULAS/CANOA/canoa4.jpg", alt: "Visual Incrível", category: "Canoa", aspect: "portrait" },
    { id: 15, src: "/AULAS/CANOA/canoa5.jpg", alt: "Remada Sincronizada", category: "Canoa", aspect: "portrait" },
    { id: 16, src: "/AULAS/CANOA/canoa6.jpg", alt: "Dia de Sol", category: "Canoa", aspect: "portrait" },
    { id: 17, src: "/AULAS/CANOA/canoa7.jpg", alt: "Energia Boa", category: "Canoa", aspect: "portrait" },

    // Lote 5: Projeto Remando Juntos
    { id: 18, src: "/AULAS/REMANDOJUNTOS/remandojuntos1.jpeg", alt: "Inclusão no Esporte", category: "Social", aspect: "portrait" },
    { id: 19, src: "/AULAS/REMANDOJUNTOS/remandojuntos2.jpeg", alt: "Superação", category: "Social", aspect: "portrait" },
    { id: 20, src: "/AULAS/REMANDOJUNTOS/remandojuntos3.jpeg", alt: "Trabalho em Equipe", category: "Social", aspect: "portrait" },
    { id: 21, src: "/AULAS/REMANDOJUNTOS/remandojuntos4.jpeg", alt: "Conquista", category: "Social", aspect: "portrait" },
    { id: 22, src: "/batizado.jpg", alt: "Batizado da Canoa", category: "Comunidade VAA", aspect: "landscape" },

    // Lote 6: Juvenil
    { id: 23, src: "/AULAS/JUVENIL/juvenil1.png", alt: "Turma Juvenil", category: "Futuro", aspect: "square" },
    { id: 24, src: "/AULAS/JUVENIL/juvenil2.png", alt: "Diversão na Água", category: "Juvenil", aspect: "square" },
    { id: 25, src: "/AULAS/JUVENIL/juvenil3.png", alt: "Aprendizado", category: "Juvenil", aspect: "square" },
    { id: 26, src: "/AULAS/JUVENIL/juvenil4.png", alt: "Amizade", category: "Juvenil", aspect: "square" },
    { id: 27, src: "/AULAS/JUVENIL/juvenil5.png", alt: "Esporte Jovem", category: "Juvenil", aspect: "square" },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [visibleCount, setVisibleCount] = useState(8) // Começa exibindo 8 fotos

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + 8, allImages.length)) // Carrega mais 8 por vez
    }

    const visibleImages = allImages.slice(0, visibleCount)

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden font-sans">

            {/* Background Decorativo (Identidade Azul/Laranja) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Cabeçalho */}
                <div className="text-center mb-16 space-y-4" data-aos="fade-down">
                    <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mt-6">
                        Nossa Galeria
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                        Momentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Inesquecíveis</span>
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto pt-2 text-lg">
                        Um pouco da nossa rotina, das belezas do Lago Paranoá e da energia única da nossa família.
                    </p>
                </div>

                {/* Masonry Grid Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {visibleImages.map((image, index) => (
                        <div
                            key={image.id}
                            data-aos="fade-up"
                            data-aos-delay={(index % 4) * 100}
                            className="break-inside-avoid mb-6"
                        >
                            <div
                                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-white/5 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/10 transition-all duration-500 ease-in-out"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    // Ajusta a altura reservada baseada no aspecto (melhora o carregamento visual)
                                    height={image.aspect === 'portrait' ? 800 : image.aspect === 'landscape' ? 400 : 600}
                                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay Moderno */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-orange-400 text-xs font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.category}
                                    </span>
                                    <div className="flex justify-between items-end mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <span className="text-white font-semibold text-lg leading-tight drop-shadow-md">
                                            {image.alt}
                                        </span>
                                        <div className="bg-orange-500 p-2 rounded-full text-white shadow-lg">
                                            <ZoomIn size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Carregar Mais */}
                {visibleCount < allImages.length && (
                    <div className="mt-16 text-center flex justify-center">
                        <button
                            onClick={showMore}
                            className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                        >
                            <div className="absolute inset-0 border-2 border-orange-500 rounded-full"></div>
                            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                Carregar Mais Fotos
                                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                )}

                {/* Link para Instagram (CTA Final) */}
                <div className="mt-12 text-center" data-aos="fade-up">
                    <a
                        href="https://www.instagram.com/euremosorrindo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm uppercase tracking-widest font-semibold"
                    >
                        <Instagram size={16} />
                        Ver tudo no Instagram
                    </a>
                </div>
            </div>

            {/* Lightbox (Modal) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Galeria Fullscreen"
                                width={1920}
                                height={1080}
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}