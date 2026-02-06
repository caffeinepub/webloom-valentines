import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/finale', label: 'Forever' },
];

export function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
          >
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            Webloom Valentines
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium transition-all duration-300 cursor-pointer relative group',
                  currentPath === link.path
                    ? 'text-rose-500'
                    : 'text-foreground/70 hover:text-rose-500'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300',
                    currentPath === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-rose-500" />
            ) : (
              <Menu className="w-6 h-6 text-rose-500" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 px-4 rounded-lg transition-all cursor-pointer',
                    currentPath === link.path
                      ? 'bg-rose-100 dark:bg-rose-900/20 text-rose-500'
                      : 'text-foreground/70 hover:bg-rose-50 dark:hover:bg-rose-900/10 hover:text-rose-500'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
