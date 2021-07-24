import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOfferPageRoutingModule } from './edit-offer-routing.module';

import { EditOfferPage } from './edit-offer.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot([]),
    EditOfferPageRoutingModule
  ],
  declarations: [EditOfferPage]
})
export class EditOfferPageModule {}
