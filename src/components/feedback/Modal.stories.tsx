import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Modal from './Modal';
import Button from '../buttons/Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Modal content goes here"
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Modal with controlled state
export const Basic: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Basic Modal"
        >
          <p>This is a basic modal with a title and default settings.</p>
          <p>Click the X button or the backdrop to close it.</p>
        </Modal>
      </ThemeProvider>
    );
  }
};

// Modal with custom footer
export const WithFooter: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Footer"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </>
          }
        >
          <p>This modal has a custom footer with action buttons.</p>
        </Modal>
      </ThemeProvider>
    );
  }
};

// Modal sizes
export const SizeVariants: Story = {
  render: function Render() {
    const [isOpenSmall, setIsOpenSmall] = useState(false);
    const [isOpenMedium, setIsOpenMedium] = useState(false);
    const [isOpenLarge, setIsOpenLarge] = useState(false);
    const [isOpenFull, setIsOpenFull] = useState(false);
    
    return (
      <ThemeProvider>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={() => setIsOpenSmall(true)}>Small</Button>
          <Button onClick={() => setIsOpenMedium(true)}>Medium</Button>
          <Button onClick={() => setIsOpenLarge(true)}>Large</Button>
          <Button onClick={() => setIsOpenFull(true)}>Full</Button>
        </div>
        
        <Modal
          isOpen={isOpenSmall}
          onClose={() => setIsOpenSmall(false)}
          title="Small Modal"
          size="small"
        >
          <p>This is a small modal (400px width).</p>
        </Modal>
        
        <Modal
          isOpen={isOpenMedium}
          onClose={() => setIsOpenMedium(false)}
          title="Medium Modal"
          size="medium"
        >
          <p>This is a medium modal (600px width).</p>
        </Modal>
        
        <Modal
          isOpen={isOpenLarge}
          onClose={() => setIsOpenLarge(false)}
          title="Large Modal"
          size="large"
        >
          <p>This is a large modal (800px width).</p>
        </Modal>
        
        <Modal
          isOpen={isOpenFull}
          onClose={() => setIsOpenFull(false)}
          title="Full Size Modal"
          size="full"
        >
          <p>This is a full-size modal (95vw width, 95vh height).</p>
        </Modal>
      </ThemeProvider>
    );
  }
};

// Modal with fullScreen mode
export const FullScreen: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Fullscreen Modal"
          fullScreen={true}
        >
          <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '20px' }}>Welcome to Fullscreen Mode</h2>
            <p>This modal takes over the entire screen, providing maximum viewing area for content.</p>
            <p>It's perfect for immersive experiences, detailed content, presentations, or detailed forms that require the user's full attention.</p>
            
            <div style={{ marginTop: '30px' }}>
              <h3>Key Features:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Takes up 100% of viewport width and height</li>
                <li>Customized styling for fullscreen presentation</li>
                <li>Larger title text for better visibility</li>
                <li>Expanded padding in header and footer</li>
                <li>Different animation for smoother transitions</li>
              </ul>
            </div>
            
            <Button 
              onClick={() => setIsOpen(false)} 
              style={{ marginTop: '30px' }}
            >
              Close Modal
            </Button>
          </div>
        </Modal>
      </ThemeProvider>
    );
  }
};

// Modal with form content
export const FormModal: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="User Information"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Submit
              </Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label 
                htmlFor="name" 
                style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
              >
                Name
              </label>
              <input 
                id="name" 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #ddd' 
                }} 
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
              >
                Email
              </label>
              <input 
                id="email" 
                type="email" 
                style={{ 
                  width: '100%', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #ddd' 
                }} 
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
              >
                Message
              </label>
              <textarea 
                id="message" 
                style={{ 
                  width: '100%', 
                  padding: '8px 12px', 
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  minHeight: '100px' 
                }} 
                placeholder="Enter your message"
              />
            </div>
          </div>
        </Modal>
      </ThemeProvider>
    );
  }
};

// Modal with long content that scrolls
export const ScrollingContent: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Modal with Scrolling Content</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
          maxBodyHeight="300px"
        >
          <div>
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices dapibus. Fusce auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
            
            <h3>2. User Agreement</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <h3>3. Privacy Policy</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            
            <h3>4. Intellectual Property</h3>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            
            <h3>5. Limitation of Liability</h3>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            
            <h3>6. Termination</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            
            <h3>7. Changes to Terms</h3>
            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            
            <h3>8. Governing Law</h3>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          </div>
        </Modal>
      </ThemeProvider>
    );
  }
};
