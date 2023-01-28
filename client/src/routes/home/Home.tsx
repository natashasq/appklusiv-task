//contexts
import { useAuthState } from "../../contexts/AuthContext";

//styled
import { HomeTitle } from "./Home.styled";

function Home() {
  const { user } = useAuthState();

  return (
    <HomeTitle>
      Welcome {user?.firstName} {user?.lastName}
    </HomeTitle>
  );
}

export default Home;
