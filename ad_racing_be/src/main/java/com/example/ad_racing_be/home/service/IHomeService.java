package com.example.ad_racing_be.home.service;

import com.example.ad_racing_be.home.dto.ProductForHomePageDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.method.P;

import java.util.List;

public interface IHomeService {
    List<ProductForHomePageDto> findProductForHomePage(String nameProduct, String nameType);

    Page<ProductForHomePageDto> getListProductWithPagination(String nameProduct, String nameType, Pageable pageable);
    List<ProductForHomePageDto> findFavoriteProductForHomepage();
}
