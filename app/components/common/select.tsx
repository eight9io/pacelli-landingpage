
import clsx from 'clsx';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';

interface TextFieldProp {
  className?: string;
  name: string;
  label?: string;
  validate?: FieldProps<any, FieldRenderProps<any, HTMLElement, any>, HTMLElement, any>;
  inputClassName?: string;
  inputErrorClassName?: string;
}

const Select: React.FC<TextFieldProp> = ({
  className = '',
  name,
  label = '',
  inputClassName = '',
  inputErrorClassName = '',
}) => {
  const validate = (value: any) => {
    if (!value) {
      return 'select an option.';
    }
    return undefined; // Không có lỗi
  };
  return (
    <div className='mb-6'>
      <Field name="mySelect" component="select" validate={validate}
        className={clsx(
          'select focus:ring-transparent rounded-sm input-primary w-full text-primary-950  border-gray-400 ',
          inputErrorClassName,
          className
        )}
      >
        <option disabled hidden value="" >{label}</option>
        <option value="architetto">Architetto</option>
        <option value="arredatore_d’interni">Arredatore d’interni</option>

      </Field>

      <Field name="mySelect">
        {({ meta }) => (
          meta.error && meta.touched ? (
            <span className="text-red-500 text-sm  text-left mt-2 pl-2 left-1 bottom-0">{meta.error}</span>
          ) : null
        )}
      </Field>

    </div>

  );
};

export default Select;
