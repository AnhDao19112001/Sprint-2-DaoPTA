use sprint_2_ad_racing;

DELIMITER //
CREATE PROCEDURE insert_acc(IN pass VARCHAR(255), IN user_name VARCHAR(255), in role_id bigint)
BEGIN
    DECLARE id INT;
    INSERT INTO app_user (flag_deleted, pass, user_name)
    VALUES (0, pass, user_name);
    SELECT au.id INTO id FROM app_user au WHERE au.user_name LIKE user_name LIMIT 1;
    INSERT INTO user_role (app_user_id, app_role_id)
    VALUES (id,2);
END;
//
DELIMITER ;
 call insert_acc ("123456","kimthanh",2)
 
 DELIMITER //
 CREATE PROCEDURE update_img(image_path varchar(255), id bigint)
 BEGIN
 update image set flag_deleted = true where image.id_product = id;
 insert into image(image_path,flag_deleted,id_product)
 value(image_path,0,id);
 END;
 //
 DELIMITER ;
 call update_img ("abc",1)




