import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>

                {/* Logo */}
                <div className={styles.logo}>
                    <span className={styles.logoAccent}>Hon</span><span>zima</span>
                </div>

                {/* Navigation Links */}
                <div className={styles.navLinks}>
                    <a href="#service" className={styles.link}>Service</a>
                    <a href="#portfolio" className={styles.link}>Portfolio</a>
                    <a href="#process" className={styles.link}>Process</a>
                    <a href="#review" className={styles.link}>Review</a>
                    <a href="#pricing" className={styles.link}>Pricing</a>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button className={styles.iconButton} aria-label="Toggle dark mode">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>

                    <button className={styles.contactBtn}>
                        Contact
                    </button>
                </div>

            </div>
        </nav>
    );
}
