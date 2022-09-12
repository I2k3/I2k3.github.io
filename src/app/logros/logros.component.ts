import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logros : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let a = {
      nombreAC: "Certificado Tecnico de Programadora",
      fecha: "2020",
      descripcion:"Con un promedio de 9.5", 
      
    };
    let a1 = {
      nombreAC: "Certificado de Herramientas de Microsoft",
      fecha: "2018",
      descripcion:"Certificado con office 16 con 95pts", 
      
    };
    let a2 = {
      nombreAC: "Competencia de Habilidades de Programación ",
      fecha: "2018",
      descripcion:"Terecer lugar estatalmente", 
      
    };
    this.logros.push(a);
    this.logros.push(a1);
    this.logros.push(a2);
  }

}
