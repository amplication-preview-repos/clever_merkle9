import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="jobTitle" source="jobTitle" />
        <TextInput label="userPhoneNumber" source="userPhoneNumber" />
        <DateTimeInput label="userDateOfBirth" source="userDateOfBirth" />
        <TextInput label="userCompanyName" source="userCompanyName" />
        <TextInput label="userJobTitle" source="userJobTitle" />
      </SimpleForm>
    </Edit>
  );
};
