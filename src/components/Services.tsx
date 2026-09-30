import styles from './Services.module.css';

const features = [
    { label: "High-Retention Editing" },
    { label: "Viral-Style Hooks" },
    { label: "Clean Captions & Motion" },
    { label: "Fast Delivery" },
];

const stats = [
    { value: "3s", label: "Hook Window" },
    { value: "90%+", label: "Retention Goal" },
    { value: "48h", label: "Avg. Turnaround" },
];

const platforms = [
    {
        name: "Reels", color: "#e1306c",
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    {
        name: "TikTok", color: "#ffffff",
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.15 8.15 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/></svg>
    },
    {
        name: "Shorts", color: "#ff0000",
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
    },
];

export default function Services() {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className="container">

                <div className={styles.header}>
                    <div className={`${styles.badge} reveal`}>Services</div>
                    <h2 className={`${styles.title} reveal delay-1`}>
                        Services I <span className="highlight">Offer</span>
                    </h2>
                    <p className={`${styles.subtitle} reveal delay-2`}>
                        Transforming raw content into world-class digital experiences.
                    </p>
                    <div className="spotlight" style={{ top: '20%', left: '-10%', opacity: 0.15 }}></div>
                </div>

                {/* Hero Service Card */}
                <div className={`${styles.heroCard} reveal delay-3`}>

                    {/* Left — Content */}
                    <div className={styles.heroContent}>
                        <div className={styles.heroTag}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            Short-Form Editing
                        </div>
                        <h3 className={styles.heroTitle}>Short-Form <br /><span className="highlight">Edits</span></h3>
                        <p className={styles.heroDesc}>
                            Turn raw clips into scroll-stopping, high-retention videos built for Reels, Shorts, and TikTok.
                            Fast hooks, clean captions, smooth pacing — designed to grab attention and boost engagement.
                        </p>

                        {/* Stats row */}
                        <div className={styles.statsRow}>
                            {stats.map(s => (
                                <div key={s.label} className={styles.statItem}>
                                    <span className={styles.statValue}>{s.value}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Feature list */}
                        <ul className={styles.featureList}>
                            {features.map(f => (
                                <li key={f.label} className={styles.featureItem}>
                                    <span className={styles.checkIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </span>
                                    <span className={styles.featureLabel}>{f.label}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Platform pills */}
                        <div className={styles.platforms}>
                            <span className={styles.platformsLabel}>Works on</span>
                            {platforms.map(p => (
                                <span key={p.name} className={styles.platformPill} style={{ '--pill-color': p.color } as React.CSSProperties}>
                                    <span className={styles.platformIcon}>{p.icon}</span>
                                    {p.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual */}
                    <div className={styles.heroVisual}>
                        {/* Glow */}
                        <div className={styles.visualGlow} />

                        {/* Phone mockup */}
                        <div className={styles.phone}>
                            <div className={styles.phonePill} />
                            <div className={styles.phoneScreen}>
                                <div className={styles.videoThumb}>
                                    <div className={styles.playBtn}>
                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                    {/* Fake gradient overlay */}
                                    <div className={styles.videoOverlay} />
                                    {/* Bottom HUD */}
                                    <div className={styles.videoHud}>
                                        <div className={styles.hudAvatar} />
                                        <div className={styles.hudLines}>
                                            <div className={styles.hudLine} />
                                            <div className={styles.hudLineSm} />
                                        </div>
                                    </div>
                                </div>
                                {/* Side actions */}
                                <div className={styles.sideActions}>
                                    {[
                                        { icon: "❤️", count: "48K" },
                                        { icon: "💬", count: "1.2K" },
                                        { icon: "↗️", count: "Share" },
                                    ].map(a => (
                                        <div key={a.icon} className={styles.actionBtn}>
                                            <span>{a.icon}</span>
                                            <span className={styles.actionCount}>{a.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating retention card */}
                        <div className={styles.retentionCard}>
                            <div className={styles.retentionHeader}>
                                <span className={styles.retentionDot} />
                                Avg. Retention
                            </div>
                            <div className={styles.retentionValue}>91.4%</div>
                            <svg viewBox="0 0 120 40" className={styles.retentionGraph}>
                                <defs>
                                    <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4da3ff" stopOpacity="0.4"/>
                                        <stop offset="100%" stopColor="#4da3ff" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0 35 Q30 8 60 14 T120 10" fill="none" stroke="#4da3ff" strokeWidth="2.5"/>
                                <path d="M0 35 Q30 8 60 14 T120 10 V40 H0Z" fill="url(#rg)"/>
                            </svg>
                        </div>

                        {/* Floating views card */}
                        <div className={styles.viewsCard}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4da3ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                            <div>
                                <div className={styles.viewsValue}>100k+</div>
                                <div className={styles.viewsLabel}>Views this week</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
