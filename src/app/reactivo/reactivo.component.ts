import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})

export class ReactivoComponent implements OnInit {

  newColor: string = '#ff0000'
  constructor(private _colorService: ColorService) { }  //Inicializa el valor de _colorService asignandole 

  ngOnInit() {
    this._colorService
        .getEventColor()
        .subscribe(value => this.newColor = value);
  }

}
