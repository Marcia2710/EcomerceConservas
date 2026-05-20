import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetalleProducto = ({ lista, agregarAlCarrito }) => {
  // Usamos useParams para leer el ID del producto desde la URL de navegación
  const { id } = useParams();
  
  // se busca el producto específico dentro de la lista usando ese ID
  const producto = lista.find((item) => item.id === parseInt(id));

  // Si el usuario escribe un ID en la URL que no existe, mostramos un mensaje de error
  if (!producto) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-orange-200 max-w-md mx-auto">
        <span className="text-4xl">🔍</span>
        <h2 className="text-xl font-bold text-stone-800 mt-4">Producto no encontrado</h2>
        <p className="text-gray-500 text-sm mt-2">El frasco que buscas no existe en el catálogo actual.</p>
        <Link to="/" className="mt-6 inline-block bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-bold">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden p-6 md:p-8">
      {/* Botón para regresar al catálogo */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 mb-6 transition-colors">
        ⬅️ Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lado Izquierdo: Imagen grande del frasco */}
        <div className="bg-stone-50 rounded-xl p-4 flex justify-center items-center h-80 border border-gray-100">
          <img 
            src={producto.imagen} 
            alt={producto.productos} 
            className="max-w-full max-h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Lado Derecho: Textos y botón de compra */}
        <div className="space-y-4">
          <span className="bg-amber-100 text-amber-800 text-xs font-black uppercase px-2.5 py-1 rounded-full tracking-wider">
            Hecho a Mano
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-stone-800 uppercase tracking-tight">
            {producto.productos}
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            {producto.descripcion || "Esta conserva artesanal ha sido elaborada siguiendo métodos tradicionales de fermentación natural, garantizando un sabor único y propiedades sumamente beneficiosas para la salud digestiva."}
          </p>

          <div className="border-t border-gray-100 pt-4 mt-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Precio Unitario</p>
              <span className="text-3xl font-black text-green-600">${producto.precio} <span className="text-xs text-gray-400 font-bold">ARS</span></span>
            </div>

            <button 
              onClick={() => agregarAlCarrito(producto)}
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>🛒</span> Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;