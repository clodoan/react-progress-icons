import React from 'react';
import CodeExample from '../code-example';

const basicUsageCode = `import { Ring } from 'react-progress-icons';

function MyComponent() {
  return <Ring progress={0.75} />;
}`;

const customStylingCode = `import { Ring } from 'react-progress-icons';

function MyComponent() {
  return (
    <Ring 
      progress={0.5} 
      className="w-12 h-12 text-blue-600" 
    />
  );
}`;

const UsageExamples: React.FC = () => {
  return (
    <div className="space-y-6">
      <CodeExample title="Basic Usage" code={basicUsageCode} />
      <CodeExample title="With Custom Styling" code={customStylingCode} />
    </div>
  );
};

export default UsageExamples; 