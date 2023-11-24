import type { Country, Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  isLoading: boolean;
  error?: string;
  data?: Profile;
  readonly: boolean;
}
