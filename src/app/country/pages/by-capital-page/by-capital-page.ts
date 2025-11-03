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
  selector: 'app-by-capital-page',
  imports: [CommonModule],
  templateUrl: './by-capital-page.html'
})
export class ByCapitalPage {
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
    
    // Aquí llamarías a tu servicio para buscar países por capital
    // Por ahora, simulamos datos de ejemplo
    setTimeout(() => {
      this.countries.set([
        {
          name: 'México',
          capital: 'Ciudad de México',
          population: 128932753,
          flag: 'https://flagcdn.com/w320/mx.png',
          code: 'mx'
        },
        {
          name: 'Argentina',
          capital: 'Buenos Aires',
          population: 45376763,
          flag: 'https://flagcdn.com/w320/ar.png',
          code: 'ar'
        }
      ]);
      this.isLoading.set(false);
    }, 500);
  }

  viewCountry(code: string): void {
    this.router.navigate(['/countries', code]);
  }
}
