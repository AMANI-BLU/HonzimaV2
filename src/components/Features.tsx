import styles from './Features.module.css';

export default function Features() {
    const cards = [
        "Como fazer seus projetos aparecerem todos os dias para o público",
        "Boas práticas e como montar os seus projetos",
        "Como fazer um bom SEO e ser recomendado automaticamente",
        "Como o algoritmo funciona e o passo a passo para usar ele a seu favor"
    ];

    return (
        <section className={`container ${styles.featuresSection}`}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>PARE DE PERDER DINHEIRO</span>
                <h2 className={styles.title}>
                    Seu perfil tem muito mais valor do que você pensa, só precisa aprender a usar ele <span className="highlight">com intenção</span>
                </h2>
                <p className={styles.subtitle}>O que você vai aprender com o ebook:</p>
            </div>

            <div className={styles.grid}>
                {cards.map((text, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <p className={styles.cardText}>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
