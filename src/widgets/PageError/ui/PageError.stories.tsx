import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

const meta = {
  title: "Widgets/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
