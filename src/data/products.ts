import { Product, ProductCategory } from '@/types/product';

export const categories: ProductCategory[] = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Premium furniture for modern homes',
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Elegant lighting solutions',
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png'
  },
  {
    id: 'decor',
    name: 'Home Decor',
    description: 'Beautiful decorative elements',
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Leather Sofa',
    category: 'furniture',
    price: 2499,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'Premium leather sofa with contemporary design, perfect for modern living spaces.',
    modelPath: '/models/sofa.glb',
    dimensions: { width: 220, height: 85, depth: 95 },
    materials: ['Genuine Leather', 'Hardwood Frame', 'Memory Foam'],
    colors: ['Black', 'Brown', 'White']
  },
  {
    id: '2',
    name: 'Designer Coffee Table',
    category: 'furniture',
    price: 899,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'Elegant glass-top coffee table with steel frame for contemporary spaces.',
    modelPath: '/models/coffee-table.glb',
    dimensions: { width: 120, height: 45, depth: 60 },
    materials: ['Tempered Glass', 'Stainless Steel', 'Chrome Finish'],
    colors: ['Clear Glass', 'Tinted Glass']
  },
  {
    id: '3',
    name: 'Pendant Light Fixture',
    category: 'lighting',
    price: 349,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'Modern pendant light with adjustable height and warm LED lighting.',
    modelPath: '/models/pendant-light.glb',
    dimensions: { width: 30, height: 40, depth: 30 },
    materials: ['Aluminum', 'LED Bulb', 'Fabric Cord'],
    colors: ['Gold', 'Silver', 'Black']
  },
  {
    id: '4',
    name: 'Abstract Wall Art',
    category: 'decor',
    price: 199,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'Contemporary abstract artwork perfect for modern interior decoration.',
    modelPath: '/models/wall-art.glb',
    dimensions: { width: 80, height: 60, depth: 3 },
    materials: ['Canvas', 'Acrylic Paint', 'Wood Frame'],
    colors: ['Multicolor', 'Monochrome']
  },
  {
    id: '5',
    name: 'Minimalist Bookshelf',
    category: 'furniture',
    price: 599,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'Clean-lined bookshelf with floating shelf design for modern storage.',
    modelPath: '/models/bookshelf.glb',
    dimensions: { width: 120, height: 180, depth: 25 },
    materials: ['Oak Wood', 'Metal Brackets', 'Matte Finish'],
    colors: ['Natural Oak', 'White Oak', 'Dark Walnut']
  },
  {
    id: '6',
    name: 'Smart Floor Lamp',
    category: 'lighting',
    price: 449,
    image: '/lovable-uploads/387d20b5-00c5-4c0e-adae-c010ba8122c4.png',
    description: 'App-controlled floor lamp with adjustable brightness and color temperature.',
    modelPath: '/models/floor-lamp.glb',
    dimensions: { width: 35, height: 160, depth: 35 },
    materials: ['Aluminum Base', 'LED Panel', 'Smart Controller'],
    colors: ['Brushed Steel', 'Matte Black']
  }
];