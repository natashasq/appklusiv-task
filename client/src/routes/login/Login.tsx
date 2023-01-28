import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

//contexts
import { useAuthActions } from "../../contexts/AuthContext";

//types
import { TLoginPayload } from "../../service/auth.service";
import {
  buttonLabels,
  BUTTON_LABELS,
  inputLabels,
  INPUT_LABELS,
} from "../../types/constants/labels";

//components
import { Button } from "../../components/button/Button";
import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInput } from "../../components/input/PasswordInput";

//styled
import { Form } from "../../components/input/Input.styled";

function Login() {
  const { login } = useAuthActions();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    login(data as TLoginPayload);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" text={buttonLabels[BUTTON_LABELS.login]} />
    </Form>
  );
}

export default Login;
