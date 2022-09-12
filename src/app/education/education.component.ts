import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void { 
    let esc = {
    fecha: "2014-2017",
    Escuela: "Telesecundaria",
    ubicacion : "Rio Blanco, Ver",
  
    
  };
  let esc1 = {
    fecha: "2017-2020",
    Escuela: "CeTis 146",
    ubicacion : "Rio Blanco, Ver",
  
    
  };
  let esc2 = {
    fecha:"2020-2024",
    Escuela: "Universidad Veracruzana",
    ubicacion:"Ixtac, Ver",
    
  };
  this.education.push(esc)
  this.education.push(esc1)
  this.education.push(esc2)
}



}
