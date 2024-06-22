import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNotifiedComponent } from './result-notified.component';

describe('ResultNotifiedComponent', () => {
  let component: ResultNotifiedComponent;
  let fixture: ComponentFixture<ResultNotifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultNotifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultNotifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
