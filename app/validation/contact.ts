import * as yup from 'yup';
/* eslint-disable */
export const contactValidate = (t: any) => {
  return yup.object({
    email: yup
      .string()
      .email(t('common:validate.email'))
      .required(
        t('common:validate.required', {
          label: t('common:form.email.label', null, 'Email'),
        }),
      ),
    fullname: yup
      .string()
      .min(
        2,
        t('common:validate.min', {
          label: t('common:form.name.label', null, 'Name'),
          min: 2,
        }),
      )
      .required(
        t('common:validate.required', {
          label: t('common:form.name.label', null, 'Name'),
        }),
      ),
    message: yup.string(),
    reCaptcha: yup.boolean().required(t('common:validate.reCaptcha')),
  });
};
