import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="companyName" source="companyName" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="userPhoneNumber" source="userPhoneNumber" />
        <TextField label="userDateOfBirth" source="userDateOfBirth" />
        <TextField label="userCompanyName" source="userCompanyName" />
        <TextField label="userJobTitle" source="userJobTitle" />
      </SimpleShowLayout>
    </Show>
  );
};
