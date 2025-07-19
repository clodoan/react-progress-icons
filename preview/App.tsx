import React, { useState, useEffect } from 'react'
import { Ring } from '../src/index'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0.3)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) {
            setIsAnimating(false)
            return 1
          }
          return prev + 0.01
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isAnimating])

  const handleAnimate = () => {
    setProgress(0)
    setIsAnimating(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Progress Icons
          </h1>
          <p className="text-lg text-gray-600">
            A collection of beautiful progress indicators for React applications
          </p>
        </header>

        <div className="grid gap-8">
          {/* Ring Component Demo */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ring Progress Indicator
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interactive Demo */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-700">Interactive Demo</h3>
                
                <div className="flex items-center space-x-4">
                  <Ring progress={progress} className="w-8 h-8 text-blue-600" />
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
                      onChange={(e) => setProgress(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAnimate}
                  disabled={isAnimating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isAnimating ? 'Animating...' : 'Animate Progress'}
                </button>
              </div>

              {/* Size Variations */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-700">Size Variations</h3>
                
                <div className="flex items-center space-x-4">
                  <Ring progress={0.25} className="w-6 h-6 text-green-600" />
                  <span className="text-sm text-gray-600">Small (24px)</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Ring progress={0.5} className="w-8 h-8 text-blue-600" />
                  <span className="text-sm text-gray-600">Medium (32px)</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Ring progress={0.75} className="w-12 h-12 text-purple-600" />
                  <span className="text-sm text-gray-600">Large (48px)</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Ring progress={0.9} className="w-16 h-16 text-red-600" />
                  <span className="text-sm text-gray-600">Extra Large (64px)</span>
                </div>
              </div>
            </div>

            {/* Color Variations */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Color Variations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3">
                  <Ring progress={0.6} className="w-8 h-8 text-blue-600" />
                  <span className="text-sm text-gray-600">Blue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Ring progress={0.6} className="w-8 h-8 text-green-600" />
                  <span className="text-sm text-gray-600">Green</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Ring progress={0.6} className="w-8 h-8 text-purple-600" />
                  <span className="text-sm text-gray-600">Purple</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Ring progress={0.6} className="w-8 h-8 text-red-600" />
                  <span className="text-sm text-gray-600">Red</span>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Usage Examples
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Basic Usage</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Ring } from 'react-progress-icons';

function MyComponent() {
  return <Ring progress={0.75} />;
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">With Custom Styling</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Ring } from 'react-progress-icons';

function MyComponent() {
  return (
    <Ring 
      progress={0.5} 
      className="w-12 h-12 text-blue-600" 
    />
  );
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App 