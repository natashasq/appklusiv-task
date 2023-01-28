import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

//contexts
import { useAuthActions } from "../../contexts/AuthContext";

//types
import { TLoginPayload } from "../../service/auth.service";

//components
import { Button } from "../../components/button/Button";
import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInput } from "../../components/input/PasswordInput";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailInput
          name="email"
          label="Email"
          register={register}
          error={errors.email?.message}
        />
        <PasswordInput
          name="password"
          label="Password"
          register={register}
          error={errors.password?.message}
        />
        <Button type="submit" text="Login" />
      </form>
    </>
  );
}

export default Login;
