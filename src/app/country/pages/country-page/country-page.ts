import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHead } from '../../components/menu-head/menu-head';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-country-page',
  imports: [MenuHead, RouterOutlet],
  templateUrl: './country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage { }
