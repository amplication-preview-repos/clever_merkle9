import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  dateOfBirth?: SortOrder;
  phoneNumber?: SortOrder;
  companyName?: SortOrder;
  jobTitle?: SortOrder;
  userPhoneNumber?: SortOrder;
  userDateOfBirth?: SortOrder;
  userCompanyName?: SortOrder;
  userJobTitle?: SortOrder;
};
