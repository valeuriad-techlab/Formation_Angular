import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AideComponent } from './Components/aide/aide.component';
import { BienvenueComponent } from './Components/bienvenue/bienvenue.component';
import { CoConteneurParentComponent } from './Components/corrections/co-conteneur-parent/co-conteneur-parent.component';
import { CoPipeComponent } from './Components/corrections/co-pipe/co-pipe.component';


const routes: Routes = [
  { path: 'aide', component: AideComponent },
  { path: 'correction', component: CoConteneurParentComponent },
  { path: 'correction/pipe', component: CoPipeComponent },
  { path: '', component: BienvenueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


