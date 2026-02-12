import {Component, signal} from '@angular/core';
import {HeroPage} from './component/hero-page/hero-page';
import {AboutMe} from './component/abaout-me/about-me';
import {Projects} from './component/projects/projects';
import {Technologies} from './component/technologies/technologies';
import {Phrases} from './component/phrases/phrases';

@Component({
  selector: 'app-root',
  imports: [
    HeroPage,
    AboutMe,
    Projects,
    Technologies,
    Phrases
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('website');
}
