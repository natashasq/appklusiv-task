import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

//styled
import { Input, InputError, Label } from "./Input.styled";

//types
import { appErrors, ERROR_KEYS } from "../../types/constants/errors";

type TextInputProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

export function TextInput({
  name,
  label,
  register,
  error,
  placeholder,
}: TextInputProps) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        {...register(name, { required: appErrors[ERROR_KEYS.text].required })}
      />
      {error && <InputError>{`${error}`}</InputError>}
    </>
  );
}
