import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import styles from './Admin.module.css';

interface Video {
    id: string;
    title: string;
    category: string;
    description: string;
}

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(false);
    const [editingVideo, setEditingVideo] = useState<Video | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        category: 'Short-Form',
        description: ''
    });

    useEffect(() => {
        if (isAuthenticated) {
            fetchVideos();
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'honzima2025') {
            setIsAuthenticated(true);
            fetchVideos();
        } else {
            alert('Incorrect password');
        }
    };

    const fetchVideos = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('videos')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error(error);
        else setVideos(data || []);
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (editingVideo) {
            const { error } = await supabase
                .from('videos')
                .update({
                    title: formData.title,
                    category: formData.category,
                    description: formData.description
                })
                .eq('id', editingVideo.id);

            if (error) alert(error.message);
            else {
                setEditingVideo(null);
                setFormData({ id: '', title: '', category: 'Short-Form', description: '' });
                fetchVideos();
            }
        } else {
            const { error } = await supabase
                .from('videos')
                .insert([formData]);

            if (error) alert(error.message);
            else {
                setFormData({ id: '', title: '', category: 'Short-Form', description: '' });
                fetchVideos();
            }
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this video?')) return;

        setLoading(true);
        const { error } = await supabase
            .from('videos')
            .delete()
            .eq('id', id);

        if (error) alert(error.message);
        else fetchVideos();
        setLoading(false);
    };

    const handleEdit = (video: Video) => {
        setEditingVideo(video);
        setFormData({
            id: video.id,
            title: video.title,
            category: video.category,
            description: video.description
        });
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.loginContainer}>
                <div className="ambient-glow" style={{ top: '20%', left: '20%' }}></div>
                <div className={styles.loginCard}>
                    <h2>Admin Access</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.loginBtn}>Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.adminContainer}>
            <div className="ambient-glow" style={{ bottom: '10%', right: '10%' }}></div>
            <div className="container">
                <header className={styles.header}>
                    <h1>Video <span className="highlight">Management</span></h1>
                    <button onClick={() => setIsAuthenticated(false)} className={styles.logoutBtn}>Logout</button>
                </header>

                <div className={styles.formSection}>
                    <h2>{editingVideo ? 'Edit Video' : 'Add New Video'}</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>YouTube Video ID</label>
                            <input
                                type="text"
                                placeholder="e.g. dQw4w9WgXcQ"
                                value={formData.id}
                                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                disabled={!!editingVideo}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Title</label>
                            <input
                                type="text"
                                placeholder="Video Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="Short-Form">Short-Form</option>
                                <option value="Long-Form">Long-Form</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea
                                placeholder="Video Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formActions}>
                            <button type="submit" disabled={loading} className={styles.submitBtn}>
                                {editingVideo ? 'Update Video' : 'Add Video'}
                            </button>
                            {editingVideo && (
                                <button type="button" onClick={() => {
                                    setEditingVideo(null);
                                    setFormData({ id: '', title: '', category: 'Short-Form', description: '' });
                                }} className={styles.cancelBtn}>Cancel</button>
                            )}
                        </div>
                    </form>
                </div>

                <div className={styles.listSection}>
                    <h2>Existing Videos ({videos.length})</h2>
                    {loading && <p>Loading...</p>}
                    <div className={styles.videoGrid}>
                        {videos.map(video => (
                            <div key={video.id} className={styles.videoItem}>
                                <div className={styles.videoPreview}>
                                    <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} />
                                </div>
                                <div className={styles.videoMeta}>
                                    <span className={styles.categoryBadge}>{video.category}</span>
                                    <h3>{video.title}</h3>
                                    <div className={styles.itemActions}>
                                        <button onClick={() => handleEdit(video)} className={styles.editBtn}>Edit</button>
                                        <button onClick={() => handleDelete(video.id)} className={styles.deleteBtn}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
