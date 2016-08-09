/*
    1 - Importo un componente, lo cual es una función, desde el core
    2 - Le paso un objeto METADATA decorator con, de momento, dos propiedades - selector and template -
    3 - Exporto la clase AppComponent, la cual supongo que es el resultado de ejecutar el methodo Component
*/

import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';



@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent] // Con 'directive' property le decimos a Angular = "esto es una nueva HTML tag que puedes usar en tu template" 
})


            // Este es el component. Desde aqui definimos 
export class HeroesComponent implements OnInit { 
    // Creamos una public property para exponer heroes. Necesario para el binding.
    heroes: Hero[];
    selectedHero: Hero;
    //Constructor son para simples inicializations, no para heavy lifting. - Como llamar a un webservice
    constructor(
        private router: Router,
        private heroService: HeroService
    ) {};
    
    onSelect(hero: Hero){this.selectedHero = hero;}
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); // Confusing format >:/
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetails(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}