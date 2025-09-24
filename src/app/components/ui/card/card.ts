import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Woman } from '../../../../interface/woman';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  @Input() woman!: Woman; // Objeto mujer creado en la interfaz
}

