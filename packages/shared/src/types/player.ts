export interface player {
    id: string;
    username: string;

    position: {
        x: number;
        y: number;
    };

    radius: number;
    score: number;
}