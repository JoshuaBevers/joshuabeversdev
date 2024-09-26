import { Card, PlayerBoard } from '../LostCitiesTypes';

/**
 * @description Calculates the score for a player in a given round.
 * @param SuiteState A color state for a player in a given round.
 */
export function CalculateColorScore(SuiteState: Card[]): number {
    // for every wagered card, the end score for that color is increased by 2x, 3x, 4x for each wager card. EG. 2 wager cards = 3x the score for that color
    // if a color has no flipped cards, then the score is 0 for that color.
    // if a color has eight or more cards flipped, then the score is increased by 20 points after multiplying the wagered cards.
    let score = 0;
    let wagerMultiplier = 0;
    let flippedCards = 0;

    for (let i = 0; i < SuiteState.length; i++) {
        if (SuiteState[i].isWager && SuiteState[i].isFlipped) {
            wagerMultiplier++;
        }
        if (SuiteState[i].isFlipped) {
            flippedCards++;
        }

        if (SuiteState[i].isFlipped && !SuiteState[i].isWager) {
            score += SuiteState[i].value;
        }

    }

    if (flippedCards >= 1) {
        score -= 20;
    }

    // console.log('we setting score', score)

    switch (wagerMultiplier) {
        case 1:
            score *= 2;
            break;
        case 2:
            score *= 3;
            break;
        case 3:
            score *= 4;
            break;
        default:
            break;
    }

    if (flippedCards >= 8) {
        score += 20;
    }

    return score;
}


/**
 * @description builds a suite of cards for a given color.
 * @param color the color the suite of cards should be.
 * @returns a lost cities suite of colors, wagers cards, value cards 2-10
 */
export function buildColor(color: string) {
    let CardArray: Card[] = []
    for (let i = -1; i <= 10; i++) {
        if (i <= 1) {
            // create a leverage card
            let wager: Card = {
                color: color,
                value: i,
                isWager: true,
                isFlipped: false,
                isMatched: false
            }
            CardArray.push(wager)
        }
        else {
            let card: Card = {
                color: color,
                value: i,
                isWager: false,
                isFlipped: false,
                isMatched: false
            }
            CardArray.push(card)
        }

    }
    return CardArray;
}