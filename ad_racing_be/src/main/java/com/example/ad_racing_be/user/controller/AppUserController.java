package com.example.ad_racing_be.user.controller;

import com.example.ad_racing_be.user.common.ValidateAppUser;
import com.example.ad_racing_be.user.config.JwtTokenUtil;
import com.example.ad_racing_be.user.dto.AppUserDto;
import com.example.ad_racing_be.user.model.AppUser;
import com.example.ad_racing_be.user.model.JwtResponse;
import com.example.ad_racing_be.user.service.IAppUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class AppUserController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IAppUserService appUserService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private static final String LOGIN_FAILED = "Đăng nhập thất bại";

    @PostMapping("/login-by-username")
    public ResponseEntity<Object> loginByAccount(@Valid @RequestBody AppUserDto appUserDto,
                                                 BindingResult bindingResult) {

        new AppUserDto().validate(appUserDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    appUserDto.getUserName(), appUserDto.getPass()));
        } catch (DisabledException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Tài khoản của bạn đã bị vô hiệu hoá");
        } catch (BadCredentialsException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }

        AppUser appUser = new AppUser();

        BeanUtils.copyProperties(appUserDto, appUser);

        UserDetails userDetails = appUserService.loadUserByUsername(appUser.getUserName());

        String jwtToken = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity
                .ok()
                .body(new JwtResponse(jwtToken));
    }

    @PostMapping("/register-by-customer")
    public ResponseEntity<Object> registerByCustomer(@Valid @RequestBody AppUserDto appUserDto,
                                                     BindingResult bindingResult) {
        new AppUserDto().validate(appUserDto, bindingResult);
        ValidateAppUser.checkValidateConfirmAppUserPassword(appUserDto.getConfirmPassword(), bindingResult);
        Map<String, String> errorsMap = new HashMap<>();
        if (!ValidateAppUser.checkVerificationPassword(appUserDto.getPass(), appUserDto.getConfirmPassword())) {
            bindingResult.rejectValue("confirmPassword", "", "Mật khẩu không khớp");
        }
        if (bindingResult.hasErrors()) {
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorsMap.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return ResponseEntity
                    .status(HttpStatus.NOT_ACCEPTABLE)
                    .body(errorsMap);
        }
        boolean existsByUsername = appUserService.existsByUsername(appUserDto.getUserName());
        if (existsByUsername) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Tài khoản này đã tồn tại");
        }

        AppUser appUser = new AppUser();
        BeanUtils.copyProperties(appUserDto, appUser);
        appUser.setPass(passwordEncoder.encode(appUser.getPass()));
         appUserService.createNewAppUser(appUser, "ROLE_CUSTOMER");

        return ResponseEntity.ok("Đăng ký thành công, vui lòng bấm nút đăng nhập");
    }

    @GetMapping("/logout/{userName}")
    public ResponseEntity<Object> logout(@PathVariable String userName) {
        boolean logout = appUserService.logout(userName);
        if (logout) {
            return ResponseEntity.ok("Đăng xuất thành công");
        }
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Đăng xuất thất bại, vui lòng chờ trong giây lát");
    }
    @GetMapping("/id-user/{userName}")
    public ResponseEntity<Object> getIdAppUser(@PathVariable String userName){
        AppUser appUser = appUserService.findAppUserIdByUserName(userName);
        if (appUser == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không có dữ liệu!");
        }
        return ResponseEntity.ok().body(appUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getIdCustomer(@PathVariable Long id){
        AppUser appUser = appUserService.findByIdCustomer(id);
        if (appUser == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không có dữ liệu!");
        }
        return ResponseEntity.ok().body(appUser);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Map<String,String>> updateCustomer(@Valid @RequestBody AppUserDto appUserDto,
                                                             @PathVariable Long id,
                                                             BindingResult bindingResult){
        AppUser appUser = appUserService.findByIdCustomer(id);
        new AppUserDto().validate(appUserDto,bindingResult);
        Map<String,String> errors = new HashMap<>();
        if (bindingResult.hasErrors()){
            for (FieldError e: bindingResult.getFieldErrors()) {
                errors.put(e.getField(),e.getDefaultMessage());
            }
        }
        if (errors.size() != 0){
            return new ResponseEntity<>(errors,HttpStatus.NOT_ACCEPTABLE);
        }
        if (appUser == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            BeanUtils.copyProperties(appUserDto,appUser);
            appUser.setId(id);
            appUserService.updateCustomer(appUser);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
