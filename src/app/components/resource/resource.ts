import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceInterface, Resourceservice } from '../../service/resourceservice';

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource.html',
  styleUrls: ['./resource.css'],
})
export class Resource implements OnInit {
  search = '';
  activeCategory: ResourceInterface['category'] | 'Todas' = 'Todas';
  resources: ResourceInterface[] = [];

  categories: Array<ResourceInterface['category'] | 'Todas'> = [
    'Todas',
    'Comunidades',
    'Becas y Programas',
    'Podcasts',
    'Cursos y Plataformas',
    'Eventos',
  ];

  constructor(private resourceService: Resourceservice) {}

  ngOnInit(): void {
    this.resources = this.resourceService.getResources();
  }

  // Filtro calculado
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
