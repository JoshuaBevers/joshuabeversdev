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
    ActiveRound: 1,


    updatePlayerBoard: (player: string, card) => {

    },

    updateRoundScore(player, round, score) {

    },

    updateTotalScore(player, score) {

    },

    changeActivePlayer(specificPlayer?) {

        if (specificPlayer) {
            set({ ActivePlayer: specificPlayer })
            return
        }

        if (get().ActivePlayer === get().player1) {
            set({ ActivePlayer: get().player2 })
        } else {
            set({ ActivePlayer: get().player1 })
        }

    },

    changeActiveRound(Round) {
        if (Round === 0 || Round === 4) {
            return
        }
        set(() => ({
            ActiveRound: Round
        }))
    }

}));

