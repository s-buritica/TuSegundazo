import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<Car> = [];
  brands: string[] = [];
  brandCounts: { [brand: string]: number } = {};
  
  constructor(private carService: CarService) { }

  calculateBrandCounts(cars: Car[]): void {
    const count: { [marca: string]: number } = {};
    cars.forEach((car) => {
      if (count[car.marca]) {
        count[car.marca]++;
      } else {
        count[car.marca] = 1;
      }
    });

    const countArray = Object.entries(count);
    countArray.sort((a, b) => b[1] - a[1]);
    const sortedCount: { [marca: string]: number } = {};
    countArray.forEach(([marca, conteo]) => {
      this.brands.push(marca);
      sortedCount[marca] = conteo;
    });

    this.brandCounts = sortedCount;
  }

    getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.calculateBrandCounts(cars);
    });
  }

  ngOnInit() {
    this.getCars();
  }

}
