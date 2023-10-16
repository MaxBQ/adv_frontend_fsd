import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  </Suspense>
);
