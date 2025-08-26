export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  modelPath: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  materials: string[];
  colors: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}