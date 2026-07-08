import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const RutasProtegidas = ({ children, rolesPermitidos }) => {
  const { user, role, loading } = useAuth();

  // 1. Mientras Firebase verifica el estado del usuario, mostramos una carga corta
  if (loading) {
    return <div style={{ padding: "20px" }}>Verificando credenciales...</div>;
  }

  // 2. Si el usuario no está logueado, lo saca al Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Si la ruta es solo para Admin y el usuario es común, lo saca a No Autorizado
  if (rolesPermitidos && !rolesPermitidos.includes(role)) {
    return <Navigate to="/no-autorizado" replace />;
  }

  // 4. Si está todo perfecto, muestra la pantalla correspondiente
  return children;
};