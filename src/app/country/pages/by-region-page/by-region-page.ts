import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CountryService } from '../../../shared/services/country';
import { Footer } from '../../../shared/components/footer/footer';
import { CountryList } from '../../components/country-list/country-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-by-region-page',
  imports: [Footer, CountryList, FormsModule, HttpClientModule, NgFor],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage implements OnInit {
  countries: any[] = [];
  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion = 'Europe';

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.onSearch('Europe');
  }

  onSearch(region: string) {
    this.selectedRegion = region;
    console.log('🌍 Buscando región:', region);

    this.countryService.searchByRegion(region).subscribe({
      next: (data) => {
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
