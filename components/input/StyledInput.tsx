import { twMerge } from 'tailwind-merge';

type InputType = 'text' | 'number' | 'date' | 'email' | 'password';

type InputValueType<T extends InputType> = T extends 'number' ? number : string;

interface StyledInputProps<T extends InputType> {
  type: T;
  name: string;
  placeholder?: string;
  defaultValue?: InputValueType<T>;
  value?: InputValueType<T>;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customClass?: string;
}

function StyledInput<T extends InputType>({
  type,
  name,
  placeholder,
  defaultValue,
  value,
  required,
  disabled,
  onChange,
  customClass,
}: StyledInputProps<T>) {
  // 解決value和defaultValue不可同時出現：判斷input的value是否是受控制
  const isControlled = value !== undefined;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...(isControlled ? { value } : { defaultValue })}
      required={required}
      disabled={disabled}
      onChange={onChange}
      className={twMerge(
        // Basic Styles
        'rounded border border-stone-400 p-2 indent-2 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 lg:p-3 lg:indent-3 lg:text-lg',
        // Custom Styles
        customClass
      )}
    />
  );
}

export default StyledInput;
