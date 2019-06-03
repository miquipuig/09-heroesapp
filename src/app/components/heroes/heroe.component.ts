import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../model/heroe.model';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel= new HeroeModel();

  constructor() { }

  ngOnInit() {
  }

  guardar( form: NgForm) {

    if (form.invalid) {
      console.log("Formulario no válido");
      return;
    }
      console.log(form);
      console.log(this.heroe);
  }

}
