import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const bookingValidate = (t: any) => {
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
    phone: yup
      .string()
      .matches(phoneRegExp, t('common:validate.phone'))
      .required(
        t('common:validate.required', {
          label: t('common:form.phone.label', null, 'Phone Number'),
        }),
      ),
    date: yup
      .date()
      .transform((v) => (v instanceof Date ? v : null))
      .typeError(t('common:validate.date'))
      .min(
        new Date(),
        t('common:validate.after_today', {
          label: t('common:form.date.label', null, 'Date'),
        }),
      )
      .required(
        t('common:validate.required', {
          label: t('common:form.date.label', null, 'Date'),
        }),
      )
      .nullable(),
    time: yup.string().required(
      t('common:validate.required', {
        label: t('common:form.time.label', null, 'Time'),
      }),
    ),
    message: yup.string(),
    reCaptcha: yup.boolean().required(t('common:validate.reCaptcha')),
  });
};
