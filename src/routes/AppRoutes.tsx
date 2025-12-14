import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Layout } from '../components/Layout.js';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
