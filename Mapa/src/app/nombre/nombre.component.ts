import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
 title = 'modulo-mapa';
 position = {lat: 19.510961, lng: -99.040527};
  constructor() { }

  ngOnInit(): void {
  }

}
