import HomePage from 'pages/HomePage/HomePage';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getAllProducts } from 'services/shopAPI';

export const App = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts(page);
      setProducts(prev => [...prev, ...data]);
      data.length < 3 && setIsLoadMore(false);
    })();
  }, [page]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePage
              products={products}
              setPage={setPage}
              isLoadMore={isLoadMore}
            />
          }
        />
        <Route
          path="/shopping_cart"
          element={<ShoppingCartPage products={products} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
