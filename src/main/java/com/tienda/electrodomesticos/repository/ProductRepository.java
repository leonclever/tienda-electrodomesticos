package com.tienda.electrodomesticos.repository;

import com.tienda.electrodomesticos.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
