import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../lib/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};
