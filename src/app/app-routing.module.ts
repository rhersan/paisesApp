import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent, // Pasa usar este modululo debe estar inportado en app.module y eexportado en pais.module 
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {
    path: '**', // Cualquier otro path que no esten declaradas en ruta.
    redirectTo: '' //  se pude crear un componente personalizado 404Componente
  }
];

@NgModule({
  imports: [
    // Se define las rutas principales forRoot // chield hij@s
    RouterModule.forRoot(routes),
  ],
  exports: [
    // se debe de exportar para utilizarlos fuera de este modulo.
    RouterModule
  ]
})
export class AppRoutingModule {


 }
