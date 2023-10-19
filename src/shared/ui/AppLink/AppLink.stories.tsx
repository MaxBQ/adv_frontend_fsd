import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "Shared/AppLink",
  component: AppLink,
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Text", theme: AppLinkTheme.PRIMARY },
};
export const Secondary: Story = {
  args: { children: "Text", theme: AppLinkTheme.SECONDARY },
};
export const Red: Story = {
  args: { children: "Text", theme: AppLinkTheme.RED },
};
