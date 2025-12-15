'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Check, Phone, MessageCircle, MapPin, Clock, Shield, Truck, Users, Leaf, ChevronRight, Maximize2, X, ShoppingBag, CreditCard } from 'lucide-react'

const produtosRemos = [
    {
        id: 1,
        nome: 'Remo Elite Madeira',
        preco: 'R$ 798,00', // Valor Atualizado
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
        preco: 'R$ 1.395,00', // Valor Atualizado
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
        const mensagem = `Olá! Tenho interesse no ${produto.nome} (Valor: ${produto.preco}). Gostaria de saber sobre formas de pagamento e retirada.`
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
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[535px] overflow-hidden">
                <Image
                    src="/remoBg.png"
                    alt="Remos CPP Extreme - Equipamentos de Alta Performance"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-900/30"></div>

                {/* Conteúdo sobre a imagem */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="mb-6">
                                <p className="text-xl md:text-2xl font-light text-blue-100 flex items-center gap-2">
                                    Artesanal <span className="text-orange-500">•</span> Performance <span className="text-orange-500">•</span> Sustentável
                                </p>
                            </div>

                            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                                Eleve seu nível com equipamentos premium. Desenvolvidos por remadores para remadores,
                                unindo a tradição da madeira com a tecnologia da fibra para máximo conforto e durabilidade.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
                                >
                                    Ver Modelos e Preços
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Modal para imagem ampliada */}
            {imagemAmpliada && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm" onClick={handleFecharImagem}>
                    <button
                        className="absolute top-6 right-6 z-60 p-2 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full"
                        onClick={handleFecharImagem}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-5xl h-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={imagemAmpliada}
                            alt="Imagem ampliada do remo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Conteúdo Principal */}
            <div className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Produto Principal */}
                    <div id="produtos" className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24 items-start">

                        {/* COLUNA 1: Imagem do Produto */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1 sticky top-24"
                        >
                            <div className="relative rounded-3xl overflow-hidden bg-white p-8 shadow-2xl border border-blue-100">
                                {/* Badge de Preço Flutuante na Imagem (Mobile) */}
                                <div className="absolute top-4 right-4 md:hidden z-20 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                                    {produtoSelecionado.preco}
                                </div>

                                {/* Imagem grande do remo */}
                                <div className="relative aspect-[4/5] md:aspect-square w-full mx-auto cursor-zoom-in group">
                                    <Image
                                        src={produtoSelecionado.imagemLarge}
                                        alt={produtoSelecionado.nome}
                                        fill
                                        className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        onClick={() => handleAmpliarImagem(produtoSelecionado.imagemLarge)}
                                    />
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className="bg-black/60 text-white p-2 rounded-lg backdrop-blur-sm">
                                            <Maximize2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Miniaturas dos remos */}
                                <div className="mt-6 flex justify-center gap-4">
                                    {produtosRemos.map((produto) => (
                                        <button
                                            key={produto.id}
                                            onClick={() => setProdutoSelecionado(produto)}
                                            className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${produtoSelecionado.id === produto.id
                                                ? 'border-blue-600 shadow-md scale-105'
                                                : 'border-gray-200 hover:border-blue-300 opacity-70 hover:opacity-100'
                                                }`}
                                        >
                                            <Image
                                                src={produto.imagem}
                                                alt={produto.nome}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* COLUNA 2: Informações do Produto */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8 order-1 lg:order-2"
                        >
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                                        {produtoSelecionado.categoria}
                                    </span>
                                    {produtoSelecionado.prontaEntrega && (
                                        <span className="bg-green-100 text-green-700 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                                            <Truck className="w-3 h-3" /> Pronta Entrega
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black mb-2 text-gray-900 leading-tight">
                                    {produtoSelecionado.nome}
                                </h2>

                                {/* PREÇO EM DESTAQUE */}
                                <div className="flex flex-col mb-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm text-gray-500 font-medium">A partir de</span>
                                        <span className="text-4xl font-bold text-blue-700">
                                            {produtoSelecionado.preco}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-blue-600 font-medium">
                                        <CreditCard className="w-4 h-4" />
                                        <span>Consulte condições de parcelamento</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex text-orange-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-xl">★</span>
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium border-l border-gray-300 pl-4">
                                        Avaliação 5.0 de atletas
                                    </span>
                                </div>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {produtoSelecionado.descricao}
                                </p>

                                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        Para quem é indicado?
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{produtoSelecionado.recomendacao}</p>
                                </div>
                            </div>

                            {/* Características */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Especificações Técnicas:</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {produtoSelecionado.caracteristicas.map((caract, index) => (
                                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm font-medium">{caract}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Principal */}
                            <div className="pt-6 border-t border-gray-200">
                                <button
                                    onClick={() => handleContato(produtoSelecionado)}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-bold text-xl transition-all bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-7 h-7" />
                                    COMPRAR AGORA
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                                    <Shield className="w-3 h-3" /> Compra segura direto pelo WhatsApp da Escola
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Benefícios */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
                            Por que escolher nossos remos?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {beneficios.map((beneficio, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                        <beneficio.icone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900">{beneficio.titulo}</h3>
                                    <p className="text-gray-500 text-sm">{beneficio.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ Resumido */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Dúvidas Frequentes</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Qual a diferença principal entre Madeira e Carbono?</h3>
                                <p className="text-gray-600">O de Madeira oferece mais flexibilidade e "feel" clássico. O de Carbono é focado em performance, sendo mais leve e rígido.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Como sei o tamanho ideal?</h3>
                                <p className="text-gray-600">Entre em contato conosco! Nossa equipe de atletas vai te ajudar a escolher a medida baseada na sua altura e envergadura.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}