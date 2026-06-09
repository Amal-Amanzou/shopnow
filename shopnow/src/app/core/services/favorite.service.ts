import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private favoriteProducts = signal<Product[]>(this.loadFavorites());

  private loadFavorites(): Product[] {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favoriteProducts()));
  }

  favorites = computed(() => this.favoriteProducts());
  favoriteCount = computed(() => this.favoriteProducts().length);

  toggleFavorite(product: Product): void {
    const current = this.favoriteProducts();
    const index = current.findIndex(p => p.id === product.id);

    if (index >= 0) {
      // Remove from favorites
      const updated = current.filter((_, i) => i !== index);
      this.favoriteProducts.set(updated);
    } else {
      // Add to favorites
      this.favoriteProducts.set([...current, product]);
    }
    this.saveFavorites();
  }

  isFavorite(productId: number): boolean {
    return this.favoriteProducts().some(p => p.id === productId);
  }
}
