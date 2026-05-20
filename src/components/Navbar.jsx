import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';

const Navbar = ({ totalItems, onCarritoClick, carrito, setCarrito, isOpen, setIsOpen }) => {
  return (
    <nav className="bg-stone-900 text-stone-100 shadow-md sticky top-0 z-50 px-4 py-3 md:px-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-2xl group-hover:scale-110 transition-transform">🏺</span>
        <span className="font-black text-lg md:text-xl uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          PRODUCTOS ARTESANALES 
           Fermentos y Conservas
           (probioticos y prebióticos)
        </span>
      </Link>

      {/* Enlaces y Carrito */}
      <div className="flex items-center gap-6 relative">
        <Link to="/" className="text-sm font-bold hover:text-amber-400 transition-colors uppercase tracking-wide">
          Inicio
        </Link>

            <Link to="/contacto" className="text-sm font-bold hover:text-amber-400 transition-colors uppercase tracking-wide">
              Contacto
            </Link>

        {/* El Carrito va integrado dentro de la barra de navegacion me parecio mas discreto y comodo */}
        <Carrito 
          carrito={carrito} 
          setCarrito={setCarrito} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          totalItems={totalItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;