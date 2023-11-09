package com.example.ad_racing_be.home.repository;

import com.example.ad_racing_be.home.dto.ProductForHomePageDto;
import com.example.ad_racing_be.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HomeRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT " +
            "p.id_product AS idProduct, " +
            "p.name_product AS nameProduct, " +
            "p.price AS price, " +
            "t.name_type AS nameType, " +
            "MIN(im.image_path) AS imageProduct " +
            "FROM product p " +
            "JOIN " +
            "type_product t ON p.id_type = t.id_type " +
            "JOIN " +
            "image im ON p.id_product = im.id_product " +
            "WHERE " +
            "p.flag_deleted = false " +
            "AND p.name_product LIKE :keyword " +
            "AND t.name_type LIKE :type " +
            "GROUP BY " +
            "P.id_product, p.name_product, p.price, t.name_type ORDER BY p.id_product DESC",nativeQuery = true)
    List<ProductForHomePageDto> findProductForHomePage(@Param("keyword") String keyword, @Param("type") String type);
}
