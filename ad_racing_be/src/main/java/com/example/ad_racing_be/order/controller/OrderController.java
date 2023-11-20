package com.example.ad_racing_be.order.controller;

import com.example.ad_racing_be.order.dto.IOderDto;
import com.example.ad_racing_be.order.dto.OderDetailDto;
import com.example.ad_racing_be.order.model.Orders;
import com.example.ad_racing_be.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrders(@RequestBody OderDetailDto oderDetailDto,
                                          @RequestParam String userName){
        orderService.createOrders(oderDetailDto,userName);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getOrders(@RequestParam(defaultValue = "5") Integer size,
                                       @RequestParam(defaultValue = "0") Integer page,
                                       @RequestParam String userName){
        Pageable pageable = PageRequest.of(page,size);
        Page<IOderDto> oderDtoPage = orderService.getOrders(userName,pageable);
        return new ResponseEntity<>(oderDtoPage,HttpStatus.OK);
    }
    @GetMapping("/list-order")
    public ResponseEntity<List<Orders>> getAllOrder(@RequestParam String userName){
        List<Orders> ordersList = orderService.getAllOrders(userName);
        return new ResponseEntity<>(ordersList,HttpStatus.OK);
    }
}
