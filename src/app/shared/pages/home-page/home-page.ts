import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Footer],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor(private router: Router) {}

  goToCountry() {
    this.router.navigate(['/country']);
  }
 }
