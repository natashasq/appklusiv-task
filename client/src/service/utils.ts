//types
import { httpMethods } from "../types/http/http-methods";

type TParams = {
  [key: string]: string | any | undefined;
};

type TFetchEnhanced = {
  url: string;
  params?: TParams;
  method?: httpMethods;
};
export const fetchEnhanced = async ({
  url,
  params,
  method = httpMethods.GET,
}: TFetchEnhanced) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  };

  if (method === httpMethods.POST) {
    options.body = JSON.stringify(params);
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/${url}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();

  return result;
};
