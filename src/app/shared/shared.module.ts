// Componentes de Angular y Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

// Mis Componentes y modulos
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
