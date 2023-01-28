import { StyledButton } from "./Button.styled";

type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export function Button({ text, type, onClick }: ButtonProps) {
  return (
    <>
      <StyledButton type={type} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
}
