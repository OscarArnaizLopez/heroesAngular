/*
    1 - Importo un componente, lo cual es una función, desde el core
    2 - Le paso un objeto METADATA con, de momento, dos propiedades - selector and template -
    3 - Exporto la clase AppComponent, la cual supongo que es el resultado de ejecutar el methodo Component
*/

import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';


// Defino in array de Heroes, en una constante, del tipo array de heroes. 
//Estos datos deberian venir de un webservice, pero por ahora mostramos mock heroes
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My heroes</h2>
        <ul class="heroes">
            <!-- 'hero of heroes' means: Recorreme el array heroes y por cada posicion me creas una variable llamada hero-->
            <!-- let identifica 'hero' como una template input variable-->
            <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero"
             (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
        styles: [`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .heroes .text {
                position: relative;
                top: -3px;
            }
            .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
            `],
            directives: [HeroDetailComponent] // Con 'directive' property le decimos a Angular = "esto es una nueva HTML tag que puedes usar" 


})


            // Este es el component. Desde aqui definimos 
export class AppComponent { 
    title = 'Tour of Heroes';
    // Creamos una public property para exponer heroes. Necesario para el binding.
    public heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero){this.selectedHero = hero;}

}