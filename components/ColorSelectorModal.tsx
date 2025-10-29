import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { useTranslation } from '../context/i18n';
import type { Product } from '../types';

interface ColorSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    colors: Product['colors'];
    selectedColors: string[];
    onConfirm: (selected: string[]) => void;
}

const ColorSelectorModal: React.FC<ColorSelectorModalProps> = ({
    isOpen,
    onClose,
    colors,
    selectedColors,
    onConfirm,
}) => {
    const [tempSelected, setTempSelected] = useState<string[]>(selectedColors);
    const { t } = useTranslation();

    useEffect(() => {
        setTempSelected(selectedColors);
    }, [isOpen, selectedColors]);
    
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleColorToggle = (colorName: string) => {
        setTempSelected(prev =>
            prev.includes(colorName)
                ? prev.filter(c => c !== colorName)
                : [...prev, colorName]
        );
    };

    const handleConfirm = () => {
        onConfirm(tempSelected);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4 overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-medium">{t('product_select_color')}</h2>
                    <button onClick={onClose} className="text-stone-500 hover:text-stone-800">
                        <Icon name="x" className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {colors.map(color => (
                            <div 
                                key={color.name} 
                                onClick={() => handleColorToggle(color.name)}
                                className={`cursor-pointer border-2 rounded-md p-2 text-center ${tempSelected.includes(color.name) ? 'border-brand-brown' : 'border-transparent hover:border-stone-300'}`}
                            >
                                <div className="aspect-square bg-stone-100 mb-2 overflow-hidden rounded">
                                    <img src={color.image} alt={t(color.name)} className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                     <input
                                        type="checkbox"
                                        checked={tempSelected.includes(color.name)}
                                        readOnly
                                        className="form-checkbox h-4 w-4 text-brand-brown rounded focus:ring-brand-light-brown"
                                     />
                                    <span className="text-sm">{t(color.name)}</span>
                                    <span className="w-3 h-3 rounded-full inline-block" style={{backgroundColor: color.hex}}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end p-4 border-t bg-stone-50">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 border border-stone-300 text-sm font-medium rounded-md hover:bg-stone-100 mr-2"
                    >
                        {t('cancel')}
                    </button>
                    <button 
                        onClick={handleConfirm}
                        className="px-6 py-2 bg-brand-brown text-white text-sm font-medium rounded-md hover:bg-brand-light-brown"
                    >
                        {t('done')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColorSelectorModal;
