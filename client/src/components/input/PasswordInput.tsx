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

export function PasswordInput({ name, label, register, error }: TextInputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        {...register(name, {
          required: "Password Address is required",
          minLength: {
            value: 6,
            message: "The password has to be at least 6 characters long",
          },
        })}
      />
      {error && <p>{`${error}`}</p>}
    </>
  );
}
