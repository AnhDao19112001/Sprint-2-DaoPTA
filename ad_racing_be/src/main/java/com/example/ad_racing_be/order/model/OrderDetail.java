package com.example.ad_racing_be.order.model;

import com.example.ad_racing_be.product.model.Product;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    private Double currentPrice;
    private Boolean flagDeleted;
    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id")
    private Orders orders;
    @ManyToOne
    @JoinColumn(name = "id_product",referencedColumnName = "idProduct")
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(Long id, Integer quantity, Double currentPrice, Boolean flagDeleted, Orders orders, Product product) {
        this.id = id;
        this.quantity = quantity;
        this.currentPrice = currentPrice;
        this.flagDeleted = flagDeleted;
        this.orders = orders;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
