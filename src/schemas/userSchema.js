import * as yup from "yup";

const passwordRules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/;
// "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"

const emailRules = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
// is a regular expression that matches most standard email addresses.

export const userSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required")
        .min(3, "First Name is too short")
        .max(30, "First Name must be no more than 30 characters"),

    lastName: yup
        .string()
        .required("Last Name is required")
        .min(3, "Last Name is too short")
        .max(30, "Last Name must be no more than 30 characters"),

    email: yup
        .string()
        .required("E-mail is required")
        .email("Please enter a valid email address")
        .matches(emailRules, { message: "Please enter a valid email address" }),

    password: yup
        .string()
        .required("Password is required")
        .min(7, "Password is too short")
        .max(20, "Password must be no more than 20 characters")
        .matches(passwordRules, {
            message:
                "Please create a stronger password. Must contain at least 7 Characters, 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special Case Character",
        })
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});
