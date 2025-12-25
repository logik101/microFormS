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
    <div className="relative bg-dark text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://logik101.github.io/microF/tech.jpg"
          alt="Abstract technology background representing innovation in fintech."
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10">
          <a
            href="#projects"
            onClick={handleDiscoverClick}
            className="bg-accent text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300"
          >
            {t('discover')}
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
        <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
    </div>
);


const ServicesSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section id="services" className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">{t('aboutMicroFormS')}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('aboutMicroFormSDesc')}</p>
                <div className="mt-8">
                    <p className="text-xl font-medium text-primary italic">"{t('expertiseQuote')}"</p>
                    <p className="mt-2 text-base font-semibold text-gray-700">- Walner Sainrisma</p>
                </div>
                 <div className="mt-10">
                    <NavLink to="/about" className="text-accent hover:text-amber-600 font-bold text-base">
                        Learn More &rarr;
                    </NavLink>
                </div>
            </div>
        </section>
    );
};


const ProjectsSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section id="projects" className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">{t('ourProjects')}</h2>
                     <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('ourProjectsDesc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">{t('techInnovations')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{t('techInnovationsDesc')}</p>
                    </div>
                    <div>
                        <img src="https://logik101.github.io/microF/h2.jpg" alt="Technological innovations in data analysis" className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ConnectSection: React.FC = () => {
    const { t } = useTranslations();
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">{t('connectTitle')}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('connectSubtitle')}</p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Email Card */}
                    <div className="bg-light p-8 rounded-lg shadow-md text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <div className="bg-primary rounded-full p-4 inline-block">
                            <MailIcon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mt-4">{t('connectEmailTitle')}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{t('connectEmailDesc')}</p>
                        <a href="mailto:contact@microforms.org" className="mt-4 inline-block text-accent font-bold hover:underline">contact@microforms.org</a>
                    </div>
                    {/* Phone Card */}
                    <div className="bg-light p-8 rounded-lg shadow-md text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <div className="bg-primary rounded-full p-4 inline-block">
                             <PhoneIcon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mt-4">{t('connectPhoneTitle')}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{t('connectPhoneDesc')}</p>
                        <a href="tel:+11234567890" className="mt-4 inline-block text-accent font-bold hover:underline">+1 (123) 456-7890</a>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <h3 className="text-xl font-bold text-dark">{t('connectSocialTitle')}</h3>
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform transform hover:scale-110"><LinkedInIcon className="h-8 w-8" /></a>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform transform hover:scale-110"><TwitterXIcon className="h-8 w-8" /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform transform hover:scale-110"><FacebookIcon className="h-8 w-8" /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-transform transform hover:scale-110"><InstagramIcon className="h-8 w-8" /></a>
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