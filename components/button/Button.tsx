import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  text: string;
  customClass?: string;
  onClick?: () => void;
}

function Button({ text, customClass, onClick }: ButtonProps) {
  return (
    <button
      className={twMerge(
        // Basic styles
        'rounded-lg px-4 py-3 font-medium lg:px-8 lg:py-4',
        // Custom styles
        customClass
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
