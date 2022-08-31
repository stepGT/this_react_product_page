import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
      <span>stepGT</span>
      <span>
        <Link className="mr-2" to="/">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
};

export default Navigation;
