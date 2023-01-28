import { httpMethods } from "../types/http/http-methods";

//utils
import { fetchEnhanced } from "./utils";

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
    const data = await fetchEnhanced({
      url: "signup",
      method: httpMethods.POST,
      params: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      },
    });

    return data;
  },

  login: async ({ email, password }: TLoginPayload) => {
    const data = await fetchEnhanced({
      url: "login",
      method: httpMethods.POST,
      params: { email, password },
    });

    return data;
  },

  logout: async () => {
    const data = await fetchEnhanced({
      url: "logout",
      method: httpMethods.POST,
    });

    return data;
  },
};
