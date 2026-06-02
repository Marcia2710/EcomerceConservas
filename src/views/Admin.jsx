import React from 'react';
import Productos from '../components/Productos';

const Admin = ({ 
  lista, nuevoNombre, setNuevoNombre, nuevoPrecio, setNuevoPrecio, 
  nuevaImagen, setNuevaImagen, nuevaDescripcion, setNuevaDescripcion, 
  agregarProducto, eliminarProducto 
}) => {
  return (
    <div className="space-y-12">
     
      <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6 border-b border-orange-100 pb-3">
          <span className="text-xl">🛠️</span>
          <h2 className="text-base font-black text-stone-800 uppercase tracking-wider">
            Administración de Productos: Agregar Nuevo producto al Stock
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase px-1">Nombre del nuevo producto</label>
            <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} className="w-full p-3 rounded-xl border bg-stone-50 text-xs" placeholder="Ej: Chucrut" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase px-1">Precio</label>
            <input type="number" value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} className="w-full p-3 rounded-xl border bg-stone-50 text-xs" placeholder="0" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-stone-500 uppercase px-1"> Archivo de Imagen</label>
            <input type="text" value={nuevaImagen} onChange={(e) => setNuevaImagen(e.target.value)} className="w-full p-3 rounded-xl border bg-stone-50 text-xs" placeholder="Ej: chucrut.jpg" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mt-4">
          <label className="text-[11px] font-bold text-stone-500 uppercase px-1">Descripción del producto</label>
          <textarea value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)} className="w-full p-3 rounded-xl border bg-stone-50 text-xs h-20 resize-none" placeholder="Detalles..." />
        </div>

        <button onClick={agregarProducto} className="w-full mt-5 bg-amber-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider">
          Publicar Producto 
        </button>
      </div>

     
      <div className="border border-orange-200 shadow-sm max-w-7xl mx-auto">
        <h3 className="text-sm font-bold text-stone-600 uppercase mb-4">Administrar Stock Actual ({lista.length})</h3>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lista.length === 0 ? (
            <p className="text-gray-500 italic py-4">No hay productos en el stock.</p>
          ) : (
            lista.map((item) => (
              <Productos 
                key={item.id}
                id={item.id}
                productos={item.productos}
                precio={item.precio}
                imagen={item.imagen}
                onDelete={() => eliminarProducto(item.id)}
                esAdmin={true} // ¡Listo! Muestra botón de eliminar solo en Admin
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin; 