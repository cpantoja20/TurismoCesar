import { ifStmt } from '@angular/compiler/src/output/output_ast';
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

  /* dia(temporada) {
     temporada = new Date();
     this.dia = temporada.getDay();
     if (temporada == 0 || temporada == 5 || temporada == 6) {
       this.persona.temporada;
 
     } else {
 
     }
   }*/

  dateOfWeek(persona: Persona) {
    if (persona.fechaHospedaje) {
      const fecha = new Date(persona.fechaHospedaje)
      const dia = fecha.getDay()


      if (dia == 0 || dia == 5 || dia == 6) {
        persona.temporada = "Temporada Alta"
      } else {
        persona.temporada = "Temporada Baja"
      }


    }
  }
}