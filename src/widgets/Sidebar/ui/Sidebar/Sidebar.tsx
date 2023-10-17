import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LanguageSwitch } from "widgets/LanguageSwitch";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-btn" onClick={onToggle}>
        toggle
      </button>
      <div
        className={classNames(
          cls.switchers,
          {
            [cls.collapsed]: collapsed,
          },
          []
        )}
      >
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </div>
  );
};
