import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';
import { Country } from '../../../shared/interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [Footer, SearchInput, CountryList, FormsModule, HttpClientModule],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {
  countries: Country[] = [];

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  onSearch(term: string) {
    console.log('🔍 Buscando país:', term);

    this.countryService.searchCountry(term).subscribe({
    next: (data) => {
      console.log('✅ Respuesta de la API:', data);
      this.countries = data;
      this.cdr.markForCheck(); 
    },
    error: (error) => {
      console.error('❌ Error al obtener países:', error);
      this.countries = [];
      this.cdr.markForCheck();
    },
    complete: () => console.log('🏁 Búsqueda completada'),
    });
  }
}