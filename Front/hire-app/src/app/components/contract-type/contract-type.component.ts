import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'contract-type',
  standalone: true,
  imports: [],
  templateUrl: './contract-type.component.html',
  styleUrl: './contract-type.component.scss'
})
export class ContractTypeComponent {
  constructor(private translationService: TranslationService) {}
}
