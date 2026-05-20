import React from "react";

const Tarjeta = ({ titulo, descripcion, precio, imagen, onDelete }) => {
    return (
        <div className="bg-white/90 p-4 rounded-xl shadow-md">
            
            <img src={imagen}   
            alt={titulo} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-stone-800 mt-2">{titulo}</h3>
            <p className="text-gray-600 mt-1">{descripcion}</p>
            <p className="text-2xl font-bold text-amber-600 mt-2">${precio} Ars</p>
            <button 
                onClick={onDelete}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-all"
            >
                Eliminar
            </button>
        </div>
    );
};


const Productos = ({ productos, precio, descripcion, imagen, onDelete }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2x1 shadow-sm border border-amber-200 overflow-hidden hover:shadow-md transition-all flex flex-col">
      {/* imagen del productos*/}
      <img
        src={imagen}
        alt={productos}
        className="w-full h-64 object-contain bg-gray-l00 rounded-t-1g"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-x1 font-bold text-stone-800">{productos}</h2>
        <p className="text-amber-800 font-bold text-1g">${precio} Ars</p>
        <p className="text-black-600 font-arial text-stone">{descripcion}</p>
      </div>

      <button 
        onClick={onDelete}
        className="text-red-500"
        >
        Eliminar
      </button>


      
    </div>
  );
};





// dejo este bloque de codigo aca para cuando quiera volver a la opcion de cargar productos desde la web
//<input 
 // type="file" 
 // accept="image/*" 
 // onChange={(e) => {
  //  const file = e.target.files[0];
    //if (file) {
     // const reader = new FileReader();
      //reader.onloadend = () => {
        //setNuevaImagen(reader.result); // Esto guarda la imagen para mostrarla
      //};
      //reader.readAsDataURL(file);
    //}
  ///}}
  //className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
///>

export default Tarjeta;
