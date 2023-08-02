import { NavLink, Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/shopping_cart"> Shoping cart</NavLink>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
