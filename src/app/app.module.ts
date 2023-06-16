import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonModal } from './components/pokemon-modal/pokemon-modal.component';

import { HttpClientModule } from '@angular/common/http';;
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    ImageModule,
    CarouselModule,
    DialogModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
