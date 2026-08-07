import {eq} from "drizzle-orm";
import {users} from "../schema/user";
import {db} from "../index";

import type {UserRepository} from "../../../repositories/user.repository";
import type {User, CreateUser, UpdateUser} from "../../../entities/user";

export class UserRepositoryPostgres implements UserRepository {
   async createUser(data: CreateUser): Promise<User>{
         const result = await db.insert(users).values(data).returning();
         
         const user = result[0];
         if(!user){
            throw new Error("failed to create user");
         }

         return user;
   }

   async findById(id: string): Promise<User | null> {
           const result = await db 
                                 .select()
                                 .from(users)
                                 .where(eq(users.id, id))
                                 .limit(1);
            const user = result[0];
              if (!user) {
                return null;
             }

            return {
                id: user.id,
                username: user.username,
                email: user.email,
                passwordHash: user.passwordHash,
                createdAt: user.createdAt,
            };
   }

    async findByUsername(
                username: string
            ): Promise<User | null> {

                const result = await db
                    .select()
                    .from(users)
                    .where(eq(users.username, username))
                    .limit(1);

                const user = result[0];

                if (!user) {
                    return null;
                }

                return user;
            }

   async findByEmail(email: string): Promise<User | null> {
        const result = await db.select()
                               .from(users)
                               .where(eq(users.email, email))
                               .limit(1);

      return result[0] ?? null;
    }

   async update(id:string, data:UpdateUser): Promise<User> {
        const result = await db.update(users)
                               .set(data)
                               .where(eq(users.id, id))
                               .returning();
                              
         const user = result[0];

        if (!user) {
            throw new Error("User not found");
        }

        return user;
   }
   
   async delete(id: string): Promise<void> {
        const result = await db.delete(users)
                                 .where(eq(users.id, id))
                                 .returning();
      
   }
}