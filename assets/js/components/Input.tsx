import { FC, ReactNode, useState } from "react";
import ErrorIcon from "./icons/ErrorIcon.tsx";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  type?: string;
  placeholder?: string;
  name: string;
  id?: string;
  value?: string | number;
  className?: string;
  hasError?: boolean;
  icon: ReactNode;
  register: UseFormRegister<any>;
  required?: string | boolean;
  pattern?: RegExp;
};

const noErrorClasses = "border-grey";
const errorClasses = "border-danger";

const Input: FC<InputProps> = (
  {
    type,
    placeholder,
    name,
    id,
    value,
    className,
    hasError,
    icon,
    register,
    required,
    pattern,
  }: InputProps,
) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className={`${className} relative flex items-center px-4 min-h-14`}>
      <input
        className={`peer w-full pl-12 absolute inset-0 min-w-none rounded-2xl bg-white border  border-solid placeholder-grey-dark text-dark hover:border-accent transition-all focus:outline-none focus-visible:border-accent ${
          hasError ? errorClasses : noErrorClasses
        }`}
        {...register(name, {
          onChange: (event) =>
            setIsFilled(Boolean(event.target.value)),
          required,
          pattern,
        })}
        type={type ?? "text"}
        placeholder={placeholder}
        id={id}
        value={value}
      />
      <div
        className={`peer-focus-visible:text-accent relative z-10 max-w-6 overflow-x-hidden ${
          isFilled && "text-accent"
        }`}
      >
        {hasError
          ? (
            <div className="text-danger">
              <ErrorIcon />
            </div>
          )
          : icon}
      </div>
    </div>
  ) as ReactNode | Promise<ReactNode>;
};

export default Input;
