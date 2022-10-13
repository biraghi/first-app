import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;


  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name:string): void{
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(hero=>{this.heroes.push(hero)})
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
