import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Otra forma de hacer interface */
interface ResourceInterface {
  id: number;
  title: string;
  description: string;
  url?: string;
  category: 'Comunidades' | 'Becas y Programas' | 'Podcasts' | 'Cursos y Plataformas' | 'Eventos';
  badge?: string;
}

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource.html',
  styleUrls: ['./resource.css'],
})
export class Resource {
  search = '';
  activeCategory: ResourceInterface['category'] | 'Todas' = 'Todas';

  resources: ResourceInterface[] = [
    // Comunidades y Redes
    {
      id: 1,
      title: 'Women Who Code',
      description: 'Comunidad global con eventos, workshops y meetups. Capítulos en LATAM.',
      url: 'https://www.womenwhocode.com',
      category: 'Comunidades',
    },
    {
      id: 2,
      title: 'Chicas en Tecnología (CET)',
      description: 'ONG argentina con programas, mentorías y bootcamps gratuitos.',
      url: 'https://chicasentecnologia.org',
      category: 'Comunidades',
    },
    {
      id: 3,
      title: 'SheCodes',
      description: 'Cursos y becas para mujeres en desarrollo web, data y ML.',
      url: 'https://www.shecodes.io',
      category: 'Comunidades',
    },

    // Becas y Programas
    {
      id: 4,
      title: 'PrograMaria',
      description: 'Iniciativa brasileña con formación y becas para mujeres en tech.',
      url: 'https://programaria.org',
      category: 'Becas y Programas',
    },
    {
      id: 5,
      title: 'Laboratoria',
      description: 'Bootcamp intensivo para mujeres y personas no binarias (web + UX).',
      url: 'https://laboratoria.la',
      category: 'Becas y Programas',
    },

    // Podcasts
    {
      id: 6,
      title: 'Mujeres en Tecnología (MxTech)',
      description: 'Podcast que visibiliza historias y consejos. Disponible en Spotify.',
      url: '',
      category: 'Podcasts',
      badge: 'Spotify',
    },
    {
      id: 7,
      title: 'Geek Girls LatAm Podcast',
      description: 'Charlas sobre innovación y programación en Latinoamérica.',
      url: 'https://geekgirlslatam.org',
      category: 'Podcasts',
    },

    // Cursos y Plataformas
    {
      id: 8,
      title: 'Technovation Girls',
      description: 'Programa para chicas (10–18) que desarrollan proyectos tecnológicos.',
      url: 'https://www.technovationchallenge.org',
      category: 'Cursos y Plataformas',
    },
    {
      id: 9,
      title: 'Ada ITW',
      description: 'Comunidad argentina con cursos de desarrollo web y programación.',
      url: 'https://adaitw.org',
      category: 'Cursos y Plataformas',
    },

    // Eventos
    {
      id: 10,
      title: 'Girls in Tech Conference',
      description: 'Conferencia anual internacional con charlas, networking y talleres.',
      url: 'https://girlsintech.org',
      category: 'Eventos',
    },
  ];

  categories: Array<ResourceInterface['category'] | 'Todas'> = [
    'Todas',
    'Comunidades',
    'Becas y Programas',
    'Podcasts',
    'Cursos y Plataformas',
    'Eventos',
  ];

  // filtro calculado
  get filteredResources(): ResourceInterface[] {
    const q = this.search.trim().toLowerCase();
    return this.resources.filter((r) => {
      const matchesCategory = this.activeCategory === 'Todas' || r.category === this.activeCategory;
      const matchesQuery = !q || (r.title + ' ' + r.description).toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }

  open(url?: string) {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  setCategory(cat: ResourceInterface['category'] | 'Todas') {
    this.activeCategory = cat;
  }

  clearSearch() {
    this.search = '';
  }
}
