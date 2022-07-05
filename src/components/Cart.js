function CartItem({ product, quantity }) {
  return (
    <div>
      <h2>{product}</h2>
      <span>{quantity}</span>
    </div>
  );
}

function Cart({ content }) {
  return (
    <div>
      {content.map((e, i) => {
        return <CartItem key={i} product={e.product} quantity={e.quantity} />;
      })}
    </div>
  );
}

export default Cart;
