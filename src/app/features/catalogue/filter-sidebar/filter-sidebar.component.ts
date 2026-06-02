import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent implements OnInit {

  @Input() priceMin: number = 0;
  @Input() priceMax: number = 2000;
  @Input() allColors: string[] = [];

  @Output() genderChanged     = new EventEmitter<string | null>();
  @Output() subCatChanged     = new EventEmitter<string | null>();
  @Output() priceChanged      = new EventEmitter<{ min: number; max: number }>();
  @Output() colorsChanged     = new EventEmitter<string[]>();
  @Output() filtersReset      = new EventEmitter<void>();

  selectedGender: string | null = null;
  selectedSubCat: string | null = null;
  hoveredGender: string | null = null;
  currentMax: number = 2000;
  selectedColors: string[] = [];

  genders = [
    { key: 'HOMME',  label: 'Homme' },
    { key: 'FEMME',  label: 'Femme' },
    { key: 'KIDS',   label: 'Kids'  }
  ];

  subCategories: Record<string, { key: string; label: string }[]> = {
    HOMME: [
      { key: 'VETEMENTS',        label: 'Vêtements' },
      { key: 'CHAUSSURES',       label: 'Chaussures' },
      { key: 'SPORT', label: 'Sport' },
      { key: 'MONTRES',          label: 'Montres' },
      { key: 'ACCESSOIRES',      label: 'Accessoires' },
      { key: 'CASQUETTES',       label: 'Casquettes' },
      { key: 'VETEMENTS_INTIMES',label: 'Vêtements intimes' }
    ],
    FEMME: [
      { key: 'VETEMENTS',        label: 'Vêtements' },
      { key: 'CHAUSSURES',       label: 'Chaussures' },
      { key: 'SPORT', label: 'Sport' },
      { key: 'MONTRES',          label: 'Montres' },
      { key: 'ACCESSOIRES',      label: 'Accessoires' },
      { key: 'CASQUETTES',       label: 'Casquettes' },
      { key: 'VETEMENTS_INTIMES',label: 'Vêtements intimes' }
    ],
    KIDS: [
      { key: 'VETEMENTS',        label: 'Vêtements' },
      { key: 'CHAUSSURES',       label: 'Chaussures' },
      { key: 'SPORT', label: 'Sport' },
      { key: 'MONTRES',          label: 'Montres' },
      { key: 'CASQUETTES',       label: 'Casquettes' }
    ]
  };

  colorNames: Record<string, string> = {
    '#000000': 'Noir',   '#ffffff': 'Blanc',
    '#e53e3e': 'Rouge',  '#2563eb': 'Bleu',
    '#FF6B9D': 'Rose',   '#f5a623': 'Orange',
    '#b8860b': 'Or',     '#c0c0c0': 'Argent',
    '#808080': 'Gris',   '#1a1a6e': 'Marine',
    '#d4a574': 'Nude',   '#1a5c38': 'Vert',
  };

  ngOnInit(): void {
    this.currentMax = this.priceMax;
  }

  getColorName(hex: string): string {
    return this.colorNames[hex] || hex;
  }
  onMinChange(event: Event): void {
  const val = +(event.target as HTMLInputElement).value;
  this.priceChanged.emit({ min: val, max: this.currentMax });
}

  onGenderHover(gender: string | null): void {
    this.hoveredGender = gender;
  }

  onGenderSelect(gender: string): void {
    this.selectedGender  = this.selectedGender === gender ? null : gender;
    this.selectedSubCat  = null;
    this.hoveredGender   = null;
    this.genderChanged.emit(this.selectedGender);
    this.subCatChanged.emit(null);
  }

  onSubCatSelect(subCat: string): void {
    this.selectedSubCat = this.selectedSubCat === subCat ? null : subCat;
    this.subCatChanged.emit(this.selectedSubCat);
  }

  getSubCatsForHovered(): { key: string; label: string }[] {
    if (!this.hoveredGender) return [];
    return this.subCategories[this.hoveredGender] || [];
  }

  onPriceChange(): void {
    this.priceChanged.emit({ min: this.priceMin, max: this.currentMax });
  }

  onColorToggle(color: string): void {
    this.selectedColors = this.selectedColors.includes(color)
      ? this.selectedColors.filter(c => c !== color)
      : [...this.selectedColors, color];
    this.colorsChanged.emit(this.selectedColors);
  }

  isColorSelected(color: string): boolean {
    return this.selectedColors.includes(color);
  }

  onReset(): void {
    this.selectedGender = null;
    this.selectedSubCat = null;
    this.hoveredGender  = null;
    this.currentMax     = this.priceMax;
    this.selectedColors = [];
    this.filtersReset.emit();
  }
}