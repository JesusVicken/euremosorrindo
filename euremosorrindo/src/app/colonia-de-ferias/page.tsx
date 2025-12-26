'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
    Sun, Anchor, Users, Shield, MapPin, Calendar,
    Clock, CheckCircle2, MessageCircle, X, ZoomIn, Heart
} from 'lucide-react'

// --- CONFIGURAÇÃO DAS IMAGENS ---
// Tratando a mistura de extensões (.png e .jpg) conforme solicitado
const galleryImages = [
    { id: 1, src: '/servicos/COLONIA/colonia1.png', alt: 'Crianças brincando', span: 'col-span-1 row-span-1' },
    { id: 2, src: '/servicos/COLONIA/colonia2.png', alt: 'Atividades na água', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/servicos/COLONIA/colonia3.jpg', alt: 'Canoagem em grupo', span: 'col-span-2 row-span-2' }, 
    { id: 4, src: '/servicos/COLONIA/colonia4.jpg', alt: 'Diversão no lago', span: 'col-span-1 row-span-1' },
    { id: 5, src: '/servicos/COLONIA/colonia5.jpg', alt: 'Sorrisos', span: 'col-span-1 row-span-1' },
    { id: 6, src: '/servicos/COLONIA/colonia6.jpg', alt: 'Aventuras', span: 'col-span-1 row-span-1' },
    { id: 7, src: '/servicos/COLONIA/colonia7.png', alt: 'Natureza', span: 'col-span-1 row-span-1' },
    { id: 8, src: '/servicos/COLONIA/colonia8.png', alt: 'Amizade', span: 'col-span-1 row-span-1' },
    { id: 9, src: '/servicos/COLONIA/colonia9.png', alt: 'Esporte', span: 'col-span-1 row-span-1' },
    { id: 10, src: '/servicos/COLONIA/colonia10.png', alt: 'Verão', span: 'col-span-1 row-span-1' },
    { id: 11, src: '/servicos/COLONIA/colonia11.png', alt: 'Férias Inesquecíveis', span: 'col-span-2 row-span-1' },
]

export default function ColoniaDeFeriasPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const openWhatsApp = () => {
        const phoneNumber = '+5561999674507'
        const message = 'Olá! Gostaria de informações sobre a próxima Colônia de Férias!'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    return (
        <div className="min-h-screen bg-[#FFFDF7]"> {/* Fundo creme bem suave */}

            {/* --- MODAL DE ZOOM --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Zoom Colônia"
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src="/servicos/COLONIA/coloniaBg.png"
                    alt="Colônia de Férias Eu Remo Sorrindo"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FFFDF7] opacity-90" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-base px-4 py-1 mb-6 shadow-lg">
                            <Sun className="w-4 h-4 mr-2" /> Próxima Temporada Aberta
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
                            A Melhor <span className="text-yellow-400">Colônia de Férias</span> <br /> de Brasília!
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto mb-10 drop-shadow-md">
                            Diversão, natureza, esporte e novas amizades no coração do Lago Paranoá.
                        </p>
                        <Button
                            onClick={openWhatsApp}
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            <MessageCircle className="mr-2 w-6 h-6" />
                            Garantir Vaga
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* --- SOBRE A COLÔNIA (BENEFÍCIOS) --- */}
            <section className="py-20 px-4 container mx-auto relative z-20 -mt-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Anchor, title: 'Atividades Náuticas', desc: 'Canoa Havaiana, Caiaque e SUP com instrutores especializados.', color: 'text-blue-500', bg: 'bg-blue-50' },
                        { icon: Users, title: 'Socialização', desc: 'Gincanas e brincadeiras que estimulam o trabalho em equipe e novas amizades.', color: 'text-orange-500', bg: 'bg-orange-50' },
                        { icon: Shield, title: 'Segurança Total', desc: 'Uso obrigatório de coletes e monitoramento constante em todas as atividades.', color: 'text-green-500', bg: 'bg-green-50' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} mb-6`}>
                                        <item.icon size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- GALERIA DE MOMENTOS --- */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
                            Momentos <span className="text-blue-500">Inesquecíveis</span>
                        </h2>
                        <p className="text-slate-500 text-lg">Um pouquinho do que rola nas nossas temporadas</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {galleryImages.map((photo, index) => {
                            const isLarge = photo.span.includes('col-span-2');
                            return (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer ${photo.span}`}
                                    onClick={() => setSelectedImage(photo.src)}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full text-white">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- INFORMAÇÕES E FAQ --- */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Infos Gerais */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Tudo o que você <br /> precisa saber
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Nossa colônia é projetada para conectar as crianças com a natureza através do esporte, desenvolvendo autonomia e confiança.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl"><Calendar size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">Período</h4>
                                    <p className="text-slate-600">Janeiro e Julho (Consulte datas exatas no WhatsApp)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><Clock size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">Horário</h4>
                                    <p className="text-slate-600">Turno vespertino: 14h às 18h</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pink-100 text-pink-600 rounded-xl"><MapPin size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">Local</h4>
                                    <p className="text-slate-600">Escola Fernanda Rachid - Setor de Clubes Sul</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion FAQ */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg">Qual a faixa etária?</AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Atendemos crianças e adolescentes de 05 a 14 anos, divididos em grupos por idade para melhor aproveitamento das atividades.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg">Precisa saber nadar?</AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Não é obrigatório, mas é recomendável que a criança tenha afinidade com água. O uso do colete salva-vidas (fornecido por nós) é <strong>obrigatório</strong> em 100% das atividades aquáticas.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg">O que levar na mochila?</AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Roupa de banho (com proteção UV recomendada)</li>
                                        <li>Toalha e muda de roupa seca</li>
                                        <li>Protetor solar e repelente</li>
                                        <li>Garrafinha de água</li>
                                        <li>Lanche reforçado</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg">Inclusão de Lanche?</AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    Para garantir a segurança alimentar devido a possíveis alergias, pedimos que cada criança traga seu próprio lanche. Fazemos um momento de piquenique coletivo super divertido!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-bounce" />
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Prontos para a aventura?</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                        As vagas são limitadas para garantir a segurança e a qualidade da experiência. Não deixe para última hora!
                    </p>
                    <Button
                        onClick={openWhatsApp}
                        size="lg"
                        variant="secondary"
                        className="text-blue-700 font-bold text-lg px-10 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
                    >
                        Falar com a Fernanda
                    </Button>
                </div>
            </section>

        </div>
    )
}