import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  titulo: string = 'Componente Persona';
  edad: number = 25;

  users: { id: number; name: string }[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
    { id: 4, name: 'Ana Lucia' },
    { id: 4, name: 'Maria' },
    { id: 4, name: 'Antonio' },
  ];
}
