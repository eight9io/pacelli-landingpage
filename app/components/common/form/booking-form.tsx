'use client';

import { Button } from '~/components/snippets';
import DatePicker from '../date-picker';
import { Field, Form } from 'react-final-form';
import TextArea from '~/components/common/text-area';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import { bookingValidate } from '~/validation/booking';
import { validateFormValues } from '~/validation';
import { useRef, useState } from 'react';
import { FormApi } from 'final-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { useRootContext } from '~/hooks/useRootContext';

interface BookingFormProps {
  className?: string;
  handleClose?: () => void;
  closeButton?: React.ReactNode;
}
interface BookingFormValidation {
  fullname: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = '', handleClose, closeButton }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onChange = (form: any) => {
    form.change('reCaptcha', true);
  };
  const { t } = useTranslation('common');
  const { ENV } = useRootContext();

  const onSubmit = (
    values: any,
    form: FormApi<BookingFormValidation, Partial<BookingFormValidation>>,
  ) => {
    const recaptchaValue = recaptchaRef.current!.getValue();

    const newData = {
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      date: values.date,
      time: values.time,
      message: values.message,
      reCaptcha: recaptchaValue,
    };

    setLoading(true);
    fetch('/api/booking', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(() => {
        setSubmitted(true);
        Object.keys(values).forEach((key: any) => {
          form.change(key, undefined);
          form.resetFieldState(key);
        });
        recaptchaRef.current?.reset();
        handleClose && handleClose();
      })
      .catch((err) => {
        console.log(err);
        recaptchaRef.current?.reset();
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={clsx('bg-gray-100 px-4 md:px-8 py-16 relative', className)}>
      {closeButton && closeButton}
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(bookingValidate(t))}
        validateOnBlur={false}
        render={({ handleSubmit, form }) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <TextField
              name="fullname"
              label={`${t('common:form.name.label')} *`}
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <TextField
              name="phone"
              label={`${t('common:form.phone.label')} *`}
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
            />
            <TextField
              name="email"
              label={`${t('common:form.email.label')} *`}
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <div className="grid grid-cols-12 gap-y-4 md:gap-y-8 md:gap-x-8 mb-6">
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  id="date"
                  name="date"
                  label={`${t('common:form.date.label')} *`}
                  inputClassName={clsx(
                    'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
                  )}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  id="time"
                  name="time"
                  label={`${t('common:form.time.label')} *`}
                  inputClassName={clsx(
                    'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
                  )}
                  dateFormat="hh:mm"
                  timeOnly={true}
                />
              </div>
            </div>
            <TextArea
              name="message"
              label="Note"
              rows={1}
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
            />

            <div className="relative">
              <Field name="reCaptcha">
                {({ input, meta }) => (
                  <>
                    <ReCAPTCHA
                      onChange={() => onChange(form)}
                      className="[&_iframe]:w-full"
                      sitekey={ENV.PUBLIC_SITE_RECAPTCHA_KEY || ''}
                      ref={recaptchaRef}
                    />
                    {meta.touched && meta.error && (
                      <span className="absolute text-red-500 text-sm left-1 -bottom-6 text-left pl-3">
                        {meta.error}
                      </span>
                    )}
                  </>
                )}
              </Field>
            </div>

            <Button
              className="rounded-sm uppercase mt-8"
              size="md"
              disabled={loading || submitted}
            >
              {t('button.send')}
            </Button>
            {submitted && (
              <span className="mb-2 absolute top-6 flex justify-center items-start gap-1 md:gap-2 font-semibold text-sm">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-success w-4 h-4"
                  viewBox="0 0 13 13"
                >
                  <path
                    d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
                    fill="#428445"
                    stroke="white"
                    strokeWidth="0.7"
                  ></path>
                  <path
                    d="M5.53271 8.66357L9.25213 4.68197"
                    stroke="white"
                  ></path>
                  <path
                    d="M4.10645 6.7688L6.13766 8.62553"
                    stroke="white"
                  ></path>
                </svg>
                {t('button.request_success')}
              </span>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BookingForm;
