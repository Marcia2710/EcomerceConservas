import React from 'react';
import Productos from '../components/Productos';

const Home = ({ 
  lista, 
  nuevoNombre, 
  setNuevoNombre, 
  nuevoPrecio, 
  setNuevoPrecio, 
  nuevaImagen, 
  setNuevaImagen, 
  nuevaDescripcion, 
  setNuevaDescripcion, 
  agregarProducto, 
  eliminarProducto, 
  agregarAlCarrito 
}) => {
  return (
    <div className="space-y-8">
      
      <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-stone-800 mb-4 uppercase tracking-wide">
          Agregar Nuevo Producto 
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            name="productos"
            placeholder="Nombre (ej: Chucrut)"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            className="flex-1 p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500" 
          />
          <input 
            type="number" 
            name="precio"
            placeholder="Precio"
            value={nuevoPrecio}
            onChange={(e) => setNuevoPrecio(e.target.value)}
            className="w-full sm:w-28 p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500" 
          />
          <input 
            type="text" 
            name="imagen"
            placeholder="Archivo (ej: kefir.jpg)"
            value={nuevaImagen}
            onChange={(e) => setNuevaImagen(e.target.value)}
            className="flex-1 p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500" 
          />
        </div>
        
        <textarea
        name="descripcion"
          placeholder="Descripción del producto..."
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
          className="w-full mt-4 p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500 resize-none h-20 text-sm"
        />

        <button 
          onClick={agregarProducto}
          className="w-full mt-4 bg-green-600 text-white font-bold py-2.5 rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          Agregar al Catálogo
        </button>
      </div>

     
      <div>
        <h2 className="text-2xl font-black text-stone-800 uppercase tracking-wider mb-6 text-center sm:text-left">
          Nuestro Catálogo
        </h2>
        
        {lista.length === 0 ? (
          <p className="text-center text-gray-400 italic py-12">
            No hay productos cargados en el stock. ¡Agrega el primero arriba!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lista.map((item) => (
              <Productos 
                key={item.id}
                id={item.id}
                productos={item.productos}
                precio={item.precio}
                imagen={item.imagen}
                descripcion={item.descripcion}
                onDelete={() => eliminarProducto(item.id)}
                onAgregar={() => agregarAlCarrito(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;