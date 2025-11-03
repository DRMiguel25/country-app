import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  code: string;
}

@Component({
  selector: 'app-by-region-page',
  imports: [CommonModule],
  templateUrl: './by-region-page.html'
})
export class ByRegionPage {
  countries = signal<Country[]>([]);
  isLoading = signal(false);
  selectedRegion = signal<string>('');

  regions = [
    { name: 'África', value: 'africa' },
    { name: 'América', value: 'americas' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europa', value: 'europe' },
    { name: 'Oceanía', value: 'oceania' }
  ];

  constructor(private router: Router) {}

  selectRegion(region: string): void {
    this.selectedRegion.set(region);
    this.isLoading.set(true);
    
    // Aquí llamarías a tu servicio
    setTimeout(() => {
      this.countries.set([]);
      this.isLoading.set(false);
    }, 500);
  }

  clearFilter(): void {
    this.selectedRegion.set('');
    this.countries.set([]);
  }

  viewCountry(code: string): void {
    this.router.navigate(['/countries', code]);
  }
}
