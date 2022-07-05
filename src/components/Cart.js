function CartItem({ product, quantity, remove }) {
  return (
    <div>
      <h2>{product}</h2>
      <span>{quantity}</span>
      <button
        type="button"
        id="remove"
        name="remove"
        onClick={() => remove({ product, quantity })}
      >
        Remove
      </button>
    </div>
  );
}

function Cart({ content, callback }) {
  return (
    <div>
      {content.map((e, i) => {
        return (
          <CartItem
            key={i}
            product={e.product}
            quantity={e.quantity}
            remove={() => callback(e)}
          />
        );
      })}
    </div>
  );
}

export default Cart;
