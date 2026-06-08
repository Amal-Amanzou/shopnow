// src/app/shared/components/header/header.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Nombre d'articles dans le panier (reçu du parent via @Input)
  @Input() cartCount: number = 0;
  @Input() favoriteCount: number = 0;

  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/produits'], { queryParams: { q: this.searchTerm.trim() } });
      this.searchTerm = '';
    }
  }
}
