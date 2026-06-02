import { CartItem } from './cart-item.model';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  paymentMethod: 'LIVRAISON' | 'CARTE';
  status: 'En cours de traitement' | 'Expédiée' | 'Livrée';
  deliveryAddress: {
    nom: string;
    prenom: string;
    adresse: string;
    ville: string;
    codePostal: string;
    telephone: string;
  };
}
