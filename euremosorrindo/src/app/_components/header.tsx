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
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement

            // Não fecha se o clique for dentro do menu mobile
            if (target.closest('[data-mobile-menu]')) return

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
            href: '/estrutura', label: 'Serviços'
        },
        {
            href: '/remadas', label: 'Bora Remar'
        },
        {
            href: '/movimentos',
            label: 'Movimentos'
            // submenu: [
            //     { href: '/mobilizadores/ambiental', label: 'Ambiental' },
            //     { href: '/mobilizadores/social', label: 'Social' },
            //     { href: '/mobilizadores/esportivo', label: 'Esportivo' },
            // ]
        },
        { href: '/planos', label: 'Parceiros' },
        { href: '/agenda', label: 'Agenda' },
        {
            href: '/produtos', label: 'Produtos',
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

    const handleMobileDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 shadow-lg backdrop-blur-xl border-b border-gray-100/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="z-50"
                >
                    <Link href="/" className="block">
                        <Image
                            src="/logoeuremo.png"
                            alt="Logo Eu remo sorrindo"
                            width={180}
                            height={180}
                            className={`object-contain transition-all duration-500 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                                } w-auto`}
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Menu Desktop */}
                <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {navItems.map((item) => (
                        <div
                            key={item.href}
                            className="relative"
                            onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.submenu ? (
                                <div className="relative">
                                    <button
                                        onClick={(e) => handleDropdownToggle(e, item.label)}
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                        className={`
                                            flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                            ${isActiveLink(item.href)
                                                ? 'text-blue-600 bg-blue-50/80'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                                            }
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
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 py-2 z-50"
                                                onMouseEnter={() => handleMouseEnter(item.label)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                                                        onClick={() => {
                                                            setActiveDropdown(null)
                                                            setHoverDropdown(null)
                                                        }}
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
                                        block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                        ${isActiveLink(item.href)
                                            ? 'text-blue-600 bg-blue-50/80'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button Desktop */}
                <div className="hidden lg:block">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={openWhatsApp}
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        >
                            Vamos Conversar
                        </Button>
                    </motion.div>
                </div>

                {/* Menu Mobile */}
                <div className="lg:hidden z-50">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Abrir menu"
                                    className={`relative ${isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100/80'
                                        : 'text-white hover:bg-white/20'
                                        } transition-all duration-300`}
                                >
                                    <AnimatePresence mode="wait">
                                        {isMobileMenuOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="h-6 w-6" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="h-6 w-6" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                data-mobile-menu
                                className="w-[85vw] max-w-sm bg-white/95 backdrop-blur-xl border-l border-gray-100/50"
                            >

                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center gap-3">
                                        <Image
                                            src="/logoeuremo.png"
                                            alt="Logo"
                                            width={180}
                                            height={180}
                                            className="h-12 w-auto"
                                        />
                                        <span className="text-lg font-bold text-gray-900">Menu</span>
                                    </SheetTitle>
                                </SheetHeader>

                                <Separator className="my-4 bg-gray-200" />

                                <nav className="flex flex-col space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.href} className="border-b border-gray-100/50 last:border-0">
                                            {item.submenu ? (
                                                <div className="py-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleMobileDropdownToggle(item.label)
                                                        }}

                                                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-50/80 transition-colors"
                                                    >
                                                        <span className="font-semibold text-gray-900 text-sm">
                                                            {item.label}
                                                        </span>
                                                        <motion.div
                                                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <ChevronDown className="h-4 w-4 text-gray-500" />
                                                        </motion.div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {activeDropdown === item.label && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="pl-4 mt-1 space-y-1 overflow-hidden"
                                                            >
                                                                {item.submenu.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.href}
                                                                        href={subItem.href}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
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
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`block px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActiveLink(item.href)
                                                        ? 'text-blue-600 bg-blue-50/80 font-semibold'
                                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                                                        }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="absolute bottom-6 left-4 right-4">
                                    <Button
                                        onClick={() => {
                                            openWhatsApp()
                                            setMobileMenuOpen(false)
                                        }}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        Vamos Conversar
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    )
}