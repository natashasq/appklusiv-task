import { ReactNode } from "react";

//contexts
import { useAuthActions, useAuthState } from "../../contexts/AuthContext";

//types
import { buttonLabels, BUTTON_LABELS } from "../../types/constants/labels";

//components
import { Button } from "../button/Button";

//styled
import { Header, StyledLayout } from "./Layout.styled";

export function Layout({ children }: { children: ReactNode }) {
  const { logout } = useAuthActions();
  const { isAuthenticated } = useAuthState();
  const handleClick = () => {
    logout();
  };

  return (
    <StyledLayout>
      <Header>
        {isAuthenticated && (
          <Button
            type="button"
            text={buttonLabels[BUTTON_LABELS.logout]}
            onClick={handleClick}
          />
        )}
      </Header>
      {children}
    </StyledLayout>
  );
}
