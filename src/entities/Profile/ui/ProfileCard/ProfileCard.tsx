import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selector/getProfileData/getProfileData";
// import { getProfileLoading } from "entities/Profile/model/selector/getProfileLoading/getProfileLoading";
// import { getProfileError } from "entities/Profile/model/selector/getProfileError/getProfileError";
import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
          {t("Edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Your firstname")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Your lastname")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
