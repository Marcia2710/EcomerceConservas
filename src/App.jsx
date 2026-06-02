import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './views/Admin';

//  Componentes
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//  Vistas (Pages)
import Home from "./views/Home";
import DetalleProducto from "./views/DetalleProducto"
import Contacto from "./views/Contacto"

function App() {
  // ---Mis estados ---
  const [lista, setLista] = useState(() => {
    const guardado = localStorage.getItem("productos_fermentados");
    return guardado ? JSON.parse(guardado) : [
      { id: 1, productos: "KEFIR DE AGUA", precio: 4500, imagen: "/imagenes/kefir.jpg", descripcion: "Bebida fermentada refrescante y probiótica." },
      { id: 2, productos: "BERENJENAS AL ESCABECHE", precio: 4000, imagen: "/imagenes/escabeche.jpg", descripcion: "Clásica conserva ideal para picadas." }
    ];
  });

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("Carrito_online");
    return guardado ? JSON.parse(guardado) : [];
  });

  //  Formulario
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  // Estado para abrir/cerrar el carrito desde el Navbar
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- Efectos ---
  useEffect(() => {
    localStorage.setItem("productos_fermentados", JSON.stringify(lista));
  }, [lista]);

  useEffect(() => {
    localStorage.setItem("Carrito_online", JSON.stringify(carrito));
  }, [carrito]);

  // ---FUNCIONES  ---
  const agregarProducto = () => {
    if (!nuevoNombre || !nuevoPrecio) {
      alert("Por favor, completa el nombre y el precio");
      return;
    }
    const nuevo = {
      id: Date.now(),
      productos: nuevoNombre.toUpperCase(),
      precio: parseFloat(nuevoPrecio),
      imagen: nuevaImagen ? "/imagenes/" + nuevaImagen : "/imagenes/placeholder.jpg",
      descripcion: nuevaDescripcion,
     
    };

    setLista([...lista, nuevo]);
    setNuevoNombre("");
    setNuevoPrecio("");
    setNuevaImagen("");
    setNuevaDescripcion("");
  };

  const eliminarProducto = (id) => {
    const nuevaLista = lista.filter((item) => item.id !== id);
    setLista(nuevaLista);
  };

  const agregarAlCarrito = (producto) => {
    const productoSeguro = {
      id: producto.id,
      productos: producto.productos,
      precio: producto.precio,
      imagen: producto.imagen
    };

    const existe = carrito.find((item) => item.id === productoSeguro.id);

    if (existe) {
      setCarrito(carrito.map((item) =>
        item.id === productoSeguro.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...productoSeguro, cantidad: 1 }]);
    }
    // el carrito se habre automáticamente al agregar un producto para dar feedback al usuario
    setIsCartOpen(true);
  };

  // Cálculo del total de items para el Navbar
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-100 flex flex-col justify-between">
        
      
        <Navbar 
          totalItems={totalItems} 
          onCarritoClick={() => setIsCartOpen(!isCartOpen)} 
          carrito={carrito}
          setCarrito={setCarrito}
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
        />

        
        <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 flex-grow">
         
         
          <Routes>

             <Route path="/" element={
              <Home 
              lista={lista}
              agregarAlCarrito={agregarAlCarrito}
              />
             } />
            
            <Route path="admin" element={
              <Admin
                lista={lista}
                nuevoNombre={nuevoNombre}
                setNuevoNombre={setNuevoNombre}
                nuevoPrecio={nuevoPrecio}
                setNuevoPrecio={setNuevoPrecio}
                nuevaImagen={nuevaImagen}
                setNuevaImagen={setNuevaImagen}
                nuevaDescripcion={nuevaDescripcion}
                setNuevaDescripcion={setNuevaDescripcion}
                agregarProducto={agregarProducto}
                eliminarProducto={eliminarProducto}
                
              />
            } />

            
            <Route path="/producto/:id" element={
              <DetalleProducto 
                lista={lista} 
                agregarAlCarrito={agregarAlCarrito} 
                 //enviarPedidoWhatsApp={enviarPedidoWhatsApp} //dejo esto comentado porque no logre recuperar la ruta a finalizar la compra en wattssap
              />
            } />

           
            <Route path="/contacto" element={<Contacto />} />
          </Routes>

        </main>

        
        <Footer />

      </div>
    </Router>
  );
}

export default App;























/* import { useState, useEffect } from "react"
import Productos from "./components/Productos";
import Carrito from "./components/carrito";


function App() {

  const[carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito_compras");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito_compras", JSON.stringify(carrito));
  }, [carrito]);



  const [lista, setLista]= useState( () => {
    const guardado = localStorage.getItem("productos_fermentados");
    return guardado ? JSON.parse(guardado) : [

    {id: 1, 
      producto: "Escabeche",
      descripcion:"Berenjenas en escabeche condimentadas con aromaticas, ajo y aceite", 
      precio: 5000,
      imagen:  "https//placeholder.com"},

    {id: 2,
       producto: "vinagre de sidra de manzana",
       descripcion: " Vinagre de sidra de manzana organico y artesanal",
       precio: 3000, 
       imagen: "https://placeholder.com"},

    {id: 3,
     producto: "Kefir de Agua", 
     descripcion: "Kefir de agua natural",
     precio: 5000,
     imagen: "https://placeholder.com"},

    {id: 4, 
      producto: "Kefir de Leche",
      descripcion: "Kefir de leche natural",
      precio: 5000,
      imagen: "https://placeholder.com"},

    {id: 5,
      producto: "Yogurt Natural",
      descripcion: "Yogurt natural sin azúcar",
      precio: 5000, 
      imagen: "https://placeholder.com"},

      {id: 6,
        producto: "Escabeche de pollo con verduras",
        descripcion: "Pollo en escabeche con zanahorias, cebollas y pimientos",
        precio: 5000, 
        imagen: "https://placeholder.com"},
    ]
})



  useEffect(() => {
  localStorage.setItem("productos_fermentados", JSON.stringify(lista));
 [lista]});

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  


  const agregarProducto = () => {
    const nuevo = {
        id: Date.now(),
        productos: nuevoNombre,
        precio: nuevoPrecio,
        imagen: "/imagenes/" + nuevaImagen,
        descripcion: nuevaDescripcion,
      };
      setLista([...lista, nuevo]);
      setNuevoNombre("");
      setNuevoPrecio("");
      setNuevaImagen("");
      setNuevaDescripcion("");
    }
  

    const agregarAlCarrito = (producto) => {
      const existe = carrito.find((item) => item.id === producto.id);
      if (existe) {
        setCarrito(carrito.map((item) => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item));
      } else {
        setCarrito([...carrito, {...producto, cantidad: 1}]);
      }
    }

  const eliminarProducto = (id) => {
    const nuevaLista = lista.filter((item) => item.id !== id);
    setLista(nuevaLista);
  }

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-100 p-4 md:p-8">

      <div className="max-w-7x1 mx-auto">

        <header className="flex justify-between items-center border-b border-orange-200 pb-6 mb-8 relative ">


        <div>

      <h1 className="text-3xl md:text-4x1 font-black text-stone-800 uppercase tracking-winder" >Conservas y Fermentados</h1>

      <p className="text-black-500 text-sm mt-1"
       > tienes <span className="font-bold text-amber-700">{lista.length}</span> productos en stock
      </p>
      </div>

<div className="relative">
        <Carrito carrito={carrito} setCarrito={setCarrito} />
      </div>

</header>
  
<div className="space-y-8">

<div className="bg-gray-50 p-6 rounded-x1 border border-gray-200"> 
  <input 
    type="text"
   name="productos"
    className="flex-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
    placeholder="Nombre" 
    value={nuevoNombre} 
    onChange={(e) => setNuevoNombre(e.target.value)} 
  />
<input 
   name="precio"
   type="text"
    className="w-24 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
    placeholder="Precio" 
    value={nuevoPrecio} 
    onChange={(e) => setNuevoPrecio(e.target.value)} 
  />

<input 
  type="text" 
  name="nombre"
  placeholder="Nombre de la imagen"
  value={nuevaImagen}
  onChange={(e) => setNuevaImagen(e.target.value)}
    
  className="flex-1 p-2 rounded-md border border-gray-300 outline-none"
/>


  <button 
    onClick={agregarProducto}
    className="bg-green-600 text-white px-6 py-2 rounded-md font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all"
  >
    Agregar
  </button>

</div>

  
  

  <div className="grid grid-cols-1 sm:grid-cols-2 1g:grid-cols-3 gap-6">

       {lista.map((item) => (
        <Productos 
         key={item.id} 
         productos={item.productos}
         precio={item.precio}
         imagen={item.imagen}
         descripcion={item.descripcion}
         onDelete={() => eliminarProducto(item.id)} 
         onAgregar={() => agregarAlCarrito(item)}
          />
      ))}
    </div>
    </div>
    </div> 




    </div>
  
  );
}

  
export default App;*/


