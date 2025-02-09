import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type TextareaProps = {
  type?: string;
  placeholder?: string;
  name: string;
  id?: string;
  value?: string | number;
  className?: string;
  hasError?: boolean;
  register: UseFormRegister<any>;
};

const errorClasses = "border-danger";
const noErrorClasses = "border-grey";

const Textarea: FC<TextareaProps> = (
  { className, name, id, placeholder, value, hasError, register }:
    TextareaProps,
) => {
  return (
    <textarea
      className={`${className} rounded-2xl py-3 px-5 bg-white border  border-solid placeholder-grey-dark text-dark hover:border-accent transition-[border] focus:outline-none focus-visible:border-accent ${
        hasError ? errorClasses : noErrorClasses
      }`}
      {...register(name)}
      id={id}
      placeholder={placeholder}
      value={value}
    >
    </textarea>
  );
};

export default Textarea;
