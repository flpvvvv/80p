// Tailwind Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'float-slow': 'float 8s ease-in-out infinite',
                'float-medium': 'float 6s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'deal': 'deal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'gradient-x': 'gradientX 3s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                deal: {
                    '0%': { opacity: '0', transform: 'translateY(100px) scale(0.9) rotateX(-20deg)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1) rotateX(0)' },
                },
                gradientX: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            }
        }
    }
};

// Theme Management
(function() {
    const html = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const themeColors = {
        light: '#f1f5f9',
        dark: '#0b1120'
    };

    const syncThemeColor = () => {
        if (!themeColorMeta) return;
        const isDark = html.classList.contains('dark');
        themeColorMeta.setAttribute('content', isDark ? themeColors.dark : themeColors.light);
    };
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply theme immediately
    if (savedTheme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    syncThemeColor();

    // Setup event listeners when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                html.classList.toggle('dark');
                localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
                syncThemeColor();
            });
        }
    });
})();
