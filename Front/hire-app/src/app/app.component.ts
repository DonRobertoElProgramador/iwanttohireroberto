import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { BasicDataComponent } from './components/basic-data/basic-data.component';
import { ContractTypeComponent } from './components/contract-type/contract-type.component';
import { OfferDescriptionComponent } from './components/offer-description/offer-description.component';
import { WorkingPlaceComponent } from './components/working-place/working-place.component';
import { SalaryOfferFreelanceComponent } from './components/salary-offer-freelance/salary-offer-freelance.component';
import { SalaryOfferSalariedComponent } from './components/salary-offer-salaried/salary-offer-salaried.component';
import { ResultNotInterestedComponent } from './components/result-notinterested/result-notinterested.component';
import { ResultNotifiedComponent } from './components/result-notified/result-notified.component';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,LanguageSelectorComponent,BasicDataComponent,ContractTypeComponent,OfferDescriptionComponent,
    WorkingPlaceComponent,SalaryOfferFreelanceComponent,SalaryOfferSalariedComponent,ResultNotInterestedComponent,
    ResultNotifiedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease-in-out', style({ left: '-100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('600ms ease-in-out', style({ left: '0%' }))
          ], { optional: true })
        ])
      ])
    ])
  ],
  providers: []
})
export class AppComponent {
  currentPage: 'LANGUAGE-SELECTOR' | 'BASIC-DATA' | 'CONTRACT-TYPE' | 'OFFER-DESCRIPTION' | 'WORKING-PLACE' |
    'SALARY-OFFER-FREELANCE' | 'SALARY-OFFER-SALARIED' | 'RESULT-NOTINTERESTED' | 'RESULT-NOTIFIED'
    = 'LANGUAGE-SELECTOR';

  constructor(private translationService: TranslationService) {}

  showPage(page: 'LANGUAGE-SELECTOR' | 'BASIC-DATA' | 'CONTRACT-TYPE' | 'OFFER-DESCRIPTION' | 'WORKING-PLACE' |
    'SALARY-OFFER-FREELANCE' | 'SALARY-OFFER-SALARIED' | 'RESULT-NOTINTERESTED' | 'RESULT-NOTIFIED') {
    console.log("Mostramos página "+ page)

    this.currentPage = page;
  }

  switchLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }
}
