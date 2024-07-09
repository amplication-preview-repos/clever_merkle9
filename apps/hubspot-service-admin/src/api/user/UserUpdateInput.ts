import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  dateOfBirth?: Date | null;
  phoneNumber?: string | null;
  companyName?: string | null;
  jobTitle?: string | null;
  userPhoneNumber?: string | null;
  userDateOfBirth?: Date | null;
  userCompanyName?: string | null;
  userJobTitle?: string | null;
};
