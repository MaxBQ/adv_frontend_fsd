import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "Shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Text" },
};
export const Clear: Story = {
  args: { children: "Text", theme: ThemeButton.CLEAR },
};

export const Outline: Story = {
  args: { children: "Text", theme: ThemeButton.OUTLINE },
};

export const OutlineDark: Story = {
  args: { children: "Text", theme: ThemeButton.OUTLINE },
  decorators: [ThemeDecorator(Theme.DARK)],
};
