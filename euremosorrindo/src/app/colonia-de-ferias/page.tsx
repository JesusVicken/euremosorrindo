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
    MessageCircle, X, ZoomIn
} from 'lucide-react'

// --- CONFIGURAÇÃO DAS IMAGENS DA GALERIA ---
const galleryImages = [
    { id: 1, src: '/servicos/COLONIA/colonia1.png', alt: 'Crianças brincando na Colônia Eu Remo Sorrindo', span: 'col-span-1 row-span-1' },
    { id: 2, src: '/servicos/COLONIA/colonia2.png', alt: 'Atividades aquáticas supervisionadas', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/servicos/COLONIA/colonia3.jpg', alt: 'Canoagem em grupo no Lago Paranoá', span: 'col-span-2 row-span-2' },
    { id: 4, src: '/servicos/COLONIA/colonia4.jpg', alt: 'Diversão segura no lago', span: 'col-span-1 row-span-1' },
    { id: 5, src: '/servicos/COLONIA/colonia5.jpg', alt: 'Sorrisos e novas amizades', span: 'col-span-1 row-span-1' },
    { id: 6, src: '/servicos/COLONIA/colonia6.jpg', alt: 'Aventuras ao ar livre para crianças', span: 'col-span-1 row-span-1' },
    { id: 7, src: '/servicos/COLONIA/colonia7.png', alt: 'Conexão com a natureza no Setor de Clubes Sul', span: 'col-span-1 row-span-1' },
    { id: 8, src: '/servicos/COLONIA/colonia8.png', alt: 'Trabalho em equipe e socialização', span: 'col-span-1 row-span-1' },
    { id: 9, src: '/servicos/COLONIA/colonia9.png', alt: 'Prática de esportes náuticos', span: 'col-span-1 row-span-1' },
    { id: 10, src: '/servicos/COLONIA/colonia10.png', alt: 'Verão inesquecível em Brasília', span: 'col-span-1 row-span-1' },
    { id: 11, src: '/servicos/COLONIA/colonia11.png', alt: 'Férias ativas e saudáveis', span: 'col-span-2 row-span-1' },
]

export default function ColoniaDeFeriasPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const openWhatsApp = () => {
        const phoneNumber = '+5561991041213'
        const message = 'Olá! Vi no site e gostaria de fazer a inscrição para a Colônia de Férias de Julho/2026!'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD] overflow-hidden text-slate-900">

            {/* Modal de Imagem (Mantido com Framer Motion pela fluidez da UI) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-blue-950/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.3)] border-2 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Visualização ampliada da Galeria Colônia de Férias"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Coluna de Texto */}
                        <div
                            className="text-center lg:text-left text-white"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <Badge className="bg-orange-500 text-white font-bold hover:bg-orange-600 border-none text-sm px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.5)] inline-flex items-center gap-2">
                                <Sun className="w-4 h-4" /> Inscrições Abertas - Julho 2026
                            </Badge>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                                Colônia de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Férias 2026</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                                Garanta semanas de diversão, esporte e natureza para seu filho(a) na ASSTJ - Setor de Clubes Sul. Atividades náuticas seguras e inesquecíveis.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    onClick={openWhatsApp}
                                    size="lg"
                                    className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-8 py-7 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Inscrever Agora via WhatsApp
                                </Button>
                            </div>

                            {/* Mini Info */}
                            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-8">
                                <div>
                                    <p className="text-orange-400 font-bold uppercase text-sm tracking-wider mb-1">Período</p>
                                    <p className="text-xl md:text-2xl font-semibold">06 a 24 de Jul</p>
                                </div>
                                <div>
                                    <p className="text-orange-400 font-bold uppercase text-sm tracking-wider mb-1">Idade</p>
                                    <p className="text-xl md:text-2xl font-semibold">5 a 14 anos</p>
                                </div>
                            </div>
                        </div>

                        {/* Coluna da Imagem (O Cartaz) */}
                        <div
                            className="relative mx-auto lg:mr-0 w-full max-w-md lg:max-w-full"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-xl -z-10" />

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer group" onClick={() => setSelectedImage('/servicos/COLONIA/coloniaBg.png')}>
                                <Image
                                    src="/coloniaJulho.png"
                                    alt="Cartaz Oficial da Colônia de Férias Julho 2026 - Eu Remo Sorrindo"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 hover:bg-blue-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                                    <ZoomIn className="text-white w-14 h-14 drop-shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- CARDS DE DETALHES (Vibrantes e Coloridos) --- */}
            <section className="py-12 bg-[#FDFDFD] relative z-20">
                <div className="container mx-auto px-4 -mt-20">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card Azul */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <Card className="border-none shadow-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:-translate-y-2 transition-transform duration-300 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                                    <div className="p-4 rounded-full bg-white text-blue-700 mb-5 shadow-lg">
                                        <Calendar size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Datas Confirmadas</h3>
                                    <p className="text-lg font-semibold text-blue-50 mb-2">06 a 24 de Julho de 2026</p>
                                    <p className="text-sm text-blue-200">Semanas de muita atividade e aprendizado!</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Card Laranja */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <Card className="border-none shadow-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white hover:-translate-y-2 transition-transform duration-300 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                                    <div className="p-4 rounded-full bg-white text-orange-600 mb-5 shadow-lg">
                                        <MapPin size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Local Exclusivo</h3>
                                    <p className="text-lg font-semibold text-orange-50 mb-2">ASSTJ - Setor de Clubes Sul</p>
                                    <p className="text-sm text-orange-100">Acesso seguro e estruturado ao Lago Paranoá.</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Card Branco com Borda Azul (Identidade) */}
                        <div data-aos="fade-up" data-aos-delay="300">
                            <Card className="shadow-xl bg-white border-2 border-blue-500 hover:-translate-y-2 transition-transform duration-300">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="p-4 rounded-full bg-blue-600 text-white mb-5 shadow-lg shadow-blue-600/30">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">Faixa Etária</h3>
                                    <p className="text-lg font-semibold text-slate-700 mb-2">Crianças de 5 a 14 anos</p>
                                    <p className="text-sm text-slate-500">Turmas divididas e adaptadas por idade.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOBRE A COLÔNIA (BENEFÍCIOS) --- */}
            <section className="py-20 px-4 container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4 tracking-tight">
                        Por que escolher a nossa Colônia?
                    </h2>
                    <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Anchor,
                            title: 'Atividades Náuticas',
                            desc: 'Canoa Havaiana, Caiaque e SUP com instrutores especializados e experientes no Lago.',
                            iconBg: 'bg-blue-600',
                            borderHover: 'hover:border-blue-500 hover:shadow-blue-500/20'
                        },
                        {
                            icon: Users,
                            title: 'Socialização',
                            desc: 'Gincanas e brincadeiras lúdicas que estimulam o trabalho em equipe, a autonomia e novas amizades.',
                            iconBg: 'bg-orange-500',
                            borderHover: 'hover:border-orange-500 hover:shadow-orange-500/20'
                        },
                        {
                            icon: Shield,
                            title: 'Segurança Total',
                            desc: 'Uso obrigatório de coletes salva-vidas e monitoramento constante em todas as atividades.',
                            iconBg: 'bg-blue-900',
                            borderHover: 'hover:border-blue-900 hover:shadow-blue-900/20'
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className={`bg-white rounded-3xl p-8 transition-all duration-300 border-2 border-slate-100 shadow-lg ${item.borderHover} group`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ${item.iconBg}`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-950 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- GALERIA DE MOMENTOS (Bordas Laranjas no Hover) --- */}
            <section className="py-16 bg-blue-50 border-y border-blue-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4" data-aos="fade-right">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-3 tracking-tight">
                                Momentos <span className="text-orange-500">Inesquecíveis</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium">Confira a alegria e energia das nossas últimas temporadas</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {galleryImages.map((photo, index) => {
                            const isLarge = photo.span.includes('col-span-2');
                            return (
                                <div
                                    key={photo.id}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 50}
                                    className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-orange-400 transition-colors ${photo.span}`}
                                    onClick={() => setSelectedImage(photo.src)}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                        priority={index < 4}
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-orange-500 p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-orange-600">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- INFORMAÇÕES E FAQ (Detalhes Visuais Modernos) --- */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4 tracking-tight">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-slate-600 text-lg">Tire suas dúvidas e prepare seu filho(a) para a diversão</p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-t-4 border-t-orange-500" data-aos="fade-up" data-aos-delay="200">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b-blue-100">
                                <AccordionTrigger className="text-left font-bold text-blue-900 text-lg hover:text-orange-500 data-[state=open]:text-orange-500 py-5">
                                    Qual a faixa etária e o horário das atividades?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pt-2 pb-5">
                                    Atendemos crianças e adolescentes de <strong>5 a 14 anos</strong>. As atividades ocorrem no turno vespertino (tarde). Para horários exatos de entrada e saída, por favor, consulte-nos diretamente no WhatsApp.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b-blue-100">
                                <AccordionTrigger className="text-left font-bold text-blue-900 text-lg hover:text-orange-500 data-[state=open]:text-orange-500 py-5">
                                    É necessário saber nadar para participar?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pt-2 pb-5">
                                    Não é obrigatório saber nadar, mas é recomendável que a criança tenha afinidade com a água. A segurança é nossa prioridade absoluta: o uso do <strong>colete salva-vidas é obrigatório</strong> em 100% das atividades aquáticas e é fornecido e ajustado por nossa equipe.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b-blue-100">
                                <AccordionTrigger className="text-left font-bold text-blue-900 text-lg hover:text-orange-500 data-[state=open]:text-orange-500 py-5">
                                    O que levar na mochila da Colônia?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pt-2 pb-5">
                                    <ul className="list-disc pl-5 space-y-2 marker:text-orange-500">
                                        <li>Roupa de banho (sunga, maiô, biquíni) - recomendamos com proteção UV.</li>
                                        <li>Toalha de banho ou canga.</li>
                                        <li>Uma muda de roupa seca completa para a troca após as atividades.</li>
                                        <li>Protetor solar e repelente.</li>
                                        <li>Garrafinha de água identificada com o nome da criança.</li>
                                        <li>Lanche reforçado (individual).</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-none">
                                <AccordionTrigger className="text-left font-bold text-blue-900 text-lg hover:text-orange-500 data-[state=open]:text-orange-500 py-5">
                                    O lanche está incluso no valor da inscrição?
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pt-2 pb-5">
                                    Para garantir a segurança alimentar devido a possíveis restrições, alergias e preferências individuais, pedimos que cada criança traga seu próprio lanche de casa. Realizamos um momento de piquenique coletivo supervisionado que é super divertido!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL (Atualizado com Logo da Escola) --- */}
            <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 text-center relative z-10" data-aos="zoom-in">

                    {/* Logo da Escola Pulsante - Substituindo o Coração */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-8 animate-pulse">
                        <Image
                            src="/logoescola.png"
                            alt="Logo Escola Eu Remo Sorrindo - Colônia de Férias"
                            fill
                            className="object-contain rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                            sizes="(max-width: 768px) 112px, 128px"
                        />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md tracking-tight">As vagas são limitadas!</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Não deixe para a última hora. Garanta agora a vaga do seu filho(a) na colônia de férias mais divertida e segura do Lago Paranoá.
                    </p>
                    <Button
                        onClick={openWhatsApp}
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Falar com a Gente no WhatsApp
                    </Button>
                </div>
            </section>

        </div>
    )
}