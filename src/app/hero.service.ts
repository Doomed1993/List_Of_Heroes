/**
 * Created by pdasgupta on 7/25/2017.
 */

import { Injectable } from '@angular/core';
import {HEROES} from './mock_heroes';
import {Hero} from "./hero";

@Injectable()
export class HeroService{
  getHeroes():Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  /*getHeroes():Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(()=> resolve(this.getHeroes()),2000);
    });*/


}

