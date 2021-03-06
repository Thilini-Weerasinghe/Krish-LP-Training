package com.thilini.rentcloud.authorizationserver.repository;

import com.thilini.rentcloud.authorizationserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailsRepository extends JpaRepository<User, Integer> {

Optional<User> findByUsername (String name);
}
