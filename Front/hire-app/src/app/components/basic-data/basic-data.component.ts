import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'basic-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent {

  basicDataForm: FormGroup;
  @Output() showContractType = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private translationService: TranslationService) {
    this.basicDataForm = this.fb.group({
      companyName: [''],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  goToContractType() {
    if (this.basicDataForm.valid) {
      console.log('Form is valid, navigating to next page...');
      this.showContractType.emit();
    } else {
      console.log('Form is invalid, please fill out the required fields.');
    }
  }

  getTranslation(input : string){
    return this.translationService.translate(input)
  }

}
