//utils
import { fetchEnhanced } from "./utils";

export type TUserPayload = {
  firstName: string;
  lastName: string;
};

export type TUserData = {
  first_name: string;
  last_name: string;
};

export const userService = {
  getUser: async (): Promise<TUserPayload> => {
    const data: TUserData = await fetchEnhanced({ url: "user" });

    return {
      firstName: data.first_name,
      lastName: data.last_name,
    };
  },
};
