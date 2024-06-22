import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'offer-description',
  standalone: true,
  imports: [],
  templateUrl: './offer-description.component.html',
  styleUrl: './offer-description.component.scss'
})
export class OfferDescriptionComponent {

  @Output() showWorkingPlace = new EventEmitter<void>();

  goToWorkingPlace() {
    this.showWorkingPlace.emit();
  }

}
