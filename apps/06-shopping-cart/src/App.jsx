import { products as initialProducts } from './mocks/products.json'
import { Products } from './componets/product/Products'
import { Header } from './componets/header/Header'
import { Footer } from './componets/Footer/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './componets/cart/Cart'
import { CartProvider } from './context/cart.jsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
