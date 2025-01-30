import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  text: string;
  customClass?: string;
}

function Button({ text, customClass }: ButtonProps) {
  return (
    <button
      className={twMerge(
        // Basic styles
        'rounded-lg px-4 py-3 font-medium lg:px-8 lg:py-4',
        // Custom styles
        customClass
      )}
    >
      {text}
    </button>
  );
}

export default Button;
