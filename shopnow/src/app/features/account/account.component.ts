import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CartService } from '../../core/services/cart.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(
    public cartService: CartService,
    public favoriteService: FavoriteService,
    public orderService: OrderService
  ) {}

  cartCount = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());
  orders = computed(() => this.orderService.orders());

  activeTab: 'dashboard' | 'orders' | 'settings' = 'dashboard';

  changeTab(tab: 'dashboard' | 'orders' | 'settings', event: Event) {
    event.preventDefault();
    this.activeTab = tab;
  }

  logout(event: Event) {
    event.preventDefault();
    alert('Déconnexion réussie');
  }
}
