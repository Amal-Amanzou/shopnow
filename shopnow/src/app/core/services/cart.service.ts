import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  private items = signal<CartItem[]>(this.loadCart());

  private loadCart(): CartItem[] {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items()));
  }

  cartItems   = computed(() => this.items());
  cartCount   = computed(() => this.items().reduce((acc, i) => acc + i.quantity, 0));
  cartTotal   = computed(() => this.items().reduce((acc, i) => acc + i.product.price * i.quantity, 0));

  addToCart(product: Product, size?: string, color?: string): void {
    const current = this.items();
    const idx = current.findIndex(i =>
      i.product.id === product.id &&
      i.selectedSize === size &&
      i.selectedColor === color
    );
    if (idx >= 0) {
      const updated = [...current];
      updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
      this.items.set(updated);
    } else {
      this.items.set([...current, { product, quantity: 1, selectedSize: size, selectedColor: color }]);
    }
    this.saveCart();
  }

  removeFromCart(index: number): void {
    const updated = this.items().filter((_, i) => i !== index);
    this.items.set(updated);
    this.saveCart();
  }

  updateQuantity(index: number, quantity: number): void {
    if (quantity <= 0) { this.removeFromCart(index); return; }
    const updated = [...this.items()];
    updated[index] = { ...updated[index], quantity };
    this.items.set(updated);
    this.saveCart();
  }

  clearCart(): void {
    this.items.set([]);
    this.saveCart();
  }
}