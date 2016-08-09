// Aqui cumplimos el SRP porque este modulo se responsabiliza unicamente de actualizar los detalles del hero. No otra tarea es asignada
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

@Component ({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
    /*template: `
        <!-- Uso una 'structural directives' para mostrar selectedHero solamente cuando esto existe -->
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)] = "hero.name" placeholder="name">
            </div>
        </div>
        `*/
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    sub: any;
    
    constructor(
        private heroService: HeroService, 
        private route: ActivatedRoute){
            
        }
    
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
        let id = +params['id'];
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });

    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}