import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/Route";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitch } from "widgets/ThemeSwitch";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
