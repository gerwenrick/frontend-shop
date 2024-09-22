export type ProductRespons = {
  shopName: string;
  shopKeeper: string;
  productCount: number;
  items: Product[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  categories: string[];
  tags: string[];
  imageUrl: string;
  stock: number;
  isFeatured: boolean;
  discount: number;
  wishlist: boolean;
  reviews?: Review[];
};

export type Review = {
  reviewer: string;
  rating: number;
  comment: string;
};
