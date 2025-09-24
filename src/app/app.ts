import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { CardList } from './components/ui/card-list/card-list';
import { Resource } from './components/resource/resource';
import { Card } from './components/ui/card/card';

/* Creo que acard y cardlist no iria */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Profile, Card, CardList, Resource],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mujeresTech');
}
