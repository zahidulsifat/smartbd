/**
 * Dark Mode Toggle Implementation
 * A clean, reusable dark mode system for all pages
 */

class DarkModeManager {
    constructor() {
        this.storageKey = 'smart-tech-theme';
        this.themeAttribute = 'data-theme';
        this.themes = {
            LIGHT: 'light',
            DARK: 'dark'
        };
        
        this.init();
    }

    init() {
        // Set initial theme based on user preference or system preference
        this.setInitialTheme();
        
        // Setup toggle button when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupToggleButton());
        } else {
            this.setupToggleButton();
        }
    }

    setInitialTheme() {
        const savedTheme = this.getSavedTheme();
        const systemPrefersDark = this.getSystemPreference();
        const initialTheme = savedTheme || (systemPrefersDark ? this.themes.DARK : this.themes.LIGHT);

        console.log('Setting initial theme:', initialTheme);
        console.log('Saved theme:', savedTheme);
        console.log('System prefers dark:', systemPrefersDark);

        this.applyTheme(initialTheme);
    }

    getSavedTheme() {
        try {
            return localStorage.getItem(this.storageKey);
        } catch (error) {
            console.warn('Could not access localStorage for theme preference');
            return null;
        }
    }

    getSystemPreference() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute(this.themeAttribute) || this.themes.LIGHT;
    }

    applyTheme(theme) {
        console.log('Applying theme:', theme);
        document.documentElement.setAttribute(this.themeAttribute, theme);
        console.log('HTML data-theme attribute set to:', document.documentElement.getAttribute(this.themeAttribute));
        this.saveTheme(theme);
        this.updateToggleButton(theme);

        // Force a style recalculation
        document.documentElement.style.display = 'block';
        document.documentElement.offsetHeight;
    }

    saveTheme(theme) {
        try {
            localStorage.setItem(this.storageKey, theme);
        } catch (error) {
            console.warn('Could not save theme preference to localStorage');
        }
    }

    toggleTheme() {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === this.themes.DARK ? this.themes.LIGHT : this.themes.DARK;
        this.applyTheme(newTheme);
    }

    setupToggleButton() {
        const toggleButton = document.getElementById('themeToggle');
        
        if (!toggleButton) {
            console.warn('Theme toggle button not found');
            return;
        }

        // Remove any existing listeners
        toggleButton.onclick = null;
        
        // Add click listener
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
        });

        // Update button appearance for current theme
        const currentTheme = this.getCurrentTheme();
        this.updateToggleButton(currentTheme);
    }

    updateToggleButton(theme) {
        const icon = document.getElementById('themeIcon');
        const text = document.getElementById('themeText');

        if (!icon || !text) return;

        if (theme === this.themes.DARK) {
            icon.className = 'fas fa-sun theme-icon';
            text.textContent = 'Light';
        } else {
            icon.className = 'fas fa-moon theme-icon';
            text.textContent = 'Dark';
        }
    }

    // Listen for system theme changes
    setupSystemThemeListener() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!this.getSavedTheme()) {
                    const newTheme = e.matches ? this.themes.DARK : this.themes.LIGHT;
                    this.applyTheme(newTheme);
                }
            });
        }
    }
}

// Initialize dark mode manager
const darkModeManager = new DarkModeManager();

// Setup system theme listener for automatic switching
darkModeManager.setupSystemThemeListener();

// Expose to global scope for debugging
window.darkModeManager = darkModeManager;
