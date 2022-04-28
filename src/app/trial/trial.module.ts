import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialPageRoutingModule } from './trial-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TrialPage } from './trial.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrialPageRoutingModule,
    NgbModule
  ],
  declarations: [TrialPage]
})
export class TrialPageModule { }
