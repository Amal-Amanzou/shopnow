import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    public cartService: CartService,
    public favoriteService: FavoriteService
  ) {}

  cartItems  = computed(() => this.cartService.cartItems());
  cartTotal  = computed(() => this.cartService.cartTotal());
  cartCount  = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());

  onRemove(index: number): void {
    this.cartService.removeFromCart(index);
  }

  onQuantityChange(index: number, delta: number): void {
    const item = this.cartService.cartItems()[index];
    this.cartService.updateQuantity(index, item.quantity + delta);
  }

  onClear(): void {
    this.cartService.clearCart();
  }
}