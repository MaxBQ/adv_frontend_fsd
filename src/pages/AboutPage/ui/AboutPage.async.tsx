import { lazy } from "react";

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve: any) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
