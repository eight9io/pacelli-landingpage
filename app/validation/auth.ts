import * as yup from 'yup';

export const signupValidate = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});
