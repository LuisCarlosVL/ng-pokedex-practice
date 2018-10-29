import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokedatesService {
public endpoint = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

public  getAllPokemon(): Observable<any> {
  return this.http.get<any>(this.endpoint);
  }

  public getPokemonDates(target): Observable<any> {
    return this.http.get<any>(target);
  }
}
