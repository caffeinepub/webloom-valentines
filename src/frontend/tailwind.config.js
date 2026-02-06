import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                rose: {
                    50: 'oklch(var(--rose-50))',
                    100: 'oklch(var(--rose-100))',
                    200: 'oklch(var(--rose-200))',
                    300: 'oklch(var(--rose-300))',
                    400: 'oklch(var(--rose-400))',
                    500: 'oklch(var(--rose-500))',
                    600: 'oklch(var(--rose-600))',
                },
                pink: {
                    50: 'oklch(var(--pink-50))',
                    100: 'oklch(var(--pink-100))',
                    200: 'oklch(var(--pink-200))',
                    300: 'oklch(var(--pink-300))',
                    400: 'oklch(var(--pink-400))',
                    500: 'oklch(var(--pink-500))',
                },
                cream: {
                    50: 'oklch(var(--cream-50))',
                },
                champagne: 'oklch(var(--champagne))',
                lavender: 'oklch(var(--lavender))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'glow-rose': '0 0 20px rgba(244, 63, 94, 0.3)',
                'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
                'glow-rose-lg': '0 0 40px rgba(244, 63, 94, 0.4)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                handwriting: ['Brush Script MT', 'cursive'],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'heart-ripple': {
                    '0%': {
                        transform: 'translate(-50%, -50%) scale(0.5)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'translate(-50%, -50%) scale(2)',
                        opacity: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'heart-ripple': 'heart-ripple 1s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
