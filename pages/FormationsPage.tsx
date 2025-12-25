import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const FormationsPage: React.FC = () => {
    const { t } = useTranslations();

    const FormationCard: React.FC<{ title: string, description: string, imageUrl: string }> = ({ title, description, imageUrl }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img className="h-56 w-full object-cover" src={imageUrl} alt={title} />
            <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                <p className="text-base text-gray-600">{description}</p>
                 <button className="mt-4 bg-accent text-dark font-bold py-2 px-4 rounded-full hover:bg-amber-500 transform hover:scale-105 transition-transform duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-primary text-white py-24 sm:py-32">
                 <div className="absolute inset-0">
                    <img
                    className="w-full h-full object-cover opacity-20"
                    src="https://picsum.photos/1600/900?image=239"
                    alt="Training session"
                    />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        {t('formationsTitle')}
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
                        {t('formationsSubtitle')}
                    </p>
                </div>
            </div>

            {/* Formations List */}
            <div id="formations-list" className="bg-light py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FormationCard 
                            title={t('strategicTraining')}
                            description={t('formationsStrategicDesc')}
                            imageUrl="https://logik101.github.io/microF/20422.jpg"
                        />
                        <FormationCard 
                            title={t('microfinanceTraining')}
                            description={t('formationsMicrofinanceDesc')}
                            imageUrl="https://logik101.github.io/microF/2587359.jpg"
                        />
                        <FormationCard 
                            title={t('aiInFinance')}
                            description={t('formationsAiDesc')}
                            imageUrl="https://logik101.github.io/microF/stock.jpg"
                        />
                     </div>
                </div>
            </div>
        </>
    );
};

export default FormationsPage;