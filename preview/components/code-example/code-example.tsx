import React from 'react';

interface CodeExampleProps {
  title: string;
  code: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, code }) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-3">
        {title}
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {code}
      </pre>
    </div>
  );
};

export default CodeExample; 