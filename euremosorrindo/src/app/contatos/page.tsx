// 'use client'

// import Image from 'next/image'
// import { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { Anchor } from 'lucide-react'
// import {
//     FaFacebook,
//     FaInstagram,
//     FaYoutube,
//     FaWhatsapp,
// } from 'react-icons/fa'

// // Imagens dos parceiros
// import ascadeLogo from '../../../public/logo-ascade1.png'
// import canoMAMALogo from '../../../public/canoMAMAlogo1.png'

// const brands = [
//     { name: 'Ascade', logo: ascadeLogo },
//     { name: 'CanoMAMA', logo: canoMAMALogo },
// ]

// export default function ContatosPage() {
//     useEffect(() => {
//         AOS.init({ duration: 800, once: true })
//     }, [])

//     const whatsappNumber = '61998219177'
//     const whatsappMessage =
//         'Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!'
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

//     return (
//         <section className="bg-white text-black min-h-screen">
//             <div className="container mx-auto px-4 py-22 space-y-20">

//                 {/* Parceiros */}
//                 <div data-aos="fade-up" className="space-y-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2 text-black">
//                         Nossos Parceiros
//                     </h2>

//                     <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
//                         {brands.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-gray-100 hover:bg-gray-200 transition p-4 rounded-xl shadow-md flex items-center justify-center w-[150px] h-[100px]"
//                             >
//                                 <Image
//                                     src={item.logo}
//                                     alt={`Logo ${item.name}`}
//                                     width={120}
//                                     height={80}
//                                     className="object-contain max-h-[80px]"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Contato e Informações */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

//                     {/* Sobre */}
//                     <div data-aos="fade-up-left" className="flex flex-col items-center text-center">
//                         <div className="mb-6 w-full flex justify-center">
//                             <Image
//                                 src="/logocpp.png"
//                                 alt="Logo CPP Extreme"
//                                 width={300}
//                                 height={225}
//                                 className="w-auto h-32 md:h-24 object-contain"
//                                 priority
//                             />
//                         </div>
//                         <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
//                             Promovendo inclusão social através do esporte e aventura.
//                         </p>
//                         <div className="w-full flex justify-center">
//                             <a
//                                 href={whatsappLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-6 py-3 rounded-lg text-lg"
//                                 aria-label="Contato via WhatsApp"
//                             >
//                                 <FaWhatsapp className="w-6 h-6" />
//                                 Contato via WhatsApp
//                             </a>
//                         </div>
//                     </div>

//                     {/* Contatos */}
//                     <div data-aos="flip-up">
//                         <h3 className="text-2xl font-semibold mb-4">Contatos</h3>
//                         <ul className="space-y-3 text-gray-800 leading-relaxed">
//                             <li>
//                                 📞 <strong>Telefone:</strong> (61) 99821-9177
//                             </li>
//                             <li>
//                                 📍 <strong>Local:</strong> Ascade - Associação dos Servidores da Câmara dos Deputados
//                             </li>
//                             <li>
//                                 🗺️ Brasília, DF
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Redes Sociais */}
//                     <div data-aos="fade-up-right">
//                         <h3 className="text-2xl font-semibold mb-4">Redes Sociais</h3>
//                         <div className="flex gap-5 mt-2 justify-center md:justify-start">
//                             <a
//                                 href="https://www.facebook.com/CPPExtreme"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-[#1877F2] hover:scale-110 transition-transform"
//                                 aria-label="Facebook"
//                             >
//                                 <FaFacebook size={32} />
//                             </a>
//                             <a
//                                 href="https://www.instagram.com/cppextremebsb/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-[#E1306C] hover:scale-110 transition-transform"
//                                 aria-label="Instagram"
//                             >
//                                 <FaInstagram size={32} />
//                             </a>
//                             <a
//                                 href="https://www.youtube.com/@cppextreme"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-[#FF0000] hover:scale-110 transition-transform"
//                                 aria-label="YouTube"
//                             >
//                                 <FaYoutube size={32} />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mapa */}
//             <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
//                 <iframe
//                     title="Localização CPP Extreme na Ascade"
//                     src="https://www.google.com/maps?q=Ascade+-+Associação+dos+Servidores+da+Câmara+dos+Deputados,+Brasília+-+DF&output=embed"
//                     width="100%"
//                     height="100%"
//                     loading="lazy"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             </div>
//         </section>
//     )
// }


// Next_13+ (App Router) maintenance page
// Save this file as: /app/maintenance/page.jsx
// It uses the image at /public/logoeuremo.png
// Tailwind CSS is assumed to be configured in the project.

import Image from 'next/image'

export const metadata = {
    title: 'Manutenção — Euremo',
    description: 'Página temporária de manutenção',
}

export default function MaintenancePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
            <div className="max-w-3xl w-full text-center p-8 rounded-2xl shadow-lg ring-1 ring-gray-100 bg-white">
                <div className="flex justify-center mb-6">
                    <div className="w-36 h-36 relative">
                        <Image
                            src="/logoeuremo.png"
                            alt="Logo Euremo"
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 120px, 144px"
                            priority
                        />
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">Estamos em manutenção</h1>
                <p className="text-gray-600 mb-6">Desculpe o transtorno — estamos fazendo atualizações importantes para melhorar seu serviço. Voltaremos em breve.</p>

                <div className="grid gap-4 sm:grid-cols-2 items-center mb-6">
                    <div>
                        <p className="text-sm text-gray-500">Status:</p>
                        <div className="mt-2 inline-flex items-center gap-2">
                            <span className="inline-block w-3 h-3 rounded-full bg-amber-400 animate-pulse" aria-hidden />
                            <span className="text-sm font-medium text-gray-700">Em progresso</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Tempo estimado:</p>
                        <p className="mt-2 text-sm text-gray-700">Aproximadamente 1–2 horas</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="/"
                        className="inline-block px-5 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 ring-1 ring-gray-200"
                        aria-label="Voltar à página inicial"
                    >
                        Voltar ao site
                    </a>

                    <a
                        href="mailto:suporte@euremo.com"
                        className="inline-block px-5 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                        Contatar suporte
                    </a>
                </div>

                <p className="text-xs text-gray-400 mt-6">Se precisar de acesso urgente, entre em contato com nossa equipe.</p>
            </div>
        </main>
    )
}

/*
  Uso alternativo (Pages Router):
  - Salve o mesmo JSX em: /pages/maintenance.jsx
  - Para servir automaticamente em tempo de build como página estática, crie public/maintenance.html

  Observações:
  - Ajuste as cores/linguagem conforme necessário.
  - Se não usa Tailwind, converta as classes para CSS normal.
*/
