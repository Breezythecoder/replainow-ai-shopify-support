import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem', 
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem'
			},
			screens: {
				'sm': '640px',
				'md': '768px', 
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					purple: '#6B46C1',
					dark: '#1F2937',
				},
				// WCAG AA Compliant Text Colors
				'text-primary': 'rgb(17, 24, 39)',      // gray-900, 13.6:1
				'text-secondary': 'rgb(55, 65, 81)',     // gray-700, 5.7:1
				'text-tertiary': 'rgb(75, 85, 99)',      // gray-600, 4.6:1 (body only)
				// Accessible Accent Colors
				'accent-purple-wcag': 'rgb(126, 34, 206)',    // purple-700, 4.7:1
				'accent-green-wcag': 'rgb(21, 128, 61)',      // green-700, 4.6:1
				'accent-blue-wcag': 'rgb(29, 78, 216)',       // blue-700, 5.9:1
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					green: '#10B981',
					blue: '#3B82F6',
					orange: '#F59E0B',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					primary: 'hsl(var(--brand-primary))',
					secondary: 'hsl(var(--brand-secondary))',
					accent: 'hsl(var(--brand-accent))',
					success: 'hsl(var(--brand-success))',
					warning: 'hsl(var(--brand-warning))',
					popular: 'hsl(var(--brand-popular))'
				}
			},
			backdropBlur: {
				'glass': '24px',
				'glass-strong': '40px'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'mesh-purple': 'radial-gradient(at 40% 20%, hsla(271, 76%, 53%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(271, 76%, 53%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(271, 76%, 53%, 0.08) 0px, transparent 50%)',
				'mesh-blue': 'radial-gradient(at 60% 30%, hsla(217, 91%, 60%, 0.1) 0px, transparent 50%), radial-gradient(at 20% 80%, hsla(271, 76%, 53%, 0.08) 0px, transparent 50%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)'
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
				'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
				'float': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
				'float-lg': '0 35px 80px -20px rgba(0, 0, 0, 0.4)',
				'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
				'neon-purple': '0 0 80px rgba(147, 51, 234, 0.5)',
				'neon-blue': '0 0 80px rgba(59, 130, 246, 0.5)',
				'hero': 'var(--shadow-hero)',
				'neon': 'var(--shadow-neon)',
				'brand': 'var(--shadow-brand)',
				'brand-glow': 'var(--shadow-brand-glow)',
				'brand-mega': 'var(--shadow-brand-mega)',
				// Enhanced shadow system for white/light elements
				'white-button': '0 10px 30px rgba(0, 0, 0, 0.15), 0 -2px 8px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.1)',
				'white-button-hover': '0 15px 40px rgba(0, 0, 0, 0.2), 0 -3px 10px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.15)',
				'white-card': '0 8px 24px rgba(0, 0, 0, 0.12), 0 -2px 6px rgba(0, 0, 0, 0.06)',
				'white-card-hover': '0 12px 32px rgba(0, 0, 0, 0.16), 0 -3px 8px rgba(0, 0, 0, 0.08)',
				'card-strong': '0 10px 30px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)',
				'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06)',
				'elevation-2': '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06)',
				'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
				'elevation-4': '0 12px 32px rgba(0, 0, 0, 0.14), 0 6px 12px rgba(0, 0, 0, 0.1)',
				'elevation-5': '0 16px 48px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.12)',
				'top': '0 -4px 12px rgba(0, 0, 0, 0.1)',
				'multi': '0 10px 30px rgba(0, 0, 0, 0.15), 0 -2px 8px rgba(0, 0, 0, 0.08), 2px 0 8px rgba(0, 0, 0, 0.06), -2px 0 8px rgba(0, 0, 0, 0.06)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'fast': 'var(--transition-fast)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
				display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans"]
			},
			fontSize: {
				'hero': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em' }],
				'section': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em' }],
				'subsection': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em' }],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.98)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out both',
				'scale-in': 'scale-in 0.25s ease-out both',
				'slide-in-right': 'slide-in-right 0.4s ease-out both',
				'float': 'float 6s ease-in-out infinite',
				'gradient': 'gradient 8s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
