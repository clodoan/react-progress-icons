import React from 'react';
import { Ring } from '../../../src/index';

interface ColorExample {
  color: string;
  label: string;
}

const colorExamples: ColorExample[] = [
  { color: 'text-blue-600', label: 'Blue' },
  { color: 'text-green-600', label: 'Green' },
  { color: 'text-purple-600', label: 'Purple' },
  { color: 'text-red-600', label: 'Red' },
];

const ColorVariations: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-700 mb-4">
        Color Variations
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colorExamples.map((example, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Ring progress={0.6} className={`w-8 h-8 ${example.color}`} />
            <span className="text-sm text-gray-600">{example.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorVariations; 