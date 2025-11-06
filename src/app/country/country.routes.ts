import { Routes } from '@angular/router';
import { CountryPage } from './pages/country-page/country-page';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: '',
        redirectTo: 'by-country',
        pathMatch: 'full'
      },
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      {
        path: 'by-country',
        component: ByCountryPage
      },
      {
        path: 'by-region',
        component: ByRegionPage
      }
    ]
  }
];

export default countryRoutes;
