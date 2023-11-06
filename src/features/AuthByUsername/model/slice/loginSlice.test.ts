import type { DeepPartial } from "@reduxjs/toolkit";
import type { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("set username", () => {
    const state: DeepPartial<LoginSchema> = {};
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("123"))
    ).toEqual({ username: "123" });
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("asd"))
    ).not.toEqual({ username: "123" });
  });
  test("set password", () => {
    const state: DeepPartial<LoginSchema> = {};
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123"))
    ).toEqual({ password: "123" });
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("asd"))
    ).not.toEqual({ password: "123" });
  });
});
