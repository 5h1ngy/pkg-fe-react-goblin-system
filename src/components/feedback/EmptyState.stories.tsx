import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import Button from '../buttons/Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: { control: 'object' },
    title: { control: 'text' },
    description: { control: 'text' },
    verticalCenter: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// Mock icon component
const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NoData: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No data available',
    description: 'There are no items to display at this moment.',
  },
};

export const Error: Story = {
  args: {
    icon: <ErrorIcon />,
    title: 'Something went wrong',
    description: 'We encountered an error while processing your request. Please try again later.',
  },
};

export const WithAction: Story = {
  render: () => (
    <EmptyState
      icon={<FolderIcon />}
      title="No files found"
      description="You don't have any files in this folder yet."
    >
      <Button variant="primary">Upload Files</Button>
      <Button variant="secondary">Create New Folder</Button>
    </EmptyState>
  ),
};

export const VerticalCentered: Story = {
  render: () => (
    <div style={{ height: '400px', border: '1px dashed #ccc' }}>
      <EmptyState
        icon={<FolderIcon />}
        title="Empty Folder"
        description="This folder is empty."
        verticalCenter
      />
    </div>
  ),
};
