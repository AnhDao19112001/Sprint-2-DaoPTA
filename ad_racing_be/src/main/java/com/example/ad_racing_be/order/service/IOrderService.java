package com.example.ad_racing_be.order.service;

import com.example.ad_racing_be.order.dto.IOderDto;
import com.example.ad_racing_be.order.dto.IOrderProjection;
import com.example.ad_racing_be.order.dto.OderDetailDto;
import com.example.ad_racing_be.order.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface IOrderService {
    void createOrders(OderDetailDto oderDetailDto, String userName);
    Integer checkIdOrdersDetail(String appUserId, Long idProduct);
    Page<IOderDto> getOrders(String userName, Pageable pageable);
    List<Orders> getAllOrders(String userName);

    Page<IOrderProjection> getAllListOrder(Pageable pageable);
    Page<IOrderProjection> findByDateTimeRange(Pageable pageable,
                                               LocalDate startDateTime,
                                               LocalDate endDateTime);
}
