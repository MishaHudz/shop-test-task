import HomePage from 'pages/HomePage/HomePage';
import Page from 'pages/Page/Page';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/page" element={<Page />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
