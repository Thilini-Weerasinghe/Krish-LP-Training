package com.thilini.rentcloud.profileservice.controller;

import com.thilini.rentcloud.commons.model.Customer;
import com.thilini.rentcloud.profileservice.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/profile" , method = RequestMethod.POST)
    @PreAuthorize("hasRole('ROLE_admin')")
    public Customer save(@RequestBody Customer customer){
        return customerService.save(customer);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('read_profile')")
    public ResponseEntity<Customer> fetchCustomer(@RequestParam int id){
        Customer customer = customerService.fetchCustomerById(id);

        if(customer==null){
            return ResponseEntity.notFound().build();
        } else {
            return  ResponseEntity.ok().body(customer);
        }

    }

    @RequestMapping(value="/profiles", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('read_profile')")
    public List<Customer> fetch(){
        return customerService.fetchAllProfiles();
    }


}
