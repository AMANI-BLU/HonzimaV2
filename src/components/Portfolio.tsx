import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';
import { supabase } from '../lib/supabase';

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    thumbnail?: string;
}

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
    return (
        <div className={styles.thumbnailContainer}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&iv_load_policy=3`}
                title="YouTube video player"
                className={styles.videoThumbnail}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const ProjectSkeleton = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonThumbnail}>
            </div>
            <div className={styles.skeletonInfo}>
                <div className={styles.skeletonCategory}>
                </div>
                <div className={styles.skeletonTitle}>
                </div>
                <div className={styles.skeletonText}>
                </div>
                <div className={`${styles.skeletonText} ${styles.skeletonTextLast}`}>
                </div>
            </div>
        </div>
    );
};
export default function Portfolio({
    featuredOnly = false,
    hideHeader = false,
    hideCategories = false,
    customPadding = '100px 0'
}: {
    featuredOnly?: boolean,
    hideHeader?: boolean,
    hideCategories?: boolean,
    customPadding?: string
}) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('videos')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                const allProjects = data || [];
                setProjects(allProjects);

                // Initial filter
                const initial = (featuredOnly) ? allProjects.slice(0, 3) : allProjects;
                setFilteredProjects(initial);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [featuredOnly]);

    useEffect(() => {
        let filtered = projects;
        if (activeCategory !== 'All' && !hideCategories) {
            filtered = projects.filter(p =>
                p.category?.toLowerCase() === activeCategory.toLowerCase()
            );
        }

        if (featuredOnly) {
            filtered = filtered.slice(0, 3);
        }

        setFilteredProjects(filtered);
    }, [activeCategory, projects, featuredOnly, hideCategories]);

    const categories = ['All', 'Long-Form', 'Short-Form'];

    return (
        <section
            id="portfolio"
            className={styles.portfolioSection}
            style={{ padding: customPadding }}
        >
            <div className="container">
                {!hideHeader && (
                    <div className={styles.header}>
                        <div className={`${styles.badge} reveal`}>
                            Portfolio
                        </div>
                        <h2 className={`${styles.title} reveal delay-1`}>
                            {featuredOnly ? 'Featured' : 'All'} <span className="highlight">Works</span>
                        </h2>
                        <p className={`${styles.subtitle} reveal delay-2`}>
                            A collection of my best video editing projects across different styles and industries.
                        </p>
                        <div className="ambient-glow" style={{ bottom: '20%', right: '-10%', opacity: 0.15 }}></div>
                    </div>
                )}

                {loading ? (
                    <div className={styles.skeletonGrid}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <ProjectSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <>
                        {(!featuredOnly && !hideCategories) && (
                            <div className={styles.filterContainer}>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className={styles.portfolioGrid}>
                            {filteredProjects.map((project) => (
                                <div key={project.id} className={`${styles.projectCard} reveal`}>
                                    <YouTubeEmbed videoId={project.id} />
                                    <div className={styles.projectInfo}>
                                        {!hideCategories && (
                                            <span className={styles.projectCategory}>
                                                {project.category || 'General'}
                                            </span>
                                        )}
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDescription}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {featuredOnly && (
                            <div className={styles.ctaWrapper}>
                                <div className={styles.ctaLine}></div>
                                <Link to="/portfolio" className={styles.premiumLink}>
                                    <span className={styles.linkText}>View Full Portfolio</span>
                                    <div className={styles.arrowWrapper}>
                                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className={styles.sleekArrow}>
                                            <path d="M0 10H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M30 3L38 10L30 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </Link>
                                <div className={styles.ctaLine}></div>
                            </div>
                        )}
                    </>
                )}

                {(!loading && projects.length === 0) && (
                    <div className={styles.emptyState}>
                        <p>No projects found in Supabase.</p>
                    </div>
                )}
            </div>
        </section >
    );
}
