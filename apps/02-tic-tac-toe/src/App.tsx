import { Square } from './components/Square'
import { TURNS } from './common/constants'
import { WinnerModal } from './components/WinnerModal.tsx'
import useTicTacToe from './hooks/useTicTacToe.ts'

function App() {
  const { board, turn, gameWinner, resetGame, updateBoard } = useTicTacToe()

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square: string | null, index: number) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} gameWinner={gameWinner} />
    </main>
  )
}

export default App
