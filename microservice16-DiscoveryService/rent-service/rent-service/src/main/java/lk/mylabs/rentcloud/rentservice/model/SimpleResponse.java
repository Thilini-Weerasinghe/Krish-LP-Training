package lk.mylabs.rentcloud.rentservice.model;

import lk.mylabs.rentcloud.model.rent.Rent;
import org.springframework.beans.factory.annotation.Autowired;

public class SimpleResponse implements Response {

    Rent rent;


    public SimpleResponse(Rent rent) {
        this.rent = rent;
    }

    public Rent getRent() {
        return rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }
}
