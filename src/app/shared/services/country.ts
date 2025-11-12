import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface'
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchCountry(country: string) : Observable<Country[]> {
   const query = country.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map(CountryMapper.mapResCountryArrayToCountryArray),
      catchError(err => {
        console.error('Error fetching countries by capital:', err);
        return throwError(() => new Error(`No se pudo obtener países con el query: ${query}`));
      })
    );
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const query = capital.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map(CountryMapper.mapResCountryArrayToCountryArray),
      catchError(err => {
        console.error('Error fetching countries by capital:', err);
        return throwError(() => new Error(`No se pudo obtener países con el query: ${query}`));
      })
    );
  }





  searchByRegion(region: string) : Observable<Country[]>{
    const query = region.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/region/${query}`).pipe(
      map(CountryMapper.mapResCountryArrayToCountryArray),
      catchError(err => {
        console.error('Error fetching countries by region:', err);
        return throwError(() => new Error(`No se pudo obtener países con el query: ${query}`));
      })
    );
  }
}
