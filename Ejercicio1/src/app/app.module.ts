import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { KistaNoticiasComponent } from './kista-noticias/kista-noticias.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    KistaNoticiasComponent,
    ListaNoticiasComponent,
    NoticiasComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
