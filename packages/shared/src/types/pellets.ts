import type { vector2} from "./common"

export interface pellet {
    id: string;
    position: vector2;
    value: number;
    radius: number;
}