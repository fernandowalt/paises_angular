import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  { path: '', component: PorPaisComponent, pathMatch: 'full' },
  { path: 'region', component: PorRegionComponent },
  { path: 'capital', component: PorCapitalComponent },
  { path: 'pais/:code', component: VerPaisComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  // se configura RouterModule pasandole el array de rutas
  imports: [RouterModule.forRoot(routes)],
  //   se exporta el modulo ya cargado con las rutas principales
  exports: [RouterModule],
})
export class AppRoutingModule {}
