import clsx from 'clsx';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';

interface TextFieldProp {
  className?: string;
  name: string;
  label?: string;
  validate?: any;
  inputClassName?: string;
  inputErrorClassName?: string;
}

const TextField: React.FC<TextFieldProp> = ({
  className = '',
  name,
  label = '',
  inputClassName = '',
  inputErrorClassName = '',
  validate,
}) => {
  return (
    <Field name={name} validateFields={[]} validate={validate}>
      {({ input, meta }) => {
        return (
          <label
            htmlFor={`id-${name}`}
            className={clsx('group relative pb-3 md:pb-6  ', className)}
          >
            <input
              id={`id-${name}`}
              type="text"
              placeholder={label}
              className={clsx(
                'border-gray-400  input focus:outline-offset-0 focus:outline-w-[1px] focus:outline-1 rounded-sm input-primary w-full focus:ring-transparent placeholder:text-primary-950',
                meta.error &&
                meta.touched &&
                'focus:outline-red-500 border-red-500',
                meta.error && meta.touched && inputErrorClassName,
                inputClassName,
              )}
              {...input}
            />
            <span className="hidden group-focus:block">{label}</span>
            {meta.error && meta.touched && (
              <span className="text-red-500 text-sm absolute text-left md:mt-2 pl-2 left-1  -bottom-3 md:bottom-0  ">
                {meta.error}
              </span>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default TextField;
