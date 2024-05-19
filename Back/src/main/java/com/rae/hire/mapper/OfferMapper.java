package com.rae.hire.mapper;

import com.rae.hire.dto.OfferDTO;
import com.rae.hire.enums.PaymentStructure;
import com.rae.hire.enums.WorkModality;
import com.rae.hire.enums.WorkPeriod;
import com.rae.hire.model.Offer;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class OfferMapper {
    public Offer toModel(OfferDTO offerDTO, String ip){
        Offer offer = new Offer();
        LocalDateTime date = LocalDateTime.now();
        offer.setCreationDate(date);
        offer.setIp(ip);

        offer.setEmail(offerDTO.email());
        offer.setCompanyName(offerDTO.companyName());
        offer.setUserName(offerDTO.userName());

        //We only get the numbers
        Long telephoneNumberFromDTO = mapTelephone(offerDTO.telephone());
        offer.setTelephone(telephoneNumberFromDTO);

        offer.setContractType(offerDTO.contractType());
        offer.setTechnologies(offerDTO.technologies());
        offer.setOfferDescription(offerDTO.offerDescription());

        WorkPeriod workPeriod = offerDTO.workPeriod(); //Weekly, Monthly
        boolean onlyOccasionally = offerDTO.onlyOccasionally();
        int daysForPeriod = offerDTO.daysForPeriod();

        try {
            offer.setWorkModality(getWorkModality(workPeriod, daysForPeriod, onlyOccasionally));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        PaymentStructure paymentStructure = offerDTO.paymentStructure();
        offer.setPaymentStructure(paymentStructure);

        int minAmount = offerDTO.minAmount();
        int maxAmount = offerDTO.maxAmount();

        if(paymentStructure==PaymentStructure.UNDEFINED){
            minAmount = 0;
            maxAmount = 0;
        }
        offer.setMinAmount(minAmount);
        offer.setMaxAmount(maxAmount);
        offer.setPaymentObservations(offerDTO.paymentObservations());
        return offer;
    }

    private WorkModality getWorkModality(WorkPeriod workPeriod, int daysForPeriod, boolean onlyOccasionally) throws Exception {
        boolean isSporadicMeetings = onlyOccasionally;
        boolean isFullRemote = daysForPeriod==0;
        boolean isOneDayAWeek = (workPeriod == WorkPeriod.WEEKLY && daysForPeriod==1) ||
                (workPeriod == WorkPeriod.MONTHLY && daysForPeriod==4);
        boolean isOneToThreeDaysAMonth = (workPeriod == WorkPeriod.MONTHLY && daysForPeriod>=1
                && daysForPeriod<4);
        boolean isTwoToThreeDaysAWeek = (workPeriod == WorkPeriod.WEEKLY && (daysForPeriod==2 || daysForPeriod==3))
                ||(workPeriod == WorkPeriod.MONTHLY && daysForPeriod>4 && daysForPeriod<= 12);
        boolean isOnSite =  (workPeriod == WorkPeriod.WEEKLY && (daysForPeriod>3)) ||
                (workPeriod == WorkPeriod.MONTHLY && daysForPeriod>12);

        if(isSporadicMeetings){ return WorkModality.SPORADICMEETINGS; }
        if(isFullRemote){ return WorkModality.FULL_REMOTE; }
        if(isOneDayAWeek) { return WorkModality.ONEDAYAWEEK; }
        if(isOneToThreeDaysAMonth) { return WorkModality.ONETOTHREEDAYSAMONTH; }
        if(isTwoToThreeDaysAWeek) { return WorkModality.TWOORTHREEDAYSAWEEK; }
        if(isOnSite) { return WorkModality.ONSITE; }

        throw new Exception("Error on work modality, the period is not contemplated between the possible options");
    }

    private Long mapTelephone(String telephoneNumberFromDTO){
        telephoneNumberFromDTO = telephoneNumberFromDTO.replaceAll("[^\\d]", "");
        return Long.parseLong(telephoneNumberFromDTO);
    }
}
