import clsx from 'clsx';
import {useCounter} from 'react-use';
import {clamp} from '@storefront-ui/shared';
import {SfButton, SfIconAdd, SfIconRemove} from '@storefront-ui/react';
import {ChangeEvent, useEffect, useId} from 'react';

interface QuantitySelectorProps {
  className?: string;
  onChange?: (value: number) => void;
  available?: number;
  quantity?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  className = '',
  onChange,
  available,
  quantity,
}) => {
  const inputId = useId();
  const min = 1;
  const max = available ?? 0;
  const [value, {inc, dec, set}] = useCounter(quantity ?? min);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('QuantitySelector handleOnChange');
    const {value: currentValue} = event.target;
    const nextValue = parseFloat(currentValue);
    onChange?.(clamp(nextValue, min, max));
    set(clamp(nextValue, min, max));
  }

  useEffect(() => {
    if (!available) return set(0);
    set(min);
  }, [available]);

  return (
    <div className={clsx('inline-flex flex-col items-start', className)}>
      <div className="h-12 flex border border-neutral-300 rounded-full overflow-hidden">
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-r-none text-secondary-700"
          disabled={value <= min}
          aria-controls={inputId}
          aria-label="Decrease value"
          onClick={() => dec()}
        >
          <SfIconRemove />
        </SfButton>
        <input
          id={inputId}
          type="number"
          role="spinbutton"
          className="appearance-none font-bold border-none w-10 text-center bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={min}
          max={max}
          value={value}
          onChange={handleOnChange}
        />
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-l-none text-secondary-700"
          disabled={value >= max}
          aria-controls={inputId}
          aria-label="Increase value"
          onClick={() => inc()}
        >
          <SfIconAdd />
        </SfButton>
      </div>
      <p className="text-xs mt-2 text-neutral-500">
        <strong className="text-neutral-900">{max}</strong> in stock
      </p>
    </div>
  );
};

export default QuantitySelector;
