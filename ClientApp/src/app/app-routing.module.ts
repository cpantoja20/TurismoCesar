import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonaRegistroComponent } from './turismocesar/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './turismocesar/persona-consulta/persona-consulta.component';

const routes: Routes = [
{
path: 'personaConsulta',
component: PersonaConsultaComponent
},
{
path: 'personaRegistro',
component: PersonaRegistroComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
    
})
export class AppRoutingModule { }
