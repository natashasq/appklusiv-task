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

export function TextInput({ name, label, register, error }: TextInputProps) {
  return (
    <>
      <label>{label}</label>
      <input {...register(name, { required: "This field is required." })} />
      {error && <p>{`${error}`}</p>}
    </>
  );
}
