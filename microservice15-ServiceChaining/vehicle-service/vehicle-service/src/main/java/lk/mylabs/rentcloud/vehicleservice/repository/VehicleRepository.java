package lk.mylabs.rentcloud.vehicleservice.repository;

import lk.mylabs.rentcloud.model.vehicle.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {

}
