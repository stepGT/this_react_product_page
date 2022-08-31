import { useContext } from 'react';
import { useProducts } from '../hooks/products';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
import '../App.css';

const Products = () => {
  const { data, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);
  const onCreateHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  const onCloseHandler = () => {
    close();
  };
  return (
    <div className="container h-screen mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {!error && data.map((el) => <Product key={el.id} item={el} />)}
      {modal && (
        <Modal onClose={onCloseHandler} title="Create new product">
          <CreateProduct onCreate={onCreateHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">
        +
      </button>
    </div>
  );
};

export default Products;
