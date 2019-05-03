import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        // generate a list of 4 random heroes for the top list
        let topHeroes = [];
        for (let i = 0; i < 4; i++) {
          const randNum = Math.floor(Math.random() * heroes.length);
          topHeroes.push(heroes[randNum]);
          heroes = heroes.filter((hero, idx, arr) => {
            console.log(hero);
            return heroes[randNum].id !== hero.id;
          });
          console.log(heroes);
        }
        this.heroes = topHeroes;
      });
  }
}
