import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TopComponent } from './news/pages/top/top.component'
import { NotfoundComponent } from './news/pages/notfound/notfound.component';

// Rutas de la aplicacion
const routes: Routes = [

  // Ruta principal, contiene la aplicacion
  {
    path:'top',
    component:TopComponent,
    pathMatch:'full'
  },
  // Ruta para pagina personalizada de error 404
  {
    path:'404',
    pathMatch:'full',
    component:NotfoundComponent
    
  },
  // Redireccion desde el root hacia top, para volverla por defecto.
  {
    path:'',
    pathMatch:'full',
    redirectTo:'top'
    
  },
  // Cualquier otra ruta no encontrada se redirige a 404
  {
    path:'**',
    redirectTo:'404'
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}