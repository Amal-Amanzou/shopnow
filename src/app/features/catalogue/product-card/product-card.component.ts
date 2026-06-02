import { Component, Input, Output, EventEmitter, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HoverLiftDirective } from '../../../shared/directives/hover-lift.directive';
import { Product } from '../../../core/models/product.model';
import { FavoriteService } from '../../../core/services/favorite.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, HoverLiftDirective],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<Product>();

  private favoriteService = inject(FavoriteService);

  isFavorite = computed(() => this.favoriteService.isFavorite(this.product.id));

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoriteService.toggleFavorite(this.product);
  }

  onAddToCart(event: Event): void {
    event.stopPropagation();
    this.addToCart.emit(this.product);
  }
}