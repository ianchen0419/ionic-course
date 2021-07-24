import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailPageRoutingModule } from './recipe-detail-routing.module';

import { RecipeDetailPage } from './recipe-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot([]),
    RecipeDetailPageRoutingModule
  ],
  declarations: [RecipeDetailPage]
})
export class RecipeDetailPageModule {}
