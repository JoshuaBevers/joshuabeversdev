import { describe, expect, it, test } from 'vitest'

// functions
import { CalculateColorScore, buildColor } from '../functions/LostCitiesMath'


//types
import { Card } from '../LostCitiesTypes'



describe('Calculate Player Color Score', () => {
  it('Player score should be 0', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be 0 because no cards are played in the color.
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(0);
  })

  it('Player score should be -19', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be -19 because we have played the 2 value card. (There is no 1 value card.)
    PlayerState[3].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(-18);
  })

  it('Flip a wager card', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be -40 because we have flipped a wager card.
    PlayerState[0].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(-40);
  })

  it('Flip 2 wager cards', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be -40 because we have flipped a wager card.
    PlayerState[0].isFlipped = true;
    PlayerState[1].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(-60);
  })

  it('Flip 3 wager cards', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be -40 because we have flipped a wager card.
    PlayerState[0].isFlipped = true;
    PlayerState[1].isFlipped = true;
    PlayerState[2].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(-80);
  })

  it('Flip a 10, 8, and 2 card - score should be 0.', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be 0 because we have flipped a wager card.
    PlayerState[3].isFlipped = true;
    PlayerState[9].isFlipped = true;
    PlayerState[11].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(0);

  })

  it('Flip a 10, 8, 2, and wager card card - score should be 0.', () => {
    let PlayerState: Card[] = buildColor('red');
    // we expect player score to be 0 because we have flipped a wager card.
    PlayerState[0].isFlipped = true;
    PlayerState[3].isFlipped = true;
    PlayerState[9].isFlipped = true;
    PlayerState[11].isFlipped = true;
    const score = CalculateColorScore(PlayerState);
    expect(score).toBe(0);

  })



})