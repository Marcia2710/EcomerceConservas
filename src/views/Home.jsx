import React from 'react';
import Productos from '../components/Productos';

const Home = ({ lista, agregarAlCarrito }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-stone-800 uppercase tracking-wider text-center sm:text-left">
        Nuestro Catálogo
      </h2>
      
      {lista.length === 0 ? (
        <p className="text-center text-gray-400 italic py-12 text-sm">
          No hay productos disponibles momentáneamente.
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
              onAgregar={() => agregarAlCarrito(item)}
              esAdmin={false}  // !!esto es para no mostrar botón de eliminar a los usuarios en Home¡
             
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
