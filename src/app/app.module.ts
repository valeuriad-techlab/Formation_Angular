import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './Components/root/app.component';
import { AideComponent } from './Components/aide/aide.component';
import { BienvenueComponent } from './Components/bienvenue/bienvenue.component';
import { CoConteneurParentComponent } from './Components/corrections/co-conteneur-parent/co-conteneur-parent.component';
import { CoCommunicationComponent } from './Components/corrections/co-communication/co-communication.component';
import { CoApiRestComponent } from './Components/corrections/co-api-rest/co-api-rest.component';
import { CoPipeComponent } from './Components/corrections/co-pipe/co-pipe.component';
import { CoReplaceTextPipe } from './Components/corrections/pipes/co-replace-text/co-replace-text.pipe';
import { MyFirstComponentComponent } from './Components/my-first-component/my-first-component.component';
import { EnfantComponent } from './Components/enfant/enfant.component';

import { TextSearchPipe } from './pipes/text-search.pipe';
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AideComponent,
    BienvenueComponent,
    CoConteneurParentComponent,
    CoCommunicationComponent,
    CoApiRestComponent,
    CoPipeComponent,
    CoReplaceTextPipe,
    EnfantComponent,
    MyFirstComponentComponent,
    TextSearchPipe,
    ArraySortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatRippleModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
