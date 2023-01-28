import { useAuthActions } from "../../contexts/AuthContext";

function Login() {
  const { login } = useAuthActions();

  const handleClick = () => {
    login({
      email: "test+10@gmail.com",
      password: "test12345",
    });
  };
  return (
    <>
      <button onClick={handleClick}>LOGIN</button>
    </>
  );
}

export default Login;
