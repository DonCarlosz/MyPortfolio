import React from 'react'

const Card = ({ icon, title, description }) => {
  return (
    
    <div className="bg-gray-950 lg:bg-inherit fade-in-right backdrop-blur-2xl border border-neutral-800 hover:border-indigo-600 transition rounded-2xl min-w-65 p-6 shadow-lg hover:shadow-xl ">
      <div className='hover:scale-105 transition transform duration-300 overflow-hidden'>

  
      <div className="flex items-center mb-4">
        
        <img src={icon} alt={title} className="w-10 h-10 mr-4" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        
      </div>
      <hr className="text-neutral-700 my-4" />
      <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{description}</p>
          </div>
    </div>
  )
}

export default Card
