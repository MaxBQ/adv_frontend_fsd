import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState, useMemo } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LanguageSwitch } from "widgets/LanguageSwitch";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItemsList } from "widgets/Sidebar/Model/Item";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const ItemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed],
  );

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
      <div className={cls.items}>{ItemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <LanguageSwitch collapse={collapsed} />
      </div>
    </div>
  );
};
