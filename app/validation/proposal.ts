import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const proposalValidate = yup.object({
  email: yup.string().email().required('Email is required'),
  name: yup.string().min(2).required('Name is required'),
  phone: yup.string().matches(phoneRegExp).required('Phone is required'),
  occupation: yup.string().required('Occupation is required'),
  reCaptcha: yup
    .boolean()
    .required('The terms and conditions must be accepted.'),
});
