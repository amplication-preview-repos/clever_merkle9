import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  phoneNumber?: StringNullableFilter;
  companyName?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  userPhoneNumber?: StringNullableFilter;
  userDateOfBirth?: DateTimeNullableFilter;
  userCompanyName?: StringNullableFilter;
  userJobTitle?: StringNullableFilter;
};
