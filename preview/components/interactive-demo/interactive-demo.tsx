import React from 'react';
import { Ring } from '../../../src/index';

interface InteractiveDemoProps {
  progress: number;
  onProgressChange: (progress: number) => void;
  isAnimating: boolean;
  onAnimate: () => void;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  progress,
  onProgressChange,
  isAnimating,
  onAnimate,
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">
        Interactive Demo
      </h3>

      <div className="flex items-center space-x-4">
        <Ring progress={progress} className="w-8 h-8 text-blue-600" thickness="thin" />
        <div className="flex-1">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={(e) => onProgressChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <button
        onClick={onAnimate}
        disabled={isAnimating}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isAnimating ? "Animating..." : "Animate Progress"}
      </button>
    </div>
  );
};

export default InteractiveDemo; 