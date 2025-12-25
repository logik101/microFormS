
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { PhoneIcon, MailIcon, LinkedInIcon, TwitterXIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
    const { t } = useTranslations();

    return (
        <footer className="bg-dark text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <img className="h-12 w-auto mb-4 filter brightness-0 invert" src="https://logik101.github.io/microF/fulllogo_transparent_nobuffer.png" alt="MicroFormS Logo" />
                        <p className="text-base text-gray-400">{t('expertiseQuote')}</p>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold uppercase tracking-wider text-gray-300 mb-4">{t('contactUs')}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-base">
                                <PhoneIcon className="h-5 w-5 text-accent" />
                                <span className="ml-3 text-gray-300">+1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center text-base">
                                <MailIcon className="h-5 w-5 text-accent" />
                                 <span className="ml-3 text-gray-300">contact@microforms.org</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="text-base font-semibold uppercase tracking-wider text-gray-300 mb-4">Follow Us</h4>
                         <div className="flex space-x-5">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><TwitterXIcon className="h-6 w-6" /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><InstagramIcon className="h-6 w-6" /></a>
                         </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MicroFormS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
