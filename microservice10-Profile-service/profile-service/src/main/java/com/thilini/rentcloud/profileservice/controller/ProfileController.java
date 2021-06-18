package com.thilini.rentcloud.profileservice.controller;

import com.thilini.rentcloud.commons.model.Customer;
import com.thilini.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/profile" , method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public ResponseEntity<Customer> fetchCustomer(@RequestParam int id){
        Customer customer = customerService.fetchCustomerById(id);

        if(customer==null){
            return ResponseEntity.notFound().build();
        } else {
            return  ResponseEntity.ok().body(customer);
        }

    }


}
