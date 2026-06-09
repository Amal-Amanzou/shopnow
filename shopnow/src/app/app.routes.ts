// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirection racine → catalogue
  { path: '', redirectTo: 'produits', pathMatch: 'full' },

  // Écran 1 — Catalogue (avec query param optionnel ?cat=AUDIO)
  {
    path: 'produits',
    loadComponent: () =>
      import('./features/catalogue/product-list/product-list.component')
        .then(m => m.ProductListComponent)
  },

  // Écran 2 — Détail produit (route avec paramètre :id — séance 4)
  {
    path: 'produit/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
  },
  {
    path: 'panier',
    loadComponent: () =>
      import('./features/cart/cart.component')
        .then(m => m.CartComponent)
  },
  {
    path: 'favoris',
    loadComponent: () =>
      import('./features/favorites/favorites.component')
        .then(m => m.FavoritesComponent)
  },
  {
    path: 'mon-compte',
    loadComponent: () =>
      import('./features/account/account.component')
        .then(m => m.AccountComponent)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component')
        .then(m => m.CheckoutComponent)
  },

  // Wildcard — doit toujours être EN DERNIER
  { path: '**', redirectTo: 'produits' }
];
