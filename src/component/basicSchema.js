import  * as yup from 'yup'

const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
 email:yup.string().email("please enter valid emmail").required("Required"),
 age:yup.number().positive().integer().required("Required"),
 password:yup.string().min(5).matches(passwordRules,
    {message:"please create stronger password"}).required("Required"),

confirmPassword:yup.string().oneOf([yup.ref('password'),null],
"password must match").required("Required")
});

