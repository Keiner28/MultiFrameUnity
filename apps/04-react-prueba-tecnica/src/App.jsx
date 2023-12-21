import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'
import './App.css'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  console.log(imageUrl)
  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>¡Más gatitos!</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
      )}
    </main>
  )
}
