import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionPage from './pages/CollectionPage';
import { products, categories } from './data/mockData';
import type { Product, Category, CategoryId } from './types';
import { I18nProvider, useTranslation } from './context/i18n';

export type Page = 'home' | 'category' | 'product' | 'collection';

const AppContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | null>(null);
    const { t } = useTranslation();

    const handleNavigate = (page: Page, contextId?: CategoryId | number) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
        if (page === 'category' && typeof contextId === 'string') {
            setSelectedCategoryId(contextId);
            setSelectedProductId(null);
        } else if (page === 'product' && typeof contextId === 'number') {
            setSelectedProductId(contextId);
            setSelectedCategoryId(null);
        } else {
            setSelectedProductId(null);
            setSelectedCategoryId(null);
        }
    };

    const handleViewProduct = (productId: number) => {
        handleNavigate('product', productId);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'product':
                const product = products.find(p => p.id === selectedProductId);
                if (!product) {
                    return <HomePage products={products} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />;
                }
                const relatedProducts = products
                    .filter(p => p.category === product.category && p.id !== product.id)
                    .slice(0, 4);

                return <ProductDetailPage 
                    product={product} 
                    relatedProducts={relatedProducts}
                    onViewProduct={handleViewProduct}
                />;

            case 'category':
                if (selectedCategoryId) {
                    const categoryInfo = categories[selectedCategoryId];
                    if (!categoryInfo) {
                        return <HomePage products={products} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />;
                    }

                    const categoryProducts = products.filter(p => {
                        switch (selectedCategoryId) {
                            case 'men': return p.category === 'Men';
                            case 'women': return p.category === 'Women';
                            case 'accessories': return p.category === 'Accessories';
                            case 'sweaters': return p.subcategory === 'Sweaters';
                            case 'scarves': return p.subcategory === 'Scarves';
                            case 'hats': return p.subcategory === 'Hats';
                            case 'gloves': return p.subcategory === 'Gloves';
                            case 'socks': return p.subcategory === 'Socks';
                            case 'couple': return p.event === 'couple';
                            case 'christmas': return p.event === 'christmas';
                            case 'company': return p.event === 'company';
                            case 'cardigan': return p.subcategory === 'Cardigans';
                            case 'dress': return p.subcategory === 'Dresses';
                            case 'vest': return p.subcategory === 'Vests';
                            case 'bottoms': return p.subcategory === 'Bottoms';
                            case 'coat': return p.subcategory === 'Coats';
                            default: return false;
                        }
                    });
                    
                    const category: Category = {
                        ...categoryInfo,
                        name: t(categoryInfo.name)
                    };

                    return <CategoryPage 
                        category={category} 
                        products={categoryProducts} 
                        onViewProduct={handleViewProduct}
                    />;
                }
                 return <HomePage products={products} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />;
            
            case 'collection':
                return <CollectionPage products={products} onViewProduct={handleViewProduct} />;

            case 'home':
            default:
                return <HomePage products={products} onViewProduct={handleViewProduct} onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavigate={handleNavigate} />
            <div className="flex-grow">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <I18nProvider>
            <AppContent />
        </I18nProvider>
    );
};


export default App;