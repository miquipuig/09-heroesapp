import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../model/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor( private heroesService: HeroesService, private route: ActivatedRoute) {


  }

  ngOnInit() {

    const id =  this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo' ) {
      this.heroesService.getHeroe( id )
      .subscribe( (resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
        console.log(resp);
      });
    }
  }

  guardar( form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }
      // console.log(form);
      // console.log(this.heroe);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);

    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }
    peticion.subscribe(resp => {

      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
    // if ( this.heroe.id ){
    //   this.heroesService.actualizarHeroe(this.heroe)
    //   .subscribe( resp => {
    //     console.log(resp);
    //   });
    // } else {
    //   this.heroesService.crearHeroe(this.heroe)
    //   .subscribe( resp => {
    //     console.log(resp);
    //   });
    // }
  }

}
