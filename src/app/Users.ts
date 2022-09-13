export interface User {
  id?: number;
  name?: string;
  email?: string;
  cpf?: string;
  origin?: string;
  action?: boolean;
}

export interface Users {
  count: number;
  rows: User[];
}
