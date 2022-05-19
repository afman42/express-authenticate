import { IsDefined, IsEmail, IsString, MinLength } from "class-validator";
import { Trim } from "class-sanitizer";

export class UserRegisterDto {

  @IsDefined({ message: "Email must defined" })
  @IsEmail({}, { message: "Provided Email is not valid" })
  @Trim()
  public email?: string;

  @IsDefined({ message: "Password must defined" })
  @IsString()
  @MinLength(8, { message: "Password should be minimum of 8 characters" })
  public password?: string;

}

export class UserSignUpDto {

  @IsDefined({ message: "Email must defined" })
  @IsEmail({}, { message: "Provided Email is not valid" })
  @Trim()
  public email?: string;

  @IsDefined({ message: "Password must defined" })
  @IsString()
  @MinLength(8, { message: "Password should be minimum of 8 characters" })
  public password?: string;

}