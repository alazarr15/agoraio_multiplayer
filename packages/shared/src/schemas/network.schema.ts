import { z } from "zod";


export const JoinGameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20),
});


export const EmptyPayloadSchema = z.object({});