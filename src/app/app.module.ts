import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';


import { HeroDetailComponent } from './hero_detail.component';
import {AppComponent} from "./app.component";
//import {HeroesComponent} from "./heroes.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
   // HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }

      ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
