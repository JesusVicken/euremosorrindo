'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown } from 'lucide-react' 

// UI Components
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from '@/components/ui/sheet'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone, Instagram } from 'lucide-react' 

export default function Header() {
    const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)
    const [hoverColonia, setHoverColonia] = useState(false)
    const pathname = usePathname()

    // Configuração dos itens do menu
    const navItems = [
        {
            href: '/fernanda',
            label: 'Fernanda',
            submenu: [
                { href: '/fernanda', label: 'Sobre mim' },
                { href: '/fernanda/curriculo-atleta', label: 'Currículo de atleta' }
            ]
        },
        { href: '/estrutura', label: 'Serviços' },
        { href: '/remadas', label: 'Aulas' },
        { href: '/colonia-de-ferias', label: 'Colônia de Férias', shortLabel: 'Colônia' },
        { href: '/guarderia', label: 'Guarderia' },
        { href: '/movimentos', label: 'Projetos' },
        { href: '/planos', label: 'Parceiros' },
        { href: '/agenda', label: 'Agenda' },
        { href: '/fotos', label: 'Passeios' },
        { href: '/galeria', label: 'Galeria' },
        { href: '/produtos', label: 'Loja Oficial' },
        { href: '/contatos', label: 'Contato' },
    ]

    const openWhatsApp = () => {
        const phoneNumber = '+5561991041213'
        const message = 'Olá! Vi no site da Eu Remo Sorrindo e gostaria de mais informações sobre as aulas.'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    const isActiveLink = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname === href || pathname.startsWith(href + '/')
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">

                {/* --- LOGO --- */}
                <Link href="/" className="relative z-50 block shrink-0 mr-6">
                   
                    <div className="relative w-36 h-16 md:w-48 md:h-20">
                        <Image
                            src="/logoeuremo.png"
                            alt="Eu Remo Sorrindo"
                            fill
                            className="object-contain object-left"
                            priority
                            sizes="(max-width: 768px) 144px, 192px"
                        />
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="hidden xl:flex items-center justify-end flex-1 gap-1">
                    {navItems.map((item) => {
                        if (item.shortLabel) {
                            return (
                                <div key={item.href} className="relative">
                                    <Link
                                        href={item.href}
                                        onMouseEnter={() => setHoverColonia(true)}
                                        onMouseLeave={() => setHoverColonia(false)}
                                        className={`
                                            flex items-center justify-center px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                            ${isActiveLink(item.href)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                            }
                                        `}
                                    >
                                        <span className="whitespace-nowrap">
                                            {hoverColonia ? item.label : item.shortLabel}
                                        </span>
                                    </Link>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={item.href}
                                className="relative group"
                                onMouseEnter={() => item.submenu && setHoverDropdown(item.label)}
                                onMouseLeave={() => setHoverDropdown(null)}
                            >
                                {item.submenu ? (
                                    <div className="relative">
                                        <button
                                            className={`
                                                flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                                ${isActiveLink(item.href)
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                                }
                                            `}
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoverDropdown === item.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {hoverDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                                                >
                                                    {item.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                                                            onClick={() => setHoverDropdown(null)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`
                                            block px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                            ${isActiveLink(item.href)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </nav>

                {/* --- MOBILE MENU --- */}
                <div className="xl:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-slate-800 hover:bg-slate-100 rounded-full"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[85vw] max-w-sm bg-white border-l border-gray-100"
                        >
                            <SheetHeader className="text-left border-b border-gray-100 pb-4 mb-4">
                                <SheetTitle className="flex items-center gap-3">
                                    <div className="relative w-32 h-16">
                                        <Image
                                            src="/logoeuremo.png"
                                            alt="Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col h-full">
                                <nav className="flex-1 overflow-y-auto pr-2">
                                    <Accordion type="single" collapsible className="w-full">
                                        {navItems.map((item, index) => (
                                            item.submenu ? (
                                                <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                                                    <AccordionTrigger className="py-3 px-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:no-underline">
                                                        {item.label}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="pb-2">
                                                        <div className="flex flex-col gap-1 pl-4 border-l-2 border-slate-100 ml-2">
                                                            {item.submenu.map((sub) => (
                                                                <SheetClose key={sub.href} asChild>
                                                                    <Link
                                                                        href={sub.href}
                                                                        className="py-2 px-3 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 block transition-colors"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                </SheetClose>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ) : (
                                                <SheetClose key={item.href} asChild>
                                                    <Link
                                                        href={item.href}
                                                        className={`
                                                            block py-3 px-2 text-base font-medium transition-colors rounded-lg
                                                            ${isActiveLink(item.href)
                                                                ? 'text-blue-600 bg-blue-50'
                                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                                            }
                                                        `}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            )
                                        ))}
                                    </Accordion>
                                </nav>

                                <div className="pt-6 pb-8 border-t border-gray-100 mt-auto">
                                    <Button
                                        onClick={openWhatsApp}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mb-3"
                                    >
                                        <Phone className="w-5 h-5" />
                                        WhatsApp
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => window.open('https://instagram.com/euremosorrindo', '_blank')}
                                        className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 py-6 rounded-xl flex items-center justify-center gap-2"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        Instagram
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}