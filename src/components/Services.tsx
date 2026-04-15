import styles from './Services.module.css';

const services = [
    {
        title: "Short-Form Edits",
        description: "Turn raw clips into scroll-stopping, high-retention videos built for Reels, Shorts, and TikTok. Fast hooks, clean captions, smooth pacing — designed to grab attention and boost engagement.",
        tags: [
            { text: "High-Retention Editing", icon: "monitor" },
            { text: "Viral-Style Hooks", icon: "flag" },
            { text: "Clean Captions & Motion", icon: "box" },
            { text: "Fast Delivery", icon: "trending-up" }
        ],
        layoutClass: styles.wideCard
    },
    {
        title: "Long-Form Edits",
        description: "Transform long footage into clear, engaging, story-driven videos. We cut the fluff, improve pacing, and keep viewers watching from start to finish.",
        tags: [
            { text: "YouTube & Documentary Style", icon: "star" },
            { text: "Story + Flow Focused", icon: "layers" }
        ],
        layoutClass: styles.narrowCard
    },
    {
        title: "Graphic Design",
        description: "Strong visuals build strong brands. I design clean, modern, attention-grabbing graphics that make your content and brand look professional and memorable.",
        tags: [
            { text: "Thumbnails That Get Clicks", icon: "mouse-pointer" },
            { text: "Social Media Graphics", icon: "grid" },
            { text: "Brand Visuals & Posters", icon: "image" }
        ],
        layoutClass: styles.narrowCard
    },
    {
        title: "Social Media Management",
        description: "Grow your brand with strategic content planning, consistent posting, and smart audience engagement. I help you build presence, increase reach, and turn followers into loyal clients.",
        tags: [
            { text: "Content Strategy & Planning", icon: "globe" },
            { text: "Posting & Scheduling", icon: "calendar" },
            { text: "Audience Engagement", icon: "users" },
            { text: "Growth Optimization", icon: "activity" }
        ],
        layoutClass: styles.wideCard
    }
];

const renderIcon = (iconName: string) => {
    switch (iconName) {
        case 'monitor': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
        case 'flag': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>;
        case 'box': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
        case 'trending-up': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
        case 'star': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
        case 'layers': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
        case 'mouse-pointer': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>;
        case 'grid': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
        case 'image': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
        case 'globe': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
        case 'calendar': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
        case 'users': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
        case 'activity': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
        default: return null;
    }
};

export default function Services() {
    return (
        <section className={styles.servicesSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.starIcon}>★</span>
                        Services
                    </div>
                    <h2 className={styles.title}>
                        Services I <span className="highlight">Offer</span>
                    </h2>
                    <p className={styles.subtitle}>
                        I craft engaging edits that keep your viewer hooked.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={`${styles.serviceCard} ${service.layoutClass}`}>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>

                            <div className={styles.tagsContainer}>
                                {service.tags.map((tag, tIndex) => (
                                    <div key={tIndex} className={styles.tag}>
                                        <span className={styles.tagIcon}>
                                            {renderIcon(tag.icon)}
                                        </span>
                                        {tag.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
