import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { AllPetsComponent } from './components/pets/all-pets/all-pets.component';
import { CreatePetComponent } from './components/pets/create-pet/create-pet.component';
import { EditPetComponent } from './components/pets/edit-pet/edit-pet.component';

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
