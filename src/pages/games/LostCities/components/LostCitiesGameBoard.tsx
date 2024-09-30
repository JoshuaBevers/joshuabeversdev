import React from 'react'
import { useLostCitiesStore } from '../store/lostcitiesStore'
import { Card } from '../LostCitiesTypes';
const changeActivePlayer = useLostCitiesStore.getState().changeActivePlayer;

export default function LostCitiesGameBoard() {
    let ActivePlayer = useLostCitiesStore(state => state.ActivePlayer)
    let CurrentRound = useLostCitiesStore(state => state.ActiveRound)
    if (ActivePlayer === undefined) {
        changeActivePlayer(useLostCitiesStore.getState().player1)
    }
    console.log(ActivePlayer.RoundState[CurrentRound - 1].PlayerBoard)
    const playerBoard = ActivePlayer.RoundState[CurrentRound - 1].PlayerBoard; // this is an object with the colors to be rendered.

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {Object.keys(playerBoard).map((CardColor, index) => {
                console.log(playerBoard[CardColor])
                const colorS: Card[] = playerBoard[CardColor]
                return (
                    <div key={index}>
                        <RenderColor color={colorS} />
                    </div>
                )
            })}
        </div>
    )
}


function RenderColor(color: any) {

    return (
        <div>
            {color.color.map((card: Card, index: number) => {
                // console.log(color)
                return (
                    <ColorButton key={index} color={card} />
                )
            })}
        </div>
    )
}

function ColorButton({ color }: { color: any }) {
    // console.log(color)
    return (
        <div style={{ backgroundColor: color.color }}>{color.value}</div>
    )
}