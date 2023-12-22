import { products } from './mocks/products.json'
import { Products } from './componets/product/Products'

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  )
}

export default App
