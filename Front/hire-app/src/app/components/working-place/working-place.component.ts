import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'working-place',
  standalone: true,
  imports: [],
  templateUrl: './working-place.component.html',
  styleUrl: './working-place.component.scss'
})
export class WorkingPlaceComponent {

  @Output() showSalaryOfferSalaried = new EventEmitter<void>();
  @Output() showSalaryOfferFreelance = new EventEmitter<void>();

  goToSalaryOfferSalaried() {
    this.showSalaryOfferSalaried.emit();
  }
  goToSalaryOfferFreelance() {
    this.showSalaryOfferFreelance.emit();
  }
}
