import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardList } from '../ui/card-list/card-list';
import { Woman } from '../../../interface/woman';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, CardList],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  womenList: Woman[] = [
    {
      title: 'Valeria de Luca',
      especialidad: 'Robótica y educación tecnológica',
      descripcion:
        'Docente y divulgadora. Promueve el aprendizaje de programación y robótica en niños y niñas. Creadora de contenidos accesibles para docentes de nivel inicial y primario.',
      image: 'img/ValeriadeLuca.JPG',
    },
    {
      title: 'Cecilia Berdichevsky',
      logro:
        'Fue una de las primeras programadoras del país y participó en el desarrollo de Clementina, la primera computadora científica de Argentina en los años 60.',

      image: 'img/CeciliaBerdichevsky.jpg',
    },
    {
      title: 'Ingrid Astiz',
      especialidad: 'Investigadora en inteligencia artificial',
      descripcion:
        'Trabaja en temas de procesamiento de lenguaje natural y aplicaciones de IA en educación. Ha difundido la importancia de la ética en la inteligencia artificial.',
      image: 'img/IngridAstiz.jpg',
    },
    {
      title: 'Mariana Costa Checa',
      especialidad: 'Cofundadora de Laboratoria',
      descripcion:
        'Creó un bootcamp que forma a mujeres en programación y UX, con presencia en varios países, incluyendo Argentina.',
      image: 'img/MarianaCosta.jpg',
    },
    {
      title: 'Milagros Miceli',
      especialidad: 'Científica e investigadora en Inteligencia Artificial',
      logro:
        'Primera científica argentina reconocida por la revista TIME como una de las 100 personas más influyentes a nivel mundial en el campo de la inteligencia artificial.',
      image: 'img/MilagrosMiceli.jpg',
    },
    {
      title: 'Emilse Garzón',
      especialidad: 'Periodista y divulgadora argentina',
      descripcion:
        'En su labor de periodista y divulgadora se enfoca en temas referidos a la cultura digital, la tecnología, la innovación, la ciberseguridad y la IA.',
      image: 'img/EmilseGarzon.JPG',
    },
  ];
}
