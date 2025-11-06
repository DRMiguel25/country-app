import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-menu-head',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-head.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHead { }
