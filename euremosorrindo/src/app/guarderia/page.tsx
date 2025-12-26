"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Waves, Droplets, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image"; // Certifique-se de configurar o next.config se usar imagens externas

const features = [
    {
        icon: ShieldCheck,
        title: "Segurança Total",
        description: "Espaço monitorado para que seu equipamento esteja sempre seguro enquanto você não está remando.",
    },
    {
        icon: MapPin,
        title: "Localização Privilegiada",
        description: "Saia da guarderia direto para a água. Sem necessidade de carregar peso por longas distâncias.",
    },
    {
        icon: Droplets,
        title: "Área de Lavagem",
        description: "Estrutura completa com mangueiras para lavar seu SUP ou Canoa após o treino.",
    },
    {
        icon: Waves,
        title: "Sempre Pronto",
        description: "Chega de amarrar prancha no teto do carro. Chegue, pegue seu equipamento e reme.",
    },
];

export default function GuarderiaSection() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Coluna de Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Vagas Limitadas
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            Sua Guarderia no <br className="hidden md:block" />
                            <span className="text-blue-600">Eu Remo Sorrindo</span>
                        </h2>

                        <p className="text-lg text-slate-600 md:max-w-md leading-relaxed">
                            Simplifique sua vida. Guarde seu Stand Up Paddle ou Canoa Havaiana com segurança e conveniência, a poucos passos da água.
                        </p>

                        {/* Grid de Features */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                                        <feature.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 leading-snug">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                                Consultar Disponibilidade
                                <ArrowRight size={18} />
                            </button>
                            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                                Ver Planos
                            </button>
                        </div>
                    </motion.div>

                    {/* Coluna Visual / Imagem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] w-full"
                    >
                        {/* Elemento Decorativo de Fundo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10" />

                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                            {/* Substitua pelo caminho real da sua imagem */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                <span className="text-center p-8">
                                    [Imagem do Galpão de Guarderia ou Pranchas Armazenadas]
                                    <br />
                                    Aspect Ratio: Vertical ou Square
                                </span>
                                <Image
                                    src="/guarderia.jpg"
                                    alt="Guarderia Eu Remo Sorrindo"
                                    fill
                                    className="object-cover"
                                />

                            </div>

                            {/* Card Flutuante (Glassmorphism) */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Horário de Acesso</p>
                                        <p className="text-slate-900 font-medium">Todos os dias, das 06h às 18h</p>
                                    </div>
                                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <ShieldCheck size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}