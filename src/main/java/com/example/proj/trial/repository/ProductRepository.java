package com.example.proj.trial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.proj.trial.model.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
