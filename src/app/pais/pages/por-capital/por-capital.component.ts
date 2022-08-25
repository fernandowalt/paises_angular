import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  errorPeticion: boolean = false;
  arregloPaises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.errorPeticion = false;

    this.paisService.buscarPais(termino, 'capital').subscribe(
      (paises) => {
        this.arregloPaises = paises;
      },
      (err) => {
        this.errorPeticion = true;
        this.arregloPaises = [];
      }
    );
  }

  sugerencias(valor: string) {
    this.errorPeticion = false;
    //crear sugerencias
  }

  ngOnInit(): void {}
}
