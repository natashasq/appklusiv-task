export enum INPUT_LABELS {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
}

export enum BUTTON_LABELS {
  signup = "signup",
  login = "login",
  logout = "logout",
}

export enum INPUT_PLACEHOLDERS {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
}

export const inputLabels = {
  [INPUT_LABELS.firstName]: "First name",
  [INPUT_LABELS.lastName]: "Last name",
  [INPUT_LABELS.email]: "Email",
  [INPUT_LABELS.password]: "Password",
};

export const buttonLabels = {
  [BUTTON_LABELS.signup]: "Sign up",
  [BUTTON_LABELS.login]: "Login",
  [BUTTON_LABELS.logout]: "Logout",
};

export const inputPlaceholders = {
  [INPUT_PLACEHOLDERS.firstName]: "Enter your first name...",
  [INPUT_PLACEHOLDERS.lastName]: "Enter your last name...",
  [INPUT_PLACEHOLDERS.email]: "Enter your email...",
  [INPUT_PLACEHOLDERS.password]: "Enter your password...",
};
