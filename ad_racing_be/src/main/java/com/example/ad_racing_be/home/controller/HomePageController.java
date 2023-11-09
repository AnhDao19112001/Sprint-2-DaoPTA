package com.example.ad_racing_be.home.controller;

import com.example.ad_racing_be.home.dto.ProductForHomePageDto;
import com.example.ad_racing_be.home.service.IHomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/home")
public class HomePageController {
    @Autowired
    private IHomeService homeService;
    @GetMapping("/list")
    public ResponseEntity<List<ProductForHomePageDto>> findProductHomePage(@RequestParam(defaultValue = "",required = false) String keyword,
                                                                           @RequestParam(defaultValue = "",required = false) String type){
    List<ProductForHomePageDto> pageDtoList = homeService.findProductForHomePage(keyword, type);
        if (pageDtoList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(pageDtoList,HttpStatus.OK);
    }
}
