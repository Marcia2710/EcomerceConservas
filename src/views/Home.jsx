import Tarjeta from "../Tarjeta"; // Ajustá según tu import real
import { useOutletContext } from "react-router-dom";

// 1. Agregamos 'agregarProducto' a las props que recibe el componente
function Home ({ lista}) {
  const { agregarAlCarrito } = useOutletContext(); // Obtenemos la función del contexto
  
 return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <Tarjeta
              key={item.id}
              id={item.id}
              productos={item.productos}
              precio={item.precio}
              descripcion={item.descripcion}
              imagen={item.imagen}
              agregarAlCarrito={agregarAlCarrito} // Pasamos la función del carrito a cada tarjeta
              esadmin={false} // Cambia esto según tu lógica de administración
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;