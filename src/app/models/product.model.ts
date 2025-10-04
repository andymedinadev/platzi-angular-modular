export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface CreateProductDTO
  extends Omit<
    Product,
    'id' | 'category' | 'creationAt' | 'updatedAt' | 'slug'
  > {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
