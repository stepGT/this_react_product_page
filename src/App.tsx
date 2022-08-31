import { useState } from 'react';
import Product from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { IProduct } from './models';

const App = () => {
  const { data, loading, error, addProduct } = useProducts();
  const [showModal, setShowModal] = useState(true);
  const onCreateHandler = (product: IProduct) => {
    setShowModal(false);
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {!error && data.map((el) => <Product key={el.id} item={el} />)}
      {showModal && (
        <Modal title="Create new product">
          <CreateProduct onCreate={onCreateHandler} />
        </Modal>
      )}
    </div>
  );
};

export default App;
