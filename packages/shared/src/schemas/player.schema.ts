import { z } from "zod";
import { vector2schema } from "./common.schema"

export const playerMoveSchema = z.object({
    direction: vector2schema,
})

export type playerMoveInput = z.input< typeof playerMoveSchema> // this is the input type for playerMoveSchema