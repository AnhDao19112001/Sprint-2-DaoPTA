package com.example.ad_racing_be.user.repository;

import com.example.ad_racing_be.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: createNewAppUser
     * @param appUser appUser
     * @return Integer
     */
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO app_user(full_name, email, user_name, `pass`," +
            "address,phone,image,flag_deleted,flag_online) " +
            "VALUES ( :#{#appUser.fullName}, :#{#appUser.email}, " +
            ":#{#appUser.userName}, :#{#appUser.pass}, :#{#appUser.address}, " +
            ":#{#appUser.phone}, :#{#appUser.image},0,0)",nativeQuery = true)
    Integer createNewAppUser(AppUser appUser);

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: updateAppUserIsOnline
     * @param appUser appUser
     * @return Integer
     */
    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user set flag_online = 1 WHERE id = :#{#appUser.id}",nativeQuery = true)
    Integer updateAppUserIsOnline (AppUser appUser);

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: updateAppUserIsOffline
     * @param userName userName
     * @return
     */
    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user set flag_online = 0 WHERE user_name = :userName",nativeQuery = true)
    Integer updateAppUserIsOffline (@Param("userName") String userName);

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: findIdByUserName
     * @param userName userName
     * @return Long
     */
    @Query(value = "SELECT au.id from sprint_2_ad_racing.app_user au WHERE au.user_name = :userName",nativeQuery = true)
    Long findIdByUserName(@Param("userName") String userName);

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: findAppRoleIdByName
     * @param nameRole nameRole
     * @return Long
     */
    @Query(value =  " select r.id from app_role r where r.name_role = :nameRole " ,nativeQuery = true)
    Long findAppRoleIdByName(@Param("nameRole")String nameRole);

    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM app_user",nativeQuery = true)
    void insertRoleForCustomer(Long roleId, Long id);
}
