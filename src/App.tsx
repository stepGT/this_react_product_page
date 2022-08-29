import Product from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';

const App = () => {
  const { data, loading, error } = useProducts();
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!error && data.map((el) => <Product key={el.id} item={el} />)}
    </div>
  );
};

export default App;
