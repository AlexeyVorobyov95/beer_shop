import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';

const BeerDetails = lazy(() => import('components/BeerDetails/BeerDetails'));
const Layout = lazy(() => import('components/Layout/Layout'));
const BeerShop = lazy(() => import('page/BeerShop/BeerShop'));
const MyBeers = lazy(() => import('page/MyBeers/MyBeers'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BeerShop />}></Route>
          <Route path="beers" element={<MyBeers />}></Route>
          <Route path="beers/:id" element={<BeerDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
