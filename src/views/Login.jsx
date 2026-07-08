import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";


export default function Login({ setUser, user }) {
  
  const [esLogin, setEslogin] = useState(true); // Estado para alternar entre login y signup
  const { login,signup, role } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "user") {
      navigate("/");
    }
    }
  }, [ user, role, navigate]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (esLogin) {
        await login(email, password);
        setUser({ email: email }); // Actualizamos el estado del usuario
        alert("¡Inicio de sesión correcto!");
       if (role === "admin") {
        navigate("/admin");
      } else{
    navigate("/");
      }

    } else {
        // 2. Registramos al usuario en Firebase
        await signup(email, password);
        alert("¡Registro correcto!");
        setEslogin(true); // Cambiamos a la vista de login después del registro
      }

    } catch (err) {
      setError(error.message);
    }
    };

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-2xl border border-orange-200 shadow-sm max-w-md w-full">

        <h2 className="text-2xl font-bold text-orange-950 mb-6 text-center">
          {esLogin ? "Iniciar Sesión" : "Registrarse"}   
        </h2>
      
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Email" 
          required 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-orange-200 rounded-x1 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50/50"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          required 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-orange-200 rounded-x1 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50/50"
        />
        {!esLogin && (
          <div className="flex flex-col gap-1">
            <label className="text-sm font-mediumtext-orange-900">Seleccionar Rol de prueba:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-orange-200 rounded-x1 bg white text-orange-950">
              <option value="user">Usuario normal</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
        )}
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-x1 transition duration-200 shadow-md mt-2">
          {esLogin ? "ingresar" : "Crear cuenta"}
        </button>
      </form>
      <div className="mt-6 text-center">
        <button 
          onClick={() => {
            setEslogin(!eslogin);
            setError("");
          }}
          className="text-orange-600 hover:text-orange-800 font-medium"
        >
          {esLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>

      </div>
      </div>
    </div>
  );
}