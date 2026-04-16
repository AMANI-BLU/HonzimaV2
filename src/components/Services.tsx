import styles from './Services.module.css';

const services = [
    {
        title: "Short-Form Edits",
        description: "Turn raw clips into scroll-stopping, high-retention videos built for Reels, Shorts, and TikTok. Fast hooks, clean captions, smooth pacing — designed to grab attention and boost engagement.",
        features: ["High-Retention Editing", "Viral-Style Hooks", "Clean Captions & Motion", "Fast Delivery"],
        type: "short-form",
        layoutClass: styles.cardWide
    },
    {
        title: "Long-Form Edits",
        description: "Transform long footage into clear, engaging, story-driven videos. We cut the fluff, improve pacing, and keep viewers watching from start to finish.",
        features: ["YouTube & Documentary Style", "Story + Flow Focused"],
        type: "long-form",
        layoutClass: styles.cardNarrow
    },
    {
        title: "Graphic Design",
        description: "Strong visuals build strong brands. I design clean, modern, attention-grabbing graphics that make your content and brand look professional and memorable.",
        features: ["Thumbnails That Get Clicks", "Social Media Graphics", "Brand Visuals & Posters"],
        type: "graphic-design",
        layoutClass: styles.cardNarrow
    },
    {
        title: "Social Media Management",
        description: "Grow your brand with strategic content planning, consistent posting, and smart audience engagement. I help you build presence, increase reach, and turn followers into loyal clients.",
        features: ["Content Strategy & Planning", "Posting & Scheduling", "Audience Engagement", "Growth Optimization"],
        type: "social-management",
        layoutClass: styles.cardWide
    }
];

const renderGraphic = (type: string) => {
    switch (type) {
        case 'short-form':
            return (
                <div className={styles.shortFormGraphic}>
                    <div className={styles.mobileFrame}>
                        <div className={styles.videoPreview}>
                            <div className={styles.playIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.engagementOverlay}>
                            <div className={styles.engagementItem}>❤️</div>
                            <div className={styles.engagementItem}>💬</div>
                            <div className={styles.engagementItem}>🚀</div>
                        </div>
                    </div>
                    <div className={styles.retentionGraph}>
                        <svg viewBox="0 0 100 40" className={styles.graphSvg}>
                            <path d="M0 35 Q 25 5, 50 15 T 100 10" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </div>
                </div>
            );
        case 'long-form':
            return (
                <div className={styles.longFormGraphic}>
                    <div className={styles.timeline}>
                        <div className={styles.playhead}></div>
                        <div className={styles.clips}>
                            <div className={styles.clip}></div>
                            <div className={styles.clip}></div>
                            <div className={styles.clip}></div>
                        </div>
                    </div>
                    <div className={styles.storyboard}>
                        <div className={styles.frame}></div>
                        <div className={styles.frame}></div>
                    </div>
                </div>
            );
        case 'graphic-design':
            return (
                <div className={styles.designGraphic}>
                    <div className={styles.canvas}>
                        <div className={styles.shape1}></div>
                        <div className={styles.shape2}></div>
                        <div className={styles.element}>
                            <div className={styles.elementLine}></div>
                            <div className={styles.elementLine}></div>
                        </div>
                    </div>
                    <div className={styles.palette}>
                        <div className={styles.color}></div>
                        <div className={styles.color}></div>
                        <div className={styles.color}></div>
                    </div>
                </div>
            );
        case 'social-management':
            return (
                <div className={styles.socialGraphic}>
                    <div className={styles.postCard}>
                        <div className={styles.postHeader}>
                            <div className={styles.postAvatar}></div>
                            <div className={styles.postUser}></div>
                        </div>
                        <div className={styles.postContent}></div>
                    </div>
                    <div className={styles.growthPanel}>
                        <div className={styles.growthArrow}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.growthValue}>+124%</div>
                    </div>
                    <div className={styles.calendarIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default function Services() {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={`${styles.badge} reveal`}>
                        Services
                    </div>
                    <h2 className={`${styles.title} reveal delay-1`}>
                        Services I <span className="highlight">Offer</span>
                    </h2>
                    <p className={`${styles.subtitle} reveal delay-2`}>
                        Transforming raw content into world-class digital experiences.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={`${styles.serviceCard} ${service.layoutClass} reveal`}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>

                                <div className={styles.featuresList}>
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} className={styles.featureItem}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.graphicContainer}>
                                {renderGraphic(service.type)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
