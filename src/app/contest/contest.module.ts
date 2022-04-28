import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestPageRoutingModule } from './contest-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContestPage } from './contest.page';
import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestPageRoutingModule,
    NgbModule,
  ],
  declarations: [ContestPage, AddPortfolioComponent, PortfolioComponent]
})
export class ContestPageModule { }
