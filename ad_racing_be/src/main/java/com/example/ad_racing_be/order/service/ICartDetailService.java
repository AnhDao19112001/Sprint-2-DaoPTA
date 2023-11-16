package com.example.ad_racing_be.order.service;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.dto.ProductProjection;

import java.util.List;

public interface ICartDetailService {
    List<ICartDetailDto> getAllCartDetail(String userName);
    void addCartDetail(Integer quantity, String userName, Long idProduct);
    void deleteCartDetail(Long idProduct, String userName);
    Long findByIdCartDetail(String userName, Long idProduct);
    void increaseQuantity(String userName, Long idProduct);
    void reduceQuantity(String userName, Long idProduct);
    ProductProjection getProductToCheck(Long idProduct);
}
