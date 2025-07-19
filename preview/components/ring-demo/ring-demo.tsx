import React from 'react';
import InteractiveDemo from '../interactive-demo/interactive-demo';
import SizeVariations from '../size-variations/size-variations';
import ColorVariations from '../color-variations/color-variations';

interface RingDemoProps {
  progress: number;
  onProgressChange: (progress: number) => void;
  isAnimating: boolean;
  onAnimate: () => void;
}

const RingDemo: React.FC<RingDemoProps> = ({
  progress,
  onProgressChange,
  isAnimating,
  onAnimate,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InteractiveDemo
          progress={progress}
          onProgressChange={onProgressChange}
          isAnimating={isAnimating}
          onAnimate={onAnimate}
        />
        <SizeVariations />
      </div>
      <ColorVariations />
    </>
  );
};

export default RingDemo; 