import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsComponent } from '../../shared/forms/forms.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsComponent],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  isLoginActive: boolean;
  ListInputLoginForm: Array<any>;
  ListInputRegisterForm: Array<any>;

  constructor() {
    this.ListInputRegisterForm = [
      {
        title: 'Nombre',
        name: 'name',
        type: 'text',
        placeholder: 'Nombre Completo',
        validation: [Validators.required],
        icon: 'bi-person-circle'
      },
      {
        name: 'role',
        type: 'select',
        placeholder: 'Seleccione',
        title: 'Rol',
        options: [
          { label: 'Admin', value: 'Administrador' },
          { label: 'Mesero', value: 'Mesero' },
          { label: 'Otro', value: 'Otro' }
        ],
        validation: [Validators.required],
        class: 'col-md-6',
        icon: 'bi-filter'
      },
      {
        title: 'Contraseña',
        name: 'contraseniaR',
        type: 'password',
        placeholder: 'Contraseña',
        validation: [Validators.required],
        class: 'col-md-6',
        icon: 'bi-lock'
      },
      {
        title: 'Correo',
        name: 'email',
        type: 'text',
        placeholder: 'Correo',
        validation: [Validators.required, Validators.email],
        icon: 'bi-at'
      }
    ]
    this.ListInputLoginForm = [
      {
        title: 'Correo',
        name: 'email',
        type: 'text',
        placeholder: 'Ingrese Correo',
        validation: [Validators.required, Validators.email],
        icon: 'bi-at'
      },
      {
        title: 'Contraseña',
        name: 'Contrasenia',
        type: 'password',
        placeholder: 'Ingrese Contraseña',
        validation: [Validators.required],
        icon: 'bi-lock'
      }
    ];
  }
  getFormvalue(formsValue: any) {
    //&this.isLoginActive ? this.login(formsValue) : this.createUser(formsValue);
  }
  changueForm(name: string): void {
    this.isLoginActive = name === 'login';
  }
}
