import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2021-2022",
      ubicacion: "Potrerillo Ver.",
      puesto: "Data Scientist",
      empresa: "Axity",
      logros:[
        {descripcion: "Definir, asesorar, coordinar y/o ejecutar con visión integral las actividades del proyecto/servicio"},
        {descripcion: "Desarrollando productos de complejidad avanzada."}
      ]
    };

    let work2 = {
      fecha: "2020-2021",
      ubicacion: "Orizaba Ver",
      puesto: "Project Manager",
      empresa: "Apli",
      logros:[
        {descripcion: "Coordinar a los equipos de servicios profesionales y ciencia de datos de Apli"},
        {descripcion: "Analizar datos de los clientes"}
      ]
    };

    let work3 = {
      fecha: "2019-2020",
      ubicacion: "Cordoba Ver.",
      puesto: "Analista de Sistemas",
      empresa: "Cadena Comercial OXXO S.A de C.V.",
      logros:[
        {descripcion: "Ingeniero en soporte técnico en sistemas"},
        {descripcion: " Instalación y actualización de software (Sistemas operativos, drivers, aplicaciones, etc.)"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}
