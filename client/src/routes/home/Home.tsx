import { useAuthActions } from "../../contexts/AuthContext";

//components
import { Button } from "../../components/button/Button";

function Home() {
  const { logout } = useAuthActions();
  const handleClick = () => {
    logout();
  };

  return (
    <>
      Home
      <Button type="button" text="Logout" onClick={handleClick} />
    </>
  );
}

export default Home;
