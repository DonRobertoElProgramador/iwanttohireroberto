package com.rae.hire.controller;

import com.rae.hire.dto.OfferDTO;
import com.rae.hire.model.Offer;
import com.rae.hire.service.OfferService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/offer")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @PostMapping
    public Offer createOffer(@Valid @RequestBody OfferDTO offer, HttpServletRequest request) {
        return offerService.saveOffer(offer, request);
    }

    @GetMapping
    public String test() {
        return "Hola";
    }
}
