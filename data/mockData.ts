import type { Product, Category, CategoryId } from '../types';
import { imageAssets } from './images';

export const products: Product[] = [
  {
    id: 1,
    name: "product_1_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 250,
    imageUrl: imageAssets.product1.main,
    images: imageAssets.product1.gallery,
    colors: [
        { name: 'color_oatmeal', hex: '#E2D5C3', image: imageAssets.colors.oatmeal }, 
        { name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }, 
        { name: 'color_navy', hex: '#3A485E', image: imageAssets.colors.navy }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "product_1_description",
    material: "product_1_material",
    care: "product_1_care",
    event: 'couple',
  },
  {
    id: 2,
    name: "product_2_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 275,
    imageUrl: imageAssets.product2.main,
    images: imageAssets.product2.gallery,
    colors: [
        { name: 'color_light_grey', hex: '#D3D3D3', image: imageAssets.colors.light_grey }, 
        { name: 'color_camel', hex: '#C19A6B', image: imageAssets.colors.camel }, 
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "product_2_description",
    material: "product_2_material",
    care: "product_2_care"
  },
  {
    id: 3,
    name: "product_3_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 290,
    imageUrl: imageAssets.product3.main,
    images: imageAssets.product3.gallery,
    colors: [
        { name: 'color_espresso', hex: '#4B3621', image: imageAssets.colors.espresso }, 
        { name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }
    ],
    sizes: ["M", "L", "XL"],
    description: "product_3_description",
    material: "product_3_material",
    care: "product_3_care"
  },
  {
    id: 4,
    name: "product_4_name",
    category: "Women",
    subcategory: "Cardigans",
    price: 320,
    imageUrl: imageAssets.product4.main,
    images: imageAssets.product4.gallery,
    colors: [
        { name: 'color_cream', hex: '#FFFDD0', image: imageAssets.colors.cream }, 
        { name: 'color_dusty_rose', hex: '#DCAE96', image: imageAssets.colors.dusty_rose }
    ],
    sizes: ["S", "M", "L"],
    description: "product_4_description",
    material: "product_4_material",
    care: "product_4_care",
    event: 'couple',
  },
  {
    id: 5,
    name: "product_5_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 150,
    imageUrl: imageAssets.product5.main,
    images: imageAssets.product5.gallery,
    colors: [
        { name: 'color_beige', hex: '#F5F5DC', image: imageAssets.colors.beige }, 
        { name: 'color_grey', hex: '#808080', image: imageAssets.colors.grey }
    ],
    sizes: ["One Size"],
    description: "product_5_description",
    material: "product_5_material",
    care: "product_5_care",
    event: 'christmas',
  },
  {
    id: 6,
    name: "product_6_name",
    category: "Men",
    subcategory: "Bottoms",
    price: 180,
    imageUrl: imageAssets.product6.main,
    images: imageAssets.product6.gallery,
    colors: [{ name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }],
    sizes: ["30", "32", "34", "36"],
    description: "product_6_description",
    material: "product_6_material",
    care: "product_6_care",
    event: 'company',
  },
  {
    id: 7,
    name: "product_7_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 95,
    imageUrl: imageAssets.product7.main,
    images: imageAssets.product7.gallery,
    colors: [
        { name: 'color_forest_green', hex: '#228B22', image: imageAssets.colors.forest_green }, 
        { name: 'color_mustard', hex: '#FFDB58', image: imageAssets.colors.mustard }
    ],
    sizes: ["One Size"],
    description: "product_7_description",
    material: "product_7_material",
    care: "product_7_care",
    event: 'christmas',
  },
  {
    id: 8,
    name: "product_8_name",
    category: "Accessories",
    subcategory: "Gloves",
    price: 120,
    imageUrl: imageAssets.product8.main,
    images: imageAssets.product8.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["S", "M", "L"],
    description: "product_8_description",
    material: "product_8_material",
    care: "product_8_care"
  },
    {
    id: 9,
    name: "product_9_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 275,
    imageUrl: imageAssets.product9.main,
    images: imageAssets.product9.gallery,
    colors: [{ name: 'color_light_pink', hex: '#FFB6C1', image: imageAssets.colors.light_pink }],
    sizes: ["S", "M", "L"],
    description: "product_9_description",
    material: "product_9_material",
    care: "product_9_care"
  },
  {
    id: 10,
    name: "product_10_name",
    category: "Accessories",
    subcategory: "Socks",
    price: 65,
    imageUrl: imageAssets.product10.main,
    images: imageAssets.product10.gallery,
    colors: [{ name: 'color_cream', hex: '#FFFDD0', image: imageAssets.colors.cream }],
    sizes: ["One Size"],
    description: "product_10_description",
    material: "product_10_material",
    care: "product_10_care"
  },
    {
    id: 11,
    name: "product_11_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 310,
    imageUrl: imageAssets.product11.main,
    images: imageAssets.product11.gallery,
    colors: [{ name: 'color_ivory', hex: '#FFFFF0', image: imageAssets.colors.ivory }],
    sizes: ["S", "M", "L"],
    description: "product_11_description",
    material: "product_11_material",
    care: "product_11_care",
    event: 'christmas',
  },
  {
    id: 12,
    name: "product_12_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 295,
    imageUrl: imageAssets.product12.main,
    images: imageAssets.product12.gallery,
    colors: [{ name: 'color_sand', hex: '#C2B280', image: imageAssets.colors.sand }],
    sizes: ["M", "L", "XL"],
    description: "product_12_description",
    material: "product_12_material",
    care: "product_12_care",
    event: 'company',
  },
  {
    id: 13,
    name: "product_13_name",
    category: "Women",
    subcategory: "Dresses",
    price: 450,
    imageUrl: imageAssets.product13.main,
    images: imageAssets.product13.gallery,
    colors: [{ name: 'color_black', hex: '#000000', image: imageAssets.colors.black }],
    sizes: ["S", "M", "L"],
    description: "product_13_description",
    material: "product_13_material",
    care: "product_13_care"
  },
  {
    id: 14,
    name: "product_14_name",
    category: "Women",
    subcategory: "Vests",
    price: 380,
    imageUrl: imageAssets.product14.main,
    images: imageAssets.product14.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_14_description",
    material: "product_14_material",
    care: "product_14_care"
  },
  {
    id: 15,
    name: "product_15_name",
    category: "Women",
    subcategory: "Bottoms",
    price: 320,
    imageUrl: imageAssets.product15.main,
    images: imageAssets.product15.gallery,
    colors: [{ name: 'color_oatmeal', hex: '#E2D5C3', image: imageAssets.colors.oatmeal }],
    sizes: ["S", "M", "L"],
    description: "product_15_description",
    material: "product_15_material",
    care: "product_15_care"
  },
  {
    id: 16,
    name: "product_16_name",
    category: "Women",
    subcategory: "Coats",
    price: 950,
    imageUrl: imageAssets.product16.main,
    images: imageAssets.product16.gallery,
    colors: [{ name: 'color_camel', hex: '#C19A6B', image: imageAssets.colors.camel }],
    sizes: ["S", "M", "L"],
    description: "product_16_description",
    material: "product_16_material",
    care: "product_16_care"
  },
  {
    id: 17,
    name: "product_17_name",
    category: "Men",
    subcategory: "Coats",
    price: 980,
    imageUrl: imageAssets.product17.main,
    images: imageAssets.product17.gallery,
    colors: [{ name: 'color_navy', hex: '#3A485E', image: imageAssets.colors.navy }],
    sizes: ["S", "M", "L", "XL"],
    description: "product_17_description",
    material: "product_17_material",
    care: "product_17_care"
  },
  {
    id: 18,
    name: "product_18_name",
    category: "Men",
    subcategory: "Cardigans",
    price: 350,
    imageUrl: imageAssets.product18.main,
    images: imageAssets.product18.gallery,
    colors: [{ name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }],
    sizes: ["S", "M", "L"],
    description: "product_18_description",
    material: "product_18_material",
    care: "product_18_care"
  },
  {
    id: 19,
    name: "product_19_name",
    category: "Men",
    subcategory: "Vests",
    price: 220,
    imageUrl: imageAssets.product19.main,
    images: imageAssets.product19.gallery,
    colors: [{ name: 'color_olive_green', hex: '#556B2F', image: imageAssets.colors.olive_green }],
    sizes: ["M", "L", "XL"],
    description: "product_19_description",
    material: "product_19_material",
    care: "product_19_care"
  }
];

export const categories: { [key in CategoryId]: Category } = {
  men: {
    id: "men",
    name: "category_men_name",
    productCount: products.filter(p => p.category === 'Men').length,
    subcategories: [
      { id: 'sweaters', name: 'nav_sweaters' },
      { id: 'coat', name: 'nav_coat' },
      { id: 'cardigan', name: 'nav_cardigan' },
      { id: 'vest', name: 'nav_vest' },
      { id: 'bottoms', name: 'nav_bottoms' },
    ]
  },
  women: {
    id: "women",
    name: "category_women_name",
    productCount: products.filter(p => p.category === 'Women').length,
     subcategories: [
      { id: 'sweaters', name: 'nav_sweaters' },
      { id: 'cardigan', name: 'nav_cardigan' },
      { id: 'dress', name: 'nav_dress' },
      { id: 'vest', name: 'nav_vest' },
      { id: 'bottoms', name: 'nav_bottoms' },
      { id: 'coat', name: 'nav_coat' },
    ]
  },
  accessories: {
    id: "accessories",
    name: "category_accessories_name",
    productCount: products.filter(p => p.category === 'Accessories').length,
     subcategories: [
      { id: 'scarves', name: 'nav_scarves' },
      { id: 'hats', name: 'nav_hats' },
      { id: 'gloves', name: 'nav_gloves' },
      { id: 'socks', name: 'nav_socks' },
    ]
  },
  sweaters: {
    id: "sweaters",
    name: "category_sweaters_name",
    productCount: products.filter(p => p.subcategory === 'Sweaters').length
  },
  scarves: {
    id: "scarves",
    name: "category_scarves_name",
    productCount: products.filter(p => p.subcategory === 'Scarves').length
  },
  hats: {
    id: "hats",
    name: "category_hats_name",
    productCount: products.filter(p => p.subcategory === 'Hats').length
  },
  gloves: {
    id: "gloves",
    name: "category_gloves_name",
    productCount: products.filter(p => p.subcategory === 'Gloves').length
  },
  socks: {
    id: "socks",
    name: "category_socks_name",
    productCount: products.filter(p => p.subcategory === 'Socks').length
  },
  couple: {
    id: "couple",
    name: "category_couple_name",
    productCount: products.filter(p => p.event === 'couple').length,
  },
  christmas: {
    id: "christmas",
    name: "category_christmas_name",
    productCount: products.filter(p => p.event === 'christmas').length,
  },
  company: {
    id: "company",
    name: "category_company_name",
    productCount: products.filter(p => p.event === 'company').length,
  },
  cardigan: {
    id: "cardigan",
    name: "category_cardigan_name",
    productCount: products.filter(p => p.subcategory === 'Cardigans').length
  },
  dress: {
    id: "dress",
    name: "category_dress_name",
    productCount: products.filter(p => p.subcategory === 'Dresses').length
  },
  vest: {
    id: "vest",
    name: "category_vest_name",
    productCount: products.filter(p => p.subcategory === 'Vests').length
  },
  bottoms: {
    id: "bottoms",
    name: "category_bottoms_name",
    productCount: products.filter(p => p.subcategory === 'Bottoms').length
  },
  coat: {
    id: "coat",
    name: "category_coat_name",
    productCount: products.filter(p => p.subcategory === 'Coats').length
  },
};