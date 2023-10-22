import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

const meta = {
  title: "Widgets/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT, "app")],
};
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK, "app")] };
