import type {User, CreateUserInput, UpdateUser} from "../entities/user";

export interface UserRepository {
  createUser(data: CreateUserInput): Promise<User>

  findById(id: string): Promise<User | null>;

  findByUsername(username: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  update(id: string, data: UpdateUser): Promise<User>;

  delete(id: string): Promise<void>;
}