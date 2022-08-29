import './App.css';
import Product from './components/Product';
import { products } from './components/data/products';

const App = () => {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product item={products[0]} />
      <Product item={products[1]} />
    </div>
  )
};

export default App;
