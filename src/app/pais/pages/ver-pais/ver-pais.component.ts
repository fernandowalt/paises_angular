import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  errorPeticion = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({ code }) => {
    //   this.paisService.getPaisPorAlha(code).subscribe(
    //     (pais) => {
    //       this.pais = pais;
    //     },
    //     (erro) => {
    //       this.errorPeticion = true;
    //     }
    //   );
    // });

    this.activateRoute.params
      .pipe(switchMap(({ code }) => this.paisService.getPaisPorAlha(code)))
      .subscribe(
        (country) => {
          this.pais = country;
          console.log(this.pais);
        },
        (error) => {
          this.errorPeticion = true;
        }
      );
  }
}
