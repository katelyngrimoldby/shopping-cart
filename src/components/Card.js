import { useState } from 'react';

function Card({ product, submit }) {
  const [quantity, setQuantity] = useState(1);

  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <h2>{product}</h2>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={onChange}
      />
      <button
        type="button"
        name="submit"
        onClick={() =>
          submit({ product: product, quantity: parseInt(quantity) })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
