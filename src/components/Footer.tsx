import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <span className={styles.logoAccent}>Hon</span>zima
                        </div>
                        <p className={styles.brandDesc}>
                            Helping creators and brands stand out through creative edits.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link to="/#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/#testimonials">Review</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Connect</h4>
                        <p className={styles.connectDesc}>
                            Let's work together on your next project.
                        </p>
                        <a href="https://t.me/Honzima" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        ©2026 honzima All rights reserved.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="https://t.me/honzimaedits" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@honzimaedits?lang=en" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.61-6.19 1.83-1.51 4.31-2.02 6.55-1.37v4.06c-1.22-.53-2.73-.39-3.76.43-1.06.84-1.48 2.3-.98 3.56.5 1.25 1.78 2.1 3.12 2.05 1.35-.05 2.51-1 2.87-2.3.17-.61.16-1.25.16-1.88V.02z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/honzimaedits/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/honey-huka-videoeditor" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
