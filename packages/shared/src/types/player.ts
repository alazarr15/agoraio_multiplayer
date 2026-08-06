import type {vector2} from "./common"

export interface player {
    id: string;
    username: string;

    position: vector2;

    radius: number;
    mass: number;
    score: number;

    color: string;
    alive: boolean;
}