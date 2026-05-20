import React from 'react';

const Carrito = ({ carrito, setCarrito, isOpen, setIsOpen, totalItems }) => {
  // Calcular el total de la compra
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const aumentarCantidad = (id) => {
    setCarrito(carrito.map(item => 
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const disminuirCantidad = (id) => {
    setCarrito(carrito.map(item => {
      if (item.id === id) return { ...item, cantidad: item.cantidad - 1 };
      return item;
    }).filter(item => item.cantidad > 0));
  };

  const vaciarCarrito = () => setCarrito([]);

 const enviarPedidoWhatsApp = () => {
    let mensaje = "🛒 Nuevo Pedido de Conservas y Fermentados 🛒\n\n";
    
    carrito.forEach((item) => {
      mensaje = mensaje + "• " + item.producto + " - Cantidad: " + item.cantidad + " x $" + item.precio + "\n";
    });

    mensaje = mensaje + "\n💰 Total a Pagar: $" + total + " ARS";
    
    const numeroTelefono = "5491121769253"; 
    const url = "https://whatsap.com" + numeroTelefono + "&text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
    
    setCarrito([]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón del carrito */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-all shadow-md font-bold text-xs md:text-sm"
      >
        <span>🛒</span>
        <span className="hidden sm:inline">Mi Carrito</span>
        {totalItems > 0 && (
          <span className="bg-white text-amber-700 text-xs px-1.5 py-0.5 rounded-full font-black animate-pulse">
            {totalItems}
          </span>
        )}
      </button>

      {/* Menú desplegable flotante */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50 text-stone-800">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-base font-bold">Tus Productos</h2>
            {carrito.length > 0 && (
              <button onClick={vaciarCarrito} className="text-xs text-red-500 underline font-medium">
                Vaciar carrito
              </button>
            )}
          </div>

          {carrito.length === 0 ? (
            <p className="text-gray-400 text-center py-6 text-xs italic">Tu carrito está vacío.</p>
          ) : (
            <>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {carrito.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex-1 min-w-0 mr-2 text-left">
                      <h4 className="text-xs font-bold uppercase truncate">{item.producto}</h4>
                      <p className="text-xs text-green-600 font-semibold">${item.precio} c/u</p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-white rounded-lg border border-gray-200 px-2 py-1 shrink-0">
                      <button onClick={() => disminuirCantidad(item.id)} className="text-gray-400 hover:text-red-600 font-bold px-1 text-xs">-</button>
                      <span className="text-xs font-bold text-gray-700 w-4 text-center">{item.cantidad}</span>
                      <button onClick={() => aumentarCantidad(item.id)} className="text-gray-400 hover:text-green-600 font-bold px-1 text-xs">+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-gray-500 text-xs font-medium">Total:</span>
                  <span className="text-lg font-black text-green-600">${total} ARS</span>
                </div>
                <button onClick={enviarPedidoWhatsApp} className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-green-700 transition-colors text-xs text-center">
                  Finalizar Pedido por WhatsApp 💬
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}


  export default Carrito;