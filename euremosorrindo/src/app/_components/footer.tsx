import Image from "next/image"
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import { MapPin, Phone } from "lucide-react"

const brands = [
  {
    name: "Fundação Bauminas",
    logo: "/bauminas.jpg",
    description: "Fundação dedicada ao desenvolvimento esportivo, cultural e social",
    category: "Social",
    url: "https://fundacaobauminas.org.br/"
  },
  {
    name: "Rumo Custom Paddles",
    logo: "/rumo.webp",
    description: "Empresa especializada em equipamentos esportivos aquáticos de alta performance",
    category: "Equipamentos",
    url: "https://www.rumobrasil.com.br/"
  },
  {
    name: "Canoe Brasil",
    logo: "/canoe.jpg",
    description: "Fabricante nacional referência em caiaques e canoas",
    category: "Equipamentos",
    url: "https://www.canoe.com.br/"
  },
  {
    name: "Nenutrição",
    logo: "/nen.jpg",
    description: "Nutrição especializada para alta performance e saúde",
    category: "Saúde",
    url: "https://www.nenutricao.com.br/"
  },
  {
    name: "ACKC Brasília",
    logo: "/ackc.jpg",
    description: "Associação de Canoagem Caiakagem Brasília - Fomento ao esporte local",
    category: "Esportivo",
    url: "https://www.instagram.com/caiakagem/"
  },
  {
    name: "ASSTJ",
    logo: "/asstj.png",
    description: "Associação dos Servidores do Superior Tribunal de Justiça e do Conselho da Justiça Federal",
    category: "Institucional",
    url: "https://www.asstj.org.br/index.html"
  },
  {
    name: "Cerrado Experience",
    logo: "/cerrado.png",
    description: "Experiências únicas de ecoturismo no Cerrado",
    category: "Turismo",
    url: "https://cerradoexperience.com.br/"
  },
  {
    name: "Retrilhar",
    logo: "/retrilhar.jpg",
    description: "Agência de turismo de aventura e ecoturismo em Brasília",
    category: "Esportivo",
    url: "https://retrilhar.com.br/"
  },
  {
    name: "APAE-DF",
    logo: "/apae.jpg",
    description: "Associação de Pais e Amigos dos Excepcionais do Distrito Federal",
    category: "Social",
    url: "https://apaedf.org.br/"
  }
]

export function Footer() {
  const whatsappNumber = "61999674507"
  const whatsappMessage = "Olá! Visitei o site da Eu Remo Sorrindo e gostaria de mais informações sobre as aulas e experiências."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden font-sans">
      {/* Elementos Decorativos de Fundo (sutis) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16 relative z-10">

        {/* === Seção de Parceiros === */}
        <div
          className="border-b border-white/10 pb-12 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="text-center mb-12 space-y-2">
            <h4 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
              Nossos Parceiros
            </h4>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center w-full">
            {brands.map((item, index) => {
              
              const isBauminas = item.name === "Fundação Bauminas"

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className={`
                    relative group flex items-center justify-center rounded-2xl transition-all duration-300
                    backdrop-blur-md border shadow-lg
                    ${isBauminas
                      ? "bg-white/20 border-cyan-400/30 p-8 w-[260px] md:w-[280px] shadow-cyan-500/20 hover:scale-105 z-10"
                      : "bg-white/10 border-white/20 p-6 w-[160px] md:w-[180px] hover:scale-105 hover:bg-white/15"
                    }
                  `}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-full flex items-center justify-center"
                    aria-label={item.name}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={isBauminas ? 300 : 150}
                      height={isBauminas ? 300 : 80}
                      quality={100}
                      className={`
                        object-contain transition-transform duration-500
                        ${isBauminas ? "h-auto max-h-[160px] md:max-h-[180px] drop-shadow-md" : "h-[60px] md:h-[80px]"}
                        w-auto
                      `}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* === Informações e Links === */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">

          {/* Sobre */}
          <div data-aos="fade-up-left" className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Eu Remo Sorrindo
            </h3>
            <p className="text-cyan-100 leading-relaxed max-w-sm">
              Experiências únicas de canoagem havaiana no Lago Paranoá.
              Aulas para todos os níveis, passeios especiais e vivências
              que conectam você com a natureza e seu bem-estar.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 group mt-2"
              aria-label="Contato via WhatsApp"
            >
              <WhatsappLogo className="w-5 h-5" />
              <span>Fale Conosco</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-none ml-1"></div>
            </a>
          </div>

          {/* Contatos */}
          <div data-aos="flip-up" className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Contatos
            </h3>
            <div className="space-y-4 w-full max-w-xs">
              <a href={`tel:${whatsappNumber}`} className="flex items-center gap-3 text-cyan-100 hover:text-white transition-colors justify-center md:justify-start">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>(61) 99967-4507</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cyan-100 hover:text-white transition-colors justify-center md:justify-start">
                <WhatsappLogo className="w-5 h-5 text-green-400" />
                <span>(61) 99967-4507 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-3 text-cyan-100 justify-center md:justify-start text-left">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span>Escola Fernanda Rachid<br />Setor de Clubes Sul, Tr. 1<br />Brasília - DF</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div data-aos="fade-up-right" className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Redes Sociais
            </h3>
            <p className="text-cyan-100 mb-4">
              Siga nossas aventuras e experiências
            </p>
            <div className="flex gap-5">
              <SocialLink
                href="https://www.instagram.com/euremosorrindo/"
                icon={<InstagramLogo className="w-6 h-6 text-white" />}
                bg="from-purple-600 to-pink-600"
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/euremosorrindo"
                icon={<FacebookLogo className="w-6 h-6 text-white" />}
                bg="from-blue-600 to-blue-700"
                label="Facebook"
              />
              <SocialLink
                href="https://youtube.com/@euremosorrindo537"
                icon={<YoutubeLogo className="w-6 h-6 text-white" />}
                bg="from-red-600 to-red-700"
                label="YouTube"
              />
            </div>
          </div>
        </footer>
      </div>

      {/* === Google Maps === */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative mt-12 border-t border-white/20">
        {/* Overlay azulado para integrar o mapa ao site */}
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-10 mix-blend-overlay"></div>
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

// Componente auxiliar para os ícones sociais
function SocialLink({ href, icon, bg, label }: { href: string, icon: React.ReactNode, bg: string, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        bg-gradient-to-br ${bg} p-3.5 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl
        flex items-center justify-center
      `}
    >
      {icon}
    </a>
  )
}