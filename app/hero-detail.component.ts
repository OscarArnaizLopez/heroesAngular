// Aqui cumplimos el SRP porque este modulo se responsabiliza unicamente de actualizar los detalles del hero. No otra tarea es asignada
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component ({
    selector: 'my-hero-detail',
    template: `
        <!-- Uso una 'structural directives' para mostrar selectedHero solamente cuando esto existe -->
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)] = "hero.name" placeholder="name">
            </div>
        </div>
        `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero// Como le paso el hero. A través del import?? si, probablemente
}