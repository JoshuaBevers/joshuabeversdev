import React from 'react'
import { useLostCitiesStore } from '../store/lostcitiesStore'
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";

const changeRound = useLostCitiesStore.getState().changeActiveRound;

export function RoundAndPlayer() {
    const currentRound = useLostCitiesStore(state => state.ActiveRound);
    const CurrentPlayer = useLostCitiesStore(state => state.ActivePlayer);
    const ChangePlayer = useLostCitiesStore(state => state.changeActivePlayer);

    return (
        <div>
            <div className="GameControls">


                <TbCaretLeft size={28} onClick={() => {

                    changeRound(currentRound - 1)
                }} />

                Round {currentRound}
                <TbCaretRight size={28} onClick={() => {

                    changeRound(currentRound + 1)
                }} />



            </div>
            <div>
                <TbCaretLeft size={28} onClick={() => {

                    ChangePlayer()
                }} />
                {CurrentPlayer.playerName}
                <TbCaretRight size={28} onClick={() => {

                    // changeRound(currentRound + 1)
                    ChangePlayer()
                }} />
            </div>
        </div>
    )
}