import React, { createContext, useState, useContext, ReactNode } from 'react';
import en from '../locales/en.ts';
import ko from '../locales/ko.ts';

type Translations = { [key: string]: string };
const translations: { [key: string]: Translations } = { en, ko };

type Language = 'en' | 'ko';

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, params?: { [key: string]: string | number }) => string;
    formatPrice: (price: number) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const USD_TO_KRW_RATE = 1300;

    const t = (key: string, params?: { [key: string]: string | number }) => {
        let text = translations[language][key] || key;
        if (params) {
            Object.keys(params).forEach(paramKey => {
                text = text.replace(`{{${paramKey}}}`, String(params[paramKey]));
            });
        }
        return text;
    };

    const formatPrice = (price: number) => {
        if (language === 'ko') {
            const krwPrice = price * USD_TO_KRW_RATE;
            return `₩${krwPrice.toLocaleString('ko-KR')}`;
        }
        return `$${price}`;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t, formatPrice }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within an I18nProvider');
    }
    return context;
};