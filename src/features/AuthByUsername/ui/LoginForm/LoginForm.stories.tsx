import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
  title: "Features/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({ loginForm: { password: "123", username: "admin" } }),
  ],
};

export const Error: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { password: "123", username: "admin", error: "ERROR" },
    }),
  ],
};

export const IsLoading: Story = {
  decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};
