import ProductItem from 'components/ProductItem/ProductItem';

function HomePage({ products, setPage }) {
  const OnLofdMoreBtnClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      <button type="button" onClick={OnLofdMoreBtnClick}>
        Load More
      </button>
    </section>
  );
}

export default HomePage;
