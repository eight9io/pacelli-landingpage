'use client';

import {Button} from '~/components/snippets';
import DatePicker from '../date-picker';
import {Form} from 'react-final-form';
import TextArea from '~/components/common/text-area';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import {contactValidate} from '~/validation/contact';
import {validateFormValues} from '~/validation';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({className = ''}) => {
  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <div className={clsx('bg-gray-200 px-4 md:px-8 py-16', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(contactValidate)}
        validateOnBlur={false}
        render={({handleSubmit}) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Full name *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />

            <TextField
              name="email"
              label="Email *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />
            <TextArea
              name="message"
              label="Message"
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

export default ContactForm;
