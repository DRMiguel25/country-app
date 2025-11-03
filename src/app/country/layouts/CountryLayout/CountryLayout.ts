import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuHead } from '../../components/menu-head/menu-head';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, MenuHead],
  templateUrl: './CountryLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayout { }
