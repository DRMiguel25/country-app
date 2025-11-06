import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [Footer, SearchInput, CountryList, FormsModule, HttpClientModule],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countries: any[] = [];

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  onSearch(term: string) {
  const cleanTerm = term.trim();
  console.log('🔍 Buscando capital:', cleanTerm);

  this.countryService.searchByCapital(cleanTerm).subscribe({
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
