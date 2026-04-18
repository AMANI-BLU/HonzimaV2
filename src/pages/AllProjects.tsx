import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import styles from './AllProjects.module.css';

export default function AllProjects() {
    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={styles.allProjectsPage}>
            <div className="container">
                <div className={styles.topNav}>
                    <Link to="/" className={styles.backBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <header className={styles.headerContent}>
                    <h1 className={styles.pageTitle}>
                        My Recent Edits<br />
                        <span className={styles.accentPart}>in Action</span>
                    </h1>
                    <p className={styles.description}>
                        Explore my latest video edits, transitions, and cinematic storytelling.
                    </p>
                </header>
            </div>

            <Portfolio featuredOnly={false} hideHeader={true} customPadding="20px 0" />

        </main>
    );
}
