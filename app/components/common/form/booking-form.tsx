'use client';

import { Button } from '~/components/snippets';
import DatePicker from '../date-picker';
import { Form } from 'react-final-form';
import TextArea from '~/components/common/text-area';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import { contactValidate } from '~/validation/contact';
import { validateFormValues } from '~/validation';

interface BookingFormProps {
  className?: string;
  handleSubmitForm?: any
}

const BookingForm: React.FC<BookingFormProps> = ({ className = '', handleSubmitForm }) => {
  const onSubmit = (values: any) => {
    handleSubmitForm()
    console.log('values', values);
  };

  return (
    <div className={clsx('bg-gray-100 px-4 md:px-8 py-16', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(contactValidate)}
        validateOnBlur={false}
        render={({ handleSubmit }) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <TextField
              name="name"
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
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent   focus:border-b-2',
              )}
            />
            <TextField
              name="email"
              label="Email *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent   focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <div className="grid grid-cols-12 gap-y-8 md:gap-y-8 mb-6">
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  name="date"
                  label="Date"
                  inputClassName={clsx(
                    'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
                  )}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <DatePicker
                  name="time"
                  label="Time"
                  inputClassName={clsx(
                    'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
                  )}
                  dateFormat="h:mm aa"
                />
              </div>
            </div>
            <TextArea
              name="note"
              label="Note"
              rows={1}
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
            />
            <Button className="rounded-sm uppercase" size="md">
              send
            </Button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BookingForm;
