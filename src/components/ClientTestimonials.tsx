import styles from './ClientTestimonials.module.css';
import ludoAvatar from '../assets/LudoET.jpg';
import etclAvatar from '../assets/ETCL.jpg';
import cherekaAvatar from '../assets/chereka.png';
import myAvatar from '../assets/my.png';
import flipperAvatar from '../assets/flipper.png';
import alkabaAvatar from '../assets/alkaba.jpg';

const clientReviews = [
    {
        name: 'ETCL Real Estate',
        role: 'PLC',
        quote: 'Working with Honzima elevated our real estate videos to a whole new level. He understands real estate marketing, not just editing.',
        avatar: etclAvatar
    },
    {
        name: 'Chereka Kids',
        role: 'Small business',
        quote: 'Great work! The edit feels smooth and exactly matches my vision.',
        avatar: cherekaAvatar
    },
    {
        name: 'M Y',
        role: 'Travel Agency',
        quote: 'Working with Honzima was a great experience. We will definitely be coming back for more edits.',
        avatar: myAvatar
    },
    {
        name: 'LudoET',
        role: 'PLC',
        quote: 'He transformed my vision into a stunning final video. Fast delivery and top-tier editing skills.',
        avatar: ludoAvatar
    },
    {
        name: 'Alkaba',
        role: 'Travel Agency',
        quote: 'Yo this came out way better than I expected, thank you!',
        avatar: alkabaAvatar
    },
    {
        name: 'Flipper International School',
        role: 'Education',
        quote: 'The edit looks so clean, appreciate it!',
        avatar: flipperAvatar
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
