import Image from "next/image"
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import { MapPin, Phone } from "lucide-react"

import ascadeLogo from "../../../public/rumo.webp"
import canoMAMALogo from "../../../public/bauminas.jpg"
import RemoLogo from "../../../public/remobrasilia.jpg"
import CanoeLogo from "../../../public/canoe.jpg"
import SaluteLogo from "../../../public/salute.jpg"

const brands = [
  { name: "Rumo", logo: ascadeLogo },
  { name: "Fundação Baúminas", logo: canoMAMALogo },
  { name: "Remo Brasília", logo: RemoLogo },
  { name: "Canoe Brasil", logo: CanoeLogo },
  { name: "Salute Nutrição Esportiva", logo: SaluteLogo },
]

export function Footer() {
  const whatsappNumber = "61999674507"
  const whatsappMessage = "Olá! Visitei o site da Eu Remo Sorrindo e gostaria de mais informações sobre as aulas e experiências."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Parceiros */}
        <div
          className="border-b border-white/20 pb-8"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center gap-3">
            Nossos Parceiros
          </h4>

          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={150}
                  height={80}
                  quality={100}
                  className="object-contain"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "150px",
                    maxHeight: "80px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Sobre */}
          <div data-aos="fade-up-left" className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Eu Remo Sorrindo
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              Experiências únicas de canoagem havaiana no Lago Paranoá.
              Aulas para todos os níveis, passeios especiais e vivências
              que conectam você com a natureza e seu bem-estar.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 group"
              aria-label="Contato via WhatsApp"
            >
              <WhatsappLogo className="w-5 h-5" />
              Fale Conosco no WhatsApp
              <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none ml-1"></div>
            </a>
          </div>

          {/* Contatos */}
          <div data-aos="flip-up" className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contatos
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cyan-100">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>(61) 99967-4507</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-100">
                <WhatsappLogo className="w-5 h-5 text-green-400" />
                <span>(61) 99967-4507 (WhatsApp)</span>
              </div>
              <div className="flex items-start gap-3 text-cyan-100">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>Escola Fernanda Rachid<br />Setor de Clubes Sul, Tr. 1<br />Brasília - DF</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div data-aos="fade-up-right" className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Redes Sociais
            </h3>
            <p className="text-cyan-100 mb-4">
              Siga nossas aventuras e experiências
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/euremosorrindo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <InstagramLogo className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/euremosorrindo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FacebookLogo className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@euremosorrindo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <YoutubeLogo className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Google Maps - Atualizado */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10 pointer-events-none"></div>
        <iframe
          title="Localização Escola Fernanda Rachid"
          src="https://maps.google.com/maps?q=Escola+Fernanda+Rachid+Setor+de+Clubes+Esportivos+Sul+Brasilia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}