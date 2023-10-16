import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinas',
  templateUrl: './reinas.component.html',
  styleUrls: ['./reinas.component.css']
})
export class ReinasComponent implements OnInit {
  public reinas =[1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit(): void {
  }

}
