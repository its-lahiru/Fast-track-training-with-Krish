import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { PetsComponent } from './pets.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PetsComponent,
    CreatePetComponent,
    EditPetComponent,
    AllPetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    PetsComponent
  ]
})
export class PetsModule { }
