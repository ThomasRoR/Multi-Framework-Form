import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './form.component.html', 
  styleUrls: ['./form.component.css']    
})
export class FormComponent { 
  name: string = '';
  email: string = '';
  handleSubmit() {
    if (!this.name || !this.email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(`Formulário Angular Enviado!\nNome: ${this.name}\nEmail: ${this.email}`);
    this.name = '';
    this.email = '';
  }
}