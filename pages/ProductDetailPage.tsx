import React, { useState } from 'react';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { useTranslation } from '../context/i18n';
import ColorSelectorModal from '../components/ColorSelectorModal';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 text-left"
            >
                <span className="font-medium text-sm">{title}</span>
                <Icon name={isOpen ? 'minus' : 'plus'} className="w-4 h-4 text-stone-500" />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-4 text-sm text-stone-600">
                    {children}
                </div>
            </div>
        </div>
    );
};


interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
  onViewProduct: (productId: number) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, relatedProducts, onViewProduct }) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const { t, formatPrice } = useTranslation();

  const handleColorSelection = (newColors: string[]) => {
      setSelectedColors(newColors);
      setIsColorModalOpen(false);
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 justify-center md:justify-start">
            {product.images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-16 h-20 bg-stone-100 overflow-hidden ${mainImage === img ? 'ring-2 ring-brand-brown' : ''}`}
              >
                <img src={img} alt={`${t(product.name)} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-stone-100">
            <img src={mainImage} alt={t(product.name)} className="w-full h-full object-cover aspect-[3/4]" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">{t(product.name)}</h1>
          <p className="text-xl sm:text-2xl mt-2 text-brand-text">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm text-stone-600 leading-relaxed">{t(product.description)}</p>
          
          {/* Color Selector */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">{t('product_color')}</p>
            <button 
                onClick={() => setIsColorModalOpen(true)}
                className="w-full text-left px-4 py-2 border border-stone-300 hover:border-brand-brown transition-colors text-sm"
            >
                {t('product_select_color')}
            </button>
            {selectedColors.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-stone-600">{t('product_selected_colors')}:</span>
                    {selectedColors.map(colorName => {
                        const colorInfo = product.colors.find(c => c.name === colorName);
                        return (
                            <div key={colorName} className="flex items-center gap-2 text-sm bg-stone-100 px-2 py-1 rounded">
                                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colorInfo?.hex }}></span>
                                <span>{t(colorName)}</span>
                            </div>
                        )
                    })}
                </div>
            )}
          </div>
          
          {/* Size Selector */}
          <div className="mt-6">
            <p className="text-sm font-medium">{t('product_size')}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border text-sm font-medium transition-colors ${selectedSize === size ? 'bg-brand-brown text-white border-brand-brown' : 'border-stone-300 hover:border-brand-brown'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Accordions */}
          <div className="mt-8">
            <AccordionItem title={t('product_material_title')}>
              <p>{t(product.material)}</p>
            </AccordionItem>
            <AccordionItem title={t('product_care_title')}>
              <p>{t(product.care)}</p>
            </AccordionItem>
          </div>

          <div className="mt-6 flex items-center space-x-2 text-sm text-stone-500">
              <span>{t('product_share')}:</span>
              <Icon name="share" className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {/* You May Also Like */}
      <section className="mt-16 sm:mt-24">
        <h2 className="text-2xl font-medium text-center mb-10">{t('product_related_title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} onClick={() => onViewProduct(p.id)} />
          ))}
        </div>
      </section>

      <ColorSelectorModal 
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
        colors={product.colors}
        selectedColors={selectedColors}
        onConfirm={handleColorSelection}
      />
    </main>
  );
};

export default ProductDetailPage;