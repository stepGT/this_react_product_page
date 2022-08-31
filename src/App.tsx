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
  const [showModal, setShowModal] = useState(false);
  const onCreateHandler = (product: IProduct) => {
    setShowModal(false);
    addProduct(product);
  };
  const onCloseHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {!error && data.map((el) => <Product key={el.id} item={el} />)}
      {showModal && (
        <Modal onClose={onCloseHandler} title="Create new product">
          <CreateProduct onCreate={onCreateHandler} />
        </Modal>
      )}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">
        +
      </button>
    </div>
  );
};

export default App;
