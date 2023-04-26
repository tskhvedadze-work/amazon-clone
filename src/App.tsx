import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout";

const HomeView = lazy(() => import("./views/HomeView"));
const ProductView = lazy(() => import("./views/ProductView"));
const ProductsView = lazy(() => import("./views/ProductsView"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
