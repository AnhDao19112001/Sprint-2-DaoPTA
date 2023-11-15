package com.example.ad_racing_be.order.controller;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.service.ICartDetailService;
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
    @PostMapping("/add")
    public ResponseEntity<?> addCartDetail(@RequestParam Integer quantity,
                                           @RequestParam String userName,
                                           @RequestParam Long idProduct){
        Long cartDetail = cartDetailService.findByIdCartDetail(userName, idProduct);
        if (cartDetail != null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        cartDetailService.addCartDetail(quantity, userName, idProduct);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete-cart-detail")
    public ResponseEntity<?> deletedCartDetail (@RequestParam("idProduct") Long idProduct,
                                                String userName){
        cartDetailService.deleteCartDetail(idProduct, userName);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
