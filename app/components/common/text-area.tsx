import clsx from 'clsx';
import {Field, FieldProps, FieldRenderProps} from 'react-final-form';

interface TextAreaProp {
  className?: string;
  name: string;
  label?: string;
  validate?: FieldProps<
    any,
    FieldRenderProps<any, HTMLElement, any>,
    HTMLElement,
    any
  >;
  inputClassName?: string;
  inputErrorClassName?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProp> = ({
  className = '',
  name,
  label = '',
  inputClassName = '',
  inputErrorClassName = '',
  rows = 1,
}) => {
  return (
    <Field name={name}>
      {({input, meta}) => (
        <label
          htmlFor={`id-${name}`}
          className={clsx('group relative md:pb-6', className)}
        >
          <textarea
            id={`id-${name}`}
            type="text"
            placeholder={label}
            rows={rows}
            className={clsx(
              'border-gray-400 px-2 textarea focus:outline-offset-0 focus:outline-w-[1px] focus:outline-1 rounded-sm input-primary w-full text-base placeholder:text-primary-950  ',
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
            <span className="text-red-500 text-sm absolute text-left mt-2 pl-2 left-1 bottom-0">
              {meta.error}
            </span>
          )}
        </label>
      )}
    </Field>
  );
};

export default TextArea;
