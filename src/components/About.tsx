import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.aboutContainer}>
            <div className="ambient-glow" style={{ top: '10%', right: '-10%', opacity: 0.08 }}></div>
            <div className="container">
                <div className={styles.badge}>
                    About Me
                </div>

                <h2 className={`${styles.headline} reveal`}>
                    I partner with creators and brands to turn ideas into engaging, high-quality videos.
                </h2>
                <h3 className={`${styles.subHeadline} reveal delay-1`}>
                    Results-focused, fast delivery, reliable quality.
                </h3>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                        <div className={styles.statValue}>3+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <div className={styles.statValue}>1M+</div>
                        <div className={styles.statLabel}>Views Generated</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><path d="M12 11l2 2 4-4"></path></svg>
                        </div>
                        <div className={styles.statValue}>50+</div>
                        <div className={styles.statLabel}>Projects Completed</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
