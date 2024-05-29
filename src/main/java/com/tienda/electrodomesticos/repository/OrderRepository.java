package com.tienda.electrodomesticos.repository;

import com.tienda.electrodomesticos.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
