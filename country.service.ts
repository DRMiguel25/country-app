import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import { RESTCountry } from '../interfaces/rest-countries.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  lastRegion: string = '';

  searchCountry(country: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${country}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.log('Error Fetching', error);
        return throwError(
          () => new Error(`No se pudo obtener países con ese query ${country}`)
        );
      })
    );
  }

  searchByCapital(capital: string): Observable<Country[]> {
    capital = capital.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${capital}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.log('Error Fetching', error);
        return throwError(
          () => new Error(`No se pudo obtener países con ese query ${capital}`)
        );
      })
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    this.lastRegion = region;

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.log('Error Fetching', error);
        return throwError(
          () => new Error(`No se pudo obtener países con ese query ${region}`)
        );
      })
    );
  }
}
