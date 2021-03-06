import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Hero } from '../hero-detail/hero';
import { HeroService } from '../hero-detail/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) { }

  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
