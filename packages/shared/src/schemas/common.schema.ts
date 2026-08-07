import { z } from "zod";

export const vector2schema = z.object({
    x: z.number(),
    y: z.number(),
})


export type vector2Input = z.input<typeof vector2schema> // this is the input type for vector2schema