package com.example.ad_racing_be.order.service;

import com.example.ad_racing_be.order.dto.IOderDto;
import com.example.ad_racing_be.order.dto.OderDetailDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrderService {
    void createOrders(OderDetailDto oderDetailDto, String userName);
    Integer checkIdOrdersDetail(String appUserId, Long idProduct);
    Page<IOderDto> getOrders(String userName, Pageable pageable);
}
