import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { Expose } from "class-transformer";

export class CreateUserDTO {
  @IsNotEmpty({
    context: {
      priority: 1,
      translationKey: "isNotEmpty",
      args: { property: "First name" },
    },
  })
  @IsString({
    context: {
      priority: 2,
      translationKey: "isString",
      args: { property: "First name" },
    },
  })
  first_name!: string;

  @IsNotEmpty({
    context: {
      priority: 1,
      translationKey: "isNotEmpty",
      args: { property: "Last name" },
    },
  })
  @IsString({
    context: {
      priority: 2,
      translationKey: "isString",
      args: { property: "Last name" },
    },
  })
  last_name!: string;

  @IsNotEmpty({
    context: {
      priority: 1,
      translationKey: "isNotEmpty",
      args: { property: "Email" },
    },
  })
  @IsEmail(undefined, {
    context: { priority: 2, translationKey: "emailNotValid" },
  })
  @Expose({ name: "email" })
  email!: string;

  @IsNotEmpty({
    context: {
      priority: 1,
      translationKey: "isNotEmpty",
      args: { property: "Password" },
    },
  })
  @Length(6)
  @Expose({ name: "password" })
  password!: string;
}
