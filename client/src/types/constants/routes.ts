export enum APP_ROUTES {
  HOME = "HOME",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export const appRoutes: Record<APP_ROUTES, string> = {
  [APP_ROUTES.HOME]: "/",
  [APP_ROUTES.LOGIN]: "/login",
  [APP_ROUTES.SIGNUP]: "/signup",
};
