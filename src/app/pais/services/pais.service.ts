import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,population,area,region,flags,coatOfArms,cca2'
    );
  }

  buscarPais(
    termino: string,
    parametroDeBusqueda: string
  ): Observable<Country[]> {
    const url = `${this.apiUrl}/${parametroDeBusqueda}/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams() });
  }

  getPaisPorAlha(code: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url, { params: this.httpParams() });
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams() });
  }
}
