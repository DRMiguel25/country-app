import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-by-country-page',
  imports: [Footer, SearchInput, CountryList, FormsModule, HttpClientModule],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {
  countries: any[] = [];

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  onSearch(term: string) {
    console.log('🔍 Buscando país:', term);

    this.countryService.searchCountry(term).subscribe({
      next: (data) => {
        if (this.countryService.lastRegion) {
          data = data.filter(country =>
            country.region.toLowerCase() === this.countryService.lastRegion.toLowerCase()
          );
        }
        this.countries = data;
        this.cdr.markForCheck();
      },
      error: () => {
        this.countries = [];
        this.cdr.markForCheck();
      },
    });
  }
}
