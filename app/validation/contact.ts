import * as yup from 'yup';

export const contactValidate = yup.object({
  email: yup.string().email().required(),
  fullname: yup.string().min(2).required(),
  message: yup.string(),
  reCaptcha: yup
    .boolean()
    .required('The terms and conditions must be accepted.'),
});
