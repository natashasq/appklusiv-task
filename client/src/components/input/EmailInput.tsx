import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

type TextInputProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

export function EmailInput({ name, label, register, error }: TextInputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        {...register(name, {
          required: "Email Address is required",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Invalid email address.",
          },
        })}
      />
      {error && <p>{`${error}`}</p>}
    </>
  );
}
