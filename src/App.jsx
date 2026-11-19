import './App.css'
import {ProductCard} from "./components/product-card.jsx";
import {Filter} from "./components/filter.jsx";
import {categories, products} from "./data/products.js";

function App() {

  return (
    <>
      <Filter categories={categories} />

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
