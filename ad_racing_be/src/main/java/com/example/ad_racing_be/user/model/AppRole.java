package com.example.ad_racing_be.user.model;

import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name_role;
    private Boolean flagDeleted;
    @OneToMany(mappedBy = "appRole")
    private Set<UserRole> userRoles;
    public AppRole() {
    }

    public AppRole(Long id, String name_role, Boolean flagDeleted, Set<UserRole> userRoles) {
        this.id = id;
        this.name_role = name_role;
        this.flagDeleted = flagDeleted;
        this.userRoles = userRoles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName_role() {
        return name_role;
    }

    public void setName_role(String name_role) {
        this.name_role = name_role;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }
}
