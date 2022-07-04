import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [cart, setCart] = useState([]);
  const products = ['Item 1', 'Item 2', 'Item 3'];

  const onSubmit = (data) => {
    setCart([...cart, data]);
  };

  return (
    <>
      {products.map((e, i) => {
        return <Card key={i} product={e} submit={onSubmit} />;
      })}
    </>
  );
}
export default App;
