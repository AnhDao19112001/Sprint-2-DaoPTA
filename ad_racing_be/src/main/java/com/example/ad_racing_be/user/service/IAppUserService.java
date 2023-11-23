package com.example.ad_racing_be.user.service;

import com.example.ad_racing_be.user.model.AppUser;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IAppUserService extends UserDetailsService {
    Boolean existsByUsername(String userName);
    void createNewAppUser(AppUser appUser, String role);
    Boolean logout(String userName);
    AppUser findAppUserIdByUserName(String userName);
    void updateCustomer(AppUser appUser);

    AppUser findByIdCustomer(Long id);
}
