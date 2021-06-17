import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { AllPetsComponent } from './pets/all-pets/all-pets.component';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';

const routes: Routes = [
  { path: '', component: AllPetsComponent },
  { path: 'pets', component: AllPetsComponent },
  { path: 'edit', component: EditPetComponent },
  { path: 'create', component: CreatePetComponent },
  { path: 'owners', component: OwnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
