import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../model/heroe.model';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel= new HeroeModel();

  constructor( private heroesService: HeroesService) { 


  }

  ngOnInit() {
  }

  guardar( form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }
      // console.log(form);
      // console.log(this.heroe);
    if ( this.heroe.id ){
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe( resp => {
        console.log(resp);
      });
    } else {
      this.heroesService.crearHeroe(this.heroe)
      .subscribe( resp => {
        console.log(resp);
      });
    }
  }

}
