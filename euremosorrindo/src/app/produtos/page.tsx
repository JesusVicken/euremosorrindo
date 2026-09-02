'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import {
    Check, MessageCircle, ChevronRight, X, Sun, Droplets,
    ChevronLeft, CreditCard, ShoppingBag, Palette, Shirt
} from 'lucide-react'

// --- DADOS DOS REMOS ---
const produtosRemos = [
    {
        id: 'madeira',
        nome: 'Remo Madeira (Iniciante)',
        preco: 'R$ 798,00',
        condicaoPagamento: 'À vista ou 2x (+10%)',
        descricao: 'Modelo clássico indicado para quem está iniciando no esporte.',
        descricaoCompleta: 'O remo de Madeira é ideal para quem busca sentir a água com conforto. Sua construção oferece a flexibilidade necessária para o aprendizado, reduzindo o impacto nas articulações.',
        imagens: ['/produtos/remo1.jpg', '/produtos/remo2.jpg'],
        categoria: 'Iniciante',
        caracteristicas: [
            'Construção em Madeira',
            'Flexibilidade ideal para aprendizado',
            'Design clássico',
            'Ótimo custo-benefício'
        ],
        prontaEntrega: true,
    },
    {
        id: 'hibrido',
        nome: 'Remo Híbrido (Performance)',
        preco: 'R$ 1.395,00',
        condicaoPagamento: 'À vista ou 2x (+10%)',
        descricao: 'Modelo híbrido (madeira e carbono) indicado para atletas que visam performance.',
        descricaoCompleta: 'A união perfeita entre a tradição da madeira no cabo e a tecnologia do carbono na pá. Proporciona leveza, rigidez e a transferência de força ideal para competições.',
        imagens: ['/produtos/remo3.jpg', '/produtos/remo4.jpg', '/produtos/remo5.jpg', '/produtos/remo6.jpg'],
        categoria: 'Performance',
        caracteristicas: [
            'Cabo em Madeira (Conforto)',
            'Pá em Carbono (Rigidez e Leveza)',
            'Transferência de força superior',
            'Indicado para competições'
        ],
        prontaEntrega: true,
    }
]

// --- DADOS DOS COLETES ---
const produtosColetes = [
    {
        id: 1,
        nome: 'Colete Hava',
        imgFrente: '/produtos/coletehava.webp',
        imgCostas: '/produtos/coletehava2.webp',
    },
    {
        id: 2,
        nome: 'Colete Iguaçu',
        imgFrente: '/produtos/coleteiguacu.jpg',
        imgCostas: '/produtos/coleteiguacu2.jpg',
    },
    {
        id: 3,
        nome: 'Colete Multisport',
        imgFrente: '/produtos/coletemultisport.jpg',
        imgCostas: '/produtos/coletemultisport2.jpg',
        obs: 'Disponível em Laranja e Azul'
    },
    {
        id: 4,
        nome: 'Colete Wind',
        imgFrente: '/produtos/coletewind.jpg',
        imgCostas: '/produtos/coletewind2.jpg',
    }
]

// --- DADOS CAPAS ---
const capasData = {
    titulo: 'Capas Personalizadas',
    descricao: 'Proteja seu equipamento com estilo! Temos vários tamanhos, modelos e estampas disponíveis. Você também pode personalizar a sua.',
    imagem: '/produtos/caparemo.webp',
    precos: [
        { item: 'Grande (1 remo)', valor: 'R$ 220,00' },
        { item: 'Grande (2 remos)', valor: 'R$ 300,00' },
        { item: 'Pequena (somente pá)', valor: 'R$ 100,00' },
    ]
}

// --- DADOS UNIFORMES ---
const uniformesData = {
    titulo: 'Uniformes Oficiais',
    descricao: 'Vista a camisa do time! Nossos uniformes são desenvolvidos com tecido tecnológico de alta qualidade, leve e com proteção UV, ideais para a prática de esportes ao ar livre com conforto e estilo.',
    imagem: '/produtos/uniforme.jpg',
    precos: [
        { item: 'Manga Longa', valor: 'R$ 100,00' },
        { item: 'Manga Curta', valor: 'R$ 70,00' },
        { item: 'Regata', valor: 'R$ 60,00' },
    ]
}

// --- DADOS SUN TECH ---
const suntechData = {
    titulo: 'SUNTECH - Protetor Solar',
    descricao: 'Protetor solar brasileiro, desenvolvido a base de produtos naturais. Super indicado para atletas de atividades ao ar livre e aquáticas especialmente, e crianças. Super resistente e a sua alta concentração rende por muito tempo, garantindo proteção duradoura.',
    imagem: '/suntech.jpg',
    precos: [
        { item: 'FPS 50 (180g)', valor: 'R$ 190,00' },
        { item: 'FPS 30 (180g)', valor: 'R$ 130,00' },
        { item: 'FPS 50 (75g)', valor: 'R$ 100,00' },
        { item: 'FPS 30 (75g)', valor: 'R$ 65,00' },
    ]
}

export default function EquipamentosPage() {
    // States para Remos
    const [produtoSelecionado, setProdutoSelecionado] = useState(produtosRemos[0])
    const [indiceImagemRemo, setIndiceImagemRemo] = useState(0)

    // States Gerais
    const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true })
    }, [])

    useEffect(() => {
        setIndiceImagemRemo(0)
    }, [produtoSelecionado])

    const handleWhatsApp = (texto: string) => {
        const numero = '+556191041213'
        const mensagemComSite = texto.startsWith('Olá!')
            ? texto.replace('Olá!', 'Olá! Vi no site e')
            : `Olá! Vi no site. ${texto}`
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemComSite)}`
        window.open(url, '_blank')
    }

    const proximaImagemRemo = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIndiceImagemRemo((prev) => (prev + 1) % produtoSelecionado.imagens.length)
    }

    const anteriorImagemRemo = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIndiceImagemRemo((prev) => (prev - 1 + produtoSelecionado.imagens.length) % produtoSelecionado.imagens.length)
    }

    return (
        <section className="relative w-full min-h-screen text-gray-900 overflow-hidden bg-white">

            {/* --- HERO BANNER --- */}
            <div className="relative w-full bg-gray-900">

                <div className="relative w-full h-[600px] lg:h-auto lg:aspect-[3936/1088] overflow-hidden flex items-center">

                    {/* IMAGEM MOBILE */}
                    <Image
                        src="/remoBg.png"
                        alt="Eu Remo Sorrindo - Mobile"
                        fill
                        className="object-cover object-center lg:hidden"
                        priority
                        sizes="(max-width: 1024px) 100vw, 1vw"
                    />

                    {/* IMAGEM DESKTOP (A FOTO TODA) */}
                    <Image
                        src="/remosBg2.png"
                        alt="Eu Remo Sorrindo - Desktop"
                        fill
                        className="hidden lg:block"
                        priority
                        sizes="100vw"
                    />

                    {/* Gradiente escuro */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                    {/* Conteúdo Centralizado */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl lg:max-w-3xl pt-32"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
                                Loja Oficial <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                                    Eu Remo Sorrindo
                                </span>
                            </h1>

                            <div className="border-l-4 border-orange-500 pl-6 mb-8 bg-black/30 backdrop-blur-sm p-4 rounded-r-xl max-w-xl">
                                <p className="text-lg sm:text-xl text-gray-100 font-light leading-relaxed">
                                    Equipamentos de alta performance e estilo para quem vive a canoagem.
                                    Pronta entrega e encomendas personalizadas.
                                </p>
                            </div>

                            <button
                                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/40 text-lg group"
                            >
                                Ver Produtos
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- MODAL ZOOM --- */}
            {imagemAmpliada && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm" onClick={() => setImagemAmpliada(null)}>
                    <button className="absolute top-6 right-6 p-2 text-white bg-white/10 rounded-full hover:bg-white/20 z-10">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full h-full max-w-5xl max-h-[80vh] sm:max-h-[90vh]">
                        <Image
                            src={imagemAmpliada}
                            alt="Zoom"
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}

            <div className="py-12 sm:py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">

                {/* --- SEÇÃO 1: REMOS --- */}
                <div id="produtos" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 sm:mb-12">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-blue-900 uppercase tracking-wider text-center">Remos Profissionais</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Galeria de Imagens do Remo */}
                        <div className="relative order-2 lg:order-1 bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100">
                            <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden group">
                                <Image
                                    src={produtoSelecionado.imagens[indiceImagemRemo]}
                                    alt={produtoSelecionado.nome}
                                    fill
                                    className="object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                                    onClick={() => setImagemAmpliada(produtoSelecionado.imagens[indiceImagemRemo])}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                {/* Controles da Galeria */}
                                {produtoSelecionado.imagens.length > 1 && (
                                    <>
                                        <button
                                            onClick={anteriorImagemRemo}
                                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white text-blue-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={proximaImagemRemo}
                                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white text-blue-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </>
                                )}

                                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                                    {indiceImagemRemo + 1} / {produtoSelecionado.imagens.length}
                                </div>
                            </div>

                            {/* Miniaturas */}
                            <div className="mt-4 sm:mt-6 flex justify-center gap-3 sm:gap-4 overflow-x-auto py-2">
                                {produtosRemos.map((produto) => (
                                    <button
                                        key={produto.id}
                                        onClick={() => setProdutoSelecionado(produto)}
                                        className={`flex flex-col items-center gap-2 p-1.5 rounded-xl border-2 transition-all min-w-[70px] ${produtoSelecionado.id === produto.id
                                            ? 'border-blue-600 bg-blue-50'
                                            : 'border-transparent hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-gray-200">
                                            <Image
                                                src={produto.imagens[0]}
                                                alt={produto.nome}
                                                fill
                                                className="object-cover"
                                                sizes="100px"
                                            />
                                        </div>
                                        <span className={`text-[10px] sm:text-xs font-bold whitespace-nowrap ${produtoSelecionado.id === produto.id ? 'text-blue-700' : 'text-gray-500'}`}>
                                            {produto.categoria}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Detalhes do Remo */}
                        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{produtoSelecionado.nome}</h3>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{produtoSelecionado.descricaoCompleta}</p>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-5 sm:p-8 border border-blue-100">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xs sm:text-sm text-blue-600 font-semibold uppercase tracking-wide">Valor à vista</span>
                                </div>
                                <div className="text-4xl sm:text-5xl font-bold text-blue-800 mb-2 sm:mb-3">{produtoSelecionado.preco}</div>
                                <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-white px-3 py-1.5 rounded-full shadow-sm">
                                    <CreditCard size={14} />
                                    {produtoSelecionado.condicaoPagamento}
                                </div>
                            </div>

                            <ul className="space-y-3 sm:space-y-4">
                                {produtoSelecionado.caracteristicas.map((caract, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-green-600" />
                                        </div>
                                        {caract}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsApp(`Olá! Tenho interesse no ${produtoSelecionado.nome}. Gostaria de mais detalhes!`)}
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
                            >
                                <MessageCircle size={24} />
                                Comprar pelo WhatsApp
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 2: COLETES --- */}
                <div>
                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-orange-600 uppercase tracking-wider text-center">Coletes Esportivos</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg px-2">
                        Vários modelos para todas as modalidades e preferências. <br className="hidden sm:block" />
                        Os valores variam de <span className="font-bold text-orange-600">R$ 280,00 até R$ 600,00</span>.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produtosColetes.map((colete) => (
                            <div key={colete.id} className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                                    <Image
                                        src={colete.imgFrente}
                                        alt={`${colete.nome} Frente`}
                                        fill
                                        className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <Image
                                        src={colete.imgCostas}
                                        alt={`${colete.nome} Costas`}
                                        fill
                                        className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{colete.nome}</h3>
                                {colete.obs && <p className="text-xs text-gray-500 mb-3">{colete.obs}</p>}
                                <div className="mt-auto pt-2">
                                    <button
                                        onClick={() => handleWhatsApp(`Olá! Tenho interesse no ${colete.nome}. Gostaria de saber valores exatos e tamanhos disponíveis.`)}
                                        className="w-full py-2.5 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm uppercase"
                                    >
                                        Consultar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- SEÇÃO 3: CAPAS DE REMO --- */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        {/* Imagem Capa */}
                        <div className="relative h-64 sm:h-80 lg:h-auto min-h-[300px]">
                            <Image
                                src={capasData.imagem}
                                alt="Capas de Remos"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                        </div>

                        {/* Conteúdo Capa */}
                        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-gray-50">
                            <div className="flex items-center gap-2 mb-4 text-purple-600 font-bold tracking-wide uppercase text-sm">
                                <Palette size={20} />
                                <span>Personalização</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{capasData.titulo}</h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                                {capasData.descricao}
                            </p>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                                {capasData.precos.map((item, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b border-gray-100 last:border-0 hover:bg-purple-50 transition-colors gap-1 sm:gap-0">
                                        <span className="font-medium text-gray-700">{item.item}</span>
                                        <span className="font-bold text-purple-700 text-lg">{item.valor}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleWhatsApp(`Olá! Gostaria de uma capa personalizada para meu remo.`)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-purple-500/30"
                            >
                                <ShoppingBag size={20} />
                                Encomendar Capa
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 4: UNIFORMES (ATUALIZADA COM ESTILO SUNTECH) --- */}
                <div className="bg-blue-50 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
                    {/* Efeito de fundo sutil (bolha azul) */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                        {/* Conteúdo Uniformes (Esquerda) */}
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold tracking-wide uppercase text-sm">
                                <Shirt size={20} />
                                <span>Vestuário</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">{uniformesData.titulo}</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                {uniformesData.descricao}
                            </p>

                            {/* Tabela de Preços (Estilo Card Branco) */}
                            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden mb-8">
                                {uniformesData.precos.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 border-b border-blue-100 last:border-0 hover:bg-blue-50 transition-colors">
                                        <span className="font-medium text-gray-700 text-sm sm:text-base">{item.item}</span>
                                        <span className="font-bold text-blue-700 text-base sm:text-lg">{item.valor}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleWhatsApp(`Olá! Tenho interesse no uniforme oficial.`)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-blue-500/30"
                            >
                                <ShoppingBag size={20} />
                                Encomendar Uniforme
                            </button>
                        </div>

                        {/* Imagem Uniformes (Direita - ESTILO FLUTUANTE SUNTECH) */}
                        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl lg:-rotate-1 lg:hover:rotate-0 transition-all duration-500">
                            <Image
                                src={uniformesData.imagem}
                                alt="Uniformes Oficiais"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Gradiente sutil na parte inferior */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent h-1/3"></div>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 5: SUN TECH --- */}
                <div className="bg-orange-50 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold tracking-wide uppercase text-sm">
                                <Sun size={20} />
                                <span>Proteção Solar</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">{suntechData.titulo}</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                {suntechData.descricao}
                            </p>

                            {/* Tabela de Preços */}
                            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 border border-orange-100">
                                {suntechData.precos.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-orange-50 transition-colors">
                                        <span className="font-medium text-gray-700 text-sm sm:text-base">{item.item}</span>
                                        <span className="font-bold text-orange-600 text-base sm:text-lg">{item.valor}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleWhatsApp(`Olá! Quero garantir meu protetor SunTech.`)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-orange-500/30"
                            >
                                <Droplets size={20} />
                                Pedir SunTech
                            </button>
                        </div>

                        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl lg:rotate-1 lg:hover:rotate-0 transition-all duration-500">
                            <Image
                                src={suntechData.imagem}
                                alt="SunTech Protetor"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white font-medium text-center text-sm sm:text-base">Alta resistência à água e suor</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}