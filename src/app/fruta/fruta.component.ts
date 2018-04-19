import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.css']
})

export class FrutaComponent implements OnInit {
    
    public nombre_componente: string;
    public listado_frutas: string;
    constructor(){
        this.nombre_componente = 'Listado de frutas';
        this.listado_frutas = 'Manzana, Pera, Uva, Fresa';
    }

    ngOnInit(){}
}