package lk.mylabs.rentcloud.rentservice.service;

import lk.mylabs.rentcloud.model.rent.Rent;
import lk.mylabs.rentcloud.rentservice.model.DetailResponse;

import java.util.List;

public interface RentService {
    Rent save(Rent customer);

    Rent findById(int id);

    List<Rent> findAll();

    DetailResponse findDetailResponse(int id);
}
