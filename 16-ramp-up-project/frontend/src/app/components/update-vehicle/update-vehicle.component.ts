import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  carMake: string = '';
  carModel: string = '';
  vin: string = '';

  constructor(
    private router: Router,
    private carService: CarService) { }

  ngOnInit(): void {
    Emitters.carEmitter.subscribe(
      (res: any) => {
        this.id = res.id;
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.email = res.email;
        this.carMake = res.carMake;
        this.carModel = res.carModel;
        this.vin = res.vin;
      }
    );
  }

  updateCar(id: number): void {
    this.carService.updateCar(id, this.firstName, this.lastName, this.email, this.carMake, this.carModel, this.vin)
      .subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
