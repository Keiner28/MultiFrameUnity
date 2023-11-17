import { WINNING_COMBINATIONS } from '../common/constants'
import { TURNS } from '../common/constants'

export const checkWinnerFrom = (boardToCheck: Array<null | number>) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (boardToCheck: Array<null | number>) => {
  return boardToCheck.every((square) => square !== null)
}

export const initialTurn = () => {
  const initialTurn = Math.random() < 0.5 ? TURNS.X : TURNS.O
  return initialTurn
}
