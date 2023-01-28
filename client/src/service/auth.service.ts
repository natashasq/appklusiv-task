import { httpMethods } from "../types/http/http-methods";

export type TSignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export const authService = {
  signup: async ({ firstName, lastName, email, password }: TSignupPayload) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
      method: httpMethods.POST,
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    });
    const data = response.json();
    return data;
  },

  login: async ({ email, password }: TLoginPayload) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
      method: httpMethods.POST,
      body: JSON.stringify({ email, password }),
    });
    const data = response.json();
    return data;
  },

  logout: async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      headers: {
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
      method: httpMethods.POST,
    });
    const data = response.json();
    return data;
  },
};
