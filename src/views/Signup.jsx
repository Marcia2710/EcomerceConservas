import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // "user" o "admin"
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Usamos el signup modificado que guarda en Firestore
      await signup(email, password, role);
      alert("¡Cuenta creada con éxito como " + role + "!"); 
      navigate("/login");
    } catch (err) {
      setError("Error al registrarse: " + err.message);
    }
  };

       
  return (
  <div className="flex-grow flex items-center justify-center px-4 py-12">
    <div className="bg-white p-8 rounded-2xl border border-orange-200 shadow-sm max-w-md w-full">
      <h2 className="text-2xl font-bold text-orange-950 mb-6 text-center">Registrarse</h2>
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} 
        className="w-full px-4 py-2 border border-orange-200 rounded-x1 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50/50"/>

        <input type="password" placeholder="Contraseña" required onChange={(e) => setPassword(e.target.value)} 
        className="w-full px-4 py-2 border border-orange-200 rounded-x1 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50/50"/>
        
        <label>Seleccionar Rol de prueba:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-orange-200 rounded-x1 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-orange-950">

          <option value="user">Usuario normal</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-x1 transition duration-200 shadow-md mt-2"
        > 
        Crear cuenta
        </button>
      </form>
    </div>
  </div>
    
  );
}