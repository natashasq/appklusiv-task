import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

//types
import { appErrors, ERROR_KEYS } from "../../types/constants/errors";
import {
  inputPlaceholders,
  INPUT_PLACEHOLDERS,
} from "../../types/constants/labels";

//styled
import { Input, Label, InputError } from "./Input.styled";

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

export function PasswordInput({
  name,
  label,
  register,
  error,
}: TextInputProps) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        placeholder={inputPlaceholders[INPUT_PLACEHOLDERS.password]}
        type="password"
        {...register(name, {
          required: appErrors[ERROR_KEYS.password].required,
          minLength: {
            value: 6,
            message: appErrors[ERROR_KEYS.password].invalid!,
          },
        })}
      />
      {error && <InputError>{`${error}`}</InputError>}
    </>
  );
}
