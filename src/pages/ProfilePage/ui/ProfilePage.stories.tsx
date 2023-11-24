import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
  title: "Pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { decorators: [StoreDecorator({ profile: {} })] };
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: {} })],
};
