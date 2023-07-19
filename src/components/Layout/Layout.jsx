import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ActivNavLink, Nav } from './LayoutStyld';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <ActivNavLink to="/">Beer shop</ActivNavLink>
          <ActivNavLink to="/beers">My beers</ActivNavLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
