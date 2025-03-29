"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div data-mobile-menu className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#001f3f]/95 backdrop-blur-sm transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#FFD700]">$</span>
            <span className="text-2xl font-bold text-white">urge</span>
          </div>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-8">
          <ul className="flex flex-col space-y-6">
            {links.map((link, index) => (
              <li key={index} className="border-b border-white/10 pb-4">
                <Link
                  href={link.href}
                  className="block text-xl font-medium text-white hover:text-[#FFD700] transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="#waitlist"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#FFD700] px-6 text-base font-medium uppercase text-[#001f3f] shadow-sm transition-all hover:bg-[#FFD700]/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                onClick={closeMenu}
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
