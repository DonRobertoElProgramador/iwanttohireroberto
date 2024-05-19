package com.rae.hire.repository;

import com.rae.hire.model.Offer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OfferRepository extends MongoRepository<Offer,String> {
}
