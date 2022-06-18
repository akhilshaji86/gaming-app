export interface GameList {
    slotGames: SlotGame[];
}
export interface ImageItemList {
    id: number;
    name: string;
    image: string;
}
export interface SlotGame {
    index: number | string,
    gameName: string,
    jackpot: string,
    time: string
}
export interface GameType {
    id: number | string;
    title: string;
    iconUrl: string;
}