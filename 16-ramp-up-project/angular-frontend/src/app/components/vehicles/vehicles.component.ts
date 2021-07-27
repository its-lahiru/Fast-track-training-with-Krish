import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  cars: Car[] = [];
  loading = true;
  error: any;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars()
      .subscribe(
        (result: any) => {
          this.cars = result?.data?.getAllCars;
          this.loading = result.loading;
          this.error = result.error;
        },
        error => {
          console.log('There was an error sending the getAllCars query', error);
        });
  }

  getACar(id: number) {
    this.carService.getACar(id)
      .subscribe(
        (result: any) => {
          const car = result?.data?.getACar;
          Emitters.carEmitter.emit(car);
        },
        error => {
          console.log('There was an error sending the getACar query', error);
        });
  }

  deleteCar(carId: number) {
    this.carService.deleteCar(carId)
      .subscribe(
        () => {
          this.getAllCars();
        },
        error => {
          console.log('There was an error sending the deleteCar query', error);
        });
  }
}

