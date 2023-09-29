import * as yup from 'yup';

export const proposalValidate = yup.object({
  email: yup.string().email().required(),
  name: yup.string().min(2).required(),
  occupation: yup.string().required('Occupation is required'),
});
