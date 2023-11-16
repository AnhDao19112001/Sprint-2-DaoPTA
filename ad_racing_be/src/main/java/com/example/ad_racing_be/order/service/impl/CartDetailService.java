package com.example.ad_racing_be.order.service.impl;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.dto.ProductProjection;
import com.example.ad_racing_be.order.repository.ICartDetailRepository;
import com.example.ad_racing_be.order.service.ICartDetailService;
import com.example.ad_racing_be.user.model.AppUser;
import com.example.ad_racing_be.user.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDetailService implements ICartDetailService {
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Autowired
    private IAppUserRepository appUserRepository;
    @Override
    public List<ICartDetailDto> getAllCartDetail(String userName) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        return cartDetailRepository.findAllCart(appUser.getId());
    }

    @Override
    public void addCartDetail(Integer quantity, String userName, Long idProduct) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        cartDetailRepository.createCart( quantity, appUser.getId(),idProduct);
    }

    @Override
    public void deleteCartDetail(Long idProduct, String userName) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        cartDetailRepository.deletedCart(idProduct, appUser.getId());
    }

    @Override
    public Long findByIdCartDetail(String userName, Long idProduct) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        return cartDetailRepository.getIdByCart(appUser.getId(),idProduct);
    }

    @Override
    public void increaseQuantity(String userName, Long idProduct) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        cartDetailRepository.increaseQuantity(appUser.getId(), idProduct);
    }

    @Override
    public void reduceQuantity(String userName, Long idProduct) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        cartDetailRepository.reduceQuantity(appUser.getId(), idProduct);
    }

    @Override
    public ProductProjection getProductToCheck(Long idProduct) {
        return cartDetailRepository.getProduct(idProduct);
    }
}
