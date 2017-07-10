import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes-list/heroes.component';
import { HeroService }         from './hero-detail/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}