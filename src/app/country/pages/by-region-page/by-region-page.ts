import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-by-region-page',
  imports: [Footer, CountryList, FormsModule, HttpClientModule],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage implements OnInit {
  countries: any[] = [];

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('🚀 Componente ByRegionPage inicializado');

    this.onSearch('europe');
  }

  onSearch(region: string) {
    console.log('🌎 Buscando región:', region);

    this.countryService.searchByRegion(region).subscribe({
      next: (data) => {
        console.log('✅ Respuesta de la API:', data);
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
