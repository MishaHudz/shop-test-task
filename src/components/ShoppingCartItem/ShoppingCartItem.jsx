import {
  ShoppingListItem,
  ShoppingListItemButton,
  ShoppingListItemRightPart,
} from './ShoppingCartItem.styled';

function ShoppingCartItem({
  product: { productName, price, ProductDescription, ProductPhoto, id },
  setCartItems,
  cartItems,
}) {
  const onDeleteProductButtonClick = () => {
    setCartItems(prev => prev.filter(productId => productId !== id));
    window.localStorage.setItem(
      'ShoppingCartProductsId',
      JSON.stringify(cartItems.filter(productId => productId !== id))
    );
  };

  return (
    <ShoppingListItem>
      <img
        src={ProductPhoto}
        alt={ProductDescription}
        width="80px"
        height="60px"
      />

      <ShoppingListItemRightPart>
        <p>
          Price: <span>{price}</span>
        </p>
        <ShoppingListItemButton
          type="button"
          onClick={onDeleteProductButtonClick}
        >
          Delete
        </ShoppingListItemButton>
      </ShoppingListItemRightPart>
    </ShoppingListItem>
  );
}

export default ShoppingCartItem;
