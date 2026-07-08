import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { RutasProtegidas } from "./components/RutasProtegidas";
import PaginaLayout from "./Layout";

// Importaciones Interfaz
import Navbar from "./components/Navbar";
import Carrito from "./components/Carrito";

// Importaciones Vistas

import Home from "./views/Home";
import Admin from "./views/Admin";
import Contacto from "./views/Contacto";
import DetalleProducto from "./views/DetalleProducto";
import Login from "./views/Login";
import Signup from "./views/Signup";



function App() {
  // --- TUS ESTADOS ORIGINALES ---
  const [lista, setLista] = useState(() => {
    const guardado = localStorage.getItem("productos_fermentados");
    return guardado ? JSON.parse(guardado) : [
      { id: 1, productos: "KEFIR DE AGUA", precio: 4500, imagen: "/imagenes/kefir.jpg", descripcion: "Bebida..." },
      { id: 2, productos: "BERENJENAS AL ESCABECHE", precio: 4000, imagen: "/imagenes/escabeche.jpg", descripcion: "..." }
    ];
  });

  const [user, setUser] = useState(null); // Estado para el usuario autenticado

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("Carrito_online");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // --- PERSISTENCIA (LOCALSTORAGE) ---
  useEffect(() => {
    localStorage.setItem("productos_fermentados", JSON.stringify(lista));
  }, [lista]);

  useEffect(() => {
    localStorage.setItem("Carrito_online", JSON.stringify(carrito));
  }, [carrito]);

  // --- FUNCIONES GLOBALES ---
  const agregarProducto = (nuevoProducto) => {
    setLista([...lista, nuevoProducto]);
  };

  const eliminarProducto = (id) => {
    setLista(lista.filter(item => item.id !== id));
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route element={
        <PaginaLayout 
        totalItems={totalItems} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        carrito={carrito} 
        setCarrito={setCarrito} 
        user={user}
        />
        }> 

        <Route element={
          <Outlet context={{carrito, setCarrito, agregarAlCarrito}}
          />
          }>

       <Route path="/"element={
        <Home 
        lista={lista}
         />
         }/>

      <Route path="/contacto" element={<Contacto />} 
      />

      <Route 
      path="/admin" element={
        <RutasProtegidas rolesPermitidos={["admin"]}>

          <Admin lista={lista}
           agregarProducto={agregarProducto}
          eliminarProducto={eliminarProducto} />
        </RutasProtegidas>
      } />
      

      <Route path="/detalle/:id" element={<DetalleProducto lista={lista} />} />

        </Route> 
      </Route>

      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup setUser={setUser} />} />

      </Routes>
    </BrowserRouter>
  );
}
      
export default App;
      
      
      