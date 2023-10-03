import { Button } from '~/components/snippets';
import { Field, Form } from 'react-final-form';
import TextField from '~/components/common/textfield';
import clsx from 'clsx';
import { validateFormValues } from '~/validation';
import Select from '../select';
import { proposalValidate } from '~/validation/proposal';
import Heading from '../heading';
interface ProposalFormProps {
  className?: string;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ className = '' }) => {
  const onSubmit = (values: any) => {
    console.log('values', values);
  };
  const handleChangeValue = (e: any, value: string, form: any) => {
    form.change('occupation', value);
  };
  return (
    <div className={clsx('bg-base-100 px-4 md:px-8 py-14', className)}>
      <Form
        onSubmit={onSubmit}
        validate={validateFormValues(proposalValidate)}
        validateOnBlur={false}
        render={({ handleSubmit, values, form }) => {
          return (
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <Heading
                className="font-semibold text-primary text-center mb-14"
                variant="h3"
              >
                Ricevere una proposta
              </Heading>
              <div className="relative">
                <Field name="occupation">
                  {({ input, meta }) => (
                    <div className="pb-6">
                      <Select
                        value={values?.occupation}
                        label="Chi sei?"
                        handleChangeValue={(e: any, value: any) =>
                          handleChangeValue(e, value, form)
                        }
                      />
                      {meta.touched && meta.error && (
                        <span className="absolute text-red-500 text-sm left-1 bottom-0 text-left pl-3 ">
                          {' '}
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <TextField
                name="name"
                label="Nome  *"
                inputClassName={clsx(
                  'border-[0px] border-b !border-solid !rounded-none focus:outline-transparent focus:border-b-2 ',
                )}
                inputErrorClassName="focus:border-b-red-500"
              />

              <TextField
                name="email"
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
          );
        }}
      ></Form>
    </div>
  );
};

export default ProposalForm;
