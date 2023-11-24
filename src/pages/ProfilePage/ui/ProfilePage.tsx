// import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./ProfilePage.module.scss";
import { ProfileCard, profileReducer } from "entities/Profile";
import {
  DynamicModuleLoader,
  type ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducer: ReducersList = {
  profile: profileReducer,
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
