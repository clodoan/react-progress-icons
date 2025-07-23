# React Progress Icons

A collection of beautiful progress indicators for React applications.

## Installation

```bash
npm install react-progress-icons
```

![Preview](public/demo.jpg)

## Usage

```jsx
import { Ring } from 'react-progress-icons';

function MyComponent() {
  return <Ring progress={0.75} className="size-8 text-blue-600" />;
}
```

## Development

### Building the Library

```bash
npm run build
```

### Local Development and Preview

To test and preview your components locally:

1. Install dependencies:
```bash
npm install
```

2. Start the preview development server:
```bash
npm run preview
```

This will start a development server at `http://localhost:3000` where you can:
- See your components in action
- Test different props and configurations
- View usage examples
- Interact with the components

### Available Scripts

- `npm run build` - Build the library for distribution
- `npm run dev` - Watch mode for library development
- `npm run preview` - Start the preview development server
- `npm run preview:build` - Build the preview for production
- `npm run preview:preview` - Preview the built preview

## Components

### Ring

A circular progress indicator.

#### Props

- `progress` (number, required): Progress value between 0 and 1
- `className` (string, optional): Pass tailwind classes to the ring to control size and color
- `thickness` (string, optional): Thickness of the ring (thin, medium, thick)

#### Example

```jsx
<Ring 
  progress={0.75} 
  className="size-12 text-blue-600" 
  thickness="thin"
/>
```

## License

MIT 