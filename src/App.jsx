import './App.css'
import {ProductCard} from "./components/product-card.jsx";
import {Filter} from "./components/filter.jsx";
import {Search} from "./components/search.jsx";
import {categories, products} from "./data/products.js";

function App() {

    const filteredProducts = [...products];

    const filteredProductsByCategory = (category) => {
        console.log(category)
        return  products.filter((product) => product.category === category);
    }

  return (
    <>
      <Search />

      <Filter categories={categories} onFilter={filteredProductsByCategory} />

      <div className="product-list">
        {filteredProducts.map((product) => (
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
