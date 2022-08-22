import { Company } from './company';

export interface User {
  id: number;
  company: Company;
  name: string;
  role: string;
  is_active: boolean;
  password: string;
}
