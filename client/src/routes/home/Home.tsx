import { useAuthActions } from "../../contexts/AuthContext";

function Home() {
  const { logout } = useAuthActions();
  const handleClick = () => {
    logout();
  };

  return (
    <>
      Home
      <button onClick={handleClick}>LOGOUT</button>
    </>
  );
}

export default Home;
