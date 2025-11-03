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
  selector: 'app-by-country-page',
  imports: [CommonModule],
  templateUrl: './by-country-page.html'
})
export class ByCountryPage {
  countries = signal<Country[]>([]);
  isLoading = signal(false);
  searchTerm = signal('');

  constructor(private router: Router) {}

  onInputChange(value: string): void {
    this.searchTerm.set(value);
  }

  handleSearch(): void {
    const term = this.searchTerm().trim();
    
    if (term === '') {
      this.countries.set([]);
      return;
    }

    this.isLoading.set(true);
    
    // Aquí llamarías a tu servicio
    setTimeout(() => {
      this.countries.set([]);
      this.isLoading.set(false);
    }, 500);
  }

  viewCountry(code: string): void {
    this.router.navigate(['/countries', code]);
  }
}
