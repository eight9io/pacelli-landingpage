import * as yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const proposalValidate = (t: any) => {
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
    name: yup
      .string()
      .min(
        2,
        t(
          'common:validate.min',
          {
            label: t('common:form.name.label', null, 'Name'),
            min: 2,
          },
          'Nome deve contenere almeno 2 caratteri',
        ),
      )
      .required(
        t(
          'common:validate.required',
          {
            label: t('common:form.name.label', null, 'Name'),
          },
          'Nome è obbligatorio',
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
    occupation: yup.string().required(
      t(
        'common:validate.required',
        {
          label: t('common:form.occupation.label'),
        },
        'Occupazione è obbligatorio',
      ),
    ),
    reCaptcha: yup
      .boolean()
      .required(
        t('common:validate.reCaptcha', 'Verifica di non essere un robot'),
      ),
  });
};
