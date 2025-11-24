
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20
            setIsScrolled(scrolled)
        }

        let ticking = false
        const updateScroll = () => {
            handleScroll()
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll)
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
        setHoverDropdown(null)
    }, [pathname])

    useEffect(() => {
        const handleClickOutside = () => {
            setActiveDropdown(null)
            setHoverDropdown(null)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const navItems = [
        {
            href: '/fernanda',
            label: 'Fernanda',
            submenu: [
                { href: '/fernanda', label: 'Sobre mim' },
                { href: '/fernanda/curriculo-atleta', label: 'Currículo de atleta' }
            ]
        },
        {
            href: '/estrutura',
            label: 'Serviços',
            submenu: [
                { href: '/estrutura/consultoria', label: 'Consultoria' },
                { href: '/estrutura/treinamento', label: 'Treinamento' },
                { href: '/estrutura/palestras', label: 'Palestras' },
            ]
        },
        {
            href: '/mobilizadores',
            label: 'Movimentos',
            submenu: [
                { href: '/mobilizadores/ambiental', label: 'Ambiental' },
                { href: '/mobilizadores/social', label: 'Social' },
                { href: '/mobilizadores/esportivo', label: 'Esportivo' },
            ]
        },
        { href: '/planos', label: 'Parceiros' },
        { href: '/agenda', label: 'Agenda' },
        {
            href: '/produtos',
            label: 'Produtos',
            submenu: [
                { href: '/produtos/equipamentos', label: 'Equipamentos' },
                { href: '/produtos/vestuario', label: 'Vestuário' },
                { href: '/produtos/acessorios', label: 'Acessórios' },
            ]
        },
        { href: '/contatos', label: 'Contato' },
    ]

    const openWhatsApp = () => {
        const phoneNumber = '+5561999674507'
        const message = 'Olá! Gostaria de mais informações sobre o Eu Remo Sorrindo.'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    const handleDropdownToggle = (e: React.MouseEvent, label: string) => {
        e.stopPropagation()
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    const handleMouseEnter = (label: string) => {
        setHoverDropdown(label)
    }

    const handleMouseLeave = () => {
        setHoverDropdown(null)
    }

    const isActiveLink = (href: string) => {
        return pathname === href || pathname.startsWith(href + '/')
    }

    const isDropdownOpen = (label: string) => {
        return activeDropdown === label || hoverDropdown === label
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 shadow-lg backdrop-blur-xl border-b border-gray-100/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">

                {/* Logo */}
                <Link href="/" className="block z-50">
                    <Image
                        src="/logoeuremo.png"
                        alt="Logo Eu Remo Sorrindo"
                        width={180}
                        height={180}
                        className={`object-contain transition-all duration-500 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                            } w-auto`}
                        priority
                    />
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.submenu ? (
                                <>
                                    <button
                                        onClick={(e) => handleDropdownToggle(e, item.label)}
                                        className={`
                                            flex items-center gap-1 px-4 py-2 rounded-full font-semibold transition-all duration-300
                                            ${isActiveLink(item.href)
                                                ? 'text-blue-600 bg-blue-50/80'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'}
                                        `}
                                    >
                                        {item.label}
                                        <motion.div
                                            animate={{ rotate: isDropdownOpen(item.label) ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen(item.label) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 py-2 z-50"
                                            >
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
                                                        onClick={() => {
                                                            setActiveDropdown(null)
                                                            setHoverDropdown(null)
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`px-4 py-2 rounded-full font-semibold ${isActiveLink(item.href)
                                        ? 'text-blue-600 bg-blue-50/80'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Button
                        onClick={openWhatsApp}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg"
                    >
                        Vamos Conversar
                    </Button>
                </div>

                {/* Mobile */}
                <div className="lg:hidden z-50">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                {isMobileMenuOpen
                                    ? <X className="h-6 w-6" />
                                    : <Menu className="h-6 w-6" />
                                }
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <Separator className="my-4" />

                            <nav className="space-y-1">
                                {navItems.map((item) => (
                                    <div key={item.label}>
                                        {item.submenu ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                                                    }
                                                    className="flex justify-between w-full py-2 font-semibold"
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {activeDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: 'auto' }}
                                                            exit={{ height: 0 }}
                                                            className="overflow-hidden pl-3"
                                                        >
                                                            {item.submenu.map((sub) => (
                                                                <Link
                                                                    key={sub.href}
                                                                    href={sub.href}
                                                                    className="block py-2 text-sm"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block py-2 font-semibold"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="mt-6">
                                <Button
                                    onClick={openWhatsApp}
                                    className="w-full bg-green-600 text-white rounded-xl"
                                >
                                    Vamos Conversar
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}
