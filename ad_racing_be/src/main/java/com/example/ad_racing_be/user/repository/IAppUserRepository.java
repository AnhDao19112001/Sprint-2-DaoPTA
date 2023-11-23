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
    @Query(value = "SELECT au.* from sprint_2_ad_racing.app_user au WHERE au.user_name = :userName",nativeQuery = true)
    AppUser findIdByUserName(@Param("userName") String userName);

    /**
     * author: DaoPTA
     * workday: 02/11/2023
     * method: findAppRoleIdByName
     * @return Long
     */
    @Modifying
    @Transactional
    @Query(value =  " CALL insert_acc ( :pass, :userName, :roleId)" ,nativeQuery = true)
    void findAppRoleIdByName(@Param("pass") String pass, @Param("userName") String userName,
                             @Param("roleId") Long roleId);

    @Modifying
    @Transactional
    @Query(value =  " CALL insert_acc_use ( :pass, :userName, :roleId, :address, :email, :fullName, " +
            ":image, :phone)" ,nativeQuery = true)
    void findAppRoleIdByNameUser(@Param("pass") String pass, @Param("userName") String userName,
                             @Param("roleId") Long roleId, @Param("address") String address,
                                 @Param("email") String email, @Param("fullName") String fullName,
                                 @Param("image") String image, @Param("phone") String phone);

    @Transactional
    @Modifying
    @Query(value = "UPDATE sprint_2_ad_racing.app_user " +
            "SET full_name = :fullName, email = :email, " +
            " address = :address, phone = :phone " +
            "WHERE id =:id and flag_deleted = false",nativeQuery = true)
    void updateCustomer(@Param("fullName") String fullName,
                        @Param("email") String email,
                        @Param("address") String address,
                        @Param("phone") String phone,
                        @Param("id") Long id);

    @Query(value = "SELECT * FROM app_user where id = :id AND flag_deleted = false",nativeQuery = true)
    AppUser findCustomerById(Long id);
}
