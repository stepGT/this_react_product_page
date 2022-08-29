import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from './components/Product';
import { IProduct } from './models';

import './App.css';

const App = () => {
  const [data, setData] = useState<IProduct[]>([]);
  async function fetchProduct() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
    setData(response.data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {data.map((el) => (
        <Product key={el.id} item={el} />
      ))}
    </div>
  );
};

export default App;
