package com.example.ad_racing_be.order.dto;

public interface OrderDetailProjection {
    String getNameProduct();
    String getImageProduct();
    String getQuantityInCart();
    Float getPrice();
}
