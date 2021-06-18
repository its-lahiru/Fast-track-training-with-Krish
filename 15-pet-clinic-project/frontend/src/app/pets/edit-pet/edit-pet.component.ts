import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Emitters } from 'src/app/emitters/emitters';
import { Pet } from 'src/app/models/Pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  errorMessage = '';

  editForm!: FormGroup;
  pet!: Pet;

  petId!: string;
  name!: string;
  age!: number;
  weight!: number;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private petService: PetsService
  ) { }

  ngOnInit(): void {
    Emitters.petEmitter.subscribe(
      (res: any) => {
        this.petId = res.id;
        this.name = res.name;
        this.age = res.age;
        this.weight = res.weight;
      },
    );

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  update(id: string): void {
    this.pet = this.editForm.getRawValue();
    this.petService.update(id, this.pet).subscribe(
      (success) => {
        this.router.navigate(['/pets']);
        if (success.status === 201) {
          this.toastrService.success('Successfully updated!', 'Alert');
        }
      },
      () => {
        this.errorMessage = 'All fields are required!';
      }
    );
  }
}
