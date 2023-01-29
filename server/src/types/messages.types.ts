export enum APP_MESSAGES {
  userExists = "userAlreadyExists",
  profileCreated = "profileSuccessfullyCreated",
  notFound = "notFound",
  invalidPassword = "invalidPassword",
  loggedIn = "loggedIn",
  loggedOut = "loggedOut",
  noToken = "noToken",
}

export const appMessages: Record<APP_MESSAGES, string> = {
  [APP_MESSAGES.userExists]: "The user with this email already exists.",
  [APP_MESSAGES.profileCreated]: "Profile successfully created.",
  [APP_MESSAGES.notFound]: "User not found!",
  [APP_MESSAGES.invalidPassword]: "Invalid password.",
  [APP_MESSAGES.loggedIn]: "Logged in successfully.",
  [APP_MESSAGES.loggedOut]: "Successfully logged out.",
  [APP_MESSAGES.noToken]: "NO_TOKEN",
};
