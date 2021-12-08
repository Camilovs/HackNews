// Componentes y Modulos de Angular y Material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// Mis Componentes y Modulos
import { TopComponent } from './pages/top/top.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
@NgModule({
  declarations: [
    TopComponent,
    NotfoundComponent,
    NewsItemComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports:[
    TopComponent,
    NotfoundComponent,
  ]
})
export class NewsModule { }
