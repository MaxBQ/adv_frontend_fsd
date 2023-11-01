import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, ThemeText } from "./Text";

const meta = {
  title: "Shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};

export const OnlyTitle: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    title: "Title lorem ipsun",
  },
};

export const OnlyText: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    text: "Description Description Description Description",
  },
};

export const Error: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: ThemeText.ERROR,
  },
};
