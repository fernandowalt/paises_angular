import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  errorPeticion: boolean = false;
  arregloPaises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.errorPeticion = false;

    this.paisService.buscarPais(termino, 'name').subscribe(
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
    this.arregloPaises = [];
    this.errorPeticion = false;
    this.termino = valor;
    this.paisService.buscarPais(valor, 'name').subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
      },
      (erro) => {
        this.paisesSugeridos = [];
      }
    );
  }

  ngOnInit(): void {}
}
