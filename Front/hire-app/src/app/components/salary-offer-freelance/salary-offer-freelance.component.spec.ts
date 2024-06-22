import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOfferFreelanceComponent } from './salary-offer-freelance.component';

describe('SalaryOfferFreelanceComponent', () => {
  let component: SalaryOfferFreelanceComponent;
  let fixture: ComponentFixture<SalaryOfferFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryOfferFreelanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryOfferFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
