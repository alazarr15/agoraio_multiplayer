export interface User {
  id: string;
  username: string;
  email: string; 
  passwordHash: string;
  createdAt: Date;
}

export interface CreateUser {
    username: string;
    email:string;
    passwordHash: string;
}

export interface UpdateUser {
  username?: string;
  email?: string;
  passwordHash?: string;
}
  