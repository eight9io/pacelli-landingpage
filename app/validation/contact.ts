import * as yup from 'yup';

export const contactValidate = (t: any) => {
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
    message: yup.string(),
    reCaptcha: yup
      .boolean()
      .required(
        t('common:validate.reCaptcha', 'Verifica di non essere un robot'),
      ),
  });
};
