import { twMerge } from 'tailwind-merge';

interface paymentOptiondCollapseProps {
  children: React.ReactNode;
  value: string;
  selectedValue: string;
  customClass?: string;
}

function PaymentOptionCollapse({
  children,
  value,
  selectedValue,
  customClass,
}: paymentOptiondCollapseProps) {
  return (
    <div
      className={twMerge(
        'overflow-hidden transition-all duration-300 ease-in-out',
        selectedValue === value
          ? 'max-h-[500px] opacity-100'
          : 'max-h-0 opacity-0'
      )}
    >
      <div className={twMerge('bg-slate-200 p-4', customClass)}>{children}</div>
    </div>
  );
}

export default PaymentOptionCollapse;
