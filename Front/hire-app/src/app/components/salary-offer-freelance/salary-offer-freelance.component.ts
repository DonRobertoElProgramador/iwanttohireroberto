import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'salary-offer-freelance',
  standalone: true,
  imports: [],
  templateUrl: './salary-offer-freelance.component.html',
  styleUrl: './salary-offer-freelance.component.scss'
})
export class SalaryOfferFreelanceComponent {

  @Output() showResultNotified = new EventEmitter<void>();
  @Output() showResultNotInterested = new EventEmitter<void>();

  goToResultNotified() {
    this.showResultNotified.emit();
  }
  goToResultNotInterested() {
    this.showResultNotInterested.emit();
  }
}
