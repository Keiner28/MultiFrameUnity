import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from '../common/constants'
import { checkWinnerFrom, checkEndGame, initialTurn } from '../logic/board'
import { saveGameToStorage, resetGameStorage } from '../logic/storage/storage'

/**
 * Custom hook for managing the Tic Tac Toe game state.
 * @returns An object containing the game board, current turn, game winner, resetGame function, and updateBoard function.
 */
const useTicTacToe = () => {
  /**
   * Custom hook for managing the Tic Tac Toe game board state.
   * The board state is stored in local storage and initialized with either the stored value or an empty board.
   * @returns {Array} The current Tic Tac Toe game board state.
   */
  const [board, setBoard] = useState(() => {
    try {
      const storedBoard = window.localStorage.getItem('board')
      return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
    } catch (error) {
      console.error('Error al leer del localStorage:', error)
      return Array(9).fill(null)
    }
  })

  /**
   * Custom hook for managing the turn in a Tic Tac Toe game.
   *
   * @returns The current turn and a function to update it.
   */
  const [turn, setTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
    return storedTurn ?? initialTurn()
  })

  const [gameWinner, setWinner] = useState<null | boolean | number>(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(initialTurn())
    setWinner(null)
    resetGameStorage()
  }

  /**
   * Updates the game board with the player's move at the specified index.
   * If the index is already occupied or there is a game winner, the function does nothing.
   * After updating the board, it changes the turn to the next player and saves the game state to storage.
   * If there is a winner, it triggers a confetti effect and sets the winner state.
   * If the game ends in a draw, it sets the winner state to false.
   *
   * @param index - The index of the board where the player wants to make a move.
   */
  const updateBoard = (index: number) => {
    if (board[index] || gameWinner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage(newBoard, newTurn)

    const winner = checkWinnerFrom(newBoard)
    if (winner) {
      confetti()
      setWinner(winner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return { board, turn, gameWinner, resetGame, updateBoard }
}

export default useTicTacToe
