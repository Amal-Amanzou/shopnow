import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../catalogue/product-card/product-card.component';
import { FavoriteService } from '../../core/services/favorite.service';
import { CartService } from '../../core/services/cart.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, HeaderComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  
  constructor(
    public favoriteService: FavoriteService,
    public cartService: CartService
  ) {}

  favorites = computed(() => this.favoriteService.favorites());
  cartCount = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());

  showToast = false;

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 2000);
  }
}
