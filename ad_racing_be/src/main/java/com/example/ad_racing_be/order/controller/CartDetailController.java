package com.example.ad_racing_be.order.controller;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.service.ICartDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart-detail")
public class CartDetailController {
    @Autowired
    private ICartDetailService cartDetailService;
    @GetMapping("/list")
    public ResponseEntity<List<ICartDetailDto>> findAllCartDetail(@RequestParam String userName){
        List<ICartDetailDto> cartDetailDtos = cartDetailService.getAllCartDetail(userName);
        return new ResponseEntity<>(cartDetailDtos, HttpStatus.OK);
    }
    
}
