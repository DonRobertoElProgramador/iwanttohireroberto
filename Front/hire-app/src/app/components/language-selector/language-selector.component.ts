import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Output() showBasicData = new EventEmitter<void>();

  hoveredFlag: string | null = "Choose your language/Selecciona lenguaje";

  goToBasicData() {
    this.showBasicData.emit();
  }

  onMouseOver(flag: string) {
    this.hoveredFlag = flag;
  }

  onMouseOut() {
    this.hoveredFlag = "Choose your language/Selecciona lenguaje";
  }

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

  constructor(private translationService: TranslationService) {}
}
