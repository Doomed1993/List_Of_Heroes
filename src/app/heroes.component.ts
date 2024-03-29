import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class HeroesComponent implements OnInit{

  constructor(private heroService:HeroService, private router:Router){}


  title : 'Tour of Heroes';
  heroes: Hero[];
  selectedHero:Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name:String):void{
    name = name.trim();
    if(!name) {return;}
    this.heroService.create(name).then(hero =>{this.heroes.push(hero); this.selectedHero= null;});
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}
















/*import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{

  constructor(private heroService:HeroService){}


  title : 'Tour of Heroes';
  heroes: Hero[];
  selectedHero:Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}*/
