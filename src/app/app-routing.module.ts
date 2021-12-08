import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TopComponent } from './news/pages/top/top.component'
import { NotfoundComponent } from './news/pages/notfound/notfound.component';


const routes: Routes = [
  {
    path:'top',
    component:TopComponent,
    pathMatch:'full'
  },
  {
    path:'404',
    pathMatch:'full',
    component:NotfoundComponent
    
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'top'
    
  },
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