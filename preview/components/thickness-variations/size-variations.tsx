import React from 'react';
import { Ring } from '../../../src/index';

interface SizeExample {
  size: string;
  progress: number;
  color: string;
  label: string;
}

const sizeExamples: SizeExample[] = [
  { size: 'w-6 h-6', progress: 0.25, color: 'text-green-600', label: 'thin' },
  { size: 'w-8 h-8', progress: 0.5, color: 'text-blue-600', label: 'medium' },
  { size: 'w-12 h-12', progress: 0.75, color: 'text-purple-600', label: 'thick' },
];

const ThicknessVariations: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-700">
        Thickness Variations
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Thickness is controlled by Tailwind classes.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">   
        {sizeExamples.map((example, index) => (
            <div key={index} className="flex items-center space-x-4">
            <Ring 
                progress={example.progress} 
                className={`${example.size} ${example.color}`} 
                thickness={example.label as "thin" | "medium" | "thick"}
            />
            <span className="text-sm text-gray-600">{example.label}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ThicknessVariations; 