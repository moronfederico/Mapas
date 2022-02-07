import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';



import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  //schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZIHr12JcL1pmwxB6UHETA_5Oatk3Vmuk'
               
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
