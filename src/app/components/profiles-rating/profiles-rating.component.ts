import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../../shared/menu/menu.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profiles-rating',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './profiles-rating.component.html',
  styleUrl: './profiles-rating.component.css'
})
export class ProfilesRatingComponent {
  stars = Array(5).fill(0);

  workers = [
    {
      name: 'Ana Ramírez',
      role: 'Recolector',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 0,
      comment: ''
    },
    {
      name: 'Carlos López',
      role: 'Recolector',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 0,
      comment: ''
    },
    {
      name: 'Luisa Pérez',
      role: 'Recolector',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 0,
      comment: ''
    },
    {
      name: 'David Herrera',
      role: 'Recolector',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      rating: 0,
      comment: ''
    }
  ];

  rate(worker: any, stars: number) {
    worker.rating = stars;
  }

  submit(worker: any) {
    Swal.fire({
      title: `Gracias por calificar a ${worker.name} con ${worker.rating} estrellas`,
      icon: "success",
      draggable: true
    });
  }
}
