import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

//contexts
import { useAuthActions } from "../../contexts/AuthContext";

//types
import { TSignupPayload } from "../../service/auth.service";

//components
import { Button } from "../../components/button/Button";
import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInput } from "../../components/input/PasswordInput";
import { TextInput } from "../../components/input/TextInput";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="firstName"
        label="First name"
        register={register}
        error={errors.firstName?.message}
      />
      <TextInput
        name="lastName"
        label="Last name"
        register={register}
        error={errors.lastName?.message}
      />
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
      <Button type="submit" text="Sign Up" />
    </form>
  );
}

export default Signup;
