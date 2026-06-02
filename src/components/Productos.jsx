import React from 'react';
import { Link } from 'react-router-dom';


const Productos = ({id, producto, precio, imagen, descripcion, onDelete, onAgregar, esAdmin }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.02]">
      
      <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-2">
        <Link to={`/producto/${id}`} className="w-full h-56 bg-gray-50 flex items-center justify-center p-2 block hover:opacity-90 transition-opacity">

        <img 
          src={imagen || "https://placeholder.com"} 
          alt={producto} 
          className="max-w-full max-h-full object-contain drop-shadow-md"
        />
        </Link>
         </div>

      
      <div className="p-4 flex flex-col flex-grow text-left">

        <Link to={`/producto/${id}`} className="hover:text-amber-700 transition-colors">
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight leading-tight mb-1">
            {producto}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 italic"> 
          {descripcion || "Productos artesanales de calidad superior, elaborados con ingredientes naturales y técnicas tradicionales para ofrecerte una experiencia única ."}
        </p>

        

        <div className="mt-auto">
          <div className="flex justify-between items-baseline mb-3">
            <span className="text-2xl font-black text-green-600">${precio}</span>
            <span className="text-xs font-bold text-gray-400">ARS</span>
          </div>

           <button 
            onClick={onAgregar}
            className="w-full mb-2 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Agregar al Carrito
          </button>
          
          {esAdmin && (
          <button 
            onClick={onDelete}
            className="w-full py-1 px-4 bg-red-50 text-red-500 text-xs rounded-lg hover:bg-red-100 transition-colors"
          >
            Eliminar
          </button>
          )}
         
        </div>
      </div>
    </div>
  );
};


export default Productos; 