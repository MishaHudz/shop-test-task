import ShoppingCartItem from 'components/ShoppingCartItem/ShoppingCartItem';
import { useState } from 'react';
import { getProductById } from 'services/shopAPI';

function ShoppingCartPage({ products }) {
  const [cartItems, setCartItems] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('ShoppingCartProductsId')) ?? []
  );

  const fiilteredProducts = () => {
    const SplitedData = cartItems.reduce(
      (prev, LocalHostId) => {
        const findedProduct = products.find(
          product => product.id === LocalHostId
        );

        if (findedProduct) {
          prev.findedProducts.push(findedProduct);
        } else {
          prev.notIncludedIds.push(LocalHostId);
        }

        return prev;
      },
      { findedProducts: [], notIncludedIds: [] }
    );
    const AllSelectedProducts = [...SplitedData.findedProducts];

    SplitedData.notIncludedIds.map(async id => {
      const data = await getProductById(id);
      AllSelectedProducts.push(data);
    });

    return AllSelectedProducts;
  };

  return (
    <section>
      {console.log(fiilteredProducts())}
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
