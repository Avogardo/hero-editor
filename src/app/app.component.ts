import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Maria Rokita' },
  { id: 12, name: 'Twoja mloda' },
  { id: 13, name: 'Sweter z golfem' },
  { id: 14, name: 'abuK' },
  { id: 15, name: 'Marietta' },
  { id: 16, name: 'Gruby Ozi' },
  { id: 17, name: 'Dynamo' },
  { id: 18, name: 'Q z Bonda' },
  { id: 19, name: 'Zer0an0nim' },
  { id: 20, name: 'Cassia' }
];
