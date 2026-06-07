import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CartService } from '../../core/services/cart.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { OrderService } from '../../core/services/order.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(
    public cartService: CartService,
    public favoriteService: FavoriteService,
    public orderService: OrderService,
    public userService: UserService,
    private router: Router
  ) {
    const profile = this.userService.userProfile();
    this.fullName = profile.name;
    this.email = profile.email;
  }

  cartCount = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());
  orders = computed(() => this.orderService.orders());

  activeTab: 'dashboard' | 'orders' | 'settings' = 'dashboard';
  fullName = '';
  email = '';
  saveMessage = '';

  changeTab(tab: 'dashboard' | 'orders' | 'settings', event: Event) {
    event.preventDefault();
    this.activeTab = tab;
  }

  saveSettings(): void {
    if (!this.fullName.trim() || !this.email.trim()) return;

    this.userService.updateProfile(this.fullName.trim(), this.email.trim());
    this.saveMessage = 'Modifications enregistrées avec succès !';
    setTimeout(() => this.saveMessage = '', 3000);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/produits']);
  }
}
