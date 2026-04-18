import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>

                {/* Logo */}
                <Link to="/" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className={styles.logoAccent}>Hon</span>zima
                </Link>

                {/* Hamburger Menu (Mobile Only) */}
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
                </button>

                {/* Navigation Links */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <Link to="/" className={styles.link} onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>Home</Link>
                    <Link to="/#about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/#services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/#testimonials" className={styles.link} onClick={() => setIsMenuOpen(false)}>Review</Link>
                    <Link to="/portfolio" className={styles.link} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>

                    <a href="https://t.me/Honzima" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
}
