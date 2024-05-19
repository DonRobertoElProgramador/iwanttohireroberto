package com.rae.hire.dto;


import com.rae.hire.enums.ContractType;
import com.rae.hire.enums.PaymentStructure;
import com.rae.hire.enums.WorkPeriod;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record OfferDTO(
        @NotNull(message = "Email cannot be null")
        @NotEmpty(message = "Email cannot be empty")
        String email,
        String companyName,
        @NotNull(message = "User name cannot be null")
        @NotEmpty(message = "User name cannot be empty")
        String userName,
        @NotNull(message = "Telephone cannot be null")
        @NotEmpty(message = "Telephone cannot be empty")
        String telephone,
        @NotNull(message = "Contract type cannot be null")
        ContractType contractType,
        @NotNull(message = "Technologies cannot be null")
        @NotEmpty(message = "Technologies cannot be empty")
        String technologies,
        String offerDescription,
        @NotNull
        WorkPeriod workPeriod,
        @NotNull
        Boolean onlyOccasionally,
        @NotNull
        @Min(0)
        @Max(31)
        Integer daysForPeriod,
        @NotNull(message = "Payment structure cannot be null")
        PaymentStructure paymentStructure,
        @NotNull(message = "Min amount cannot be null")
        @Min(0)
        Integer minAmount,
        @NotNull(message = "Max amount cannot be null")
        @Min(0)
        Integer maxAmount,
        String paymentObservations
) {}
