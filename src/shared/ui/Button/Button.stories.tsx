import type { Meta, StoryObj } from "@storybook/react";

import { Button, SizeButton, ThemeButton } from "./Button";
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

export const Square: Story = {
  args: {
    children: "Text",
    square: true,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SquareM: Story = {
  args: {
    children: "Text",
    square: true,
    size: SizeButton.M,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SquareL: Story = {
  args: {
    children: "Text",
    square: true,
    size: SizeButton.L,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SquareXL: Story = {
  args: {
    children: "Text",
    square: true,
    size: SizeButton.XL,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SizeM: Story = {
  args: {
    children: "Text",
    size: SizeButton.M,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SizeL: Story = {
  args: {
    children: "Text",
    size: SizeButton.L,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const SizeXL: Story = {
  args: {
    children: "Text",
    size: SizeButton.XL,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
export const Disabled: Story = {
  args: {
    children: "Text",
    disabled: true,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
