import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "widgets/lib/classNames";
import { AppRouter } from "./providers/Route";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <AppRouter />
    </div>
  );
};

export default App;
