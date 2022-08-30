import Product from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';

const App = () => {
  const { data, loading, error } = useProducts();
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {!error && data.map((el) => <Product key={el.id} item={el} />)}
      <Modal title='Create new product'>
        <CreateProduct />
      </Modal>
    </div>
  );
};

export default App;
