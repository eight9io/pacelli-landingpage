'use client';

import {Button} from '~/components/snippets';
import DatePicker from '../date-picker';
import {Form} from 'react-final-form';
import TextArea from '~/components/common/text-area';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import {bookingValidate} from '~/validation/booking';
import {validateFormValues} from '~/validation';
import {useState} from 'react';
import {FormApi} from 'final-form';

interface BookingFormProps {
  className?: string;
  handleSubmitForm?: any;
}

interface BookingFormValidation {
  fullname: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({className = ''}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (
    values: any,
    form: FormApi<BookingFormValidation, Partial<BookingFormValidation>>,
  ) => {
    const newData = {
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      date: values.date,
      time: values.time,
      message: values.message,
    };
    setLoading(true);
    fetch('/api/booking', {
      method: 'POST',
      mode: 'no-cors',
      headers: {Accept: 'application/json'},
      body: JSON.stringify(newData),
    })
      .then(() => {
        setSubmitted(true);
        Object.keys(values).forEach((key: any) => {
          form.change(key, undefined);
          form.resetFieldState(key);
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={clsx('bg-gray-100 px-4 md:px-8 py-16 relative', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(bookingValidate)}
        validateOnBlur={false}
        render={({handleSubmit}) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <TextField
              name="fullname"
              label="Name *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <TextField
              name="phone"
              label="Phone Number *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
            />
            <TextField
              name="email"
              label="Email *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <div className="grid grid-cols-12 gap-y-8 md:gap-y-8 mb-6">
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  id="date"
                  name="date"
                  label="Date *"
                  inputClassName={clsx(
                    'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
                  )}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  id="time"
                  name="time"
                  label="Time *"
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
            <Button
              className="rounded-sm uppercase mt-4"
              size="md"
              disabled={loading}
            >
              send
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
                Your request is successfull. We will contact you soon!
              </span>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BookingForm;
