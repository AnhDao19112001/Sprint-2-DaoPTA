package com.example.ad_racing_be.product.repository;

import com.example.ad_racing_be.product.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeProductRepository extends JpaRepository<TypeProduct, Long> {
    @Query(value = "SELECT t.id_type, t.name_type FROM sprint_2_ad_racing.type_product as t",nativeQuery = true)
    List<TypeProduct> findAllType();
}
