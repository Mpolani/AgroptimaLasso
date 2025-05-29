import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../../shared/menu/menu.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {
  stars = Array(5).fill(0);

  workers = [
    {
      name: 'Samantha Sarah',
      role: 'Recolectora de café',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      rating: 0,
      comment: '',
      hired: false
    },
    {
      name: 'Nazrul Islam',
      role: 'Recolector de banano',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      rating: 0,
      comment: '',
      hired: false
    },
    {
      name: 'Riyadh Khan',
      role: 'Recolector de cítricos',
      img: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      rating: 0,
      comment: '',
      hired: false
    },
    {
      name: 'Niloy Islam',
      role: 'Recolector de flores',
      img: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      rating: 0,
      comment: '',
      hired: false
    }
  ];

  rate(worker: any, stars: number) {
    worker.rating = stars;
  }

  hire(worker: any) {
    worker.hired = true;
    Swal.fire({
      title: `Has contratado a ${worker.name}.\n\nComentario: ${worker.comment || '(sin condiciones)'}`,
      icon: "success",
      draggable: true
    });

  }
  reject(worker: any) {
    Swal.fire({
      title: `Has Rechazado a ${worker.name}.\n\nComentario: ${worker.comment || '(sin condiciones)'}`,
      icon: "warning",
      draggable: true
    });
  }
}
