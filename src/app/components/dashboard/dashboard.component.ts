import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { GraphisComponent } from '../../shared/graphis/graphis.component';
import { CardInfoComponent } from '../../shared/card-info/card-info.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent, GraphisComponent,CardInfoComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
