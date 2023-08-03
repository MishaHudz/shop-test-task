import ShoppingCartItem from 'components/ShoppingCartItem/ShoppingCartItem';
import { useState } from 'react';

function ShoppingCartPage({ products }) {
  const [cartItems, setCartItems] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('ShoppingCartProductsId')) ?? []
  );

  const fiilteredProducts = () => {
    return products.filter(product => cartItems.includes(product.id));
  };

  return (
    <section>
      <h2>Shopping Cart </h2>
      <ul>
        {fiilteredProducts().map(product => (
          <ShoppingCartItem
            key={product.id}
            product={product}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </ul>
      <p>
        Total items: <span></span>
      </p>
      <p>
        Total price: <span></span>
      </p>
    </section>
  );
}

export default ShoppingCartPage;
