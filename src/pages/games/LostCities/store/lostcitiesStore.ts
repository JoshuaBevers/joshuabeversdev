import { create } from "zustand";
import { LostCitiesStore } from "../LostCitiesTypes";
import { buildInitialRounds } from '../functions/LostCitiesFunctions'
const builtRounds = buildInitialRounds();
console.log(builtRounds);


export const useLostCitiesStore = create<LostCitiesStore>((set, get) => ({
    player1: {
        playerName: "player 1",
        totalScore: 0,
        RoundState: buildInitialRounds()
    },
    player2: {
        playerName: "player 2",
        totalScore: 0,
        RoundState: buildInitialRounds()
    },

    // ActivePlayer: get().player1,
    ActivePlayer: undefined,
    ActiveRound: 0,


    updatePlayerBoard: (player: string, card) => {

    },

    updateRoundScore(player, round, score) {
        console.log(get().player1);
    },

    updateTotalScore(player, score) {

    },

    changeActivePlayer() {

    },

    changeActiveRound() {
        console.log(get().ActivePlayer)
    }

}));

