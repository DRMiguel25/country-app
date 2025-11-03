import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  code: string;
}

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.html'
})
export class CountryListComponent {
  @Input() countries: Country[] = [];
  @Input() isLoading: boolean = false;
}
