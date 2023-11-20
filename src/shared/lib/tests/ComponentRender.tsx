import type { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTest from "shared/config/i18n/i18nForTest";
import { MemoryRouter } from "react-router-dom";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import type { DeepPartial } from "@reduxjs/toolkit";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function ComponentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = "/", initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialStore={initialState}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
      </StoreProvider>
    </MemoryRouter>,
  );
}
