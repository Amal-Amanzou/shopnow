import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [
    {
      id: 10,
      name: 'Robe Satin Noire',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 799,
      originalPrice: 999,
      discount: 20,
      stock: 5,
      badge: 'Stock bas',
      rating: 4.7,
      reviewCount: 61,
      description: 'Robe en satin noir drapée, coupe moulante, idéale pour les soirées.',
      imageUrl: 'images/m4.png',
      colors: ['#000000', '#e53e3e', '#1a1a6e'],
      sizes: ['XS', 'S', 'M', 'L']
    },
     {
      id: 9,
      name: 'Robe Cocktail Blanc & Rose',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 499,
      stock: 10,
      rating: 4.5,
      reviewCount: 88,
      description: 'Robe cocktail bicolore blanc et rose, style moderne et élégant.',
      imageUrl: 'images/m3.png',
      colors: ['#ffffff', '#FF6B9D'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
     {
      id: 11,
      name: 'Robe Fleurie Bleue',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 189,
      stock: 25,
      rating: 4.5,
      reviewCount: 134,
      description: 'Robe fleurie à volants, imprimé floral bleu délicat, style bohème chic.',
      imageUrl: 'images/m5.png',
      colors: ['#2563eb', '#ffffff', '#FF6B9D'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'Montre Chronographe',
      gender: 'HOMME',
      subCategory: 'MONTRES',
      price: 1299,
      stock: 8,
      rating: 4.8,
      reviewCount: 89,
      description: 'Montre chronographe élégante, bracelet en cuir.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
      colors: ['#000000', '#b8860b', '#c0c0c0'],
      sizes: []
    },
    {
      id: 4,
      name: 'Casquette NY',
      gender: 'HOMME',
      subCategory: 'CASQUETTES',
      price: 149,
      stock: 30,
      rating: 4.3,
      reviewCount: 203,
      description: 'Casquette brodée NY, coton premium.',
      imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop',
      colors: ['#000000', '#ffffff', '#1a1a6e'],
      sizes: ['Unique']
    },
    {
      id: 5,
      name: 'T-Shirt Oversize',
      gender: 'HOMME',
      subCategory: 'VETEMENTS',
      price: 199,
      stock: 3,
      badge: 'Stock bas',
      rating: 4.4,
      reviewCount: 156,
      description: 'T-shirt oversize 100% coton, coupe décontractée.',
      imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop',
      colors: ['#ffffff', '#000000', '#808080', '#e53e3e'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 6,
      name: 'Boxer Pack x3',
      gender: 'HOMME',
      subCategory: 'VETEMENTS_INTIMES',
      price: 229,
      stock: 20,
      rating: 4.2,
      reviewCount: 77,
      description: 'Pack de 3 boxers en coton stretch, confort optimal.',
      imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop',
      colors: ['#000000', '#1a1a6e', '#808080'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 7,
      name: 'Robe Blanche Manches Longues',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 349,
      stock: 15,
      badge: 'Nouveau',
      rating: 4.6,
      reviewCount: 112,
      description: 'Robe blanche élégante à manches longues, coupe évasée, parfaite pour les occasions spéciales.',
      imageUrl: 'images/m1.png',
      colors: ['#ffffff', '#FF6B9D', '#f5a623'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 8,
      name: 'Robe Fleurie Rose',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 899,
      stock: 7,
      rating: 4.9,
      reviewCount: 45,
      description: 'Robe fleurie à imprimé rose délicat, coupe mi-longue, légère et féminine.',
      imageUrl: 'images/m2.png',
      colors: ['#FF6B9D', '#ffffff', '#f5a623'],
      sizes: ['XS', 'S', 'M', 'L']
    },
   
   
   
    {
      id: 12,
      name: 'Robe Rose Droite',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 129,
      stock: 18,
      badge: 'Nouveau',
      rating: 4.4,
      reviewCount: 29,
      description: 'Robe rose coupe sirène, style élégant et féminin, parfaite pour les soirées.',
      imageUrl: 'images/m6.png',
      colors: ['#FF6B9D', '#ffffff', '#000000'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 17,
      name: 'Robe Bustier Noire',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 429,
      stock: 10,
      rating: 4.7,
      reviewCount: 83,
      description: 'Robe bustier noire coupe fourreau avec détail cordon, style soirée chic.',
      imageUrl: 'images/m7.png',
      colors: ['#000000', '#e53e3e', '#1a1a6e'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
  id: 23,
  name: 'Escarpins Élégants',
  gender: 'FEMME',
  subCategory: 'CHAUSSURES',
  price: 499,
  stock: 12,
  badge: 'Nouveau',
  rating: 4.7,
  reviewCount: 52,
  description: 'Escarpins élégants à talons, parfaits pour les soirées.',
  imageUrl: 'images/m12.png',
  colors: ['#000000', '#FF6B9D'],
  sizes: ['36', '37', '38', '39', '40']
},

{
  id: 24,
  name: 'Sneakers Femme Rose',
  gender: 'FEMME',
  subCategory: 'CHAUSSURES',
  price: 599,
  stock: 15,
  rating: 4.6,
  reviewCount: 44,
  description: 'Sneakers tendance pour femme, confort et style moderne.',
  imageUrl: 'images/m13.png',
  colors: ['#FF6B9D', '#ffffff'],
  sizes: ['36', '37', '38', '39', '40']
},

{
  id: 25,
  name: 'Sandales Dorées',
  gender: 'FEMME',
  subCategory: 'CHAUSSURES',
  price: 349,
  stock: 18,
  rating: 4.5,
  reviewCount: 31,
  description: 'Sandales dorées élégantes pour occasions spéciales.',
  imageUrl: 'images/m14.png',
  colors: ['#b8860b', '#ffffff'],
  sizes: ['36', '37', '38', '39']
},

{
  id: 26,
  name: 'Bottes Noires',
  gender: 'FEMME',
  subCategory: 'CHAUSSURES',
  price: 799,
  originalPrice: 999,
  discount: 20,
  stock: 6,
  badge: 'Stock bas',
  rating: 4.8,
  reviewCount: 67,
  description: 'Bottes noires en cuir, style chic et moderne.',
  imageUrl: 'images/m15.png',
  colors: ['#000000', '#808080'],
  sizes: ['37', '38', '39', '40', '41']
},

{
  id: 27,
  name: 'Chaussures Sport Femme',
  gender: 'FEMME',
  subCategory: 'CHAUSSURES',
  price: 459,
  stock: 20,
  rating: 4.4,
  reviewCount: 39,
  description: 'Chaussures sport légères et confortables.',
  imageUrl: 'images/m16.png',
  colors: ['#ffffff', '#2563eb', '#FF6B9D'],
  sizes: ['36', '37', '38', '39', '40']
},
{
  id: 28,
  name: 'T-shirt Compression Pro',
  gender: 'HOMME',
  subCategory: 'SPORT',
  price: 299,
  stock: 12,
  badge: 'Nouveau',
  rating: 4.8,
  reviewCount: 65,
  description: 'T-shirt de compression sport, tissu respirant, maintien musculaire optimal.',
  imageUrl: 'images/m17.png',
  colors: ['#000000', '#2563eb'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 29,
  name: 'Haut Sport Manches Longues',
  gender: 'HOMME',
  subCategory: 'SPORT',
  price: 249,
  stock: 9,
  rating: 4.6,
  reviewCount: 48,
  description: 'Haut sport à manches longues, tissu technique respirant pour entraînements intensifs.',
  imageUrl: 'images/m18.png',
  colors: ['#ffffff', '#000000'],
  sizes: ['M', 'L', 'XL']
},
{
  id: 30,
  name: 'Short Sport Pro',
  gender: 'HOMME',
  subCategory: 'SPORT',
  price: 199,
  originalPrice: 249,
  discount: 20,
  stock: 5,
  badge: 'Stock bas',
  rating: 4.7,
  reviewCount: 39,
  description: 'Short sport léger et respirant, idéal pour fitness et running.',
  imageUrl: 'images/m19.png',
  colors: ['#000000', '#e53e3e'],
  sizes: ['S', 'M', 'L', 'XL']
},
// ===== VETEMENTS_INTIMES HOMME =====
{
  id: 32,
  name: 'Pack Boxers Premium x3',
  gender: 'HOMME',
  subCategory: 'VETEMENTS_INTIMES',
  price: 199,
  stock: 25,
  rating: 4.8,
  reviewCount: 143,
  description: 'Pack de 3 boxers premium coton stretch, coloris gris/noir/marine.',
  imageUrl: 'images/m21.png',
  colors: ['#808080', '#000000', '#1a1a6e'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL']
},
{
  id: 33,
  name: 'Pack Boxers Classic x3',
  gender: 'HOMME',
  subCategory: 'VETEMENTS_INTIMES',
  price: 179,
  stock: 30,
  badge: 'Nouveau',
  rating: 4.7,
  reviewCount: 98,
  description: 'Pack de 3 boxers classiques coton stretch, coloris gris/blanc/noir.',
  imageUrl: 'images/m22.png',
  colors: ['#808080', '#ffffff', '#000000'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL']
},

// ===== ACCESSOIRES — Chaussettes =====
{
  id: 34,
  name: 'Pack Chaussettes Sport x6',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 99,
  stock: 40,
  rating: 4.6,
  reviewCount: 87,
  description: 'Pack de 6 paires de chaussettes sport blanches, coton respirant.',
  imageUrl: 'images/m24.png',
  colors: ['#ffffff'],
  sizes: ['39-42', '43-46']
},
{
  id: 35,
  name: 'Chaussettes Sport Noires x3',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 79,
  stock: 35,
  rating: 4.5,
  reviewCount: 62,
  description: 'Pack de 3 paires de chaussettes sport noires à rayures blanches.',
  imageUrl: 'images/m25.png',
  colors: ['#000000', '#ffffff'],
  sizes: ['39-42', '43-46']
},

// ===== CASQUETTES =====
{
  id: 36,
  name: 'Casquette Brooklyn Vintage',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 129,
  stock: 20,
  badge: 'Nouveau',
  rating: 4.6,
  reviewCount: 74,
  description: 'Casquette style vintage brodée Brooklyn New York, coton lavé beige.',
  imageUrl: 'images/m27.png',
  colors: ['#d4a574', '#000000'],
  sizes: ['Unique']
},
{
  id: 37,
  name: 'Casquette Summer Blanche',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 99,
  stock: 25,
  rating: 4.4,
  reviewCount: 51,
  description: 'Casquette blanche légère style été, logo brodé, réglable.',
  imageUrl: 'images/m28.png',
  colors: ['#ffffff', '#1a5c38'],
  sizes: ['Unique']
},
{
  id: 38,
  name: 'Casquette Championship',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 149,
  stock: 15,
  rating: 4.7,
  reviewCount: 43,
  description: 'Casquette bicolore crème et verte style rétro, broderie Championship New York.',
  imageUrl: 'images/m29.png',
  colors: ['#ffffff', '#1a5c38'],
  sizes: ['Unique']
},
{
  id: 39,
  name: 'Casquette NY Noire',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 139,
  stock: 18,
  rating: 4.8,
  reviewCount: 112,
  description: 'Casquette noire brodée NY classique, coton premium, style streetwear.',
  imageUrl: 'images/m30.png',
  colors: ['#000000'],
  sizes: ['Unique']
},
{
  id: 40,
  name: 'Bucket Hat Los Angeles',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 119,
  stock: 22,
  rating: 4.5,
  reviewCount: 38,
  description: 'Bucket hat noir vintage style Los Angeles, tissu coton épais.',
  imageUrl: 'images/m31.png',
  colors: ['#000000'],
  sizes: ['Unique']
},
{
  id: 41,
  name: 'Casquette Classic Noire',
  gender: 'HOMME',
  subCategory: 'CASQUETTES',
  price: 109,
  stock: 28,
  badge: 'Nouveau',
  rating: 4.6,
  reviewCount: 67,
  description: 'Casquette noire classique avec logo brodé, coupe ajustable.',
  imageUrl: 'images/m32.png',
  colors: ['#000000'],
  sizes: ['Unique']
},

// ===== ACCESSOIRES — Bijoux =====
{
  id: 42,
  name: 'Collier Double Chaîne Argent',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 249,
  stock: 15,
  badge: 'Nouveau',
  rating: 4.8,
  reviewCount: 56,
  description: 'Collier double chaîne acier inoxydable argenté avec pendentif plaque gravée.',
  imageUrl: 'images/m33.png',
  colors: ['#c0c0c0'],
  sizes: []
},
{
  id: 43,
  name: 'Collier Pierre Noire',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 189,
  stock: 20,
  rating: 4.7,
  reviewCount: 44,
  description: 'Collier chaîne fine argentée avec pendentif pierre noire naturelle.',
  imageUrl: 'images/m34.png',
  colors: ['#c0c0c0', '#000000'],
  sizes: []
},
{
  id: 44,
  name: 'Collier Pendentif Pierre Bleue',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 209,
  stock: 12,
  rating: 4.6,
  reviewCount: 31,
  description: 'Collier chaîne argentée avec pendentif pierre bleue naturelle.',
  imageUrl: 'images/m35.png',
  colors: ['#c0c0c0', '#1a1a6e'],
  sizes: []
},
{
  id: 45,
  name: 'Collier Oeil de Tigre',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 229,
  stock: 10,
  rating: 4.9,
  reviewCount: 28,
  description: 'Collier double chaîne avec pendentif oeil de tigre naturel.',
  imageUrl: 'images/m36.png',
  colors: ['#c0c0c0', '#b8860b'],
  sizes: []
},
{
  id: 46,
  name: 'Collection Colliers Argent',
  gender: 'HOMME',
  subCategory: 'ACCESSOIRES',
  price: 179,
  stock: 20,
  badge: 'Nouveau',
  rating: 4.7,
  reviewCount: 43,
  description: 'Collection colliers acier argenté, plusieurs styles: plaque, rond, rose, boussole.',
  imageUrl: 'images/m37.png',
  colors: ['#c0c0c0'],
  sizes: []
},

// ===== MONTRES =====
{
  id: 47,
  name: 'Montre Classique Argentée',
  gender: 'HOMME',
  subCategory: 'MONTRES',
  price: 599,
  stock: 15,
  rating: 4.6,
  reviewCount: 88,
  description: 'Montre quartz élégante cadran argenté, bracelet acier inoxydable, date intégrée.',
  imageUrl: 'images/m38.png',
  colors: ['#c0c0c0'],
  sizes: []
},
{
  id: 48,
  name: 'Montre Luxe Cadran Noir',
  gender: 'HOMME',
  subCategory: 'MONTRES',
  price: 1899,
  stock: 6,
  badge: 'Nouveau',
  rating: 4.9,
  reviewCount: 124,
  description: 'Montre de luxe cadran noir, boîtier acier cannelé, bracelet jubilé 5 rangs.',
  imageUrl: 'images/m39.png',
  colors: ['#000000', '#c0c0c0'],
  sizes: []
},
{
  id: 49,
  name: 'Montre Prestige Noire',
  gender: 'HOMME',
  subCategory: 'MONTRES',
  price: 2199,
  originalPrice: 2599,
  discount: 15,
  stock: 4,
  badge: 'Stock bas',
  rating: 4.9,
  reviewCount: 97,
  description: 'Montre prestige cadran noir, lunette cannelée acier, bracelet jubilé premium.',
  imageUrl: 'images/m40.png',
  colors: ['#000000', '#c0c0c0'],
  sizes: []
},
{
  id: 50,
  name: 'Montre Élégante Cadran Blanc',
  gender: 'HOMME',
  subCategory: 'MONTRES',
  price: 1599,
  stock: 8,
  rating: 4.8,
  reviewCount: 76,
  description: 'Montre élégante cadran blanc soleil, bracelet acier jubilé, style classique raffiné.',
  imageUrl: 'images/m41.jpg',
  colors: ['#ffffff', '#c0c0c0'],
  sizes: []
},

// ===== VETEMENTS =====
{
  id: 51,
  name: 'Blouson Cuir Noir',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 899,
  stock: 10,
  badge: 'Nouveau',
  rating: 4.8,
  reviewCount: 65,
  description: 'Blouson en cuir synthétique noir, coupe bomber oversize, fermeture éclair, style vintage.',
  imageUrl: 'images/m42.jpg',
  colors: ['#000000'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 52,
  name: 'Pyjama Carreaux Confort',
  gender: 'HOMME',
  subCategory: 'VETEMENTS_INTIMES',
  price: 249,
  stock: 18,
  rating: 4.6,
  reviewCount: 52,
  description: 'Ensemble pyjama t-shirt marine et pantalon carreaux, coton doux.',
  imageUrl: 'images/m43.jpg',
  colors: ['#1a1a6e', '#808080'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 53,
  name: 'Pyjama Satin Rayures',
  gender: 'HOMME',
  subCategory: 'VETEMENTS_INTIMES',
  price: 299,
  stock: 14,
  rating: 4.7,
  reviewCount: 41,
  description: 'Pyjama satin bleu marine à rayures fines, chemise boutonnée et pantalon.',
  imageUrl: 'images/m44.jpg',
  colors: ['#1a1a6e'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 54,
  name: 'Chemise Lin Col Mao',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 349,
  stock: 20,
  rating: 4.7,
  reviewCount: 83,
  description: 'Chemise en lin naturel col mao, manches longues retroussables, style décontracté chic.',
  imageUrl: 'images/m45.jpg',
  colors: ['#d4a574', '#ffffff', '#808080'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 55,
  name: 'Chemise Oversize Casual',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 279,
  stock: 16,
  rating: 4.5,
  reviewCount: 59,
  description: 'Chemise oversize manches courtes style casual, coupe ample et décontractée.',
  imageUrl: 'images/m46.jpg',
  colors: ['#808080', '#ffffff', '#d4a574'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 56,
  name: 'Polo Côtelé Premium',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 229,
  stock: 22,
  badge: 'Nouveau',
  rating: 4.6,
  reviewCount: 71,
  description: 'Polo côtelé manches courtes, col boutonné, tissu premium stretch.',
  imageUrl: 'images/m47.jpg',
  colors: ['#1a5c38', '#000000', '#1a1a6e'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 57,
  name: 'T-Shirt Côtelé Slim',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 179,
  stock: 25,
  rating: 4.5,
  reviewCount: 94,
  description: 'T-shirt côtelé coupe slim, col rond, tissu stretch confortable.',
  imageUrl: 'images/m50.jpg',
  colors: ['#000000', '#808080', '#ffffff'],
  sizes: ['S', 'M', 'L', 'XL']
},
{
  id: 58,
  name: 'Pantalon Lin Gris',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 319,
  stock: 15,
  rating: 4.6,
  reviewCount: 48,
  description: 'Pantalon en lin gris coupe droite, taille élastique avec cordon, parfait pour l\'été.',
  imageUrl: 'images/m51.jpg',
  colors: ['#808080', '#000000'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL']
},
{
  id: 59,
  name: 'Pantalon Lin Beige',
  gender: 'HOMME',
  subCategory: 'VETEMENTS',
  price: 349,
  stock: 18,
  rating: 4.7,
  reviewCount: 62,
  description: 'Pantalon lin beige coupe droite élégante, taille mi-haute, style casual chic.',
  imageUrl: 'images/m52.jpg',
  colors: ['#d4a574', '#ffffff', '#808080'],
  sizes: ['S', 'M', 'L', 'XL']
},

// ===== CHAUSSURES =====

{
  id: 61,
  name: 'Oxford Noir Élégant',
  gender: 'HOMME',
  subCategory: 'CHAUSSURES',
  price: 699,
  stock: 12,
  badge: 'Nouveau',
  rating: 4.8,
  reviewCount: 57,
  description: 'Chaussures Oxford noires en cuir verni, bout droit, style formel élégant.',
  imageUrl: 'images/m53.jpg',
  colors: ['#000000'],
  sizes: ['40', '41', '42', '43', '44', '45']
},
{
  id: 62,
  name: 'Derby Noir Semelle Épaisse',
  gender: 'HOMME',
  subCategory: 'CHAUSSURES',
  price: 749,
  originalPrice: 899,
  discount: 17,
  stock: 8,
  rating: 4.7,
  reviewCount: 44,
  description: 'Derby noires cuir brillant, semelle chunky épaisse, style moderne urbain.',
  imageUrl: 'images/m53.jpg',
  colors: ['#000000'],
  sizes: ['40', '41', '42', '43', '44', '45']
},
{
  id: 31,
  name: 'Jogging Sport Oversize',
  gender: 'HOMME',
  subCategory: 'SPORT',
  price: 279,
  stock: 14,
  rating: 4.5,
  reviewCount: 34,
  description: 'Jogging oversize confortable, parfait pour le sport et le quotidien.',
  imageUrl: 'images/m20.png',
  colors: ['#808080', '#000000'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL']
},
    {
      id: 18,
      name: 'Robe Bleu Marine',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 299,
      stock: 14,
      badge: 'Nouveau',
      rating: 4.5,
      reviewCount: 56,
      description: 'Robe bleu marine à bretelles, coupe droite et élégante, style minimaliste.',
      imageUrl: 'images/m8.png',
      colors: ['#1a1a6e', '#000000', '#ffffff'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 19,
      name: 'Robe Rose Pastel',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 379,
      originalPrice: 459,
      discount: 17,
      stock: 8,
      rating: 4.6,
      reviewCount: 71,
      description: 'Robe rose pastel coupe évasée, style romantique et féminin.',
      imageUrl: 'images/m9.png',
      colors: ['#FF6B9D', '#ffffff', '#f5a623'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 21,
      name: 'Robe Noire Manches Longues',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 549,
      stock: 6,
      badge: 'Nouveau',
      rating: 4.8,
      reviewCount: 38,
      description: 'Robe noire à manches longues coupe évasée, élégante et versatile.',
      imageUrl: 'images/m10.png',
      colors: ['#000000', '#FF6B9D', '#808080'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 22,
      name: 'Robe Bleu Ciel',
      gender: 'FEMME',
      subCategory: 'VETEMENTS',
      price: 319,
      stock: 12,
      rating: 4.4,
      reviewCount: 49,
      description: 'Robe bleu ciel à bretelles croisées, légère et romantique, parfaite pour l\'été.',
      imageUrl: 'images/m11.png',
      colors: ['#2563eb', '#ffffff', '#FF6B9D'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 13,
      name: 'Ensemble Survêtement Kids',
      gender: 'KIDS',
      subCategory: 'VETEMENTS',
      price: 249,
      stock: 20,
      badge: 'Nouveau',
      rating: 4.6,
      reviewCount: 55,
      description: 'Ensemble jogging confortable pour enfant.',
      imageUrl: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
      colors: ['#2563eb', '#e53e3e', '#1a5c38'],
      sizes: ['4ans', '6ans', '8ans', '10ans', '12ans']
    },
   
   
   
  ];

  getProducts(): Product[] { return this.products; }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getAllColors(): string[] {
    const set = new Set<string>();
    this.products.forEach(p => p.colors?.forEach(c => set.add(c)));
    return Array.from(set);
  }

  getPriceRange(): { min: number; max: number } {
    const prices = this.products.map(p => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }

  getSubCategories(): string[] {
    return ['VETEMENTS', 'CHAUSSURES', 'MONTRES', 'ACCESSOIRES', 'CASQUETTES', 'VETEMENTS_INTIMES'];
  }

  filterProducts(
    gender: string | null,
    subCategory: string | null,
    searchTerm: string,
    minPrice: number,
    maxPrice: number,
    selectedColors: string[]
  ): Product[] {
    return this.products.filter(p => {
      const matchGender  = !gender || p.gender === gender;
      const matchSub     = !subCategory || p.subCategory === subCategory;
      const matchSearch  = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice   = p.price >= minPrice && p.price <= maxPrice;
      const matchColor   = selectedColors.length === 0 || selectedColors.some(c => p.colors?.includes(c));
      return matchGender && matchSub && matchSearch && matchPrice && matchColor;
    });
  }
}