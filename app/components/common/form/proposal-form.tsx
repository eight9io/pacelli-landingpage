'use client';
/* eslint-disable */
import { Button } from '~/components/snippets';
import DatePicker from '../date-picker';
import { Form } from 'react-final-form';
import TextArea from '~/components/common/text-area';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import { contactValidate } from '~/validation/contact';
import { validateFormValues } from '~/validation';
import Select from '../select';

interface ProposalFormProps {
  className?: string;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ className = '' }) => {
  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <div className={clsx('bg-base-100 px-4 md:px-8 py-14', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(contactValidate)}
        validateOnBlur={false}
        render={({ handleSubmit }) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-[#142423] text-center mb-14">
              Ricevere una proposta
            </h2>
            <Select name="occupation"
              label="Chi sei?"

              className={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500" />

            <TextField
              name="name"
              label="Nome  *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2 ',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />

            <TextField
              name="email" z
              label="Email *"
              inputClassName={clsx(
                'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent   focus:border-b-2',
              )}
              inputErrorClassName="focus:border-b-red-500"
            />


            <Button className="rounded-sm uppercase mt-6" size="md">
              DOWNLOAD
            </Button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default ProposalForm;
