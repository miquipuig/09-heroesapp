import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../model/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {


  heroes: HeroeModel[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(resp => this.heroes = resp );

  }

  borrarHeroe( heroe: HeroeModel, i: number){
    Swal.fire({
      title: 'Está seguro?',
      text: `Esta seguro que desea borrar a ${ heroe.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {

if (resp.value){
  this.heroesService.borrarHeroe(heroe.id).subscribe();
  this.heroes.splice(i,1);
}
    });

    
  }

}
