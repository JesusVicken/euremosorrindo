'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Check, Phone, MessageCircle, MapPin, Clock, Shield, Truck, Users, Leaf, ChevronRight, Maximize2, X, ShoppingBag } from 'lucide-react'

const produtosRemos = [
    {
        id: 1,
        nome: 'Remo Elite Madeira',
        descricao: 'Modelo clássico com cabo em madeira caixeta e pá em madeira revestida com fibra de vidro',
        descricaoCompleta: 'O remo Elite Madeira é um modelo construído com cabo em madeira caixeta formado por 4 lâminas, curvo e pá em madeira revestida com fibra de vidro. Isso deixa o remo um pouco mais flexível e proporciona uma remada bem confortável. Ideal para quem inicia no esporte assim como para quem busca uma construção mais clássica.',
        imagem: '/madeira.webp',
        imagemLarge: '/madeira.webp',
        categoria: 'Clássico',
        caracteristicas: [
            'Cabo em madeira caixeta (4 lâminas)',
            'Pá em madeira + fibra de vidro',
            'Flexibilidade ideal para conforto',
            'Construção artesanal sustentável',
            'Peso equilibrado para iniciantes e experientes'
        ],
        recomendacao: 'Ideal para remadores que buscam uma construção clássica, maior flexibilidade e conforto na remada.',
        disponivel: true,
        destaque: true,
        avaliacao: 4.8,
        prontaEntrega: true,
        dimensoes: '399x239 mm'
    },
    {
        id: 2,
        nome: 'Remo Elite Carbono',
        descricao: 'Modelo híbrido com cabo em madeira caixeta e pá em espuma naval revestida com fibra de carbono',
        descricaoCompleta: 'O Remo Elite Carbono é um modelo híbrido, construído com cabo em madeira caixeta formado por 4 lâminas, curvo e pá em espuma naval revestida com fibra de carbono. Isso deixa o conjunto um pouco mais leve e rígido, proporcionando conforto e performance. Remo fabricado artesanalmente por remadores, para remadores.',
        imagem: '/carbono.webp',
        imagemLarge: '/carbono.webp',
        categoria: 'Performance',
        caracteristicas: [
            'Cabo em madeira caixeta (4 lâminas)',
            'Pá em espuma naval + fibra de carbono',
            'Leveza e rigidez premium',
            'Construção artesanal sustentável',
            'Performance para competição'
        ],
        recomendacao: 'Recomendado para remadores iniciantes e competidores que buscam leveza, rigidez e alta performance.',
        disponivel: true,
        destaque: true,
        avaliacao: 4.9,
        prontaEntrega: true,
        dimensoes: '399x239 mm'
    }
]

const beneficios = [
    {
        icone: Truck,
        titulo: 'Pronta Entrega',
        descricao: 'Disponível para retirada imediata em nossa loja em Brasília'
    },
    {
        icone: Shield,
        titulo: 'Garantia Especial',
        descricao: 'Garantia exclusiva para membros da comunidade CPP Extreme'
    },
    {
        icone: Users,
        titulo: 'Feito por Remadores',
        descricao: 'Equipamentos desenvolvidos e testados por atletas experientes'
    },
    {
        icone: Leaf,
        titulo: 'Produção Sustentável',
        descricao: 'Madeira de reflorestamento e processos eco-friendly'
    }
]

export default function EquipamentosPage() {
    const [produtoSelecionado, setProdutoSelecionado] = useState(produtosRemos[0])
    const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true
        })
    }, [])

    const handleWhatsApp = (produto: typeof produtosRemos[0]) => {
        const mensagem = `Olá! Gostaria de adquirir o ${produto.nome} da CPP Extreme. Pode me informar mais detalhes?`
        const numero = '+5561999674507'
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
        window.open(url, '_blank')
    }

    const handleContato = (produto: typeof produtosRemos[0]) => {
        handleWhatsApp(produto)
    }

    const handleAmpliarImagem = (imagemSrc: string) => {
        setImagemAmpliada(imagemSrc)
    }

    const handleFecharImagem = () => {
        setImagemAmpliada(null)
    }

    return (
        <section className="relative w-full min-h-screen text-gray-900 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

            {/* Banner Hero com imagem */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[535px] overflow-hidden">
                <Image
                    src="/remosBg.png"
                    alt="Remos CPP Extreme - Equipamentos de Alta Performance"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>

                {/* Conteúdo sobre a imagem */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <div className="mb-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">
                                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                        Remos Elite
                                    </span>
                                    <br />
                                    <span className="text-2xl md:text-3xl font-normal text-blue-100">Artesanal • Performance • Sustentável</span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                                Equipamentos premium desenvolvidos por remadores para remadores, com foco em conforto,
                                performance e sustentabilidade. Produção artesanal com madeira de reflorestamento.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg transition-all"
                                >
                                    Ver Produtos
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleContato(produtosRemos[0])}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Adquira o seu
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Modal para imagem ampliada */}
            {imagemAmpliada && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={handleFecharImagem}>
                    <button
                        className="absolute top-4 right-4 z-60 p-2 text-white hover:text-blue-300 transition-colors"
                        onClick={handleFecharImagem}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={imagemAmpliada}
                            alt="Imagem ampliada do remo"
                            width={800}
                            height={600}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Conteúdo Principal */}
            <div className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Seção: Nossa Coleção Completa */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24"
                    >
                        <div className="text-center mb-8 md:mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                                <ShoppingBag className="w-5 h-5 text-white" />
                                <span className="text-sm font-semibold text-white">PRONTA ENTREGA</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Nossa Coleção Completa
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Todos os nossos remos disponíveis para retirada imediata
                            </p>
                        </div>

                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50 shadow-xl border border-blue-100 group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30 z-10"></div>

                            {/* Container responsivo para imagem 1200x1600 */}
                            <div className="relative w-full" style={{ aspectRatio: '1200/1600' }}>
                                <Image
                                    src="/remos.jpg"
                                    alt="Coleção completa de remos CPP Extreme disponíveis para pronta entrega"
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                                    onClick={() => handleAmpliarImagem('/remos.jpg')}
                                />

                                {/* Overlay com informações - Posicionado no topo */}
                                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 p-4 md:p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="max-w-lg">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                Coleção Completa de Remos
                                            </h3>
                                            <p className="text-blue-200 text-sm">
                                                Clique para ver em detalhes todos os modelos disponíveis
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                                <span className="text-green-400 text-sm font-semibold">✓</span>
                                                <span className="text-white text-sm">Pronta entrega</span>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAmpliarImagem('/remos.jpg');
                                                }}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl transition-all border border-white/30"
                                            >
                                                <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
                                                <span className="text-sm md:text-base">Ampliar Imagem</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Informações na parte inferior */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-20 p-4 md:p-6">
                                    <div className="text-center">
                                        <p className="text-white text-sm md:text-base font-semibold">
                                            {produtosRemos.length} modelos disponíveis • Pronta entrega • Condições especiais
                                        </p>
                                    </div>
                                </div>

                                {/* Badge mobile */}
                                <div className="absolute top-4 right-4 md:hidden z-30">
                                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                        PRONTA ENTREGA
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Descrição abaixo da imagem */}
                        <div className="mt-6 text-center max-w-3xl mx-auto">
                            <p className="text-gray-700">
                                Nossa coleção inclui todos os modelos de remos disponíveis para pronta entrega.
                                Cada peça é fabricada artesanalmente com materiais de alta qualidade e
                                atenção aos detalhes que fazem a diferença na sua remada.
                            </p>
                        </div>
                    </motion.div>

                    {/* Produto Principal */}
                    <div id="produtos" className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                        {/* Imagem do Produto */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 shadow-xl border border-blue-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/30"></div>

                                {/* Imagem grande do remo - Agora clicável */}
                                <div className="relative aspect-square w-full max-w-md mx-auto cursor-pointer group">
                                    <Image
                                        src={produtoSelecionado.imagemLarge}
                                        alt={produtoSelecionado.nome}
                                        fill
                                        className="object-contain p-4 md:p-6 transform group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        onClick={() => handleAmpliarImagem(produtoSelecionado.imagemLarge)}
                                    />
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/50 text-white p-2 rounded-lg backdrop-blur-sm">
                                            <Maximize2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Miniaturas dos remos */}
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    {produtosRemos.map((produto) => (
                                        <button
                                            key={produto.id}
                                            onClick={() => setProdutoSelecionado(produto)}
                                            className={`relative h-40 md:h-48 rounded-xl overflow-hidden border-2 transition-all duration-300 ${produtoSelecionado.id === produto.id
                                                ? 'border-blue-500 shadow-lg'
                                                : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <Image
                                                src={produto.imagem}
                                                alt={produto.nome}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                            <div className={`absolute inset-0 ${produtoSelecionado.id === produto.id ? 'bg-blue-500/10' : 'bg-black/5'}`}></div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                                <p className="text-white text-sm font-semibold text-center">
                                                    {produto.nome.split(' ')[2]}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    {produtoSelecionado.destaque && (
                                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                                            DESTAQUE
                                        </div>
                                    )}
                                    {produtoSelecionado.prontaEntrega && (
                                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                                            PRONTA ENTREGA
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Seletor de Modelos Desktop */}
                            <div className="hidden md:flex justify-center gap-4 mt-8">
                                {produtosRemos.map((produto) => (
                                    <button
                                        key={produto.id}
                                        onClick={() => setProdutoSelecionado(produto)}
                                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${produtoSelecionado.id === produto.id
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                            : 'bg-white text-gray-600 border border-blue-200 hover:border-blue-300'
                                            }`}
                                    >
                                        {produto.nome}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Informações do Produto */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8 order-1 lg:order-2"
                        >
                            <div>
                                <div className="mb-4">
                                    <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-semibold text-sm md:text-base px-4 py-1.5 rounded-full mb-4 border border-blue-200">
                                        {produtoSelecionado.categoria}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
                                    {produtoSelecionado.nome}
                                </h2>

                                <div className="flex items-center gap-2 mb-4 md:mb-6">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-lg md:text-xl ${i < Math.floor(produtoSelecionado.avaliacao) ? 'text-orange-500' : 'text-gray-300'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-gray-600 text-sm md:text-base">({produtoSelecionado.avaliacao} avaliações)</span>
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 mb-4">
                                    {produtoSelecionado.descricao}
                                </p>

                                <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-6 border border-blue-100">
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg">🔍 Sobre este modelo:</h3>
                                    <p className="text-gray-700">{produtoSelecionado.descricaoCompleta}</p>
                                </div>
                            </div>

                            {/* Características */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Características Técnicas:</h3>
                                <ul className="space-y-3">
                                    {produtoSelecionado.caracteristicas.map((caract, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 mt-0.5">
                                                <Check className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700 text-base md:text-lg">{caract}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recomendação */}
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 border border-blue-200">
                                <h3 className="font-bold text-gray-900 mb-2">🎯 Recomendação:</h3>
                                <p className="text-gray-700">{produtoSelecionado.recomendacao}</p>
                            </div>

                            {/* Aviso de Medida */}
                            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 md:p-6 border border-orange-200">
                                <h3 className="font-bold text-gray-900 mb-2">📏 Medida do Remo:</h3>
                                <p className="text-gray-700 mb-3">
                                    Caso tenha dúvida sobre qual medida solicitar o seu equipamento, sugerimos que busque a orientação do seu instrutor de Canoa Havaiana ou um colega remador com mais experiência.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-orange-700">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Consulte nossos especialistas para orientação personalizada</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-4 border-t border-blue-200">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-xl p-4 border border-blue-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                                                    <Truck className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">Disponibilidade</p>
                                                    <p className="text-green-600 font-semibold text-sm">Pronta entrega</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 border border-blue-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                                                    <Phone className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">Valores</p>
                                                    <p className="text-blue-700 font-semibold text-sm">Condições especiais</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleContato(produtoSelecionado)}
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-xl shadow-lg"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        ADQUIRA O SEU VIA WHATSAPP
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Benefícios */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
                            Por que escolher nossos remos?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {beneficios.map((beneficio, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-4 group-hover:from-blue-100 group-hover:to-blue-200 border border-blue-200">
                                        <beneficio.icone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{beneficio.titulo}</h3>
                                    <p className="text-gray-600 text-sm md:text-base">{beneficio.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
                            Perguntas Frequentes
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    pergunta: 'Qual a diferença entre o Elite Madeira e o Elite Carbono?',
                                    resposta: 'O Elite Madeira tem pá em madeira revestida com fibra de vidro, oferecendo mais flexibilidade e conforto. O Elite Carbono tem pá em espuma naval com fibra de carbono, sendo mais leve e rígido para maior performance.'
                                },
                                {
                                    pergunta: 'Como escolho a medida correta do remo?',
                                    resposta: 'Recomendamos consultar seu instrutor ou um remador experiente. Também oferecemos orientação personalizada em nossa loja ou por telefone.'
                                },
                                {
                                    pergunta: 'Os remos são resistentes à água salgada?',
                                    resposta: 'Sim, todos os nossos remos são tratados para resistência tanto em água doce quanto salgada.'
                                },
                                {
                                    pergunta: 'Vocês oferecem garantia?',
                                    resposta: 'Sim, oferecemos garantia contra defeitos de fabricação e condições especiais para membros da comunidade CPP Extreme.'
                                },
                                {
                                    pergunta: 'Posso agendar um teste?',
                                    resposta: 'Sim! Entre em contato para agendar um teste personalizado com nossos equipamentos.'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                                >
                                    <h3 className="text-lg md:text-xl font-bold mb-3 text-blue-800 flex items-start gap-2">
                                        <span className="text-blue-600">Q:</span>
                                        {item.pergunta}
                                    </h3>
                                    <p className="text-gray-700 ml-6">{item.resposta}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Final */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 md:mt-24 text-center"
                    >
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                Pronto para remar com equipamento de elite?
                            </h2>
                            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                                Fale conosco pelo WhatsApp e adquira seu remo com condições especiais!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => handleContato(produtosRemos[0])}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all bg-white text-green-600 hover:bg-green-50 hover:shadow-lg"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    FALAR NO WHATSAPP
                                </button>
                                <button
                                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all bg-transparent text-white border-2 border-white hover:bg-white/10"
                                >
                                    <ShoppingBag className="w-6 h-6" />
                                    VER COLEÇÃO COMPLETA
                                </button>
                            </div>
                            <p className="mt-6 text-green-200 text-sm">
                                Atendimento rápido • Condições especiais • Pronta entrega
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}