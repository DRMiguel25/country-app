import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHead } from '../../components/menu-head/menu-head';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-layout',
  imports: [MenuHead, RouterOutlet],
  templateUrl: './CountryLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayout {}
