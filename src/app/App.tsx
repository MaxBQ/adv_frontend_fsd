import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/Route";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])} id="app">
      <Suspense fallback="">
        <Navbar />
        <div className="contain-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
