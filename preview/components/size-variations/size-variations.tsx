import React from 'react';
import { Ring } from '../../../src/index';

interface SizeExample {
  size: string;
  progress: number;
  color: string;
  label: string;
}

const sizeExamples: SizeExample[] = [
  { size: 'w-6 h-6', progress: 0.25, color: 'text-green-600', label: 'Small (24px)' },
  { size: 'w-8 h-8', progress: 0.5, color: 'text-blue-600', label: 'Medium (32px)' },
  { size: 'w-12 h-12', progress: 0.75, color: 'text-purple-600', label: 'Large (48px)' },
  { size: 'w-16 h-16', progress: 0.9, color: 'text-red-600', label: 'Extra Large (64px)' },
];

const SizeVariations: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">
        Size Variations
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Sizes are controlled by Tailwind classes - any size can be used!
      </p>

      {sizeExamples.map((example, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Ring 
            progress={example.progress} 
            className={`${example.size} ${example.color}`} 
          />
          <span className="text-sm text-gray-600">{example.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SizeVariations; 