import { create } from "zustand";
import { LostCitiesStore } from "../LostCitiesTypes";
import {buildInitialRounds} from '../functions/LostCitiesFunctions'

export const useLostCitiesStore = create<LostCitiesStore>((set, get) => ({
    player1: {
        name: "player1",
        totalScore: 0,
        RoundState: buildInitialRounds()
    },
    player2: {
        name: "player2",
        totalScore: 0,
        RoundState: buildInitialRounds()
    },

    ActivePlayer: get().player1,

    updatePlayerBoard: (player: string, card) => {

    },
    
    updateRoundScore(player, round, score) {
        
    },

    updateTotalScore(player, score) {
        
    },

}));

