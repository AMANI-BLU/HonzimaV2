import styles from './Process.module.css';

export default function Process() {
    return (
        <section id="process" className={styles.processSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={`${styles.badge} reveal`}>
                        How I Work
                    </div>
                    <h2 className={`${styles.title} reveal delay-1`}>
                        My Creative <span className={styles.highlight}>Process</span>
                    </h2>
                    <p className={`${styles.subtitle} reveal delay-2`}>
                        A structured approach to ensure every project exceeds expectations.
                    </p>
                </div>

                <div className={styles.processGrid}>
                    {/* Card 1: Send Your Files */}
                    <div className={`${styles.processCard} reveal`}>
                        <span className={styles.stepNumber}>01</span>
                        <div className={styles.visualArea}>
                            <div className={styles.uploadVisual}>
                                <div className={styles.uploadIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
                                </div>
                                <div className={styles.driveIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                </div>
                                <div className={styles.telegramIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z" /></svg>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Send Your Files</h3>
                        <p className={styles.cardDesc}>
                            Upload your raw videos via Google Drive, Telegram — whatever is easiest for you.
                        </p>
                    </div>

                    {/* Card 2: Edit & Deliver */}
                    <div className={`${styles.processCard} reveal delay-1`}>
                        <span className={styles.stepNumber}>02</span>
                        <div className={styles.visualArea}>
                            <div className={styles.softwareIcons}>
                                <div className={styles.iconAe}>Ae</div>
                                <div className={styles.iconDr}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" /></svg>
                                </div>
                                <div className={styles.iconPr}>Pr</div>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Edit & Deliver</h3>
                        <p className={styles.cardDesc}>
                            I cut, trim, color grade, and add smooth, engaging effects to bring your video to life.
                        </p>
                    </div>

                    {/* Card 3: Need Any Changes? */}
                    <div className={`${styles.processCard} reveal delay-2`}>
                        <span className={styles.stepNumber}>03</span>
                        <div className={styles.visualArea}>
                            <div className={styles.revisionVisual}>
                                <div className={styles.revisionBadge}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zM4 22v-7" /></svg>
                                    Requested a Revision
                                </div>
                                <div className={styles.statusBadge}>
                                    Revision is in progress!
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Need Any Changes?</h3>
                        <p className={styles.cardDesc}>
                            Want adjustments? No worries. I offer smooth revision rounds until everything looks perfect.
                        </p>
                    </div>

                    {/* Card 4: Ready to Post */}
                    <div className={`${styles.processCard} reveal delay-3`}>
                        <span className={styles.stepNumber}>04</span>
                        <div className={styles.visualArea}>
                            <div className={styles.postVisual}>
                                <div className={styles.fileLabel}>🚀 Final.mp4</div>
                                <div className={styles.footerLabels}>
                                    <span className={styles.thumbLabel}>Thumbnail.png</span>
                                    <span className={styles.publishLabel}>Publish</span>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Ready to Post</h3>
                        <p className={styles.cardDesc}>
                            You receive your final video in a ready-to-upload format for YouTube, TikTok, or Reels.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
