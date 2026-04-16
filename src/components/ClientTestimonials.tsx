import styles from './ClientTestimonials.module.css';

const clientReviews = [
    {
        name: 'Alex Rivera',
        role: 'Founder, Rivera Media',
        quote: 'Honzima transformed my workflow. Unmatched quality and speed.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
        name: 'Sarah Chen',
        role: 'Marketing Director',
        quote: 'Finding an editor who understands brand voice is rare. Nailed it.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
        name: 'Marcus Thorne',
        role: 'Head of Content',
        quote: 'The cinematic feel and attention to detail is truly world-class.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus'
    },
    {
        name: 'David Kim',
        role: 'Tech Reviewer',
        quote: 'The best investment for my channel. Professional and consistent.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
    },
    {
        name: 'Elena Rossi',
        role: 'Creative Director',
        quote: 'Exceeded every expectation. A seamless creative partnership.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena'
    },
    {
        name: 'Jordan Smith',
        role: 'Startup Founder',
        quote: 'Speed and quality that actually scales with our growth.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan'
    }
];

export default function ClientTestimonials() {
    // Duplicate the reviews to ensure a seamless loop
    const doubledReviews = [...clientReviews, ...clientReviews];

    return (
        <section id="testimonials" className={styles.clientSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={`${styles.badge} reveal`}>
                        <span className={styles.starIcon}>★</span>
                        Testimonials
                    </div>
                    <h2 className={`${styles.title} reveal delay-1`}>
                        What <span className={styles.highlight}>Clients Say</span>
                    </h2>
                    <p className={`${styles.subtitle} reveal delay-2`}>
                        Hear directly from the businesses and creators I've collaborated with.
                    </p>
                </div>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {doubledReviews.map((review, i) => (
                            <div key={i} className={styles.miniCard}>
                                <div className={styles.cardHeader}>
                                    <img src={review.avatar} alt={review.name} className={styles.tinyAvatar} />
                                    <div className={styles.meta}>
                                        <h3 className={styles.name}>{review.name}</h3>
                                        <p className={styles.role}>{review.role}</p>
                                    </div>
                                </div>
                                <p className={styles.miniQuote}>"{review.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
