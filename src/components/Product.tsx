import { useState } from 'react';
import { IProduct } from '../models';
interface ProductProps {
  item: IProduct;
}

const Product = ({ item }: ProductProps) => {
  const [show, setShow] = useState(false);
  const onClickHandle = () => setShow(!show);
  //
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <span className="font-bold">{item.price}</span>
      <button onClick={onClickHandle} className="py-2 px-4 border bg-yellow-400 rounded">
        { show ? 'Hide details' : 'Show details' }
      </button>
      <p>{show && item.description}</p>
    </div>
  );
};

export default Product;
