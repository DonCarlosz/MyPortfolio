import React from 'react'

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-950 rounded-2xl min-w-50 p-6 shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-10 h-10 mr-4" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default Card
