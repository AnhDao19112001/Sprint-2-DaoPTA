package com.example.ad_racing_be.user.repository;

import com.example.ad_racing_be.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IAppUserRepository extends JpaRepository<AppUser, Long> {
    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: findAppUserByName
     * @param  userName
     * @return AppUser
     */
    @Transactional
    @Query(value = "SELECT * FROM sprint_2_ad_racing.app_user WHERE " +
            "user_name = :name and flag_deleted = 0",nativeQuery = true)
    AppUser findAppUserByName(@Param("name") String userName);

    
}
