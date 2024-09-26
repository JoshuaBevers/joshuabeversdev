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

export type PlayerBoard = {
    red: Card[],
    blue: Card[],
    yellow: Card[],
    green: Card[],
    silver: Card[],
    purple: Card[],
}