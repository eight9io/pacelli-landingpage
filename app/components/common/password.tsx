import clsx from 'clsx';
import { Field } from 'react-final-form';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface PasswordFieldProps {
  className?: string;
  name?: string;
  label?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  className = '',
  name,
  label = '',
}) => {
  const [hide, setHide] = useState(true);

  return (
    <Field name={name ?? ''}>
      {({ input, meta }) => (
        <label htmlFor="email" className="group relative pb-6">
          <input
            id={`id-${name}`}
            type={hide ? 'password' : 'text'}
            placeholder={label}
            className={clsx(
              'input focus:outline-offset-0 focus:outline-w-[1px] focus:outline-1 rounded-sm input-primary w-full placeholder:font-sans pr-8',
              meta.error &&
              meta.touched &&
              'focus:outline-red-500 border-red-500',
              hide && 'font-mono',
            )}
            {...input}
          />
          <span className="hidden group-focus:block">{label}</span>
          <span
            className="w-6 h-6 absolute right-3 top-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setHide((prev) => !prev);
            }}
          >
            {hide ? <EyeIcon /> : <EyeSlashIcon />}
          </span>

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

export default PasswordField;
