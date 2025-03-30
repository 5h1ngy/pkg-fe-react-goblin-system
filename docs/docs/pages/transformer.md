---
sidebar_position: 4
---

# Transformer Page

The Transformer Page layout provides a standardized way to display data transformation interfaces with options for input, processing controls, and output visualization.

## Overview

The Transformer Page offers:

1. **Data Input/Output** - Clear visualization of data before and after transformation
2. **Processing Controls** - UI elements for configuring transformations
3. **Status Indicators** - Visual feedback for transformation processes
4. **Responsive Design** - Adapts to different screen sizes

## Installation

The Transformer Page is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Import and use the Transformer Page component:

```jsx
import { TransformerPage } from 'pkg-fe-react-goblin-system/pages/Transformer';

function MyDataTransformer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleTransform = () => {
    setIsProcessing(true);
    // Process data transformation
    const result = someTransformFunction(input);
    setOutput(result);
    setIsProcessing(false);
  };
  
  return (
    <TransformerPage
      title="Data Transformer"
      inputLabel="Input JSON"
      outputLabel="Transformed JSON"
      inputValue={input}
      outputValue={output}
      onInputChange={setInput}
      onTransform={handleTransform}
      isProcessing={isProcessing}
    />
  );
}
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Data Transformer'` | Title of the transformer page |
| `description` | `string` | `undefined` | Optional description of the transformer functionality |
| `inputLabel` | `string` | `'Input'` | Label for the input section |
| `outputLabel` | `string` | `'Output'` | Label for the output section |
| `inputValue` | `string` | `''` | Current input value |
| `outputValue` | `string` | `''` | Current output value |
| `onInputChange` | `(value: string) => void` | `undefined` | Handler for input changes |
| `onTransform` | `() => void` | `undefined` | Handler for transform button click |
| `isProcessing` | `boolean` | `false` | Whether a transformation is in progress |
| `transformButtonText` | `string` | `'Transform'` | Text for the transform button |
| `resetButtonText` | `string` | `'Reset'` | Text for the reset button |
| `showReset` | `boolean` | `true` | Whether to show the reset button |
| `onReset` | `() => void` | `undefined` | Handler for reset button click |
| `inputHeight` | `string` | `'300px'` | Height of the input textarea |
| `outputHeight` | `string` | `'300px'` | Height of the output textarea |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Transformer

```jsx
import React, { useState } from 'react';
import { TransformerPage } from 'pkg-fe-react-goblin-system/pages/Transformer';

function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const formatJson = () => {
    setIsProcessing(true);
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsProcessing(false);
  };
  
  const handleReset = () => {
    setInput('');
    setOutput('');
  };
  
  return (
    <TransformerPage
      title="JSON Formatter"
      description="Format and validate your JSON data"
      inputLabel="Raw JSON"
      outputLabel="Formatted JSON"
      inputValue={input}
      outputValue={output}
      onInputChange={setInput}
      onTransform={formatJson}
      onReset={handleReset}
      isProcessing={isProcessing}
    />
  );
}
```

### Vertical Layout with Custom Heights

```jsx
<TransformerPage
  title="Code Converter"
  inputLabel="JavaScript"
  outputLabel="TypeScript"
  inputValue={jsCode}
  outputValue={tsCode}
  onInputChange={setJsCode}
  onTransform={convertToTypeScript}
  layout="vertical"
  inputHeight="400px"
  outputHeight="500px"
/>
```

### Transformer with Custom Controls

```jsx
import React, { useState } from 'react';
import { 
  TransformerPage, 
  Container, 
  Grid, 
  Col,
  Select,
  Switch
} from 'pkg-fe-react-goblin-system';

function AdvancedTransformer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [format, setFormat] = useState('json');
  const [minify, setMinify] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const transform = () => {
    setIsProcessing(true);
    // Perform transformation based on format and minify options
    // ...
    setIsProcessing(false);
  };
  
  // Custom controls to insert between input and output
  const customControls = (
    <Container my={3}>
      <Grid>
        <Col xs={6}>
          <Select
            label="Output Format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            options={[
              { value: 'json', label: 'JSON' },
              { value: 'yaml', label: 'YAML' },
              { value: 'xml', label: 'XML' },
            ]}
          />
        </Col>
        <Col xs={6}>
          <Switch
            label="Minify Output"
            checked={minify}
            onChange={() => setMinify(!minify)}
          />
        </Col>
      </Grid>
    </Container>
  );
  
  return (
    <TransformerPage
      title="Data Format Converter"
      inputLabel="Input Data"
      outputLabel="Converted Data"
      inputValue={input}
      outputValue={output}
      onInputChange={setInput}
      onTransform={transform}
      isProcessing={isProcessing}
      customControls={customControls}
    />
  );
}
```

## Design and Implementation

The Transformer Page uses the following Goblin System components:

- `Container` and `Grid` for layout (replacing previous Flex components)
- `Text` for displaying labels and messages
- `TextArea` for input and output fields
- `Button` for action buttons
- `Spinner` for loading indicators (replacing previous ProgressBar components)

The layout is responsive and will adapt to different screen sizes.

## Advanced Usage

### With File Uploads

You can extend the Transformer Page to support file uploads:

```jsx
import React, { useState } from 'react';
import { 
  TransformerPage, 
  FileUpload, 
  Button, 
  Container 
} from 'pkg-fe-react-goblin-system';

function FileTransformer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setInput(e.target.result);
    };
    reader.readAsText(file);
  };
  
  const handleDownload = () => {
    if (!output) return;
    
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transformed-data.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Custom header with file upload
  const customHeader = (
    <Container mb={3}>
      <FileUpload 
        onFileSelect={handleFileUpload} 
        accept=".txt,.json,.csv"
        buttonText="Upload Input File"
      />
    </Container>
  );
  
  // Custom footer with download button
  const customFooter = (
    <Container mt={3}>
      <Button 
        onClick={handleDownload} 
        disabled={!output}
        variant="secondary"
      >
        Download Output
      </Button>
    </Container>
  );
  
  return (
    <TransformerPage
      title="File Transformer"
      inputLabel="File Content"
      outputLabel="Transformed Content"
      inputValue={input}
      outputValue={output}
      onInputChange={setInput}
      onTransform={transformData}
      isProcessing={isProcessing}
      customHeader={customHeader}
      customFooter={customFooter}
    />
  );
}
```

## Accessibility Considerations

The Transformer Page is built with accessibility in mind:

- All inputs have associated labels
- Processing states are announced to screen readers
- Focus is managed properly during transformations
- Keyboard navigation works across all controls

## Customization

### Styling

You can customize the styling of the Transformer Page by applying custom CSS:

```jsx
<TransformerPage
  className="custom-transformer"
  title="Custom Styled Transformer"
  // other props
/>
```

```css
.custom-transformer {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-transformer textarea {
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
}
```

### Building a Custom Transformer

For more advanced customization, you can create your own transformer component using Goblin System's base components:

```jsx
import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Col, 
  Text, 
  TextArea, 
  Button,
  Spinner
} from 'pkg-fe-react-goblin-system';

function CustomTransformer({ title, onTransform }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleTransform = async () => {
    if (!input) return;
    
    setIsProcessing(true);
    try {
      const result = await onTransform(input);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleReset = () => {
    setInput('');
    setOutput('');
  };
  
  return (
    <Container>
      <Text variant="h2" mb={4}>{title}</Text>
      
      <Grid spacing={4}>
        <Col xs={12} md={6}>
          <Text variant="h4" mb={2}>Input</Text>
          <TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your data here..."
            rows={10}
            width="100%"
          />
        </Col>
        
        <Col xs={12} md={6}>
          <Text variant="h4" mb={2}>Output</Text>
          <TextArea
            value={output}
            readOnly
            placeholder="Transformed data will appear here..."
            rows={10}
            width="100%"
          />
        </Col>
      </Grid>
      
      <Container mt={4} textAlign="center">
        <Button 
          onClick={handleTransform}
          disabled={!input || isProcessing}
          variant="primary"
          mr={2}
        >
          {isProcessing ? (
            <>
              <Spinner size="sm" mr={2} />
              Processing...
            </>
          ) : 'Transform'}
        </Button>
        
        <Button 
          onClick={handleReset}
          variant="secondary"
        >
          Reset
        </Button>
      </Container>
    </Container>
  );
}
```
