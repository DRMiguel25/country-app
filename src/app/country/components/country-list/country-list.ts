import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {
  @Input() countries: any[] = [];
}
