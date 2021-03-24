import { Injectable } from '@angular/core';
import { Persona } from '../pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona) {

    

    persona.valor = (persona.temporada * 210) / 100;
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }



}



