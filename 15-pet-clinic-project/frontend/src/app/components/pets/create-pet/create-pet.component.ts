import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pet } from 'src/app/models/Pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet!: Pet;

  petRegisterForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    weight: ['', Validators.required],
  });

  constructor(
    private toastrService: ToastrService,
    private petsService: PetsService,
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void { }

  submit(): void {
    this.pet = this.petRegisterForm.getRawValue();
    this.petsService.create(this.pet).subscribe(
      (success) => {
        this.router.navigate(['/pets']);
        if (success.status === 201) {
          this.toastrService.success('Successfully created!', 'Alert');
        }
      }
    );
  }

}
