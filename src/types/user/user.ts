export type User = {
  email: string
  id: string
  firstName: string
  lastName: string
  password: string
  userType: string
}

export interface UserFormValues {
  firstName: string;
  lastName: string;
  userType: string[];
  email: string;
  password: string;
}

export interface UserFormValuesToApi {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  password: string;
}