import { twMerge } from 'tailwind-merge';

type InputType = 'text' | 'number' | 'date' | 'email' | 'password';

type InputValueType<T extends InputType> = T extends 'number' ? number : string;

interface StyledInputProps<T extends InputType> {
  type: T;
  name: string;
  id?: string;
  placeholder?: string;
  defaultValue?: InputValueType<T>;
  value?: InputValueType<T>;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customClass?: string;
  error?: string;
}

function StyledInput<T extends InputType>({
  type,
  name,
  id,
  placeholder,
  defaultValue,
  value,
  required,
  disabled,
  onChange,
  customClass,
  error,
}: StyledInputProps<T>) {
  // 解決value和defaultValue不可同時出現：判斷input的value是否是受控制
  const isControlled = value !== undefined;

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...(isControlled ? { value } : { defaultValue })}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className={twMerge(
          // Basic Styles
          'rounded border border-stone-400 p-2 indent-2 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 lg:p-3 lg:indent-3 lg:text-lg',
          // Error Styles
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
          // Custom Styles
          customClass
        )}
      />
      {error && <span className='text-xs text-red-500'>{error}</span>}
    </>
  );
}

export default StyledInput;
