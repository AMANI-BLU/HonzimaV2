import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';
import { supabase } from '../lib/supabase';

interface Project {
    id: string;
    title: string;
    category?: string;
    description: string;
    thumbnail?: string;
}

// A smart thumbnail component that loads the max resolution cover, 
// and falls back to hqdefault seamlessly if maxres is unavailable.
const VideoThumbnail = ({ videoId, title }: { videoId: string; title: string }) => {
    const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    const [isFallback, setIsFallback] = useState(false);

    const handleImgError = () => {
        if (!isFallback) {
            setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
            setIsFallback(true);
        }
    };

    return (
        <div className={styles.thumbnailWrapper}>
            <img
                src={imgSrc}
                alt={title}
                className={styles.thumbnailImage}
                onError={handleImgError}
                loading="lazy"
            />
            <div className={styles.playOverlay}>
                <div className={styles.playButtonWrapper}>
                    <svg className={styles.playButtonIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.playCircleOuter} cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2" />
                        <circle className={styles.playCircleInner} cx="50" cy="50" r="36" fill="rgba(77, 163, 255, 0.2)" stroke="currentColor" strokeWidth="1.5" />
                        <path className={styles.playTriangle} d="M43 33L67 50L43 67V33Z" fill="currentColor" />
                    </svg>
                </div>
                <span className={styles.playText}>Watch Project</span>
            </div>
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
    customPadding = '100px 0'
}: {
    featuredOnly?: boolean,
    hideHeader?: boolean,
    customPadding?: string
}) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            let query = supabase.from('videos').select('*');

            if (featuredOnly) {
                query = query.eq('is_featured', true).limit(3);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching projects:', error);
            } else if (data) {
                setProjects(data);
            }
            setLoading(false);
        };

        fetchProjects();
    }, [featuredOnly]);

    // Lock page scroll when video lightbox is open
    useEffect(() => {
        if (activeVideoId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeVideoId]);

    // Listen to Escape key to close lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveVideoId(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
                        {[1, 2, 3].map((i) => (
                            <ProjectSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className={styles.portfolioGrid}>
                            {projects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className={`${styles.projectCard} reveal`}
                                    onClick={() => setActiveVideoId(project.id)}
                                >
                                    <div className={styles.cardHeader}>
                                        <span className={styles.cardIndex}>
                                            {(index + 1) < 10 ? `0${index + 1}` : index + 1}
                                        </span>
                                        <span className={styles.cardCategory}>VIDEO EDIT</span>
                                    </div>
                                    <VideoThumbnail videoId={project.id} title={project.title} />
                                    <div className={styles.projectInfo}>
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

            {/* Cinematic Fullscreen Lightbox Modal */}
            {activeVideoId && (
                <div className={styles.lightbox} onClick={() => setActiveVideoId(null)}>
                    <div className={styles.lightboxGlow}></div>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button 
                            className={styles.closeButton} 
                            onClick={() => setActiveVideoId(null)} 
                            aria-label="Close video player"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className={styles.lightboxVideoWrapper}>
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
                                title="YouTube video player"
                                className={styles.lightboxVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section >
    );
}
