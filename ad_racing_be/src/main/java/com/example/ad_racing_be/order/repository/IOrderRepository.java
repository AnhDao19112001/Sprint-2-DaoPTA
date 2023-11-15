package com.example.ad_racing_be.order.repository;

import com.example.ad_racing_be.order.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IOrderRepository extends JpaRepository<Orders, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into orders(code,date_time,flag_deleted,app_user_id) " +
            "values (:code, localtime(),false, :appUserId)",nativeQuery = true)
    void createOrders(@Param("code") String code,@Param("appUserId") Long appUserId);

//    @Transactional
//    @Modifying
//    @Query(value = "",nativeQuery = true)
//    void createOrderDetail();
}
