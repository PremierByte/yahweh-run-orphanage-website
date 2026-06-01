import { Role } from "./permission";

export interface User {
  id: number;
  name: string;
  firstname?: string;
  lastname?: string;
  email: string;
  role: Role;
  avatar: string;
  email_verified_at?: string;
  addresses: Address[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Address {
  id: number;
  user_id: number;
  full_name: string;
  phone: string;
  label?: string | null;
  address_line_1: string;
  address_line_2?: string | null;
  city: string;
  postcode: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile extends Omit<Address, "id" | "user_id" | "label"> {
  id: string;
  full_name: string;
  company_name?: string;
  phone: string;
  role: string;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}
