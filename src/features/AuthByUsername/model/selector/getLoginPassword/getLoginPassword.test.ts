import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = { loginForm: { password: "asd" } };
    expect(getLoginPassword(state as StateSchema)).toBe("asd");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe("");
  });
});
