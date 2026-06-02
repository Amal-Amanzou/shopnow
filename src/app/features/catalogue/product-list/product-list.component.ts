import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { FavoriteService } from '../../../core/services/favorite.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, FilterSidebarComponent, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  allColors: string[] = [];

  selectedGender: string | null = null;
  selectedSubCat: string | null = null;
  searchTerm: string = '';
  minPrice: number = 0;
  maxPrice: number = 2000;
  selectedColors: string[] = [];

  cartCount = computed(() => this.cartService.cartCount());
  favoriteCount = computed(() => this.favoriteService.favoriteCount());

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
    this.allColors   = this.productService.getAllColors();
    const range      = this.productService.getPriceRange();
    this.minPrice    = 0;
    this.maxPrice    = range.max;

    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
      }
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredProducts = this.productService.filterProducts(
      this.selectedGender,
      this.selectedSubCat,
      this.searchTerm,
      this.minPrice,
      this.maxPrice,
      this.selectedColors
    );
  }

  onGenderChanged(gender: string | null): void {
    this.selectedGender = gender;
    this.applyFilters();
  }

  onSubCatChanged(subCat: string | null): void {
    this.selectedSubCat = subCat;
    this.applyFilters();
  }

  onPriceChanged(range: { min: number; max: number }): void {
    this.minPrice = range.min;
    this.maxPrice = range.max;
    this.applyFilters();
  }

  onColorsChanged(colors: string[]): void {
    this.selectedColors = colors;
    this.applyFilters();
  }

  onFiltersReset(): void {
    this.selectedGender = null;
    this.selectedSubCat = null;
    this.searchTerm     = '';
    this.selectedColors = [];
    const range         = this.productService.getPriceRange();
    this.minPrice       = range.min;
    this.maxPrice       = range.max;
    this.applyFilters();
  }

  

  onSearch(): void {
    this.applyFilters();
  }
  showToast = false;

onAddToCart(product: Product): void {
  this.cartService.addToCart(product);
  this.showToast = true;
  setTimeout(() => this.showToast = false, 2000);
}
}