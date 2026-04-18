import styles from './Process.module.css';
import googleDriveIcon from '../assets/drive.png';
import aeIcon from '../assets/afterEffects.png';
import devinciIcon from '../assets/devinci.png';
import prIcon from '../assets/priemer.png';

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
                                    <img src={googleDriveIcon} alt="Google Drive" className={styles.customIcon} />
                                </div>
                                <div className={styles.telegramIcon}>
                                    <img src="/assets/images/telegram_icon.png" alt="Telegram" className={styles.customIcon} />
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
                                <div className={styles.softwareIconWrapper}>
                                    <img src={aeIcon} alt="After Effects" className={styles.softwareIcon} />
                                </div>
                                <div className={styles.softwareIconWrapper}>
                                    <img src={devinciIcon} alt="DaVinci Resolve" className={styles.softwareIcon} />
                                </div>
                                <div className={styles.softwareIconWrapper}>
                                    <img src={prIcon} alt="Premiere Pro" className={styles.softwareIcon} />
                                </div>
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
