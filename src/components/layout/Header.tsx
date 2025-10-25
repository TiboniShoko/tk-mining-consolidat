import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { TKLogo } from '@/components/TKLogo'
import type { PageType } from '@/App'

interface HeaderProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Operations', page: 'operations' },
    { label: 'Community', page: 'community' },
    { label: 'Investment', page: 'investment' },
  ]

  const handleNavClick = (page: PageType) => {
    onNavigate(page)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <TKLogo size={48} className="transition-transform group-hover:scale-105" />
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg tracking-tight">TK Mining</div>
              <div className="text-accent text-xs">Consolidation</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.page}
                variant={currentPage === item.page ? 'default' : 'ghost'}
                onClick={() => handleNavClick(item.page)}
                className={
                  currentPage === item.page
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'text-white hover:text-primary hover:bg-white/10'
                }
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.page}
                  variant={currentPage === item.page ? 'default' : 'ghost'}
                  onClick={() => handleNavClick(item.page)}
                  className={`justify-start ${
                    currentPage === item.page
                      ? 'bg-primary text-white'
                      : 'text-white hover:text-primary hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
