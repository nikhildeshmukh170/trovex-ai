import React from 'react';

function FeatureCard({ title, description, color, icon, testimonial, metrics, integrations, chat, chart }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 relative overflow-hidden">
      <div className="mb-6">
        {icon}
      </div>
      
      <h2 className="text-2xl font-bold text-purple-600 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {testimonial && (
        <div className="bg-gray-50 rounded-xl p-4 relative mt-6">
          <div className="absolute -top-4 -right-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full border-4 border-white"
            />
          </div>
          <p className="text-sm text-gray-600 mb-1">{testimonial.name}</p>
          <p className="text-sm text-gray-800">{testimonial.text}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
            <span>Recording...</span>
          </div>
        </div>
      )}
      
      {metrics && (
        <div className="space-y-2 mt-4">
          {metrics.map((metric, index) => (
            <div key={index} className={`flex items-center p-2 rounded-lg ${
              metric.color === 'green' ? 'bg-green-50 text-green-700' : 
              metric.color === 'blue' ? 'bg-blue-50 text-blue-700' : 
              'bg-red-50 text-red-700'
            }`}>
              <span className={`w-4 h-4 mr-2 rounded-full ${
                metric.color === 'green' ? 'bg-green-500' : 
                metric.color === 'blue' ? 'bg-blue-500' : 
                'bg-red-500'
              }`}></span>
              <span className="text-sm">{metric.label}</span>
            </div>
          ))}
        </div>
      )}
      
      {integrations && (
        <div className="flex space-x-2 mt-4">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-2">
              <img src={integration.icon} alt={integration.name} className="w-6 h-6" />
            </div>
          ))}
        </div>
      )}
      
      {chat && (
        <div className="mt-4">
          <div className="flex items-center mb-4">
            <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-medium text-gray-800">{chat.name}</p>
              <p className="text-sm text-gray-500">{chat.title}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {chat.messages.map((message, index) => (
              <div key={index} className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm">Warm Lead</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-sm">Kiosk</span>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 rounded-lg p-3 mt-3">
            <p className="text-sm text-purple-800">What are the next steps?</p>
          </div>
        </div>
      )}
      
      {chart && (
        <div className="w-full h-48 mt-4 bg-purple-50 rounded-lg flex items-center justify-center">
          {/* Placeholder for radar chart */}
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 border-2 border-purple-200 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-purple-300 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-purple-400 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-200 opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureCard;