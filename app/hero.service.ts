import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        //Promise.resolve its a promise to call back later when the results are ready
        return Promise.resolve(HEROES);
    }
    getHero(id: number){
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
