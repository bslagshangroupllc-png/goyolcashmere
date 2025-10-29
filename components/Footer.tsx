import React from 'react';
import Icon from './Icon';
import { useTranslation } from '../context/i18n';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-brand-background border-t border-stone-200 mt-16 sm:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer_about_title')}</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-sm text-stone-600 hover:text-brand-text">{t('footer_about_story')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer_service_title')}</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-sm text-stone-600 hover:text-brand-text">{t('footer_service_contact')}</a></li>
                            <li><a href="#" className="text-sm text-stone-600 hover:text-brand-text">{t('footer_service_shipping')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase">{t('footer_follow_title')}</h3>
                         <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-stone-500 hover:text-brand-text"><Icon name="instagram" className="w-5 h-5"/></a>
                            <a href="#" className="text-stone-500 hover:text-brand-text"><Icon name="facebook" className="w-5 h-5"/></a>
                            <a href="#" className="text-stone-500 hover:text-brand-text"><Icon name="twitter" className="w-5 h-5"/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-stone-200 text-center text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;