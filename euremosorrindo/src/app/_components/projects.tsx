'use client'

import { useRef, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function Projects() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        // Garantir que o vídeo carregue com melhor qualidade
        if (videoRef.current) {
            videoRef.current.load()
        }
    }, [])

    return (
        <div
            className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden"
            data-aos="fade-up"
        >
            <Parallax speed={-15} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        src="/bgfernanda2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover scale-105" // Scale para evitar bordas
                    />
                    {/* Fallback de imagem caso o vídeo não carregue */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-700/80 backdrop-blur-sm z-0" />
                </div>
            </Parallax>

            {/* Overlay sutil para melhor contraste */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            <div
                className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 space-y-8"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="text-center space-y-6 max-w-4xl">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight px-4">
                        Entre no nosso grupo e fique por dentro da{' '}
                        <span className="text-cyan-300">programação completa</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-cyan-100 max-w-2xl mx-auto px-4">
                        Receba atualizações em tempo real sobre passeios, eventos especiais e novas experiências
                    </p>
                </div>

                {/* Botão para entrar no grupo do WhatsApp */}
                <div
                    className="mt-4"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="https://chat.whatsapp.com/KM0KWPFhgvH2ivlof8QndE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-3 px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl font-bold group transform hover:scale-105"
                        aria-label="Entrar no grupo do WhatsApp"
                    >
                        <WhatsappLogo weight="fill" className="w-8 h-8" />
                        <span>ENTRAR NO GRUPO AGORA</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none ml-1"></div>
                    </a>

                    <p className="text-center text-cyan-200 text-sm mt-4">
                        📍 Grupo exclusivo para participantes e interessados
                    </p>
                </div>

                {/* Benefícios do grupo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-cyan-300 font-bold text-lg mb-2">🔄</div>
                        <h3 className="text-white font-semibold">Atualizações Diárias</h3>
                        <p className="text-cyan-100 text-sm">Programação em tempo real</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-cyan-300 font-bold text-lg mb-2">📸</div>
                        <h3 className="text-white font-semibold">Fotos e Vídeos</h3>
                        <p className="text-cyan-100 text-sm">Momentos exclusivos</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-cyan-300 font-bold text-lg mb-2">👥</div>
                        <h3 className="text-white font-semibold">Comunidade</h3>
                        <p className="text-cyan-100 text-sm">Conecte-se com outros remadores</p>
                    </div>
                </div>
            </div>
        </div>
    )
}