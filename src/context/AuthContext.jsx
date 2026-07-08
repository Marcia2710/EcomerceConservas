import { createContext, useState, useContext, useEffect } from "react";
import { db, auth } from "../firebase/config";
import { 
   
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const useAuth = () => useContext ( AuthContext);
 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); //  !!Aca esta el stado para almacenar el rol del usuario
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", currentUser.uid));
          if (userDoc.exists()) {
            setRole(userDoc.data().role);
          } else {
            setRole("user"); // Rol por defecto si no se encuentra en Firestore
          }
        } catch (error) {
          console.error("Error al obtener el rol del usuario:", error);
          setRole("user"); // Rol por defecto en caso de error
        }
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, role, loading,signup, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

