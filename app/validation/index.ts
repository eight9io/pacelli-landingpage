import {setIn} from 'final-form';

export const validateFormValues = (schema: any) => async (values: any) => {
  if (typeof schema === 'function') {
    schema = schema();
  }
  try {
    await schema.validate(values, {abortEarly: false});
  } catch (err: any) {
    const errors = err.inner.reduce(
      (formError: any, innerError: {path: any; message: any}) => {
        return setIn(formError, innerError.path, innerError.message);
      },
      {},
    );

    return errors;
  }
};
