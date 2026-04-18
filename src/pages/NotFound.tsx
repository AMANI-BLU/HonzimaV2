import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <main className={styles.notFoundPage}>
            <div className={`container ${styles.contentWrapper}`}>
                <div className={styles.glowOrb}></div>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page Not Found</h2>
                <p className={styles.description}>
                    Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
                </p>
                <Link to="/" className={styles.homeBtn}>
                    Return to Home
                </Link>
            </div>
        </main>
    );
}
