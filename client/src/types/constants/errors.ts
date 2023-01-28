export enum ERROR_KEYS {
  text = "text",
  email = "email",
  password = "password",
}

type TError = {
  required: string;
  invalid?: string;
};

export const appErrors: Record<ERROR_KEYS, TError> = {
  [ERROR_KEYS.text]: {
    required: "This field is required.",
  },
  [ERROR_KEYS.email]: {
    required: "This field is required.",
    invalid: "Invalid email address.",
  },
  [ERROR_KEYS.password]: {
    required: "This field is required.",
    invalid: "Password has to be at least 6 characters long.",
  },
};
