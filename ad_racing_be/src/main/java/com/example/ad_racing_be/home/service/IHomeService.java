package com.example.ad_racing_be.home.service;

import com.example.ad_racing_be.home.dto.ProductForHomePageDto;

import java.util.List;

public interface IHomeService {
    List<ProductForHomePageDto> findProductForHomePage(String keyword, String type);
}
