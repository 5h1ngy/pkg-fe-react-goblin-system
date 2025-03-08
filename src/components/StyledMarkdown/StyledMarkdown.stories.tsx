import type { Meta, StoryObj } from '@storybook/react';
import StyledMarkdown from './StyledMarkdown';

export default {
  title: 'Components/StyledMarkdown',
  component: StyledMarkdown,
  tags: ['autodocs'],
} as Meta<typeof StyledMarkdown>;

type Story = StoryObj<typeof StyledMarkdown>;

export const Default: Story = {
  args: {
    content: `
# Titolo 
Esempio di *Markdown* con \`codice\`:

\`\`\`js
function hello() {
  console.log("Hello, world!");
}
\`\`\`
    `,
  },
};
