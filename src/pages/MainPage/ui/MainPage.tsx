import { ErrorBounButton } from "app/providers/ErrorBoundaries/ErrorBounButton";
import { useTranslation } from "react-i18next";
// Компонент для тестирования ErrorBoundary
const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <h1>
      <ErrorBounButton />
      {t("Main page")}
    </h1>
  );
};

export default MainPage;
