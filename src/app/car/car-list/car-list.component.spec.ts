/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CarListComponent } from './car-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Car } from '../car';
import { CarService } from '../car.service';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ CarListComponent ],
      providers: [ CarService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const car = new Car(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      )
      component.cars.push(car);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    expect(debug.query(By.css('table'))).toBeTruthy();
  });

  it('should render a table with 4 rows', () => {
    expect(debug.queryAll(By.css('tr')).length).toBe(4);
  });

  it('should render a table with 4 columns', () => {
    expect(debug.queryAll(By.css('th')).length).toBe(4);
  });

});
