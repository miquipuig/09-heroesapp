import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../model/heroe.model';

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

}
