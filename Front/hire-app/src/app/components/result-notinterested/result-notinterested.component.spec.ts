import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNotinterestedComponent } from './result-notinterested.component';

describe('ResultNotinterestedComponent', () => {
  let component: ResultNotinterestedComponent;
  let fixture: ComponentFixture<ResultNotinterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultNotinterestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultNotinterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
