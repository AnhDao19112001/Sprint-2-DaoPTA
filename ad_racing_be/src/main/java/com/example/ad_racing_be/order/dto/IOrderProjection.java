package com.example.ad_racing_be.order.dto;

public interface IOrderProjection {
    Long getIdOrder();
    Long getId();
    String getCode();
    String getFullName();
    String getOrderDetailPrice();
    String getOrderDate();
}
