/**
 * Created by pdasgupta on 7/25/2017.
 */

import { Injectable } from '@angular/core';
import {HEROES} from './mock_heroes';
import {Hero} from "./hero";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class HeroService{
  /*getHeroes():Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }*/

  private headers = new Headers({'Content-Type':'application/json'});
  private heroesUrl = 'api/heroes';

  constructor(private http:Http){}

  //Fetch the list at one go
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }
  //Fetch a specific hero by id
  getHero(id:number):Promise<Hero>{
    const url =  `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>  response.json().data as Hero)
      .catch(this.handleError)
  }
  //Update a particular hero by some other name
  update(hero:Hero): Promise<Hero>{
    const url = `${this.heroesUrl}\${hero.id}`
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise().then(()=>hero).catch(this.handleError);
  }
  //Add a new Hero to the list
  create(name:String): Promise<Hero>{
    return this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
    .toPromise().then(res=>res.json().data as Hero).catch(this.handleError);
  }

  //delete a Hero from list
  delete(id:number):Promise<void>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers:this.headers})
      .toPromise().then(()=>null).catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  /*getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }*/
  /*getHeroes():Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(()=> resolve(this.getHeroes()),2000);
    });*/


}

