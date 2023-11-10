package com.example.ad_racing_be.order;

import com.example.ad_racing_be.user.model.AppUser;

import javax.persistence.*;

@Entity
public class UserOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "app_user_id")
    private AppUser appUser;
    @ManyToOne
    @JoinColumn(name = "id_order")
    private Orders orders;

    public UserOrder() {
    }

    public UserOrder(Long id, AppUser appUser, Orders orders) {
        this.id = id;
        this.appUser = appUser;
        this.orders = orders;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Orders getOrder() {
        return orders;
    }

    public void setOrder(Orders orders) {
        this.orders = orders;
    }
}
