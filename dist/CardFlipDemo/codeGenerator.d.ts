interface Settings {
    cardCount: number;
    containerWidth: number;
    cardHeight: number;
    detailWidth: number;
    collapsedWidth: number;
    cardColor: string;
    buttonColor: string;
    animationDuration: number;
    cardTextColor: string;
    detailTextColor: string;
    cardWidth: number;
}
interface Card {
    title: string;
    details: string;
}
export declare const generateComponentCode: (settings: Settings, cards: Card[]) => string;
export declare const generateStyleCode: () => string;
export declare const generateFullCode: (settings: Settings, cards: Card[]) => string;
export {};
