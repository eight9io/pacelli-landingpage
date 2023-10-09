import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const bookingValidate = yup.object({
  email: yup.string().email().required(),
  name: yup.string().min(2).required(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  date: yup.date().min(new Date()),
  time: yup.string(),
  note: yup.string(),
});
