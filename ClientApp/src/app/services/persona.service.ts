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
    if (persona.fechaHospedaje) {
      const fecha = new Date(persona.fechaHospedaje)
      const dia = fecha.getDay()

      if (dia == 0 || dia == 5 || dia == 6 && persona.hotel == "BuenaVista") {
        persona.temporada = "Temporada Alta";
        persona.valor = "$ 100.000";
      } else if (dia == 1 || dia == 2 || dia == 3 || dia == 4 && persona.hotel == "Chimila") {
        persona.temporada = "Temporada Baja";
        persona.valor = "$ 78.000";
      } else if (dia == 0 || dia == 5 || dia == 6 && persona.hotel == "BalcondelCesar") {
        persona.temporada = "Temporada Alta"
        persona.valor = "$ 95.000"
      } else if (dia == 0 || dia == 5 || dia == 6 && persona.hotel == "BalcondelCesar") {
        persona.temporada = "Temporada Alta"
        persona.valor = "$ 95.000"
      } else if (dia == 1 || dia == 2 || dia == 3 || dia == 4 && persona.hotel == "BuenaVista") {
        persona.temporada = "Temporada Baja";
        persona.valor = "$ 80.000";
      } else {
        persona.temporada = "Temporada Alta"
        persona.valor = "$ 85.000"
      }

    }



    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }


  /* var semanaDia = fechaHospedaje.value.getDay();
      var temporadas = ""
  
      if (semanaDia == 0 || semanaDia == 5 || semanaDia == 6) {
        temporadas = "Temporada Alta"
      } else {
        temporadas = "Temporada Baja"
      }
      console.log(temporadas)*/

}





