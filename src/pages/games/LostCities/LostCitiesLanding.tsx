import React from 'react';
import LostCitiesGameBoard from './components/LostCitiesGameBoard';
import { RoundAndPlayer } from './components/RoundAndPlayer';
import { LostCitiesScore } from './components/LostCitiesScore';

function LostCityLanding() {
    return (
        < >

            <LostCitiesScore />

            <LostCitiesGameBoard />

            <RoundAndPlayer />

        </>
    );
}

export default LostCityLanding;