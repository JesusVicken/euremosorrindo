"use client";

import { ShieldCheck, Waves, Droplets, MapPin, Clock } from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";

const features = [
    {
        icon: ShieldCheck,
        title: "Segurança 24h",
        description: "Sistema de monitoramento e controle de acesso rigoroso para seu equipamento.",
    },
    {
        icon: MapPin,
        title: "Pé na Água",
        description: "Localização estratégica. Saia da guarderia e entre direto na água, sem esforço.",
    },
    {
        icon: Droplets,
        title: "Zona de Lavagem",
        description: "Mangueiras de alta pressão e suportes para lavar sua canoa ou SUP após o treino.",
    },
    {
        icon: Waves,
        title: "Pronto para Remar",
        description: "Esqueça o rack do carro. Chegue, pegue seu remo e vá para a água em minutos.",
    },
];

const plans = [
    { name: "Mensal", price: "220", period: "/mês", highlight: false },
    { name: "Semestral", price: "180", period: "/mês", highlight: false },
    { name: "Anual", price: "150", period: "/mês", highlight: true }, 
];

export default function GuarderiaSection() {
    // URL do WhatsApp com a mensagem pré-configurada
    const whatsappMessage = encodeURIComponent("Olá Fernanda! Vi no site e gostaria de saber mais sobre as vagas e planos da Guarderia Eu Remo Sorrindo!");
    const whatsappUrl = `https://wa.me/556191041213?text=${whatsappMessage}`;

    return (
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* --- COLUNA DE TEXTO --- */}
                    <div 
                        className="flex flex-col gap-6 order-2 lg:order-1"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        {/* Badge de Destaque */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold w-fit shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                            </span>
                            Últimas Vagas Disponíveis
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Sua Guarderia Exclusiva no <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Eu Remo Sorrindo
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                Simplifique sua rotina esportiva. Oferecemos a infraestrutura completa para que sua única preocupação seja aproveitar o momento na água.
                            </p>
                        </div>

                        {/* Grid de Features Refinado */}
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mt-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col gap-3 group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <feature.icon size={22} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* === NOVA SEÇÃO DE PREÇOS === */}
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Planos Disponíveis
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            relative p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md
                                            ${plan.highlight
                                                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 transform sm:-translate-y-2"
                                                : "bg-white border-slate-200 text-slate-700 hover:border-blue-300"
                                            }
                                        `}
                                    >
                                        {plan.highlight && (
                                            <div className="absolute -top-3 bg-cyan-400 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide animate-pulse">
                                                Melhor Valor
                                            </div>
                                        )}
                                        <span className={`text-xs font-semibold uppercase mb-1 ${plan.highlight ? "text-blue-100" : "text-slate-400"}`}>
                                            {plan.name}
                                        </span>
                                        <div className="flex items-baseline gap-0.5">
                                            <span className={`text-xs ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>R$</span>
                                            <span className="text-2xl font-bold">{plan.price}</span>
                                        </div>
                                        <span className={`text-[10px] ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botão Único Centralizado e Moderno (WhatsApp) */}
                        <div 
                            className="mt-10 flex justify-center w-full"
                            data-aos="zoom-in" 
                            data-aos-delay="400"
                        >
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
                            >
                                {/* Efeito de brilho passando sobre o botão no hover */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></div>
                                
                                {/* Conteúdo do botão */}
                                <div className="relative z-10 flex items-center gap-3">
                                    <WhatsappLogo size={28} weight="fill" className="group-hover:scale-110 transition-transform" />
                                    Garantir minha Vaga
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* --- COLUNA DA IMAGEM --- */}
                    <div 
                        className="relative w-full order-1 lg:order-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {/* Glow de fundo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10" />

                        <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">

                            <Image
                                src="/guarderia.jpg"
                                alt="Espaço da Guarderia Eu Remo Sorrindo"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            {/* Overlay Gradiente para legibilidade do card */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 lg:opacity-40 transition-opacity duration-500" />

                            {/* Card Flutuante */}
                            <div 
                                className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1 text-blue-600">
                                            <Clock size={16} />
                                            <p className="text-xs font-bold uppercase tracking-wider">Acesso Liberado</p>
                                        </div>
                                        <p className="text-slate-900 font-bold text-lg leading-none">06:00h às 18:00h</p>
                                        <p className="text-slate-500 text-xs mt-1">Todos os dias (incluindo feriados)</p>
                                    </div>

                                    {/* Ícone de destaque visual */}
                                    <div className="hidden sm:flex h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full items-center justify-center text-white shadow-lg">
                                        <ShieldCheck size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elemento Decorativo Flutuante */}
                        <div className="absolute -top-6 -right-6 h-24 w-24 bg-stripes-blue opacity-20 rounded-full blur-xl hidden lg:block animate-pulse"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}