import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/pulsacion/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonaService) { }
  ngOnInit() {
    this.persona = new Persona();
  }

  add() {
    alert('Persona Agregada' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }
}