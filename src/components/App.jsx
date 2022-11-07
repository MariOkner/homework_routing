import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// import { NotFound } from '../pages/NotFound';
const createAsyncComponent = path => lazy(() => import(path));

const About = createAsyncComponent('../pages/About');
const Home = createAsyncComponent('../pages/Home');
const ProductDetails = createAsyncComponent('../pages/ProductDetails');
const Products = createAsyncComponent('../pages/Products');
const Mission = createAsyncComponent('./Mission');
const Team = createAsyncComponent('./Team');
const Reviews = createAsyncComponent('./Reviews');
const Achievement = createAsyncComponent('./Achievement.jsx');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="achievement" element={<Achievement />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
