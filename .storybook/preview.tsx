import React from "react";
import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

import Theme from "../src/providers/Theme"

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
    (Story) => <Theme>
      <Story />
    </Theme>,
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
