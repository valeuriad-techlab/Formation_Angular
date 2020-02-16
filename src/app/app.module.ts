import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './Components/root/app.component';
import { AideComponent } from './Components/aide/aide.component';
import { BienvenueComponent } from './Components/bienvenue/bienvenue.component';
import { CoConteneurParentComponent } from './Components/corrections/co-conteneur-parent/co-conteneur-parent.component';
import { CoCommunicationComponent } from './Components/corrections/co-communication/co-communication.component';
import { CoApiRestComponent } from './Components/corrections/co-api-rest/co-api-rest.component';
import { CoPipeComponent } from './Components/corrections/co-pipe/co-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AideComponent,
    BienvenueComponent,
    CoConteneurParentComponent,
    CoCommunicationComponent,
    CoApiRestComponent,
    CoPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
