type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export function Button({ text, type, onClick }: ButtonProps) {
  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
