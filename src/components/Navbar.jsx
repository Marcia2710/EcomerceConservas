import React from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ totalItems, onCartClick, carrito, setCarrito, isOpen, setIsOpen, user }) => {
  const { logout, role} = useAuth();

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

      
      <div className="flex items-center gap-6 relative">
        <Link to="/" className="text-sm font-bold hover:text-amber-400 transition-colors uppercase tracking-wide">
          Inicio
        </Link>

            <Link to="/contacto" className="text-sm font-bold hover:text-amber-400 transition-colors uppercase tracking-wide">
              Contacto
            </Link>


           {/* ⚙️ SI EL USUARIO ES ADMIN: Muestra botón directo a su panel */}
  {user && role === "admin" && (
    <Link to="/admin" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wide">
      Admin
    </Link>
  )}

  {/* 🔑 CONTROLES DE SESIÓN DINÁMICOS */}
  {user ? (
    <button
      onClick={async () => {
        await logout(); // 1. Cierra sesión en Firebase
        // Nota: Si necesitas limpiar el setUser que está en App.jsx, asegúrate de recibirlo en las props del Navbar y agregas: setUser(null);
      }}
      className="text-xs bg-red-900/50 hover:bg-red-900 text-red-200 hover:text-white font-bold py-1 px-3 rounded-lg transition-all"
    >
      Salir
    </button>
  ) : (
    <Link to="/login" className="text-sm font-bold hover:text-amber-400 transition-colors uppercase tracking-wide">
      Ingresar
    </Link>
  )}  
              
        <Carrito 
          carrito={carrito} 
          setCarrito={setCarrito} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          totalItems={totalItems}
          user={user}
        />
      </div>
    </nav>
  );
};

export default Navbar;