import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-head',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-head.html',
  styles: [`
    :host ::ng-deep .active {
      background-color: hsl(var(--p));
      color: hsl(var(--pc));
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHead { }
