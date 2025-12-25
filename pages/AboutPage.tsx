import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { UserIcon } from '../components/icons';

const teamMembers = [
  {
    nameKey: 'walnerName',
    titleKey: 'walnerTitle',
    descKey: 'walnerDesc',
  },
  {
    nameKey: 'charlyName',
    titleKey: 'charlyTitle',
    descKey: 'charlyDesc',
  },
  {
    nameKey: 'johnyName',
    titleKey: 'johnyTitle',
    descKey: 'johnyDesc',
  },
  {
    nameKey: 'johnsonName',
    titleKey: 'johnsonTitle',
    descKey: 'johnsonDesc',
  },
  {
    nameKey: 'robinsonName',
    titleKey: 'robinsonTitle',
    descKey: 'robinsonDesc',
  },
  {
    nameKey: 'ginelName',
    titleKey: 'ginelTitle',
    descKey: 'ginelDesc',
  },
];


const AboutPage: React.FC = () => {
  const { t } = useTranslations();

  const TeamMemberCard: React.FC<{ nameKey: string, titleKey: string, descKey: string }> = ({ nameKey, titleKey, descKey }) => {
    const { t } = useTranslations();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const description = t(descKey);
    const hasDescription = description.trim() !== '';

    return (
      <div className="text-center bg-light p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl flex flex-col">
        <div className="mx-auto h-32 w-32 rounded-full shadow-lg overflow-hidden">
          <UserIcon className="w-full h-full" />
        </div>
        <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{t(nameKey)}</h3>
        <p className="text-base leading-6 text-gray-600 flex-grow">{t(titleKey)}</p>
        
        {hasDescription && (
             <div className="mt-4">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="text-sm font-semibold text-primary hover:text-secondary flex items-center justify-center mx-auto"
                  aria-expanded={isExpanded}
                >
                    {isExpanded ? t('readLess') : t('readMore')}
                    <svg className={`w-5 h-5 ml-1 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
             </div>
        )}

        {isExpanded && hasDescription && (
            <div className="mt-4 text-left text-base text-gray-700 border-t pt-4">
                <p className="whitespace-pre-line leading-relaxed">{description}</p>
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Who We Are */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{t('whoWeAre')}</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
            {t('whoWeAreDesc')}
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-dark mb-3">{t('ourMission')}</h3>
            <p className="text-base text-gray-700 leading-relaxed text-justify">{t('ourMissionDesc')}</p>
          </div>
          <div className="bg-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-dark mb-3">{t('ourVision')}</h3>
            <p className="text-base text-gray-700 leading-relaxed text-justify">{t('ourVisionDesc')}</p>
          </div>
        </div>

        {/* Our Team */}
        <div id="team" className="mt-24">
          <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">{t('ourTeam')}</h2>
             <p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">
                {t('ourTeamDesc')}
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
             {teamMembers.map(member => (
                <TeamMemberCard 
                    key={member.nameKey}
                    nameKey={member.nameKey}
                    titleKey={member.titleKey}
                    descKey={member.descKey}
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;