import React from 'react'
import { useLostCitiesStore } from '../store/lostcitiesStore'

export default function LostCitiesGameBoard() {
    let ActivePlayer = useLostCitiesStore(state => state.ActivePlayer)
    console.log(ActivePlayer)
    if (ActivePlayer === undefined) {
        ActivePlayer = useLostCitiesStore.getState().player1
    }

    return (
        <div>
            {ActivePlayer.playerName}
            <h1>Lost Cities Game Board</h1>
        </div>
    )
}