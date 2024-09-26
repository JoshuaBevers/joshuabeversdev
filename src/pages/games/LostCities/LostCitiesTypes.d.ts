export type PlayerState = {
    PlayerName: string,
    Round1Score: number,
    Round2Score: number,
    Round3Score: number,
    Total: number,
}

export type Card = {
    color: string,
    value: number,
    isWager: boolean,
    isFlipped: boolean,
    isMatched: boolean
}

export interface Player {
    name: string; // probably just player 1
    totalScore: number;
    RoundState: Round[];
}

export interface Round {
    RoundScore: number;
    PlayerBoard: PlayerBoard;
}

export interface PlayerBoard {
    red: Card[];
    blue: Card[];
    yellow: Card[];
    green: Card[];
    silver: Card[];
    purple: Card[];
}


export interface LostCitiesStore {

}