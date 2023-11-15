package com.example.ad_racing_be.order.repository;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.model.CartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
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
}
