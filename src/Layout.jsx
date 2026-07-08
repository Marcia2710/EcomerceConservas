import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";


function PaginaLayout({ totalItems, onCartClick, carrito, setCarrito, isOpen, setIsOpen,user }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-orange-200 flex flex-col justify-between">
        <Navbar 
          totalItems={totalItems} 
          onCartClick={onCartClick}
          carrito={carrito}
          setCarrito={setCarrito}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
        />
        <main className="flex-grow">
            <Outlet />
        </main>

    </div>
  );
}

export default PaginaLayout;
