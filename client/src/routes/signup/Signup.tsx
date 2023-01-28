import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

//contexts
import { useAuthActions } from "../../contexts/AuthContext";

//types
import { TSignupPayload } from "../../service/auth.service";
import {
  inputLabels,
  INPUT_LABELS,
  inputPlaceholders,
  INPUT_PLACEHOLDERS,
  buttonLabels,
  BUTTON_LABELS,
} from "../../types/constants/labels";

//components
import { Button } from "../../components/button/Button";
import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInput } from "../../components/input/PasswordInput";
import { TextInput } from "../../components/input/TextInput";

//styled
import { Form } from "../../components/input/Input.styled";

function Signup() {
  const { signup } = useAuthActions();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signup(data as TSignupPayload);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="firstName"
        label={inputLabels[INPUT_LABELS.firstName]}
        register={register}
        error={errors.firstName?.message}
        placeholder={inputPlaceholders[INPUT_PLACEHOLDERS.firstName]}
      />
      <TextInput
        name="lastName"
        label={inputLabels[INPUT_LABELS.lastName]}
        register={register}
        error={errors.lastName?.message}
        placeholder={inputPlaceholders[INPUT_PLACEHOLDERS.lastName]}
      />
      <EmailInput
        name="email"
        label={inputLabels[INPUT_LABELS.email]}
        register={register}
        error={errors.email?.message}
      />
      <PasswordInput
        name="password"
        label={inputLabels[INPUT_LABELS.password]}
        register={register}
        error={errors.password?.message}
      />
      <Button type="submit" text={buttonLabels[BUTTON_LABELS.signup]} />
    </Form>
  );
}

export default Signup;
