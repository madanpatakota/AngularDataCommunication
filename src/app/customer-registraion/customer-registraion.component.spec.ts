import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistraionComponent } from './customer-registraion.component';

describe('CustomerRegistraionComponent', () => {
  let component: CustomerRegistraionComponent;
  let fixture: ComponentFixture<CustomerRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistraionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
