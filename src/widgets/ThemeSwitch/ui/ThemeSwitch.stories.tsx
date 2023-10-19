import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitch } from "./ThemeSwitch";

const meta = {
  title: "Widgets/ThemeSwitch",
  component: ThemeSwitch,
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
