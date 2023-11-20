package com.example.ad_racing_be.order.repository;

import com.example.ad_racing_be.order.dto.IOderDto;
import com.example.ad_racing_be.order.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into orders(date_time,flag_deleted,app_user_id) " +
            "values (:dateTime , false , :appUserId)",nativeQuery = true)
    void createOrders(String dateTime, Long appUserId);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO order_detail(flag_deleted,current_price,quantity,id_order,id_product) " +
            "VALUES (false,:price,:quantity,:idOrder,:idProduct)",nativeQuery = true)
    void createOderDetail(@Param("price") Float price,
                          @Param("idOrder") Long idOrder,
                          @Param("quantity") Integer quantity,
                          @Param("idProduct") Long idProduct);

    @Query(value = "SELECT max(id) FROM orders",nativeQuery = true)
    Long getIdMaxOrder();

    @Query(value = "SELECT o.id FROM order_detail od " +
            "JOIN orders o ON od.id_order = o.id " +
            "WHERE o.app_user_id = :appUserId AND " +
            "od.id_product = :idProduct LIMIT 1",nativeQuery = true)
    Integer checkOrderDetail(Long appUserId, Long idProduct);

    @Query(value = "SELECT o.date_time, sum(current_price) as price " +
            "FROM orders o " +
            "JOIN order_detail od ON od.id_order = o.id " +
            "WHERE o.app_user_id = :id " +
            "GROUP BY o.date_time",nativeQuery = true)
    Page<IOderDto> getOrderDto(Long id, Pageable pageable);

    @Query(value = "SELECT o.* " +
            "FROM orders as o " +
            "JOIN app_user a ON a.id = o.app_user_id " +
            "WHERE o.app_user_id = :appUserId AND o.flag_deleted = false " +
            "ORDER BY o.date_time asc ",nativeQuery = true)
    List<Orders> listOrders(@Param("appUserId") Long appUserId);
}
