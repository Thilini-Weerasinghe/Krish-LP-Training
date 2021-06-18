package com.thilini.rentcloud.profileservice.service;

import com.thilini.rentcloud.commons.model.Customer;
import com.thilini.rentcloud.profileservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements  CustomerService{

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer fetchCustomerById(int id) {
        Optional<Customer> customer = customerRepository.findById(id);
//        return customerRepository.getById(id);
        if(customer.isPresent()){
            return customer.get();
        }
        return  null;
    }
}
