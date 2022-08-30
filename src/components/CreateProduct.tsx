import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import Error from './Error';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
};

const CreateProduct = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  //
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (value.trim().length === 0) {
      setError('Please enter valid value!');
      return;
    }
    productData.title = value;
    //
    await axios
      .post<IProduct>('https://fakestoreapi.com/products', productData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      { error && <Error error={error} /> }
      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
