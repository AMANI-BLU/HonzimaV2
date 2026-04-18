import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import heroImg from '../assets/HeroI.png';

export default function Hero() {
    return (
        <section id="home" className={`container ${styles.heroContainer}`}>
            <div className={styles.textContent}>
                {/* Profile badge removed */}

                <h1 className={`${styles.headline} reveal`}>
                    Crafting <span className="highlight">Videos</span><br />
                    That Capture<br />
                    Attention.
                </h1>

                <p className={`${styles.subtitle} reveal delay-1`}>
                    Helping creators and brands stand out through high-impact creative edits.
                </p>

                <div className={`${styles.ctaGroup} reveal delay-2`}>
                    <Link to="/#portfolio" className={styles.ctaButton}>
                        View My Work
                    </Link>

                    <div className={styles.paymentLogos}>
                        <a href="https://t.me/honzimaedits" target="_blank" rel="noopener noreferrer" className={styles.logoItem} aria-label="Telegram">
                            {/* Telegram */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@honzimaedits?lang=en" target="_blank" rel="noopener noreferrer" className={styles.logoItem} aria-label="TikTok">
                            {/* TikTok */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.61-6.19 1.83-1.51 4.31-2.02 6.55-1.37v4.06c-1.22-.53-2.73-.39-3.76.43-1.06.84-1.48 2.3-.98 3.56.5 1.25 1.78 2.1 3.12 2.05 1.35-.05 2.51-1 2.87-2.3.17-.61.16-1.25.16-1.88V.02z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/honzimaedits/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.logoItem} aria-label="Instagram">
                            {/* Instagram */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/honey-huka-videoeditor" target="_blank" rel="noopener noreferrer" className={styles.logoItem} aria-label="LinkedIn">
                            {/* LinkedIn */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.visualContent} reveal delay-3`}>
                {/* Background typographic elements and glows specific to this section */}
                <div className={`${styles.floatingBadge} ${styles.badgeHugeBlur} reveal delay-4`}>Ae</div>
                <div className={`${styles.floatingBadge} ${styles.badgeSmallSharp} reveal delay-5`}>Pr</div>

                <div className={`${styles.imageWrapper} reveal delay-3`}>
                    <img src={heroImg} alt="Creative Professional" className={styles.heroImage} />

                    <div className={`${styles.availableCard} reveal delay-5`}>
                        <div className={styles.greenDot}></div>
                        Available for work
                    </div>
                </div>
            </div>
        </section>
    );
}
