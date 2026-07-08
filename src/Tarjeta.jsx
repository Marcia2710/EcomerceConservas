import { Link } from "react-router-dom";

const Tarjeta = ({ id, productos, precio, descripcion, imagen, onDelete, agregarAlCarrito, esadmin }) => {
    return (
        <div className="bg-white/90 p-4 rounded-xl shadow-md">
            
            <Link to={"/detalle/${id}"} className="w-full h-64 flex item-center justify-center bg-gray-100 p-2">
           <img
            src={imagen || "https://placeholder.com"}   
            alt={productos} className="w-full h-48 object-cover rounded-lg" />
            </Link>
            <div className="mt-4">
                <h3 className="text-lg font-bold text-stone-800">{productos}</h3>
                <p className="text-gray-600 mt-1">{descripcion}</p>
                <p className="text-2xl font-bold text-amber-600 mt-2">${precio} Ars</p>
            
            
            {!esadmin && (
            <button 
                onClick={() => agregarAlCarrito({id, productos, precio, imagen, descripcion})}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md font-bold hover:bg-green-600 transition-all"
            >
                Agregar al Carrito
            </button>
            )}

            {esadmin && (
            <button 
                onClick={() => onDelete(id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-all"
            >
                Eliminar
            </button>
            )}

        </div>

        </div>
    );
};


export default Tarjeta;






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


