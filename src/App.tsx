import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Navigation from './components/Navigation';
//
const App = () => {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
};

export default App;
