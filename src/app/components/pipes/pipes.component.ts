import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  video = 'VDTk8IfQs70';
  passwordBand = true;
  passwordItem: string;
  constructor() { }

  ngOnInit() {
  }

  password() {
    this.passwordBand = !this.passwordBand;
  }

}
