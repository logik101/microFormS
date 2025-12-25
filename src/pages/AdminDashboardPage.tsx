import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import { useTranslations } from '../hooks/useTranslations';
import { ActivityLog, User } from '../types';

const ConfirmationModal: React.FC<{
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}> = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={onCancel}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-100">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                                    Confirmation
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button 
                            type="button" 
                            onClick={onConfirm} 
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Yes, I'm sure
                        </button>
                        <button 
                            type="button" 
                            onClick={onCancel} 
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChangePasswordModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    targetUsername: string;
}> = ({ isOpen, onClose, targetUsername }) => {
    const { t } = useTranslations();
    const { updatePassword } = useAuth();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setNewPassword('');
        setMessage('');
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updatePassword(targetUsername, newPassword);
        setMessage(t('passwordChangedSuccess'));
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm" onClick={onClose}></div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{t('changePassword')}: <span className="text-primary font-bold">{targetUsername}</span></h3>
                            {message && (
                                <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                                    {message}
                                </div>
                            )}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('newPassword')}</label>
                                    <input 
                                        type="password" 
                                        required
                                        value={newPassword} 
                                        onChange={e => setNewPassword(e.target.value)} 
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                                {t('submit')}
                            </button>
                            <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                {t('cancel')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const AdminDashboardPage: React.FC = () => {
    const { t } = useTranslations();
    const { user, isAuthenticated, logs, logout, logActivity, allUsers } = useAuth();
    const { articles, deleteArticle, toggleHideArticle, triggerGithubSync, syncStatus } = useBlog();
    const navigate = useNavigate();

    const [modalConfig, setModalConfig] = useState<{isOpen: boolean, message: string, onConfirm: () => void}>({
        isOpen: false,
        message: '',
        onConfirm: () => {}
    });
    const [passwordModal, setPasswordModal] = useState<{isOpen: boolean, username: string}>({
        isOpen: false,
        username: ''
    });
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    const handleDelete = (id: number, title: string) => {
        setModalConfig({
            isOpen: true,
            message: t('confirmDelete'),
            onConfirm: async () => {
                const updatedArticles = articles.filter(a => a.id !== id);
                deleteArticle(id);
                logActivity('DELETE_POST', `Deleted post ID ${id}: ${title}`);
                setModalConfig(prev => ({...prev, isOpen: false}));
                await triggerGithubSync(updatedArticles);
            }
        });
    };

    const handleToggleHide = (id: number, isHidden: boolean | undefined, title: string) => {
        const message = isHidden ? t('confirmShow') : t('confirmHide');
        setModalConfig({
            isOpen: true,
            message: message,
            onConfirm: async () => {
                const updatedArticles = articles.map((article) => 
                    article.id === id ? { ...article, isHidden: !article.isHidden } : article
                );
                toggleHideArticle(id);
                const action = isHidden ? 'SHOW_POST' : 'HIDE_POST';
                logActivity(action, `${action === 'SHOW_POST' ? 'Published' : 'Unpublished (Draft)'} post ID ${id}: ${title}`);
                setModalConfig(prev => ({...prev, isOpen: false}));
                await triggerGithubSync(updatedArticles);
            }
        });
    };
    
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const openPasswordModal = (username: string) => {
        setPasswordModal({ isOpen: true, username });
    };

    // Helper to strip HTML for table display
    const stripHtml = (html: string) => {
       const tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <ConfirmationModal 
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                onConfirm={modalConfig.onConfirm}
                onCancel={() => setModalConfig(prev => ({...prev, isOpen: false}))}
            />
            <ChangePasswordModal
                isOpen={passwordModal.isOpen}
                onClose={() => setPasswordModal({isOpen: false, username: ''})}
                targetUsername={passwordModal.username}
            />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{t('dashboard')}</h1>
                        <p className="text-gray-600 mt-1">
                            {/* Check for primitive string to prevent object rendering error */}
                            Welcome, <span className="font-semibold text-primary">{typeof user.name === 'string' ? user.name : user.username}</span> ({user.role})
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-3">
                        <NavLink to="/admin/create-blog" className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition shadow-sm">
                            {t('createPost')}
                        </NavLink>
                        {/* Settings Button Removed: Config is now hardcoded */}
                        <button onClick={() => openPasswordModal(user.username)} className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-50 transition shadow-sm">
                            {t('changePassword')}
                        </button>
                        <button onClick={handleLogout} className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-50 transition shadow-sm">
                            {t('logout')}
                        </button>
                    </div>
                </div>

                {/* Auto Sync Status */}
                {syncStatus.message && (
                    <div className={`mb-6 p-4 rounded-md shadow-sm border-l-4 ${
                        syncStatus.type === 'loading' ? 'bg-blue-50 border-blue-500 text-blue-700' :
                        syncStatus.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
                        syncStatus.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-gray-50'
                    }`}>
                        <div className="flex items-center">
                            {syncStatus.type === 'loading' && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                            {/* Ensure sync status message is primitive */}
                            <span className="font-medium">{typeof syncStatus.message === 'string' ? syncStatus.message : JSON.stringify(syncStatus.message)}</span>
                        </div>
                    </div>
                )}
                
                {/* Admin Only: User Management */}
                {user.role === 'admin' && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h2 className="text-xl font-semibold text-gray-800">{t('userManagement')}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('nameLabel')}</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('username')}</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('role')}</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('actions')}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {allUsers.map((u: User) => (
                                        <tr key={u.username} className="hover:bg-gray-50 transition-colors">
                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {typeof u.name === 'string' ? u.name : '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {u.username}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                                    {u.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button 
                                                    onClick={() => openPasswordModal(u.username)}
                                                    className="text-primary hover:text-blue-900"
                                                >
                                                    {t('changePassword')}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Posts Management Section */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-800">{t('navBlog')} - Management</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('title')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('dateLabel')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('authorLabel')}</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('status')}</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('actions')}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {articles.map((article) => {
                                    const title = stripHtml(t(article.titleKey));
                                    return (
                                        <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {article.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {article.author || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${!article.isHidden ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {!article.isHidden ? t('published') : t('draft')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <button 
                                                    onClick={() => handleToggleHide(article.id, article.isHidden, title)}
                                                    className={`${!article.isHidden ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'}`}
                                                >
                                                    {!article.isHidden ? t('hide') : t('show')}
                                                </button>
                                                <NavLink 
                                                    to={`/admin/edit-blog/${article.id}`} 
                                                    className="text-primary hover:text-blue-900"
                                                >
                                                    {t('editPost')}
                                                </NavLink>
                                                <button 
                                                    onClick={() => handleDelete(article.id, title)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    {t('delete')}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {articles.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                            No posts found. Create your first one!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Admin Only: Activity Log */}
                {user.role === 'admin' && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h2 className="text-xl font-semibold text-gray-800">{t('activityLog')}</h2>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {logs.length > 0 ? (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {logs.map((log) => (
                                            <tr key={log.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                                    {new Date(log.timestamp).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {log.username}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                                    {log.action}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600 truncate max-w-md">
                                                    {/* Safely handle potential objects in details for debugging */}
                                                    {typeof log.details === 'object' ? JSON.stringify(log.details) : log.details}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="px-6 py-8 text-center text-gray-500">
                                    {t('noActivity')}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboardPage;