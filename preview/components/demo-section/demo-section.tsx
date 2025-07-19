import React from 'react';

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default DemoSection; 