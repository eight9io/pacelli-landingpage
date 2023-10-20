/* eslint-disable */
import * as yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const proposalValidate = (t: any) => {
  return yup.object({
    email: yup
      .string()
      .email(t('common:validate.email'))
      .required(
        t('common:validate.required', {
          label: t('common:form.email.label'),
        }),
      ),
    name: yup
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
          label: t('common:form.name.label'),
        }),
      ),
    phone: yup
      .string()
      .matches(phoneRegExp, t('common:validate.phone'))
      .required(
        t('common:validate.required', {
          label: t('common:form.phone.label'),
        }),
      ),
    occupation: yup.string().required(
      t('common:validate.required', {
        label: t('common:form.occupation.label'),
      }),
    ),
    reCaptcha: yup.boolean().required(t('common:validate.reCaptcha')),
  });
};
