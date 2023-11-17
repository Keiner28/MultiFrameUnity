import { Square } from './Square'

export function WinnerModal({ gameWinner, resetGame }) {
  if (gameWinner === null) return null
  const winnerText = gameWinner === false ? 'Empate' : 'Ganó:'
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {gameWinner && <Square>{gameWinner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
