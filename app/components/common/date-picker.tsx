import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {forwardRef, useState} from 'react';
import {default as RDDatePicker, ReactDatePickerProps} from 'react-datepicker';
import {Field, FieldProps, FieldRenderProps} from 'react-final-form';
import clsx from 'clsx';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import dayjs from 'dayjs';

function CoreDatePicker(props: any) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <RDDatePicker
      {...props}
      popperModifiers={[
        {
          name: 'arrow',
          options: {
            padding: {
              left: 24,
              right: 24,
              top: 24,
            },
          },
        },
        ...(props.popperModifiers ?? []),
      ]}
    />
  );
}
interface DatePickerProp extends Omit<ReactDatePickerProps, 'onChange'> {
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
  dateFormat?: string;
  timeOnly?: boolean;
}

const DatePicker: React.FC<DatePickerProp> = ({
  className = '',
  name,
  label = '',
  inputClassName = '',
  inputErrorClassName = '',
  dateFormat,
  timeOnly = false,
}) => {
  const [startDate, setStartDate] = useState();

  return (
    <Field name={name}>
      {({input, meta}) => (
        <label
          htmlFor={`id-${name}`}
          className={clsx('group relative pb-6', className)}
        >
          <CoreDatePicker
            id={`id-${name}`}
            selected={startDate}
            onChange={(value: any) => {
              const date = dayjs(value);
              input.onChange(
                date.isValid()
                  ? date.format((dateFormat as string) || 'YYYY/MM/DD')
                  : null,
              );
              setStartDate(value);
            }}
            showTimeSelectOnly={timeOnly}
            showTimeSelect={timeOnly}
            timeIntervals={15}
            timeCaption="Time"
            wrapperClassName="w-full pb-6"
            dateFormat={dateFormat}
            popperPlacement="bottom"
            customInput={
              <div className="w-full">
                <div className="flex flex-row items-stretch w-full relative">
                  <input
                    id={name}
                    name={name}
                    value={input.value}
                    onChange={input.onChange}
                    placeholder={label}
                    aria-label={label}
                    className={clsx(
                      `placeholder:text-primary-950 peer block w-full p-3 text-gray-600  border border-r-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300`,
                      'border-gray-400 input focus:outline-offset-0 focus:outline-w-[1px] focus:outline-1 rounded-sm input-primary w-full focus:!bg-transparent [&+div]:!bg-transparent [&+div]:!border-none [&+div]:!border-b-2 [&+div]:!border-b-red-500',
                      meta.error &&
                        meta.touched &&
                        'focus:outline-red-500 border-red-500',
                      meta.error && meta.touched && inputErrorClassName,
                      inputClassName,
                    )}
                  />
                  <div
                    className={`absolute right-0 top-1 flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-gray-100 border border-l-0 peer-focus:border-red-400 peer-focus:bg-white transition-colors duration-300`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            }
            startDate={startDate}
            popperClassName="some-custom-class"
            popperModifiers={[
              {
                name: 'preventOverflow',
                options: {
                  rootBoundary: 'viewport',
                  tether: false,
                  altAxis: true,
                },
              },
            ]}
          />
          <span className="hidden group-focus:block">{label}</span>
          {meta.error && meta.touched && (
            <span className="text-red-500 text-sm absolute text-left mt-2 pl-2 left-1 -bottom-[14px]">
              {meta.error}
            </span>
          )}
        </label>
      )}
    </Field>
  );
};

export {CoreDatePicker};

export default DatePicker;
