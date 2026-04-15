import styles from './TargetAudience.module.css';

export default function TargetAudience() {
    return (
        <section className={`container ${styles.audienceSection}`}>
            <div className={styles.leftColumn}>
                <span className={styles.eyebrow}>PARA QUEM É?</span>
                <h2 className={styles.title}>
                    Esses são os profissionais que o Behance <span className="highlight">mais</span>...
                </h2>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.audienceCard}>
                    <div className={styles.iconWrapper}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Designer de Identidades Visuais</h3>
                        <p className={styles.cardText}>
                            Esses definitivamente são os queridinhos dentro da plataforma. Identidades Visuais bem apresentadas ganham muito destaque e tem uma entrega orgânica excelente mesmo meses sem postar.
                        </p>
                    </div>
                </div>

                <div className={styles.audienceCard}>
                    <div className={styles.iconWrapper}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Designer de Social Media</h3>
                        <p className={styles.cardText}>
                            Social Media nunca morre dentro do Behance, entrega excelente ainda mais se postado regularmente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
