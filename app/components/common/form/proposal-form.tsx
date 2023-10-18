import {Button} from '~/components/snippets';
import {Field, Form} from 'react-final-form';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import {validateFormValues} from '~/validation';
import Select from '../select';
import {proposalValidate} from '~/validation/proposal';
import Heading from '../heading';
import ReCAPTCHA from 'react-google-recaptcha';
import {useRef, useState} from 'react';
import {useRootContext} from '~/hooks/useRootContext';
import {FormApi} from 'final-form';
import {useTranslation} from 'react-i18next';

interface ProposalFormProps {
  className?: string;
}

interface ProposalFormValidation {
  name: string;
  email: string;
  phone: string;
  occupation: string;
}
const pdfLink = '/proposta.pdf';

/* eslint-disable */
const ProposalForm: React.FC<ProposalFormProps> = ({className = ''}) => {
  const {t} = useTranslation('common');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onChange = (form: any) => {
    form.change('reCaptcha', true);
  };

  const {ENV} = useRootContext();

  const onSubmit = (
    values: any,
    form: FormApi<ProposalFormValidation, Partial<ProposalFormValidation>>,
  ) => {
    console.log('values', values);
    const recaptchaValue = recaptchaRef.current!.getValue();

    const newData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      reCaptcha: recaptchaValue,
    };

    setLoading(true);
    fetch('/api/proposal', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(() => {
        setSubmitted(true);
        handleDownloadPDF();
        Object.keys(values).forEach((key: any) => {
          form.change(key, undefined);
          form.resetFieldState(key);
        });
        recaptchaRef.current?.reset();
      })
      .catch((err) => {
        console.log(err);
        recaptchaRef.current?.reset();
      })
      .finally(() => setLoading(false));

    // form.reset();
  };
  const handleChangeValue = (e: any, value: string, form: any) => {
    form.change('occupation', value);
  };

  const handleDownloadPDF = () => {
    const linkTag = document.createElement('a');
    linkTag.href = pdfLink;
    linkTag.setAttribute('download', 'proposta.pdf');
    document.body.appendChild(linkTag);
    linkTag.click();
    document.body.removeChild(linkTag);
  };

  return (
    <div className={clsx('bg-base-100 px-4 md:px-8 py-14 relative', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(proposalValidate(t))}
        validateOnBlur={false}
        render={({handleSubmit, values, form}) => {
          return (
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <Heading
                className="font-semibold text-primary text-center mb-14"
                variant="h3"
              >
                {t('proposal_form.title')}
              </Heading>
              <div className="relative">
                <Field name="occupation">
                  {({input, meta}) => (
                    <div className="pb-6">
                      <Select
                        value={values?.occupation}
                        label={`${t('common:form.occupation.label')} *`}
                        handleChangeValue={(e: any, value: any) =>
                          handleChangeValue(e, value, form)
                        }
                      />
                      {meta.touched && meta.error && (
                        <span className="absolute text-red-500 text-sm left-1 bottom-0 text-left pl-3">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <TextField
                name="name"
                label={`${t('common:form.name.label')} *`}
                inputClassName={clsx(
                  'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2 ',
                )}
                inputErrorClassName="focus:border-b-red-500"
              />
              <TextField
                name="phone"
                label={`${t('common:form.phone.label')} *`}
                inputClassName={clsx(
                  'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent   focus:border-b-2',
                )}
                inputErrorClassName="focus:border-b-red-500"
              />
              <TextField
                name="email"
                label={`${t('common:form.email.label')} *`}
                inputClassName={clsx(
                  'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent   focus:border-b-2',
                )}
                inputErrorClassName="focus:border-b-red-500"
              />
              <div className="relative">
                <Field name="reCaptcha">
                  {({input, meta}) => (
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
                className="rounded-sm uppercase mt-6"
                size="md"
                disabled={loading || submitted}
              >
                {t('button.download')}
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
                  {t('button.down_success')}
                </span>
              )}
            </form>
          );
        }}
      ></Form>
    </div>
  );
};

export default ProposalForm;
