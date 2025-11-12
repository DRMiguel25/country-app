import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../../shared/interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {
  countries = input.required<Country[]>();


}
