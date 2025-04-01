import React from "react";
import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

import { GoblinProvider } from "../src/providers";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <GoblinProvider>
      <Story />
    </GoblinProvider>,
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
