import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormationsPage from './pages/FormationsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import CreateBlogPage from './pages/CreateBlogPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BlogProvider>
          <HashRouter>
            <div className="bg-white text-dark font-sans antialiased flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/formations" element={<FormationsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogPostPage />} />
                  <Route path="/search" element={<SearchResultsPage />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<Navigate to="/login" replace />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                  <Route path="/admin/create-blog" element={<CreateBlogPage />} />
                  <Route path="/admin/edit-blog/:id" element={<CreateBlogPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </HashRouter>
        </BlogProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;