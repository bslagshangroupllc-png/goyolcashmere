// This file now uses a convention-based approach to generate image paths.
// Simply add your images to the (public) `/product-images/` folder with the correct name.
// For example:
// - Product 1's main image: /product-images/product-1-main.jpg
// - Product 1's first gallery image: /product-images/product-1-gallery-1.jpg
// - Oatmeal color swatch: /product-images/color-oatmeal.jpg
// - Logo: /product-images/logo.png

const imagePath = (fileName: string) => `/product-images/${fileName}`;

const generateProductAssets = (id: number, galleryCount: number) => ({
  main: imagePath(`product-${id}-main.jpg`),
  gallery: Array.from({ length: galleryCount }, (_, i) => imagePath(`product-${id}-gallery-${i + 1}.jpg`))
});

export const imageAssets = {
  logo: imagePath('logo.png'),
  
  // Product Images
  product1: generateProductAssets(1, 4),
  product2: generateProductAssets(2, 3),
  product3: generateProductAssets(3, 1),
  product4: generateProductAssets(4, 2),
  product5: generateProductAssets(5, 1),
  product6: generateProductAssets(6, 1),
  product7: generateProductAssets(7, 1),
  product8: generateProductAssets(8, 1),
  product9: generateProductAssets(9, 1),
  product10: generateProductAssets(10, 1),
  product11: generateProductAssets(11, 1),
  product12: generateProductAssets(12, 1),
  product13: generateProductAssets(13, 1),
  product14: generateProductAssets(14, 1),
  product15: generateProductAssets(15, 1),
  product16: generateProductAssets(16, 1),
  product17: generateProductAssets(17, 1),
  product18: generateProductAssets(18, 1),
  product19: generateProductAssets(19, 1),
  
  // Page Images
  homePage: {
    heroImages: [
      imagePath('hero-1.jpg'), 
      imagePath('hero-2.jpg'), 
      imagePath('hero-3.jpg')
    ],
    promo: imagePath('promo.jpg'),
  },
  
  // Color Swatch Images
  colors: {
    oatmeal: imagePath('color-oatmeal.jpg'),
    charcoal: imagePath('color-charcoal.jpg'),
    navy: imagePath('color-navy.jpg'),
    light_grey: imagePath('color-light-grey.jpg'),
    camel: imagePath('color-camel.jpg'),
    black: imagePath('color-black.jpg'),
    espresso: imagePath('color-espresso.jpg'),
    heather_grey: imagePath('color-heather-grey.jpg'),
    cream: imagePath('color-cream.jpg'),
    dusty_rose: imagePath('color-dusty-rose.jpg'),
    beige: imagePath('color-beige.jpg'),
    grey: imagePath('color-grey.jpg'),
    forest_green: imagePath('color-forest-green.jpg'),
    mustard: imagePath('color-mustard.jpg'),
    brown: imagePath('color-brown.jpg'),
    light_pink: imagePath('color-light-pink.jpg'),
    ivory: imagePath('color-ivory.jpg'),
    sand: imagePath('color-sand.jpg'),
    olive_green: imagePath('color-olive-green.jpg'),
  }
};
