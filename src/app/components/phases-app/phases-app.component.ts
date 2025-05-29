import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phases-app',
  standalone: true,
  imports: [MenuComponent,RouterModule],
  templateUrl: './phases-app.component.html',
  styleUrl: './phases-app.component.css'
})
export class PhasesAppComponent {

}
