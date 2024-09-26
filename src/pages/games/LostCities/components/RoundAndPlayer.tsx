import React from 'react'
import { useLostCitiesStore } from '../store/lostcitiesStore'

const changeRound = useLostCitiesStore.getState().changeActiveRound;

export function RoundAndPlayer() {
    
    return (
        <div>
            <button
                onClick={() => {
                    changeRound()
                }}
            >Round and Player Button group
            </button>
        </div>
    )
}