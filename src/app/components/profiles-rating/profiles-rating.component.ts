import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-profiles-rating',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './profiles-rating.component.html',
  styleUrl: './profiles-rating.component.css'
})
export class ProfilesRatingComponent {

}
