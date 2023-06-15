import { useLocation } from "react-router-dom";

function Button({ name, info }: { name: string; info: Info }) {
  const pathname = useLocation().pathname;
  return (
    <button
      onClick={info.onClick}
      data-testid={pathname === "/signup" ? "signup-button" : "signin-button"}
      disabled={!info.isValid}
    >
      {name}
    </button>
  );
}

export default Button;

interface Info {
  email: string;
  password: string;
  onClick: () => void;
  isValid: boolean;
}
