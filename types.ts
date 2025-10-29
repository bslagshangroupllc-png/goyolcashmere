export type CategoryId = 'men' | 'women' | 'accessories' | 'sweaters' | 'scarves' | 'hats' | 'gloves' | 'socks' | 'couple' | 'christmas' | 'company' | 'cardigan' | 'dress' | 'vest' | 'bottoms' | 'coat';

export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  imageUrl: string;
  images: string[];
  colors: { name: string; hex: string; image: string; }[];
  sizes: string[];
  description: string;
  material: string;
  care: string;
  event?: 'couple' | 'christmas' | 'company';
}

export interface Category {
    id: CategoryId;
    name: string; // Translation key
    productCount: number;
    subcategories?: { id: CategoryId; name: string }[]; // name is a translation key
}