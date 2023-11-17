import { memo } from "react";
import cls from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import type { SidebarItemType } from "widgets/Sidebar/Model/Item";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo<SidebarItemProps>(function SidebarLink({
  item,
  collapsed,
}) {
  const { t } = useTranslation();
  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
