import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Woman } from '../../../../interface/woman';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule, Card],
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.css'],
})
export class CardList {
  @Input() womenList: Woman[] = [];
}
