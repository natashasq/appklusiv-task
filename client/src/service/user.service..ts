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
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
          "Access-Control-Allow-Credentials": "true",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("ERROR");
      }

      const data: TUserData = await response.json();

      return {
        firstName: data.first_name,
        lastName: data.last_name,
      };
    } catch (e) {
      console.log(e);
      throw new Error("ERROR");
    }
  },
};
