package com.rae.hire.service;

import com.rae.hire.dto.OfferDTO;
import com.rae.hire.mapper.OfferMapper;
import com.rae.hire.model.Offer;
import com.rae.hire.repository.OfferRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private OfferMapper offerMapper;

    public Offer saveOffer(OfferDTO offerDTO, HttpServletRequest request) {

        var ip = getClientIp(request);
        var offer = offerMapper.toModel(offerDTO, ip);
        return offerRepository.save(offer);
    }

    private String getClientIp(HttpServletRequest request) {
        String remoteAddr = "";
        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || remoteAddr.isEmpty()) {
                remoteAddr = request.getRemoteAddr();
            }
        }
        return remoteAddr;
    }
}
