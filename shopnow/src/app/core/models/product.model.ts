export interface Product {
  id: number;
  name: string;
  gender: 'HOMME' | 'FEMME' | 'KIDS';
  subCategory: 'VETEMENTS' | 'CHAUSSURES' |'SPORT'| 'MONTRES' | 'ACCESSOIRES' | 'CASQUETTES' | 'VETEMENTS_INTIMES';
  price: number;
  originalPrice?: number;
  stock: number;
  badge?: 'Nouveau' | 'Stock bas';
  discount?: number;
  rating: number;
  reviewCount: number;
  description: string;
  imageUrl: string;
  colors?: string[];
  sizes?: string[];
}