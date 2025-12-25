import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { NavLink } from 'react-router-dom';
import { PhoneIcon, MailIcon, LinkedInIcon, TwitterXIcon, FacebookIcon, InstagramIcon } from '../components/icons';

const HeroSection: React.FC = () => {
  const { t } = useTranslations();
  
  const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <div className="relative bg-dark text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://logik101.github.io/microF/tech.jpg"
          alt="Abstract technology background representing innovation in fintech."
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-in fade-in zoom-in duration-1000">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
                MicroFormS &bull; Innovation
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-gray-200 leading-relaxed font-light mb-10 drop-shadow-md">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                onClick={handleDiscoverClick}
                className="bg-accent text-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                {t('discover')}
              </a>
              <NavLink
                to="/about"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
              >
                {t('navAbout')}
              </NavLink>
            </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string, description: string, icon?: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
             {/* Fallback Icon if none provided, styled via CSS mostly */}
             <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);


const ServicesSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section id="services" className="py-24 bg-light relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('navFormations')}</h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{t('heroSubtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard title={t('qualityTraining')} description={t('qualityTrainingDesc')} />
                    <ServiceCard title={t('advancedDataAnalysis')} description={t('advancedDataAnalysisDesc')} />
                    <ServiceCard title={t('innovativeStrategies')} description={t('innovativeStrategiesDesc')} />
                    <ServiceCard title={t('inDepthStudies')} description={t('cuttingEdgeTech')} />
                </div>
            </div>
        </section>
    );
};

const AboutSnippet: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-dark rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">{t('aboutMicroFormS')}</h2>
                        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10">{t('aboutMicroFormSDesc')}</p>
                        
                        <div className="inline-block border-l-4 border-accent pl-6 text-left max-w-2xl mx-auto mb-10">
                            <p className="text-2xl font-serif text-white italic">"{t('expertiseQuote')}"</p>
                            <p className="mt-2 text-sm font-bold text-accent tracking-wider uppercase">- Walner Sainrisma</p>
                        </div>
                        
                        <div>
                            <NavLink to="/about" className="inline-flex items-center text-accent hover:text-white font-bold text-lg transition-colors">
                                Learn More <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ProjectsSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section id="projects" className="py-24 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-4xl font-extrabold text-dark mb-4">{t('ourProjects')}</h2>
                     <p className="max-w-2xl mx-auto text-lg text-gray-600">{t('ourProjectsDesc')}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-3xl font-bold text-primary mb-6 relative inline-block">
                            {t('techInnovations')}
                            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">{t('techInnovationsDesc')}</p>
                        <ul className="space-y-4 text-gray-700 mb-8">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven risk assessment models</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Digital transformation for MFIs</span>
                            </li>
                        </ul>
                        <button className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                            Explore Innovation
                        </button>
                    </div>
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img src="https://logik101.github.io/microF/h2.jpg" alt="Technological innovations in data analysis" className="relative rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01] w-full"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ConnectSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-dark mb-4">{t('connectTitle')}</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">{t('connectSubtitle')}</p>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Email Card */}
                    <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                        <div className="bg-white rounded-full p-5 inline-block shadow-md mb-6">
                            <MailIcon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('connectEmailTitle')}</h3>
                        <p className="text-gray-600 mb-6">{t('connectEmailDesc')}</p>
                        <a href="mailto:contact@microforms.org" className="text-accent font-bold text-lg hover:text-amber-600 transition-colors">contact@microforms.org</a>
                    </div>
                    {/* Phone Card */}
                    <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                        <div className="bg-white rounded-full p-5 inline-block shadow-md mb-6">
                             <PhoneIcon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('connectPhoneTitle')}</h3>
                        <p className="text-gray-600 mb-6">{t('connectPhoneDesc')}</p>
                        <a href="tel:+11234567890" className="text-accent font-bold text-lg hover:text-amber-600 transition-colors">+1 (123) 456-7890</a>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-8">{t('connectSocialTitle')}</h3>
                    <div className="flex justify-center space-x-8">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-125"><LinkedInIcon className="h-10 w-10" /></a>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all transform hover:scale-125"><TwitterXIcon className="h-10 w-10" /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all transform hover:scale-125"><FacebookIcon className="h-10 w-10" /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-all transform hover:scale-125"><InstagramIcon className="h-10 w-10" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSnippet />
      <ProjectsSection />
      <ConnectSection />
    </>
  );
};

export default HomePage;