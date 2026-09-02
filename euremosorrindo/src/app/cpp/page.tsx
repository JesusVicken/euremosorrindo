'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    ChevronRight,
    Moon,
    Sun,
    Activity,
    Users,
    Info,
    MessageCircle,
    ArrowRight,
    Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

// Inicializa AOS
export default function CppPage() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: 'ease-out' })
    }, [])

    // Sistema de Níveis
    const niveis = [
        {
            nivel: 'Nível 1',
            titulo: 'Iniciante',
            descricao: 'Para todos os públicos, sem exigência física',
            caracteristicas: [
                'Duração: 1-2 horas',
                'Remada tranquila em águas calmas',
                'Sem necessidade de experiência prévia',
                'Equipamentos básicos fornecidos',
            ],
            cor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
            corBadge: 'bg-green-500',
        },
        {
            nivel: 'Nível 2',
            titulo: 'Intermediário',
            descricao: 'Exige condicionamento físico básico',
            caracteristicas: [
                'Duração: 2-3 horas',
                'Remada com pequenas ondulações',
                'Experiência básica recomendada',
                'Pequenos desafios técnicos',
            ],
            cor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
            corBadge: 'bg-blue-500',
        },
        {
            nivel: 'Nível 3',
            titulo: 'Avançado',
            descricao: 'Exige boa condição física e experiência',
            caracteristicas: [
                'Duração: 3-4 horas',
                'Remada em águas abertas',
                'Experiência intermediária obrigatória',
                'Desafios técnicos consideráveis',
            ],
            cor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
            corBadge: 'bg-yellow-500',
        },
        {
            nivel: 'Nível 4',
            titulo: 'Expert',
            descricao: 'Para remadores experientes and atléticos',
            caracteristicas: [
                'Duração: 4+ horas',
                'Condições de água variáveis',
                'Experiência avançada obrigatória',
                'Grandes desafios técnicos e físicos',
            ],
            cor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
            corBadge: 'bg-orange-500',
        },
        {
            nivel: 'Nível 5',
            titulo: 'Extremo',
            descricao: 'Excepcional condicionamento físico necessário',
            caracteristicas: [
                'Expedições multi-dia',
                'Condições desafiadoras',
                'Experiência comprovada obrigatória',
                'Teste físico prévio exigido',
            ],
            cor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
            corBadge: 'bg-red-500',
        },
    ]

    // Modalidades Canoagem
    const modalidades = [
        {
            nivel: 'Nível 1',
            titulo: 'Experiências Contemplativas',
            icone: <Moon className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada da Lua Cheia',
                    descricao:
                        'Remadas noturnas sob o luar com vista privilegiada do céu estrelado',
                    imagem: '/noite.jpg',
                },
                {
                    nome: 'Remada Pôr do Sol',
                    descricao:
                        'Aprecie o pôr do sol no lago com cores deslumbrantes',
                    imagem: '/por.jpg',
                },
                {
                    nome: 'Remada Nascer do Sol',
                    descricao:
                        'Comece o dia com energia renovada acompanhando o nascer do sol',
                    imagem: '/corporativo.jpg',
                },
                {
                    nome: 'Remada com Meditação',
                    descricao:
                        'Prática de mindfulness na canoa com instrutor especializado',
                    imagem: '/iniciante.jpg',
                },
                {
                    nome: 'Remada Festiva/Temática',
                    descricao:
                        'Eventos especiais com música, cultura e temas sazonais',
                    imagem: '/sol.jpg',
                },
                {
                    nome: 'Remada 60+',
                    descricao:
                        'Atividade adaptada para participantes acima de 60 anos',
                    imagem: '/remadalinda.jpg',
                },
            ],
        },
        {
            nivel: 'Nível 2',
            titulo: 'Experiências Wellness',
            icone: <Activity className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada com Picnic',
                    descricao:
                        'Remada + piquenique gourmet em ilha privativa',
                    imagem: '/experimental.jpg',
                },
                {
                    nome: 'Remada com Yoga',
                    descricao:
                        'Prática de yoga em plataforma flutuante com instrutor',
                    imagem: '/regular.jpg',
                },
                {
                    nome: 'Remada até Ponte JK',
                    descricao:
                        'Trajeto urbano com vista icônica da ponte mais famosa de Brasília',
                    imagem: '/canoa1.jpg',
                },
            ],
        },
        {
            nivel: 'Nível 3',
            titulo: 'Aventuras Avançadas',
            icone: <Sun className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada até a Ermida',
                    descricao:
                        'Trajeto de 12km até o santuário com parada para contemplação',
                    imagem: '/canoa3.jpg',
                },
                {
                    nome: 'Remada até a Barragem',
                    descricao:
                        'Desafio de 18km com vistas impressionantes da barragem do Lago Paranoá',
                    imagem: '/canoa5.jpg',
                },
            ],
        },
        {
            nivel: 'Níveis 3-5',
            titulo: 'Expedições',
            icone: <Users className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Arraial à Corumbá (Nível 4)',
                    descricao:
                        'Expedição de 2 dias com pernoite em acampamento rústico',
                    imagem: '/corumba.jpg',
                },
                {
                    nome: 'Porto Seguro à Arraial (Nível 2)',
                    descricao:
                        'Trajeto costeiro de 15km com paradas estratégicas',
                    imagem: '/porto.jpg',
                },
                {
                    nome: 'Abrolhos (Nível 3)',
                    descricao:
                        'Remada em águas abertas com possibilidade de avistamento de vida marinha',
                    imagem: '/abrolhos.jpg',
                },
                {
                    nome: 'Praia do Forte (Nível 2)',
                    descricao:
                        'Trajeto com parada em praia isolada para banho e descanso',
                    imagem: '/forte.jpg',
                },
            ],
        },
    ]

    const whatsappNumber = '5561991041213'
    const whatsappMessage =
        'Olá! Vi no site e gostaria de saber mais sobre as modalidades da Eu Remo Sorrindo.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    return (
        <div className="container mx-auto px-4 py-20 md:py-16 lg:py-20">
            {/* Vídeo de destaque */}
            <div
                className="relative h-72 md:h-96 w-full mb-16 rounded-lg overflow-hidden"
                data-aos="fade-up"
            >
                <video
                    src="/cpp.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-white max-w-2xl"
                    >
                        <p className="text-lg md:text-xl text-white/90">
                            Descubra nossas experiências exclusivas na Eu Remo Sorrindo BSB
                        </p>
                    </motion.div>
                </div>
            </div>


            {/* Seção de Níveis - agora em Accordion */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Níveis de Experiência
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="niveis">
                        <AccordionTrigger className="text-lg font-semibold">
                            Clique para ver os níveis de experiência
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                                {niveis.map((nivel, index) => (
                                    <Card
                                        key={index}
                                        className={`h-full border-0 ${nivel.cor}`}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <CardHeader>
                                            <CardTitle className="flex items-center justify-between">
                                                <span>{nivel.nivel}</span>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {nivel.titulo}
                                                </Badge>
                                            </CardTitle>
                                            <CardDescription className="text-current">
                                                {nivel.descricao}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                {nivel.caracteristicas.map(
                                                    (c, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                            {c}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Modalidades */}
            {modalidades.map((modalidade, index) => {
                const nivelPrincipal = modalidade.nivel.split('-')[0]
                const nivelInfo =
                    niveis.find((n) => n.nivel === nivelPrincipal) || niveis[0]

                return (
                    <div key={index} data-aos="fade-up" className="mt-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className={`p-2 rounded-full ${nivelInfo.corBadge}/10`}
                            >
                                {modalidade.icone}
                            </div>
                            <div>
                                <Badge
                                    className={`${nivelInfo.corBadge} text-white`}
                                >
                                    {modalidade.nivel}
                                </Badge>
                                <h2 className="text-2xl font-bold mt-2">
                                    {modalidade.titulo}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {modalidade.experiencias.map((exp, expIndex) => (
                                <Card
                                    key={expIndex}
                                    className="h-full border-border hover:border-primary/40 transition-all flex flex-col group overflow-hidden"
                                    data-aos="fade-up"
                                    data-aos-delay={expIndex * 100}
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={exp.imagem}
                                            alt={exp.nome}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                        <Badge
                                            className={`absolute top-3 right-3 ${nivelInfo.corBadge} text-white`}
                                        >
                                            {modalidade.nivel}
                                        </Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {exp.nome}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground text-sm mb-3">
                                            {exp.descricao}
                                        </p>
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full gap-2"
                                            >
                                                <MessageCircle className="w-4 h-4" />{' '}
                                                Saber Mais
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )
            })}

            {/* Seção de Call-to-Action Final */}
            <div className="text-center mt-20 mb-10" data-aos="fade-up">
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/20 rounded-full">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Pronto para viver experiências incríveis?
                    </h2>

                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Entre em contato agora mesmo e descubra qual modalidade
                        é perfeita para você!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="gap-2 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Falar no WhatsApp
                                <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <a href="tel:+5561991041213">
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 px-8 py-6 text-lg font-semibold"
                            >
                                📞 Ligar Agora
                            </Button>
                        </a>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">
                        Respondemos em até 5 minutos durante o horário
                        comercial
                    </p>
                </div>
            </div>
        </div>
    )
}
