import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../model/heroe.model';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroesapp-333d3.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ) {

    return this.http.post(`${ this.url }/heroes.json`, heroe).pipe(
      map( (resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

 actualizarHeroe (heroe: HeroeModel) {
   const heroeTemp = {
     ...heroe
   };
   delete heroeTemp.id;
   return this.http.put(`${ this.url }/heroes/${ heroe.id}.json`, heroeTemp);
 }
}
