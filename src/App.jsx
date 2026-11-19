import './App.css'
import {ProductCard} from "./components/product-card.jsx";
import {products} from "./data/products.js";

function App() {

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            productBadge={product.productBadge}
          />
        ))}
      </div>
    </>
  )
}

export default App
