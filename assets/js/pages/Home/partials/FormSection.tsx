import { FC } from "react";
import Input from "../../../components/Input.tsx";
import MailIcon from "../../../components/icons/MailIcon.tsx";
import PersonIcon from "../../../components/icons/PersonIcon.tsx";
import Textarea from "../../../components/Textarea.tsx";
import PrimaryButton from "../../../components/PrimaryButton.tsx";
import { useForm } from "react-hook-form";

export type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const FormSection: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    FormInputs
  >();

  function onSubmit(data: FormInputs) {
    console.log(data);
  }

  return (
    <section
      className="mt-[100px] py-16 bg-[url('/images/gradient.png')] bg-cover bg-center"
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="container">
        <form
          className="mx-auto max-w-3xl px-4 py-12 rounded-2xl bg-white/60 sm:bg-white sm:px-8 lg:px-12 sm:py-12"
          action=""
          method="post"
        >
          <h2 className="subtitle-mobile title-medium">
            Let’s discuss your project
          </h2>
          <div className="mt-9 flex flex-col gap-y-6">
            <div className="contents sm:flex sm:gap-x-5">
              <div className="flex-1">
                <label className="subtitle-small" htmlFor="name">
                  Your full name <span className="text-danger">*</span>
                </label>
                <Input
                  className="mt-2"
                  id="name"
                  icon={<PersonIcon />}
                  placeholder="Name Surname"
                  name="name"
                  register={register}
                  required="Name is required"
                  hasError={Boolean(errors.name)}
                />
                <span className="subtitle-small text-danger">
                  {errors.name?.message}
                </span>
              </div>
              <div className="flex-1">
                <label className="subtitle-small" htmlFor="email">
                  Your email <span className="text-danger">*</span>
                </label>
                <Input
                  className="mt-2"
                  id="email"
                  icon={<MailIcon />}
                  placeholder="name@example.com"
                  name="email"
                  register={register}
                  required="Email is required"
                  pattern={/^\w+@\w+\.\w+$/}
                  hasError={Boolean(errors.email)}
                />
                <span className="subtitle-small text-danger">
                  {errors.email?.message}
                </span>
              </div>
            </div>
            <div className="">
              <label className="subtitle-small block" htmlFor="message">
                Tell me about your project
              </label>
              <Textarea
                className="mt-2 w-full h-32 resize-y"
                id="message"
                placeholder="Add here a general description of your idea and target aim"
                name="message"
                register={register}
              />
            </div>
          </div>
          <PrimaryButton className="mt-10" hasIcon={true}>
            Submit
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
