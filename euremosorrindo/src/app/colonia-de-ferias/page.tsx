'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
    Sun, Anchor, Users, Shield, MapPin, Calendar,
    Clock, MessageCircle, X, ZoomIn, Heart
} from 'lucide-react'

// --- CONFIGURAÇÃO DAS IMAGENS ---
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
        const message = 'Olá! Gostaria de fazer a inscrição para a Colônia de Férias de Janeiro/2026!'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD]">

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
                                priority // Prioridade alta para a imagem do modal carregar rápido
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- HERO SECTION (LAYOUT HÍBRIDO) --- */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Coluna de Texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left text-white"
                        >
                            <Badge className="bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 text-sm px-3 py-1 mb-6 shadow-lg inline-flex items-center gap-2">
                                <Sun className="w-4 h-4" /> Inscrições Abertas - 2026
                            </Badge>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                Colônia de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Férias 2026</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                                Garanta semanas de diversão, esporte e natureza para seu filho(a) na ASSTJ - Setor de Clubes Sul.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    onClick={openWhatsApp}
                                    size="lg"
                                    className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-8 py-7 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Inscrever Agora
                                </Button>
                            </div>

                            {/* Mini Info */}
                            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-8">
                                <div>
                                    <p className="text-yellow-400 font-bold uppercase text-sm tracking-wider">Período</p>
                                    <p className="text-xl font-semibold">12 a 23 de Jan</p>
                                </div>
                                <div>
                                    <p className="text-yellow-400 font-bold uppercase text-sm tracking-wider">Idade</p>
                                    <p className="text-xl font-semibold">5 a 14 anos</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Coluna da Imagem (O Cartaz) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mx-auto lg:mr-0 w-full max-w-md lg:max-w-full"
                        >
                            <div className="absolute -inset-4 bg-white/20 rounded-[2.5rem] blur-xl -z-10" />

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:rotate-1 transition-transform duration-500 cursor-pointer" onClick={() => setSelectedImage('/servicos/COLONIA/coloniaBg.png')}>
                                <Image
                                    src="/servicos/COLONIA/coloniaBg.png"
                                    alt="Cartaz Colônia de Férias 2026"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority 
                                    sizes="(max-width: 768px) 100vw, 50vw" 
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center group">
                                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 drop-shadow-lg" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- CARDS DE DETALHES --- */}
            <section className="py-12 bg-white relative z-20">
                <div className="container mx-auto px-4 -mt-20">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Calendar,
                                title: 'Datas Confirmadas',
                                desc: '12 a 23 de Janeiro de 2026',
                                details: 'Duas semanas de muita atividade!',
                                color: 'text-blue-600', bg: 'bg-blue-50'
                            },
                            {
                                icon: MapPin,
                                title: 'Local Exclusivo',
                                desc: 'ASSTJ - Setor de Clubes Sul',
                                details: 'Acesso seguro ao Lago Paranoá.',
                                color: 'text-orange-600', bg: 'bg-orange-50'
                            },
                            {
                                icon: Users,
                                title: 'Faixa Etária',
                                desc: 'Crianças de 5 a 14 anos',
                                details: 'Turmas divididas por idade.',
                                color: 'text-green-600', bg: 'bg-green-50'
                            },
                        ].map((item, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className={`p-4 rounded-full ${item.bg} ${item.color} mb-4`}>
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-lg font-semibold text-slate-700 mb-1">{item.desc}</p>
                                    <p className="text-sm text-slate-500">{item.details}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SOBRE A COLÔNIA (BENEFÍCIOS) --- */}
            <section className="py-20 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
                        Por que escolher a nossa Colônia?
                    </h2>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Anchor, title: 'Atividades Náuticas', desc: 'Canoa Havaiana, Caiaque e SUP com instrutores especializados e experientes.', color: 'text-blue-500' },
                        { icon: Users, title: 'Socialização', desc: 'Gincanas e brincadeiras lúdicas que estimulam o trabalho em equipe, a autonomia e novas amizades.', color: 'text-orange-500' },
                        { icon: Shield, title: 'Segurança Total', desc: 'Uso obrigatório de coletes salva-vidas e monitoramento constante em todas as atividades.', color: 'text-green-500' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all border border-slate-100"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm mb-6 ${item.color}`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- GALERIA DE MOMENTOS --- */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-2">
                                Momentos <span className="text-blue-600">Inesquecíveis</span>
                            </h2>
                            <p className="text-slate-500 text-lg">Confira a alegria das últimas temporadas</p>
                        </div>
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
                                        // AQUI: Ajuste do sizes para otimização
                                        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                        // AQUI: Prioridade para as 4 primeiras imagens
                                        priority={index < 4}
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
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-slate-600">Tire suas dúvidas e prepare-se para a diversão</p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg hover:text-blue-600">
                                    Qual a faixa etária e o horário?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                    Atendemos crianças e adolescentes de <strong>5 a 14 anos</strong>. As atividades ocorrem no turno vespertino (tarde). Para horários exatos, consulte-nos no WhatsApp.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg hover:text-blue-600">
                                    Precisa saber nadar?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                    Não é obrigatório saber nadar, mas é recomendável que a criança tenha afinidade com água. A segurança é nossa prioridade: o uso do <strong>colete salva-vidas é obrigatório</strong> em 100% das atividades aquáticas e fornecido por nós.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg hover:text-blue-600">
                                    O que levar na mochila?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Roupa de banho (sunga, maiô, biquíni) - recomendamos com proteção UV.</li>
                                        <li>Toalha e uma muda de roupa seca para a volta.</li>
                                        <li>Protetor solar e repelente.</li>
                                        <li>Garrafinha de água identificada.</li>
                                        <li>Lanche reforçado (individual).</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left font-bold text-slate-700 text-lg hover:text-blue-600">
                                    O lanche está incluso?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                    Para garantir a segurança alimentar devido a possíveis restrições e alergias individuais, pedimos que cada criança traga seu próprio lanche. Realizamos um momento de piquenique coletivo que é super divertido!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black mb-6">As vagas são limitadas!</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                        Não deixe para a última hora. Garanta a vaga do seu filho(a) na colônia mais divertida do Lago Paranoá.
                    </p>
                    <Button
                        onClick={openWhatsApp}
                        size="lg"
                        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
                    >
                        Falar com a Gente no WhatsApp
                    </Button>
                </div>
            </section>

        </div>
    )
}