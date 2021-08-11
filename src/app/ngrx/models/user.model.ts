export interface UserResponse {
  data: User[];
  meta: any;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}