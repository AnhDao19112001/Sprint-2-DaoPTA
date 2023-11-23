package com.example.ad_racing_be.order.controller;

import com.example.ad_racing_be.order.dto.ICartDetailDto;
import com.example.ad_racing_be.order.dto.ProductProjection;
import com.example.ad_racing_be.order.model.Orders;
import com.example.ad_racing_be.order.service.ICartDetailService;
import com.example.ad_racing_be.order.service.IOrderService;
import com.example.ad_racing_be.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    @Autowired
    private IProductService productService;
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
            cartDetailService.increaseQuantity(userName, idProduct);
            return new ResponseEntity<>(HttpStatus.OK);
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
    @PostMapping("/increase")
    public ResponseEntity<?> increaseQuantity(@RequestParam String userName,
                                              @RequestParam Long idProduct){
        cartDetailService.increaseQuantity(userName, idProduct);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/reduce")
    public ResponseEntity<?> reduceQuantity(@RequestParam String userName,
                                            @RequestParam Long idProduct){
        cartDetailService.reduceQuantity(userName, idProduct);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/check-quantity")
    public ResponseEntity<?> checkQuantity(@RequestParam("idProduct") Long idProduct,
                                           @RequestParam("inputQuantity") Long inputQuantity){
        ProductProjection projection = cartDetailService.getProductToCheck(idProduct);
        if (productService.existsByIdAndFlagDeletedIsFalse(idProduct)
            && projection.getQuantity() >= inputQuantity ){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
    @GetMapping("/get-detail")
    public ResponseEntity<?> getProductDisplay(@RequestParam("idProduct") String idProduct){
        try {
            Long id = Long.parseLong(idProduct);
            if (productService.existsByIdAndFlagDeletedIsFalse(id)){
                return new ResponseEntity<>(cartDetailService.getProductToCheck(id),HttpStatus.OK);
            }
        } catch (NumberFormatException e){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
}
