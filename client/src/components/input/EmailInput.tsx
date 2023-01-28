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
import {
  inputPlaceholders,
  INPUT_PLACEHOLDERS,
} from "../../types/constants/labels";

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
      <Label>{label}</Label>
      <Input
        placeholder={inputPlaceholders[INPUT_PLACEHOLDERS.email]}
        {...register(name, {
          required: appErrors[ERROR_KEYS.email].required,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: appErrors[ERROR_KEYS.email].invalid!,
          },
        })}
      />
      {error && <InputError>{`${error}`}</InputError>}
    </>
  );
}
