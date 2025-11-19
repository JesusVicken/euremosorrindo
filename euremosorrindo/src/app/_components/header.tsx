'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
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

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const navItems = [
        { href: '/cpp', label: 'Fernanda' },
        { href: '/extreme', label: 'Atleta' },
        { href: '/estrutura', label: 'Serviços' },
        { href: '/mobilizadores', label: 'Movimentos' },
        { href: '/planos', label: 'Parceiros' },
        { href: '/agenda', label: 'Notícias' },
        { href: '/produtos', label: 'Produtos' },
        { href: '/contatos', label: 'Contato' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 shadow-sm backdrop-blur-md'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
                <Link href="/" className="z-50">
                    <Image
                        src="/logofernanda.png"
                        alt="Logo Eu remo sorrindo"
                        width={257}
                        height={286}
                        className="object-contain h-12 md:h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Menu Desktop */}
                <nav
                    className="
                        hidden md:flex items-center
                        gap-3 md:gap-3 lg:gap-6
                        font-heading font-medium tracking-wide uppercase
                        text-xs md:text-sm lg:text-base
                    "
                >
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-1.5 md:px-2 py-1 rounded-md hover:text-primary transition-colors hover:bg-accent/10 whitespace-nowrap"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Menu Mobile */}
                <div className="md:hidden z-50">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Abrir menu"
                                className="text-foreground hover:bg-transparent"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[260px] sm:w-[300px]">
                            <SheetHeader>
                                <SheetTitle className="text-left font-bold text-lg tracking-wide">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <Separator className="my-4" />
                            <nav className="flex flex-col space-y-2">
                                {navItems.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-primary transition-colors"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}