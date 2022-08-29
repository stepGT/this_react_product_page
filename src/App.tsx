import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import Product from './components/Product';
import { IProduct } from './models';

import './App.css';

const App = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function fetchProduct() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setData(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!error && data.map((el) => (
        <Product key={el.id} item={el} />
      ))}
    </div>
  );
};

export default App;
