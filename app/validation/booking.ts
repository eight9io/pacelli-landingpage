import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const bookingValidate = (t: any) => {
  return yup.object({
    email: yup
      .string()
      .email(t('common:validate.email', 'indirizzo email non valido'))
      .required(
        t(
          'common:validate.required',
          {
            label: t('common:form.email.label', null, 'Email'),
          },
          'Email è obbligatorio',
        ),
      ),
    fullname: yup
      .string()
      .min(
        2,
        t(
          'common:validate.min',
          {
            label: t('common:form.full_name.label', null, 'Name'),
            min: 2,
          },
          'Nome e cognome deve contenere almeno 2 caratteri',
        ),
      )
      .required(
        t(
          'common:validate.required',
          {
            label: t('common:form.full_name.label', null, 'Name'),
          },
          'Nome e cognome è obbligatorio',
        ),
      ),
    phone: yup
      .string()
      .matches(
        phoneRegExp,
        t('common:validate.phone', 'Numero di telefono invalido'),
      )
      .required(
        t(
          'common:validate.required',
          {
            label: t('common:form.phone.label', null, 'Phone Number'),
          },
          'Numero di telefono è obbligatorio',
        ),
      ),
    date: yup
      .date()
      .transform((v) => (v instanceof Date ? v : null))
      .typeError(t('common:validate.date', 'Data non valida'))
      .min(
        new Date(),
        t(
          'common:validate.after_today',
          {
            label: t('common:form.date.label', null, 'Date'),
          },
          'Data deve essere dopo oggi',
        ),
      )
      .required(
        t(
          'common:validate.required',
          {
            label: t('common:form.date.label', null, 'Date'),
          },
          'Data è obbligatorio',
        ),
      )
      .nullable(),
    time: yup.string().required(
      t(
        'common:validate.required',
        {
          label: t('common:form.time.label', null, 'Time'),
        },
        'Ora è obbligatorio',
      ),
    ),
    message: yup.string(),
    reCaptcha: yup
      .boolean()
      .required(
        t('common:validate.reCaptcha', 'Verifica di non essere un robot'),
      ),
  });
};
