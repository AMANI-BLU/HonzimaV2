import styles from './Testimonials.module.css';

const comments = [
    {
        name: 'Jarzone',
        time: '2d',
        text: 'This edit got no mercy 👏',
        likes: '84',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jarzone'
    },
    {
        name: 'Natnael content creator',
        time: '3d',
        text: 'This edit is insanely clean 🔥',
        likes: '62',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Natnael'
    },
    {
        name: 'Dr. Hayat Feraj',
        time: '4d',
        text: 'Loved your content HONZIMA',
        likes: '45',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hayat'
    },
    {
        name: 'Rediet',
        time: '5d',
        text: 'Who else keeps re-watching this? 😂🔥',
        likes: '91',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rediet'
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonialSection}>
            <div className={styles.gridBackground}></div>
            <div className="container">
                <div className={styles.contentGrid}>
                    <div className={styles.mockupColumn}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.phoneScreen}>
                                <img
                                    src="/assets/images/tiktok_mockup.png"
                                    alt="TikTok Mockup"
                                    className={styles.mockupImage}
                                />
                                <div className={styles.mockupOverlay}>
                                    <div className={styles.creatorInfo}>
                                        <div className={styles.miniAvatar}>
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Honzima" alt="Honzima" />
                                        </div>
                                        <div className={styles.miniHandle}>
                                            <span className={styles.name}>HONZIMA</span>
                                            <span className={styles.handle}>honzimaedits</span>
                                        </div>
                                    </div>
                                    <div className={styles.socialIcons}>
                                        <div className={styles.socialIcon}>
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                            <span>150</span>
                                        </div>
                                        <div className={styles.socialIcon}>
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
                                            <span>23</span>
                                        </div>
                                        <div className={styles.socialIcon}>
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" /></svg>
                                            <span>28</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.textColumn}>
                        <div className={styles.header}>
                            <div className={styles.badge}>
                                <span className={styles.starIcon}>★</span>
                                Social Proof
                            </div>
                            <h2 className={styles.title}>
                                What the <span className="highlight">Community</span> Says
                            </h2>
                            <p className={styles.subtitle}>
                                Real comments from my TikTok community. The love keeps me creating!
                            </p>
                        </div>

                        <div className={styles.commentsList}>
                            {comments.map((comment, index) => (
                                <div key={index} className={styles.commentCard}>
                                    <div className={styles.commentHeader}>
                                        <div className={styles.avatar}>
                                            <img src={comment.avatar} alt={comment.name} />
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorHandle}>@{comment.name}</span>
                                            <span className={styles.time}>{comment.time}</span>
                                        </div>
                                    </div>
                                    <p className={styles.commentText}>{comment.text}</p>
                                    <div className={styles.commentFooter}>
                                        <div className={styles.likeInfo}>
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l9.56-9.56 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            <span>{comment.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
