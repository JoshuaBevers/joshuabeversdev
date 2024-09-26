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
    playerName: string; // probably just player 1
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
    player1: Player,
    player2: Player,
    ActivePlayer: any
    updatePlayerBoard(player: string, card: Card): void,
    updateRoundScore(player: string, round: number, score: number): void,
    updateTotalScore(player: string, score: number): void,
    changeActivePlayer(): void,
    changeActiveRound(): void,
}