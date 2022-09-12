import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguages',
  templateUrl: './lenguages.component.html',
  styleUrls: ['./lenguages.component.css']
})
export class LenguagesComponent implements OnInit {
  lenguages : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let l = {
      nombreL: "Español",
      };
      let l1 = {
        nombreL: "Ingles",
        };
      this.lenguages.push(l);
      this.lenguages.push(l1);
  }
  

}
