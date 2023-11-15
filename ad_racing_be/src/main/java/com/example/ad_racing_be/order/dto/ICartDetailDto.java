package com.example.ad_racing_be.order.dto;

public interface ICartDetailDto {
    Long getIdProduct();
    String getNameProduct();
    String getImagePath();
    Float getPrice();
    Integer getQuantity();
}
