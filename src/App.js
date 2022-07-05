import { useState } from 'react';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const products = ['Item 1', 'Item 2', 'Item 3'];

  const onSubmit = (data) => {
    const currentCart = cart;
    if (currentCart.find((e) => e.product === data.product)) {
      const product = currentCart.find((e) => e.product === data.product);
      product.quantity += data.quantity;
      const newCart = [product].concat(
        ...currentCart.filter((e) => e.product !== product.product)
      );
      setCart(newCart);
    } else {
      setCart([data, ...cart]);
    }
  };

  return (
    <>
      <Cart content={cart} />
      <div>
        {products.map((e, i) => {
          return <Card key={i} product={e} submit={onSubmit} />;
        })}
      </div>
    </>
  );
}
export default App;
