'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Calendar, MapPin, Star, Award, Target, Users, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function CurriculoEsportivo() {
    const [activeImage, setActiveImage] = useState(0)
    const [counterValues, setCounterValues] = useState({
        competitions: 0,
        medals: 0,
        countries: 0,
        experience: 0
    })
    const sectionRef = useRef(null)
    const galleryRef = useRef(null)
    const heroRef = useRef(null)

    const { ref: sectionInViewRef, inView: sectionInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    // Combinar refs
    const setSectionRef = (node: HTMLDivElement) => {
        sectionRef.current = node
        sectionInViewRef(node)
    }

    // Efeito de contagem
    useEffect(() => {
        if (sectionInView) {
            const duration = 2000 // 2 segundos
            const steps = 60
            const interval = duration / steps

            const targetValues = {
                competitions: 50,
                medals: 25,
                countries: 8,
                experience: 10
            }

            let currentStep = 0

            const timer = setInterval(() => {
                currentStep++
                const progress = currentStep / steps

                setCounterValues({
                    competitions: Math.floor(targetValues.competitions * progress),
                    medals: Math.floor(targetValues.medals * progress),
                    countries: Math.floor(targetValues.countries * progress),
                    experience: Math.floor(targetValues.experience * progress)
                })

                if (currentStep >= steps) {
                    clearInterval(timer)
                    // Garantir valores exatos no final
                    setCounterValues(targetValues)
                }
            }, interval)

            return () => clearInterval(timer)
        }
    }, [sectionInView])

    // Dados do currículo esportivo
    const achievements = [
        {
            year: '2023',
            title: 'Campeonato Brasileiro de Canoagem Oceânica',
            result: 'Medalha de Ouro - Categoria Master',
            location: 'Rio de Janeiro, RJ',
            description: 'Primeiro lugar na categoria master feminina, demonstrando excelência técnica e resistência.'
        },
        {
            year: '2022',
            title: 'Copa do Mundo de Canoagem Maratona',
            result: 'Top 10 - Categoria Feminina',
            location: 'Portugal',
            description: 'Classificação entre as 10 melhores atletas do mundo na modalidade maratona.'
        },
        {
            year: '2021',
            title: 'Campeonato Sudeste de Canoagem Velocidade',
            result: 'Medalha de Prata - K1 500m',
            location: 'São Paulo, SP',
            description: 'Segundo lugar na prova de velocidade em distância olímpica.'
        },
        {
            year: '2020',
            title: 'Desafio Internacional de Surfski',
            result: 'Campeã Geral Feminina',
            location: 'Florianópolis, SC',
            description: 'Vitória geral no desafio que reuniu as melhores atletas da América do Sul.'
        },
        {
            year: '2019',
            title: 'Circuito Brasileiro de Canoagem',
            result: 'Tricampeã Nacional',
            location: 'Várias cidades',
            description: 'Conquista do tricampeonato nacional após três anos de domínio na categoria.'
        }
    ]

    const statistics = [
        {
            icon: Trophy,
            label: 'Competições',
            value: counterValues.competitions,
            suffix: '+',
            description: 'Participações em eventos nacionais e internacionais'
        },
        {
            icon: Award,
            label: 'Medalhas',
            value: counterValues.medals,
            suffix: '+',
            description: 'Ouros, pratas e bronzes conquistados'
        },
        {
            icon: MapPin,
            label: 'Países',
            value: counterValues.countries,
            suffix: '',
            description: 'Competições realizadas internacionalmente'
        },
        {
            icon: Clock,
            label: 'Experiência',
            value: counterValues.experience,
            suffix: '+ anos',
            description: 'Dedicação ao esporte de alto rendimento'
        }
    ]

    const trainingData = [
        {
            area: 'Treinamento Físico',
            details: ['Preparação física específica', 'Condicionamento cardiovascular', 'Fortalecimento muscular', 'Flexibilidade e mobilidade']
        },
        {
            area: 'Técnica Especializada',
            details: ['Técnica de remada avançada', 'Navegação em águas abertas', 'Estratégia de competição', 'Controle embarcação']
        },
        {
            area: 'Preparação Mental',
            details: ['Gestão de pressão competitiva', 'Foco e concentração', 'Resiliência emocional', 'Visualização de performance']
        }
    ]

    const photos = [
        {
            src: '/fernanda2.jpg',
            alt: 'Fernanda no pódio recebendo medalha',
            caption: 'Cerimônia de Pódio - 2022',
            aspect: 'aspect-[3/4]'
        },
        {
            src: '/fernanda3.jpg',
            alt: 'Fernanda treinando velocidade',
            caption: 'Treino de Velocidade - 2021',
            aspect: 'aspect-[4/3]'
        },
        {
            src: '/fernanda4.jpg',
            alt: 'Fernanda em competição internacional',
            caption: 'Competição Internacional - 2020',
            aspect: 'aspect-[16/9]'
        },
        {
            src: '/fernanda5.jpg',
            alt: 'Fernanda com equipamentos de canoagem',
            caption: 'Preparação Técnica - 2019',
            aspect: 'aspect-[3/2]'
        }
    ]

    // Animações GSAP
    useEffect(() => {
        // Animação do hero com parallax
        gsap.to(heroRef.current, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // Animação dos cards de conquistas
        gsap.fromTo('.achievement-card',
            {
                opacity: 0,
                x: -50,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: '.achievement-card',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação das estatísticas
        gsap.fromTo('.stat-card',
            {
                opacity: 0,
                y: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.stat-card',
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação da galeria
        gsap.fromTo('.gallery-item',
            {
                opacity: 0,
                y: 30,
                rotationY: 10
            },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.gallery-item',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animação dos dados de treinamento
        gsap.fromTo('.training-card',
            {
                opacity: 0,
                x: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.3)",
                scrollTrigger: {
                    trigger: '.training-card',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        )

    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
            {/* Hero Section do Currículo */}
            <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/90 to-cyan-700/90">
                {/* Imagem de fundo - fernanda1.jpg com ajuste para mostrar o rosto */}
                <div className="absolute inset-0">
                    <Image
                        src="/fernanda1.jpg"
                        alt="Fernanda Rachid - Atleta profissional"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '50% 30%' }} // Ajustado para mostrar mais o rosto
                        priority
                        sizes="100vw"
                    />
                    {/* Overlay gradiente moderno */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-cyan-700/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                </div>

                {/* Conteúdo do Hero */}
                <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <Image
                            src="/logoescola.png"
                            alt="Fernanda Rachid"
                            width={400}
                            height={120}
                            className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl"
                    >
                        Currículo Esportivo
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                    >
                        Trajetória de excelência, conquistas e dedicação na canoagem de alto rendimento
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 12, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-1 h-3 bg-white/70 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Conteúdo Principal */}
            <section ref={setSectionRef} className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Estatísticas */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
                        {statistics.map((stat, index) => (
                            <div key={stat.label} className="stat-card">
                                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                    <CardContent className="p-4 lg:p-6 text-center">
                                        <div className="flex justify-center mb-3">
                                            <div className="p-3 bg-blue-100 rounded-xl">
                                                <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                                            </div>
                                        </div>
                                        <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                                            {stat.value}{stat.suffix}
                                        </div>
                                        <div className="text-sm lg:text-base font-semibold text-gray-700 mb-2">
                                            {stat.label}
                                        </div>
                                        <div className="text-xs lg:text-sm text-gray-500">
                                            {stat.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
                        {/* Conquistas Principais */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <Trophy className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                                Conquistas Destacadas
                            </h3>
                            <div className="space-y-6">
                                {achievements.map((achievement, index) => (
                                    <div key={achievement.year} className="achievement-card">
                                        <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                            <CardContent className="p-6">
                                                <div className="flex items-start justify-between mb-3">
                                                    <Badge className="bg-blue-600 text-white px-3 py-1 text-sm">
                                                        {achievement.year}
                                                    </Badge>
                                                    <div className="flex items-center gap-1 text-amber-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span className="text-sm font-medium">Destaque</span>
                                                    </div>
                                                </div>
                                                <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                                                    {achievement.title}
                                                </h4>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Award className="w-4 h-4 text-amber-500" />
                                                    <span className="text-base font-medium text-gray-700">
                                                        {achievement.result}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <MapPin className="w-4 h-4 text-gray-500" />
                                                    <span className="text-sm text-gray-600">
                                                        {achievement.location}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Galeria de Fotos */}
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <Target className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                                Momentos Marcantes
                            </h3>

                            {/* Foto Principal - Tamanho Real */}
                            <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                <div className={`relative ${photos[activeImage].aspect} w-full bg-gray-200`}>
                                    <Image
                                        src={photos[activeImage].src}
                                        alt={photos[activeImage].alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={activeImage === 0}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">
                                            {photos[activeImage].caption}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Miniaturas - Mantendo Proporção */}
                            <div ref={galleryRef} className="grid grid-cols-4 gap-2">
                                {photos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className={`gallery-item relative ${photo.aspect} rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${activeImage === index
                                            ? 'ring-2 ring-blue-500 ring-offset-2 scale-105 shadow-lg'
                                            : 'opacity-70 hover:opacity-100 hover:scale-105 shadow-md'
                                            }`}
                                        onClick={() => setActiveImage(index)}
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 25vw, 12.5vw"
                                        />
                                        {activeImage === index && (
                                            <div className="absolute inset-0 bg-blue-500/20 border-2 border-blue-400 rounded-lg" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Metodologia de Treinamento */}
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-2xl p-8 lg:p-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                            <Users className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
                            Metodologia de Treinamento
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {trainingData.map((training, index) => (
                                <div key={training.area} className="training-card">
                                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 shadow-lg rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-6">
                                            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                                {training.area}
                                            </h4>
                                            <ul className="space-y-3">
                                                {training.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-gray-700 text-sm lg:text-base leading-relaxed">
                                                            {detail}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rodapé Inspirador */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center mt-16 lg:mt-20"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 lg:p-12 rounded-3xl shadow-2xl">
                            <Trophy className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4" />
                            <h4 className="text-2xl lg:text-3xl font-bold mb-4">
                                Dedicação e Excelência
                            </h4>
                            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                                "Cada remada é uma oportunidade de superação. A canoagem não é apenas um esporte,
                                é um estilo de vida que ensina resiliência, foco e paixão pelo que se faz."
                            </p>
                            <div className="mt-6 text-blue-200 font-medium">
                                - Fernanda Rachid
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}