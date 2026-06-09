import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  id: string = '';
  quantity: number = 1;
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  activeImg: number = 0;
  showToast = false;

  // Gallery — plusieurs images par produit
  getImages(): string[] {
    if (!this.product) return [];
    const base = this.product.imageUrl;
    // Génère 4 images différentes depuis Unsplash b même sujet
    return [
      base,
      base.replace('w=400&h=500', 'w=400&h=500&crop=top'),
      base.replace('fit=crop', 'fit=crop&crop=bottom'),
      base.replace('fit=crop', 'fit=crop&crop=left'),
    ];
  }

  cartCount = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());
  isFavorite = computed(() => {
    const prod = this.product;
    return prod ? this.favoriteService.isFavorite(prod.id) : false;
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.id      = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(+this.id);
    if (this.product?.colors?.length) {
      this.selectedColor = this.product.colors[0];
    }
    if (this.product?.sizes?.length) {
      this.selectedSize = this.product.sizes[0];
    }
  }

  increment(): void {
    if (this.product && this.quantity < this.product.stock) this.quantity++;
  }

  decrement(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    if (!this.product) return;
    for (let i = 0; i < this.quantity; i++) {
      this.cartService.addToCart(
        this.product,
        this.selectedSize || undefined,
        this.selectedColor || undefined
      );
    }
    this.showToast = true;
    setTimeout(() => this.showToast = false, 2000);
  }

  toggleFavorite(): void {
    if (this.product) {
      this.favoriteService.toggleFavorite(this.product);
    }
  }
}