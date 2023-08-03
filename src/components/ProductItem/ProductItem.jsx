import { HomePageProductItem } from './ProductItem.styled';

function ProductItem({ product }) {
  const { productName, price, ProductDescription, ProductPhoto, id } = product;

  const onAddButtonClick = () => {
    const SelectedProducts = JSON.parse(
      window.localStorage.getItem('ShoppingCartProductsId')
    );

    if (SelectedProducts) {
      !SelectedProducts.includes(id) &&
        window.localStorage.setItem(
          'ShoppingCartProductsId',
          JSON.stringify([...SelectedProducts, id])
        );

      return;
    }

    window.localStorage.setItem('ShoppingCartProductsId', JSON.stringify([id]));
  };

  return (
    <HomePageProductItem>
      <img src={ProductPhoto} alt={ProductDescription} width="360px" />
      <h2>{productName}</h2>
      <p>
        Price: <span>{price}</span>
      </p>
      <button type="button" onClick={onAddButtonClick}>
        Add to shopping cart
      </button>
    </HomePageProductItem>
  );
}

export default ProductItem;
