import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LanguageSwitch } from "widgets/LanguageSwitch";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import HomeIcon from "shared/assets/icons/Home.svg";
import AboutIcon from "shared/assets/icons/About.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar-btn"
        onClick={onToggle}
        square
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={"/"}>
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t("Main")}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("About")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <LanguageSwitch collapse={collapsed} />
      </div>
    </div>
  );
};
