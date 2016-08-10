import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    providers:[HeroService], // Esto crea una instancia de HeroService que está disponible en todo la aplicacion
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
}