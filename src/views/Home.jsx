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
    <div className="space-y-12">
    
      <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm max-w-3xl mx-auto backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6 border-b border-orange-100 pb-3">
          <span className="text-xl"></span>
          <h2 className="text-base font-black text-stone-800 uppercase tracking-wider">
             Administración de Productos:  Agregar Nueva Conserva
          </h2>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide px-1">
              Nombre del producto
            </label>
            <input 
              type="text" 
              name="productos"
              placeholder="Ej: Chucrut Tradicional"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-stone-50 text-xs transition-all text-stone-800" 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide px-1">
              Precio de venta (ARS)
            </label>
            <input 
              type="number" 
              name="precio"
              placeholder="0"
              value={nuevoPrecio}
              onChange={(e) => setNuevoPrecio(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-stone-50 text-xs transition-all text-stone-800" 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide px-1">
              Archivo de imagen
            </label>
            <input 
              type="text" 
              name="imagen"
              placeholder="Ej: chucrut.jpg"
              value={nuevaImagen}
              onChange={(e) => setNuevaImagen(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-stone-50 text-xs transition-all text-stone-800" 
            />
          </div>
        </div>
        
       
        <div className="flex flex-col gap-1.5 mt-4">
          <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wide px-1">
            Descripción y propiedades del producto
          </label>
          <textarea
            placeholder="Escribe los ingredientes, proceso o beneficios digestivos..."
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-stone-50 text-xs transition-all resize-none h-20 text-stone-800"
          />
        </div>

        
        <button 
          onClick={agregarProducto}
          className="w-full mt-5 bg-amber-700 text-white font-bold py-3 rounded-xl hover:bg-amber-800 transition-all shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
        >
          Agregar al Stock Disponible 
        </button>
      </div>

      
      <div>
        <h2 className="text-xl font-black text-stone-800 uppercase tracking-wider mb-6 text-center sm:text-left">
          Nuestros productos disponibles en stock
        </h2>
        
        {lista.length === 0 ? (
          <p className="text-center text-gray-400 italic py-12 text-sm">
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