import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'salary-offer-salaried',
  standalone: true,
  imports: [],
  templateUrl: './salary-offer-salaried.component.html',
  styleUrl: './salary-offer-salaried.component.scss'
})
export class SalaryOfferSalariedComponent {

  @Output() showResultNotified = new EventEmitter<void>();
  @Output() showResultNotInterested = new EventEmitter<void>();

  goToResultNotified() {
    this.showResultNotified.emit();
  }
  goToResultNotInterested() {
    this.showResultNotInterested.emit();
  }
}
