package com.example.ad_racing_be.order.repository;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.dto.ProductProjection;
import com.example.ad_racing_be.order.model.CartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetail, Long> {

    @Query(value = "SELECT p.id_product AS idProduct," +
            " p.name_product AS nameProduct, " +
            "p.price AS price," +
            " i.image_path AS imagePath," +
            " c.quantity AS quantity " +
            "FROM cart_detail c " +
            "JOIN app_user au on au.id = c.app_user_id " +
            "JOIN product p on p.id_product = c.id_product " +
            "JOIN image i on p.id_product = i.id_product " +
            "WHERE au.id = :id",nativeQuery = true)
    List<ICartDetailDto> findAllCart(Long id);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO cart_detail(quantity, app_user_id, id_product) " +
            "VALUES (:quantity, :appUserId, :idProduct)",nativeQuery = true)
    void createCart(Integer quantity, Long appUserId, Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM cart_detail c " +
            "WHERE c.id_product = :idProduct " +
            "AND c.app_user_id = :appUserId",nativeQuery = true)
    void deletedCart(Long idProduct, Long appUserId);

    @Query(value = "SELECT c.id FROM cart_detail c " +
            "WHERE c.id_product = :idProduct " +
            "AND c.app_user_id = :appUserId",nativeQuery = true)
    Long getIdByCart(Long appUserId,Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart_detail c " +
            "SET c.quantity = c.quantity + 1 " +
            "WHERE c.id_product = :idProduct " +
            "AND c.app_user_id = :appUserId",nativeQuery = true)
    void increaseQuantity(Long appUserId, Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart_detail c " +
            "SET c.quantity = c.quantity - 1 " +
            "WHERE c.id_product = :idProduct " +
            "AND c.app_user_id = :appUserId " +
            "AND c.quantity >= 1",nativeQuery = true)
    void reduceQuantity(Long appUserId, Long idProduct);

    @Query(value = "SELECT " +
            "p.id_product AS idProduct, " +
            "p.name_product AS nameProduct, " +
            "p.code_product AS codeProduct, " +
            "p.price AS price, " +
            "p.description AS description, " +
            "p.quantity AS quantity, " +
            "t.name_type AS nameType, " +
            "GROUP_CONCAT(i.image_path) AS imagePath " +
            "FROM product p " +
            "JOIN type_product t ON p.id_type = t.id_type " +
            "LEFT JOIN image i ON p.id_product = i.id_product " +
            "WHERE p.id_product = :idProduct " +
            "GROUP BY p.id_product",nativeQuery = true)
    ProductProjection getProduct(@Param("idProduct") Long idProduct);
}
