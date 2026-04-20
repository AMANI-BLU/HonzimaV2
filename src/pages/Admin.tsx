import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import styles from './Admin.module.css';

interface Video {
    id: string;
    title: string;
    description: string;
    is_featured?: boolean;
}

const StatusModal = ({ isOpen, title, message, onConfirm, onCancel, type = 'confirm' }: {
    isOpen: boolean,
    title?: string,
    message: string,
    onConfirm: () => void,
    onCancel?: () => void,
    type?: 'confirm' | 'error' | 'success'
}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay}>
            <div className={`${styles.modalContent} ${styles[type]}`}>
                <h3>{title || (type === 'error' ? 'Error' : 'Confirmation')}</h3>
                <p>{message}</p>
                <div className={styles.modalActions}>
                    <button
                        onClick={onConfirm}
                        className={type === 'error' ? styles.errorBtn : type === 'success' ? styles.successBtn : styles.confirmBtn}
                    >
                        {type === 'confirm' ? 'Confirm' : 'OK'}
                    </button>
                    {type === 'confirm' && onCancel && (
                        <button onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Admin() {
    const DEFAULT_PASSWORD = 'honzima2025';
    const getStoredPassword = () => localStorage.getItem('adminPassword') || DEFAULT_PASSWORD;

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(false);
    const [editingVideo, setEditingVideo] = useState<Video | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        is_featured: false
    });

    // Change Password state
    const [showChangePwd, setShowChangePwd] = useState(false);
    const [pwdForm, setPwdForm] = useState({ current: '', newPwd: '', confirm: '' });

    // Modal State
    const [modal, setModal] = useState<{
        isOpen: boolean,
        title?: string,
        message: string,
        action: (() => void) | null,
        type: 'confirm' | 'error' | 'success'
    }>({
        isOpen: false,
        message: '',
        action: null,
        type: 'confirm'
    });

    useEffect(() => {
        if (isAuthenticated) {
            fetchVideos();
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === getStoredPassword()) {
            setIsAuthenticated(true);
        } else {
            setModal({
                isOpen: true,
                title: 'Login Failed',
                message: 'Incorrect password. Please try again.',
                action: () => setModal({ ...modal, isOpen: false }),
                type: 'error'
            });
        }
    };

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (pwdForm.current !== getStoredPassword()) {
            setModal({ isOpen: true, title: 'Error', message: 'Current password is incorrect.', action: () => setModal({ ...modal, isOpen: false }), type: 'error' });
            return;
        }
        if (pwdForm.newPwd.length < 6) {
            setModal({ isOpen: true, title: 'Error', message: 'New password must be at least 6 characters.', action: () => setModal({ ...modal, isOpen: false }), type: 'error' });
            return;
        }
        if (pwdForm.newPwd !== pwdForm.confirm) {
            setModal({ isOpen: true, title: 'Error', message: 'Passwords do not match.', action: () => setModal({ ...modal, isOpen: false }), type: 'error' });
            return;
        }
        localStorage.setItem('adminPassword', pwdForm.newPwd);
        setPwdForm({ current: '', newPwd: '', confirm: '' });
        setShowChangePwd(false);
        setModal({ isOpen: true, title: 'Success!', message: 'Password changed successfully.', action: () => setModal({ ...modal, isOpen: false }), type: 'success' });
    };

    const fetchVideos = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('videos')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            setModal({
                isOpen: true,
                message: `Failed to fetch videos: ${error.message}`,
                action: () => setModal({ ...modal, isOpen: false }),
                type: 'error'
            });
        } else {
            setVideos(data || []);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingVideo) {
            setModal({
                isOpen: true,
                message: `Are you sure you want to update "${formData.title}"?`,
                action: () => executeSubmit(true),
                type: 'confirm'
            });
        } else {
            executeSubmit(false);
        }
    };

    const executeSubmit = async (isUpdate: boolean) => {
        setLoading(true);
        setModal({ ...modal, isOpen: false });

        if (isUpdate && editingVideo) {
            const { error } = await supabase
                .from('videos')
                .update({
                    title: formData.title,
                    description: formData.description,
                    is_featured: formData.is_featured
                })
                .eq('id', editingVideo.id);

            if (error) {
                setModal({
                    isOpen: true,
                    message: error.message,
                    action: () => setModal({ ...modal, isOpen: false }),
                    type: 'error'
                });
            } else {
                setEditingVideo(null);
                setFormData({ id: '', title: '', description: '', is_featured: false });
                setModal({
                    isOpen: true,
                    title: 'Success!',
                    message: `Successfully ${isUpdate ? 'updated' : 'added'} "${formData.title}"`,
                    action: () => setModal({ ...modal, isOpen: false }),
                    type: 'success'
                });
                fetchVideos();
            }
        } else {
            const { error } = await supabase
                .from('videos')
                .insert([formData]);

            if (error) {
                setModal({
                    isOpen: true,
                    message: error.message,
                    action: () => setModal({ ...modal, isOpen: false }),
                    type: 'error'
                });
            } else {
                setFormData({ id: '', title: '', description: '', is_featured: false });
                setModal({
                    isOpen: true,
                    title: 'Success!',
                    message: `Successfully added "${formData.title}"`,
                    action: () => setModal({ ...modal, isOpen: false }),
                    type: 'success'
                });
                fetchVideos();
            }
        }
        setLoading(false);
    };

    const handleDelete = (id: string, title: string) => {
        setModal({
            isOpen: true,
            message: `Are you sure you want to permanently delete "${title}"?`,
            action: () => executeDelete(id, title),
            type: 'confirm'
        });
    };

    const executeDelete = async (id: string, title: string) => {
        setLoading(true);
        setModal({ ...modal, isOpen: false });
        const { error } = await supabase
            .from('videos')
            .delete()
            .eq('id', id);

        if (error) {
            setModal({
                isOpen: true,
                message: error.message,
                action: () => setModal({ ...modal, isOpen: false }),
                type: 'error'
            });
        } else {
            setModal({
                isOpen: true,
                title: 'Deleted',
                message: `Successfully deleted "${title}"`,
                action: () => setModal({ ...modal, isOpen: false }),
                type: 'success'
            });
            fetchVideos();
        }
        setLoading(false);
    };

    const handleEdit = (video: Video) => {
        setEditingVideo(video);
        setFormData({
            id: video.id,
            title: video.title,
            description: video.description,
            is_featured: !!video.is_featured
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
                    <h1>Admin <span className="highlight">Dashboard</span></h1>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={() => setShowChangePwd(v => !v)} className={styles.logoutBtn}>🔑 Change Password</button>
                        <button onClick={() => setIsAuthenticated(false)} className={styles.logoutBtn}>Logout</button>
                    </div>
                </header>

                {showChangePwd && (
                    <div className={styles.formSection} style={{ maxWidth: 420 }}>
                        <h2>Change Password</h2>
                        <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className={styles.formGroup}>
                                <label>Current Password</label>
                                <input type="password" value={pwdForm.current} onChange={e => setPwdForm({ ...pwdForm, current: e.target.value })} placeholder="Current password" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>New Password</label>
                                <input type="password" value={pwdForm.newPwd} onChange={e => setPwdForm({ ...pwdForm, newPwd: e.target.value })} placeholder="New password (min 6 chars)" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Confirm New Password</label>
                                <input type="password" value={pwdForm.confirm} onChange={e => setPwdForm({ ...pwdForm, confirm: e.target.value })} placeholder="Confirm new password" required />
                            </div>
                            <div className={styles.formActions}>
                                <button type="submit" className={styles.submitBtn}>Update Password</button>
                                <button type="button" onClick={() => { setShowChangePwd(false); setPwdForm({ current: '', newPwd: '', confirm: '' }); }} className={styles.cancelBtn}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}

                <div className={styles.formSection}>
                    <h2>{editingVideo ? 'Edit Video' : 'Add New Video'}</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
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
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={formData.is_featured}
                                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                                />
                                Featured Work
                            </label>
                        </div>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
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
                                    setFormData({ id: '', title: '', description: '', is_featured: false });
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
                            <div key={video.id} className={`${styles.videoItem} ${video.is_featured ? styles.featuredItem : ''}`}>
                                <div className={styles.videoPreview}>
                                    <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} />
                                    {video.is_featured && <span className={styles.featuredBadge}>Featured</span>}
                                </div>
                                <div className={styles.videoMeta}>
                                    <h3>{video.title}</h3>
                                    <div className={styles.itemActions}>
                                        <button onClick={() => handleEdit(video)} className={styles.editBtn}>Edit</button>
                                        <button onClick={() => handleDelete(video.id, video.title)} className={styles.deleteBtn}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            <StatusModal
                isOpen={modal.isOpen}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                onConfirm={modal.action || (() => { })}
                onCancel={() => setModal({ ...modal, isOpen: false })}
            />
        </div >
    );
}
