'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
interface NavbarProps {

        Logo: {
            formats: {
                small: {
                    url: string;
                }
            }
        }


}
export default function Header({Logo}:NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
console.log("navbar",Logo);
    return (
        <header className="absolute top-0 left-0 z-50 w-full text-white">
            <div className="bg-black/50">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <Image
                            src={Logo.formats.small.url}
                            alt="logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden space-x-8 md:flex">
                        {[
                            { href: '../', label: 'Hem' },
                            { href: '../#gallery', label: 'Galleri' },
                            { href: '../news', label: 'Nyheter' },
                            { href: '../#team', label: 'Vårat Team' },
                            { href: '/about', label: 'Om Oss' },
                            { href: '../#contact', label: 'Kontakt' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group relative font-semibold text-gray-300"
                            >
                                <span className="text-2xl pb-1 inline-block after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </nav>


                    <div className="hidden items-center space-x-2 md:flex">

                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="text-2xl text-gray-700 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="space-y-4 bg-black/90 px-4 py-4 md:hidden">
                    <nav className="flex flex-col space-y-4">
                        <Link href="#services" onClick={() => setIsOpen(false)}>Hem</Link>
                        <Link href="#gallery" onClick={() => setIsOpen(false)}>Galleri</Link>
                        <Link href="#team" onClick={() => setIsOpen(false)}>Vårat Team</Link>
                        <Link href="#testimonials" onClick={() => setIsOpen(false)}>Sponsorer</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Kontakt</Link>
                    </nav>
                    <div className="mt-4 flex items-center space-x-2 text-white">

                    </div>
                </div>
            )}
        </header>
    );
}
