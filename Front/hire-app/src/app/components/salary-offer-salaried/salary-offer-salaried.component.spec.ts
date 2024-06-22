import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOfferSalariedComponent } from './salary-offer-salaried.component';

describe('SalaryOfferSalariedComponent', () => {
  let component: SalaryOfferSalariedComponent;
  let fixture: ComponentFixture<SalaryOfferSalariedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryOfferSalariedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryOfferSalariedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
