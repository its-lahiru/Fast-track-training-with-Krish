import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OwnersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OwnersComponent
  ]
})
export class OwnersModule { }
