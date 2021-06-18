import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitters';
import { Pet } from 'src/app/models/Pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

  pets: Pet[] = [];

  arePetRecordsExist = false;

  constructor(
    private toastrService: ToastrService,
    private petsService: PetsService
  ) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this.petsService.getAll().subscribe(
      (res) => {
        this.pets = res;
        if(res.length > 0) {
          this.arePetRecordsExist = true;
        }
      }
    );
  }

  getPet(id: string): void {
    this.petsService.getOne(id).subscribe(
      (res: any) => {
        Emitters.petEmitter.emit(res);
      },
    );
  }

  deletePet(id: string) {
    this.petsService.delete(id).subscribe(
      (success) => {
        this.getAllPets();
        if (success.status === 204) {
          this.toastrService.success('Successfully deleted!', 'Alert');
        }
      }
    );
  }
}
