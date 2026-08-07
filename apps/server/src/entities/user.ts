export interface User {
  id: string;
  username: string;
  email: string; 
  passwordHash: string;
  createdAt: string;
}

export interface CreateUserInput {
    username: string;
    email:string;
    passwordHash: string;
}

export interface UpdateUser {
  username?: string;
  email?: string;
  passwordHash?: string;
}
  