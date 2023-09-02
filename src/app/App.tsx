import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "widgets/lib/classNames";
import { MainPage } from "pages/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
