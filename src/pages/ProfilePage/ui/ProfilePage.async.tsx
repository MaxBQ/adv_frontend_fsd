import { lazy } from "react";

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((resolve: any) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    }),
);
