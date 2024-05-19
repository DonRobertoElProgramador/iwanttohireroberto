package com.rae.hire.model;

import com.rae.hire.enums.ContractType;
import com.rae.hire.enums.PaymentStructure;
import com.rae.hire.enums.WorkModality;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "offers")
@Data
public class Offer {
    @Id
    private String id;

    @NotNull(message = "Creation date cannot be null")
    private LocalDateTime creationDate;

    @NotNull(message = "IP cannot be null")
    @NotEmpty(message = "IP cannot be empty")
    private String ip;

    @NotNull(message = "Email cannot be null")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    private String companyName;

    @NotNull(message = "User name cannot be null")
    @NotEmpty(message = "User name cannot be empty")
    private String userName;

    @NotNull(message = "Telephone cannot be null")
    @NotEmpty(message = "Telephone cannot be empty")
    private Long telephone;

    @NotNull(message = "Contract type cannot be null")
    private ContractType contractType;

    @NotNull(message = "Technologies cannot be null")
    @NotEmpty(message = "Technologies cannot be empty")
    private String technologies;

    private String offerDescription;

    @NotNull(message = "Work modality cannot be null")
    private WorkModality workModality;

    @NotNull(message = "Payment structure cannot be null")
    private PaymentStructure paymentStructure;

    @NotNull(message = "Min amount cannot be null")
    @NotEmpty(message = "Min amount cannot be empty")
    private Integer minAmount;

    @NotNull(message = "Max amount cannot be null")
    @NotEmpty(message = "Max amount cannot be empty")
    private Integer maxAmount;

    private String paymentObservations;
}
