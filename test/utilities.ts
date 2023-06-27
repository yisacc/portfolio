import { render as renderComponent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextRouter } from "next/router";
import { vi } from "vitest";

type RenderOptions = Parameters<typeof renderComponent>[1];

export * from "@testing-library/react";

export const render = (ui: React.ReactElement, options?: RenderOptions) => {
  const user = userEvent.setup();
  const result = renderComponent(ui, options);

  return {
    ...result,
    user,
  };
};

