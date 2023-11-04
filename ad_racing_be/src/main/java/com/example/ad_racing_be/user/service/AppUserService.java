package com.example.ad_racing_be.user.service;

import com.example.ad_racing_be.user.dto.JwtResponseUserDetail;
import com.example.ad_racing_be.user.model.AppUser;
import com.example.ad_racing_be.user.model.UserRole;
import com.example.ad_racing_be.user.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppUserService implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByName(username);
        if (appUser == null) {
            throw new UsernameNotFoundException("User name or password is wrong");
        }

        List<GrantedAuthority> grantList = new ArrayList<>();
        for (UserRole userRole : appUser.getUserRoles()) {
            grantList.add(new SimpleGrantedAuthority(userRole.getAppRole().getNameRole()));
        }
        UserDetails userDetails = new JwtResponseUserDetail(
                appUser.getUserName(),
                appUser.getPass(),
                appUser.getFlagOnline(),
                grantList);
        appUserRepository.updateAppUserIsOnline(appUser);
        return userDetails;
    }

    @Override
    public Boolean existsByUsername(String userName) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        return appUser != null;
    }

    @Override
    public Boolean createNewAppUser(AppUser appUser, String role) {
        Integer amountAppUserCreated = appUserRepository.createNewAppUser(appUser);
//        Long roleId = appUserRepository.findAppRoleIdByName(role);
//        AppUser currentAppUser = appUserRepository.findAppUserByName(appUser.getUserName());
//        appUserRepository.insertRoleForCustomer(roleId, currentAppUser.getId());
        return amountAppUserCreated > 0;
    }

    @Override
    public Boolean logout(String userName) {
        return appUserRepository.updateAppUserIsOffline(userName) > 0;
    }

    @Override
    public Long findAppUserIdByUserName(String userName) {
        return appUserRepository.findIdByUserName(userName);
    }
}
