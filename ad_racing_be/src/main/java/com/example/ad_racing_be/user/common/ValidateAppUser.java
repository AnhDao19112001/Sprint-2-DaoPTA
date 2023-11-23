package com.example.ad_racing_be.user.common;

import org.springframework.validation.Errors;

public class ValidateAppUser {
    private ValidateAppUser() {
        throw new IllegalStateException("Utility class");
    }
    private static final String NAME_NOT_EMPTY = "Không để trống tài khoản";
    private static final String PASSWORD_NOT_EMPTY = "Không để trống mật khẩu";
    private static final String CHAR_LENGTH_LESS_THREE = "Số lượng ký tự phải lớn hơn hoặc bằng 3";
    private static final String CHAR_LENGTH_GREATER_FIFTY = "Số lượng ký tự bé hơn hoặc bằng 50";
    private static final String USER_NAME = "userName";
    private static final String FULL_NAME = "fullName";
    private static final String EMAIL = "email";
    private static final String ADDRESS = "address";
    private static final String PHONE = "phone";
    private static final String PASSWORD = "pass";
    private static final String CONFIRM_PASSWORD = "confirmPassword";

    public static void checkValidateAppUserName(String name, Errors errors) {
        if (name == null || name.trim().length() == 0) {
            errors.rejectValue(USER_NAME, "", NAME_NOT_EMPTY);
        } else if (name.length() > 50) {
            errors.rejectValue(USER_NAME, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (name.length() < 3) {
            errors.rejectValue(USER_NAME, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserFullName(String fullName, Errors errors) {
        if (fullName == null || fullName.trim().length() == 0) {
            errors.rejectValue(FULL_NAME, "", NAME_NOT_EMPTY);
        } else if (fullName.length() > 50) {
            errors.rejectValue(FULL_NAME, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (fullName.length() < 3) {
            errors.rejectValue(FULL_NAME, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserEmail(String email, Errors errors) {
        if (email == null || email.trim().length() == 0) {
            errors.rejectValue(EMAIL, "", NAME_NOT_EMPTY);
        } else if (email.length() > 50) {
            errors.rejectValue(EMAIL, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (email.length() < 3) {
            errors.rejectValue(EMAIL, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserAddress(String address, Errors errors) {
        if (address == null || address.trim().length() == 0) {
            errors.rejectValue(ADDRESS, "", NAME_NOT_EMPTY);
        } else if (address.length() > 50) {
            errors.rejectValue(ADDRESS, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (address.length() < 3) {
            errors.rejectValue(ADDRESS, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserPhone(String phone, Errors errors) {
        if (phone == null || phone.trim().length() == 0) {
            errors.rejectValue(PHONE, "", NAME_NOT_EMPTY);
        } else if (phone.length() > 11) {
            errors.rejectValue(PHONE, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (phone.length() < 10) {
            errors.rejectValue(PHONE, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserPassword(String pass, Errors errors) {
        if (pass == null || pass.trim().length() == 0) {
            errors.rejectValue(PASSWORD, "", NAME_NOT_EMPTY);
        } else if (pass.length() > 50) {
            errors.rejectValue(PASSWORD, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (pass.length() < 3) {
            errors.rejectValue(PASSWORD, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateConfirmAppUserPassword(String confirmPassword, Errors errors) {
        if (confirmPassword == null || confirmPassword.trim().length() == 0) {
            errors.rejectValue(CONFIRM_PASSWORD, "", PASSWORD_NOT_EMPTY);
        } else if (confirmPassword.length() > 50) {
            errors.rejectValue(CONFIRM_PASSWORD, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (confirmPassword.length() < 3) {
            errors.rejectValue(CONFIRM_PASSWORD, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static boolean checkVerificationPassword(String pass, String confirmPassword) {
        return pass.equals(confirmPassword);
    }

    public static String checkValidateOnlyAppUserName(String name) {
        if (name == null || name.trim().length() == 0) {
            return  NAME_NOT_EMPTY;
        } else if (name.length() > 50) {
            return  CHAR_LENGTH_GREATER_FIFTY;
        } else if (name.length() < 3) {
            return  CHAR_LENGTH_LESS_THREE;
        }
        return "";
    }
}