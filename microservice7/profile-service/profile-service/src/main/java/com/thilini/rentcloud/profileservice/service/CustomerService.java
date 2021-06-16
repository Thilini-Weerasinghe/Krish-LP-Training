package com.thilini.rentcloud.profileservice.service;

import com.thilini.rentcloud.commons.model.Customer;
import org.springframework.stereotype.Service;


public interface CustomerService {

    Customer save (Customer customer);

    Customer fetchCustomerById(int id);

}
