import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistraionHistoryComponent } from './customer-registraion-history.component';

describe('CustomerRegistraionHistoryComponent', () => {
  let component: CustomerRegistraionHistoryComponent;
  let fixture: ComponentFixture<CustomerRegistraionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistraionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegistraionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
